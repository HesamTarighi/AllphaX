export { default as AboutUs } from '../..\\components\\AboutUs.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as MainHeader } from '../..\\components\\MainHeader.vue'
export { default as NavHeader } from '../..\\components\\NavHeader.vue'
export { default as Portfolio } from '../..\\components\\Portfolio.vue'
export { default as ReadyProject } from '../..\\components\\ReadyProject.vue'
export { default as Services } from '../..\\components\\Services.vue'
export { default as SiteHeader } from '../..\\components\\SiteHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
