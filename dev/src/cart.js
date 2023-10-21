if (!customElements.get('cart-main')) {
  customElements.define('cart-main', class CustomProduct extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.initCart()
    }

    initCart() {

    }
  })
}