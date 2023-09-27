if (!customElements.get('image-banner')) {
  customElements.define('image-banner', class ImageBanner extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.speed = (this.getAttribute('data-speed'))
      this.dataDots = (this.getAttribute('data-dots') == 'true' ? true : false)
      this.settings = {
        cellAlign: 'center',
        contain: false,
        wrapAround: true,
        pageDots: this.dataDots,
        pageDots: true,
        prevNextButtons: false,
        percentPosition: false
      }
      this.speed == 'false' ? false : this.settings.autoPlay = +this.speed;

      this.initSlider();
    }

    initSlider() {
      this.slider = new Flickity(this.querySelector('.s-image-banner'), this.settings);
    }

  })
}

