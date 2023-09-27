if (!customElements.get('image-banner')) {
  customElements.define('image-banner', class ImageBanner extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.speed = (this.getAttribute('data-speed'))
      this.settings = {
        cellAlign: 'center',
        contain: false,
        wrapAround: true,
        pageDots: true,
        prevNextButtons: false
      }
      this.speed == 'false' ? false : this.settings.autoPlay = +this.speed;

      this.initSlider();
    }

    initSlider() {
      this.slider = new Flickity(this.querySelector('.s-image-banner'), this.settings);
    }

  })
}

