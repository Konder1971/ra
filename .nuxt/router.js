import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3146bbbd = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _9fc9bfc0 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1d767a90 = () => interopDefault(import('..\\pages\\clients.vue' /* webpackChunkName: "pages/clients" */))
const _05f8d660 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _9908277e = () => interopDefault(import('..\\pages\\expertise.vue' /* webpackChunkName: "pages/expertise" */))
const _d70ee6c8 = () => interopDefault(import('..\\pages\\filter-1.vue' /* webpackChunkName: "pages/filter-1" */))
const _d6f2b7c6 = () => interopDefault(import('..\\pages\\filter-2.vue' /* webpackChunkName: "pages/filter-2" */))
const _8b53765a = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _4f4c5917 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _62d3f448 = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _3f5acc82 = () => interopDefault(import('..\\pages\\request-a-quote.vue' /* webpackChunkName: "pages/request-a-quote" */))
const _53448f98 = () => interopDefault(import('..\\pages\\wwd.vue' /* webpackChunkName: "pages/wwd" */))
const _f5fb45aa = () => interopDefault(import('..\\pages\\blog\\_category.vue' /* webpackChunkName: "pages/blog/_category" */))
const _3a0cedf8 = () => interopDefault(import('..\\pages\\post\\_id\\index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _21e268b0 = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _50fe9682 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/ra/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3146bbbd,
    name: "about"
  }, {
    path: "/blog",
    component: _9fc9bfc0,
    name: "blog"
  }, {
    path: "/clients",
    component: _1d767a90,
    name: "clients"
  }, {
    path: "/contact",
    component: _05f8d660,
    name: "contact"
  }, {
    path: "/expertise",
    component: _9908277e,
    name: "expertise"
  }, {
    path: "/filter-1",
    component: _d70ee6c8,
    name: "filter-1"
  }, {
    path: "/filter-2",
    component: _d6f2b7c6,
    name: "filter-2"
  }, {
    path: "/news",
    component: _8b53765a,
    name: "news"
  }, {
    path: "/privacy-policy",
    component: _4f4c5917,
    name: "privacy-policy"
  }, {
    path: "/projects",
    component: _62d3f448,
    name: "projects"
  }, {
    path: "/request-a-quote",
    component: _3f5acc82,
    name: "request-a-quote"
  }, {
    path: "/wwd",
    component: _53448f98,
    name: "wwd"
  }, {
    path: "/blog/:category",
    component: _f5fb45aa,
    name: "blog-category"
  }, {
    path: "/post/:id",
    component: _3a0cedf8,
    name: "post-id"
  }, {
    path: "/projects/:id",
    component: _21e268b0,
    name: "projects-id"
  }, {
    path: "/",
    component: _50fe9682,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
