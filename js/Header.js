class Header {
  selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerBtn: "[data-js-header-burger-btn]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay,
    );
    this.burgerBtnElement = this.rootElement.querySelector(
      this.selectors.burgerBtn,
    );

    this.bindEvents();
  }

  onBurgerBtnClick = () => {
    this.burgerBtnElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  bindEvents() {
    this.burgerBtnElement.addEventListener("click", this.onBurgerBtnClick);
  }
}

export default Header;
