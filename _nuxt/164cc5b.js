(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{295:function(t){t.exports=JSON.parse('[{"id":5,"title":"Заголовок поста № 5","summary":"Короткое описание поста № 5","content":"<i>Контент поста №5</i>","author":"Иван Пердыщенко","published":"02:27 - 22/11/2020"},{"id":4,"title":"Building universal JS apps with Nuxt.js","summary":"Get introduced to Nuxt.js, and build great SSR Apps with Vue.js.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"Jane Doe","published":"08:00 - 07/06/2017"},{"id":3,"title":"Great SSR Use cases","summary":"See simple and rich server rendered JavaScript apps.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"Jane Doe","published":"17:00 - 06/06/2017"},{"id":2,"title":"SSR in Vue.js","summary":"Learn about SSR in Vue.js, and where Nuxt.js can make it all faster.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"Jane Doe","published":"13:00 - 06/06/2017"},{"id":1,"title":"Introduction to SSR","summary":"Learn about SSR in JavaScript and how it can be super cool.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"John Doe","published":"11:00 - 06/06/2017"}]')},336:function(t,e,n){"use strict";n.r(e);var o=n(295),r={name:"Posts",data:function(){return{posts:o}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{},[n("div",{},[n("h1",[t._v("\n      News\n    ")]),t._v(" "),n("div",{},t._l(t.posts,(function(e){return n("div",{key:e.id,staticClass:"column is-half"},[n("div",{},[n("header",{staticClass:"c"},[n("p",{staticClass:"card-header-title"},[t._v("\n              "+t._s(e.title)+"\n            ")])]),t._v(" "),n("div",{},[n("div",{},[t._v("\n              "+t._s(e.summary)+"\n              "),n("br"),t._v(" "),n("small",[t._v("\n                автор: "),n("strong",[t._v(t._s(e.author))]),t._v("\n                || "+t._s(e.published)+"\n              ")])])]),t._v(" "),n("footer",{},[n("nuxt-link",{attrs:{to:"/post/"+e.id}},[t._v("\n              Read More\n            ")])],1)])])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(78).default})}}]);