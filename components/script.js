const componentMap = {
  'my-tab-1': './components/navTabs/my-tab-1.html',
  'my-tab-2': './components/navTabs/my-tab-2.html',
  'my-tab-3': './components/navTabs/my-tab-3.html',
  'my-accordion-1': './components/accordions/my-accordion-1.html',
  'my-accordion-2': './components/accordions/my-accordion-2.html',
  'my-accordion-3': './components/accordions/my-accordion-3.html',
  'my-accordion-4': './components/accordions/my-accordion-4.html',
  'my-accordion-5': './components/accordions/my-accordion-5.html',
  'my-accordion-6': './components/accordions/my-accordion-6.html',
  'my-tab-1-ua': './components/navTabs/my-tab-1-ua.html',
  'my-tab-2-ua': './components/navTabs/my-tab-2-ua.html',
  'my-tab-3-ua': './components/navTabs/my-tab-3-ua.html',
  'my-accordion-1-ua': './components/accordions/my-accordion-1-ua.html',
  'my-accordion-2-ua': './components/accordions/my-accordion-2-ua.html',
  'my-accordion-3-ua': './components/accordions/my-accordion-3-ua.html',
  'my-accordion-4-ua': './components/accordions/my-accordion-4-ua.html',
  'my-accordion-5-ua': './components/accordions/my-accordion-5-ua.html',
  'my-accordion-6-ua': './components/accordions/my-accordion-6-ua.html'
};

function createComponent(path) {
  return class extends HTMLElement {
    async connectedCallback() {
      const res = await fetch(path);
      this.innerHTML = await res.text();
    }
  };
}

Object.entries(componentMap).forEach(([tag, path]) => {
  if (!customElements.get(tag)) {
    customElements.define(tag, createComponent(path));
  }
});
