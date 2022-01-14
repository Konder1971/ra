export { default as Blogblocks } from '../..\\components\\blogblocks.vue'
export { default as Copyright } from '../..\\components\\copyright.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Logo } from '../..\\components\\logo.vue'
export { default as Navigationcategory } from '../..\\components\\navigationcategory.vue'
export { default as Navigations } from '../..\\components\\navigations.vue'
export { default as Navigationsfooter } from '../..\\components\\navigationsfooter.vue'
export { default as Posts } from '../..\\components\\posts.vue'
export { default as Socialfooter } from '../..\\components\\socialfooter.vue'
export { default as BannersBannerAbout } from '../..\\components\\banners\\bannerAbout.vue'
export { default as BannersBannerBlog } from '../..\\components\\banners\\bannerBlog.vue'
export { default as BannersBannerclients } from '../..\\components\\banners\\bannerclients.vue'
export { default as BannersBannerExpertise } from '../..\\components\\banners\\bannerExpertise.vue'
export { default as BannersBannerHome } from '../..\\components\\banners\\bannerHome.vue'
export { default as BannersBannerprivacypolicy } from '../..\\components\\banners\\bannerprivacypolicy.vue'
export { default as BannersBannerrequestaquote } from '../..\\components\\banners\\bannerrequestaquote.vue'
export { default as BannersBannerwwd } from '../..\\components\\banners\\bannerwwd.vue'

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
