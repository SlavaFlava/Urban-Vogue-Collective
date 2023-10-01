if (!customElements.get('s-header')) {

  customElements.define('s-header', class SHeader extends HTMLElement {
    constructor() {
      super();
    }


    connectedCallback() {
      this.mobMenu()
      this.stickyHeader()
    }

    mobMenu() {

    }
    stickyHeader(){
      
    }
  }
  )
}