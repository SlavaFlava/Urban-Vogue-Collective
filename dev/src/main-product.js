customElements.define('main-product', class MProduct extends HTMLElement {
    constructor() {
      super();
    }



    connectedCallback() {
       this.variants = JSON.parse(this.getAttribute('data-variants'))
      this.options = this.querySelectorAll('.variants-option')

      this.options.forEach(option =>{
        option.addEventListener('change', (e) => {
         this.variantOnClick()
        })
      })
      this.changeCount() 

      this.querySelector('.add_to_cart').addEventListener('click', this.addToCart.bind(this))

      PubSub.subscribe(PubSub.EVENTS.cartUpdated, this.showDrawer)
    }

    addToCart(){
      const form = this.querySelector('.shopify-product-form')
      const formUrl = window.theme.shopUrl + window.theme.routes.cart_add_url
      const formBody =  {
        method: 'POST',
        body: new FormData(form)
      }
      fetch(formUrl , formBody).then((res)=> {
       if(res.ok){
        PubSub.publish(PubSub.EVENTS.cartUpdated)
       }
      });
    }

    showDrawer(){
      console.log('Product added to cart');
    }

    changeCount(){
      const productQuantity = this.querySelector('#product-quantity')
      const count = this.querySelector('.product-count__value')
      const minus = this.querySelector('.product-count__minus')
      const plus = this.querySelector('.product-count__plus')

      minus.addEventListener('click', () =>{
        if (count.value > 1) count.value = count.value -1
        productQuantity.value = count.value
      })

      plus.addEventListener('click', () =>{
        count.value = +count.value + 1
        productQuantity.value = count.value
      })
    }


    variantOnClick(){
      let tempVariant = ''
      this.options.forEach( variant =>{
        tempVariant += `${variant.querySelector('input:checked').value} / `
        }
      )
      tempVariant = tempVariant.slice(0, -3)

      let currentVariantId = ''
      this.variants.map((variant) => {
        if (variant.title == tempVariant){
          currentVariantId = variant.id
          history.replaceState(null, null, window.location.pathname + '?variant='+ variant.id) 

          this.querySelector('.featured-image').setAttribute('src', variant.featured_image.src)

          const currency = this.querySelector('.main-product__content_price').innerHTML[0]

          this.querySelector('.main-product__content_price').innerHTML = `${currency + (variant.price/100).toFixed(2)}`

          variant.available 
          ? this.querySelector('.main-product').classList.remove('sold-out')
          : this.querySelector('.main-product').classList.add('sold-out')
        }
      })

      this.querySelector('#variant-select').value = currentVariantId

    }

  }
)