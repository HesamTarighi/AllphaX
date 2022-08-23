export const AboutUs = () => import('../..\\components\\AboutUs.vue' /* webpackChunkName: "components/about-us" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const MainHeader = () => import('../..\\components\\MainHeader.vue' /* webpackChunkName: "components/main-header" */).then(c => wrapFunctional(c.default || c))
export const NavHeader = () => import('../..\\components\\NavHeader.vue' /* webpackChunkName: "components/nav-header" */).then(c => wrapFunctional(c.default || c))
export const Portfolio = () => import('../..\\components\\Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c))
export const ReadyProject = () => import('../..\\components\\ReadyProject.vue' /* webpackChunkName: "components/ready-project" */).then(c => wrapFunctional(c.default || c))
export const Services = () => import('../..\\components\\Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c))
export const SiteHeader = () => import('../..\\components\\SiteHeader.vue' /* webpackChunkName: "components/site-header" */).then(c => wrapFunctional(c.default || c))

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
