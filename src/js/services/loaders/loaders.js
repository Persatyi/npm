export default class VisibilityLoaders {
  constructor({ selector, hidden = false }) {
    this.ref = this.getRef(selector);

    hidden && this.hide();
  }

  getRef(selector) {
    const ref = document.querySelector(selector);
    return ref;
  }

  hide() {
    this.ref.classList.add('is-hidden');
  }

  show() {
    this.ref.classList.remove('is-hidden');
  }
}
