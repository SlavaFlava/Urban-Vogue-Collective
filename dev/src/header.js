if (!customElements.get('s-header')) {

  customElements.define('s-header', class SHeader extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.mobMenu() 
        this.megaMenu()
      }

      mobMenu() {
        this.querySelector('.s-header__menu_btn').
        addEventListener(
          "click", () => (
            this.querySelector('.s-header').classList.toggle('s-header--menu-active'),
              document.querySelector('body').classList.toggle('hidden')
          )
        )
      }

      megaMenu() {
        const megaM = Array.from(this.querySelectorAll('.s-mega-menu'))
        this.querySelectorAll('.s-mega-menu__close').forEach((closeMegaMenu) => {
          closeMegaMenu.addEventListener('click', (e)=> {
            this.querySelector('.s-header__menu').classList.remove('hide')
              megaM.map((e) => {
                e.classList.remove('active')
              })
            }
          )
        })
        this.querySelectorAll('.s-header__menu_item').forEach((menuItem) => {

          megaM.map((megaItem) => {
            menuItem.getElementsByTagName('a')[0].innerHTML == megaItem.getAttribute('data-parent-menu') ? menuItem.classList.add('s-header__menu_item--parent') : false
          })
          menuItem.addEventListener('mouseover', (e) => {
            megaM.map((megaItem) => {
              e.target.innerHTML == megaItem.getAttribute('data-parent-menu') ? megaItem.classList.add('active') : false
            })
          })
          menuItem.addEventListener('mouseout', (e) => {
            megaM.map((megaItem) => {
              e.target.innerHTML == megaItem.getAttribute('data-parent-menu') ? megaItem.classList.remove('active') : false
            })
          })
          menuItem.querySelector('.s-header__menu_item_arrow').addEventListener('click', (e) => {
            megaM.map((megaItem) => {
              if (e.target.getAttribute('data-menu-name') == megaItem.getAttribute('data-parent-menu')){
                megaItem.classList.add('active')
                this.querySelector('.s-header__menu').classList.add('hide')
              }
            })
          })
        })
      }
    }
  )
}
