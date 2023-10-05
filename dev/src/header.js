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

      }

      megaMenu() {
        const megaM = Array.from(this.querySelectorAll('.s-mega-menu'))
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
        })
      }
    }
  )
}