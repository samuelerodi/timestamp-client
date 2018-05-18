export const componentsConfig = {
  navbar: {
    visible : true,
    hide() { this.visible = false; },
    show() { this.visible = true; },
    toggle() { this.visible = !this.visible; }
  },
 footer: {
    visible : true,
    hide() { this.visible = false; },
    show() { this.visible = true; },
    toggle() {this.visible = !this.visible; }
  }
}
