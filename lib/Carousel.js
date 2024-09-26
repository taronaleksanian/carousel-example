import Swiper from "swiper";

export function Carousel(config) {
  this.config = config;
  this.generateInitialDom = () => {
    this.containerEl = document.querySelector(this.config.containerSelector);
    this.wrapperEl = document.createElement("div");
    this.wrapperEl.classList.add("swiper-wrapper");

    this.containerEl.appendChild(this.wrapperEl);
  };

  this.init = () => {
    this.swiper = new Swiper(this.containerEl, {
      slidesPerView: "auto",
      spaceBetween: 12,
      centeredSlides: true,
      initialSlide: this.config.initialSlide,
    });
  };

  this.slidePrev = () => {
    this.swiper.slidePrev();
  };

  this.slideNext = () => {
    this.swiper.slideNext();
  };

  this.slideTo = (index) => {
    this.swiper.slideTo(index);
  };

  this.generateCarouselItems = () => {
    this.data.map((item, index) => {
      this.wrapperEl.insertAdjacentHTML("beforeend", this.renderItem(item));
      const newSlideItem = this.wrapperEl.lastElementChild;
      newSlideItem.addEventListener("click", () => this.slideTo(index));
    });
  };

  this.fillData = () => {
    this.data = this.loadData();
  };

  this.setupControlBtn = () => {
    if (!this.config.control) {
      return;
    }

    const prevBtn = document.querySelector(this.config.control.prevSelector);
    const nextBtn = document.querySelector(this.config.control.nextSelector);

    if (!prevBtn || !nextBtn) {
      return;
    }

    prevBtn.addEventListener("click", this.slidePrev);
    nextBtn.addEventListener("click", this.slideNext);
  };

  this.setupEvents = () => {
    this.setupControlBtn();
  };

  this.build = () => {
    this.fillData();
    this.generateInitialDom();
    this.setupEvents();
    this.generateCarouselItems();
    this.init();
  };
}
