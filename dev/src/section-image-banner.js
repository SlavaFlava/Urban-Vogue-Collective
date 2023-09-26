if (!customElements.get('image-banner')) {
  customElements.define('image-banner', class ImageBanner extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

    }
  }
  )
}
