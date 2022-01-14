<template>
  <div class="navigation">
    <div class="section">
      <div class="section-col">
        <Logo />
        <nav>
          <ul>
            <!--<li v-for="navigation in navigations" :key="navigation">{{ navigation.link }}</li>-->
            <li>
              <NuxtLink exact no-prefect to="/" title>
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" title>
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/expertise" title>
                Expertise
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" title>
                Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" title>
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" title>
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/request-a-quote" title>
                Request A Quote
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/wwd" title>
                What We Do
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/clients" title>
                Clients
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news" title>
                News
              </NuxtLink>
            </li>
            <!--
            <li>
              <NuxtLink to="/filter-1" title>
                Filter-1
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/filter-2" title>
                Filter-2
              </NuxtLink>
            </li>
            -->
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/logo.vue'
export default {
  components: {
    Logo
  },
  data () {
    return {
      navigations: [
        { link: 'link 1' },
        { link: 'link 2' },
        { link: 'link 3' },
        { link: 'link 4' },
        { link: 'link 5' }
      ]
    }
  },
  head: {
    script: [{ src: '/js/navigation.js' }]
  }
}
</script>

<style scoped>
.navigation {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0 4px 2px -2px;
  border-bottom: 1px solid #dadce0;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
}
.section-col {
  display: -webkit-fflex;
  -webkit-fflex-direction: row;
  -webkit-fflex-wrap: nowrap;
  -webkit-fjustify-content: space-between;
  -webkit-falign-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 86px;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul {
  display: -webkit-flex;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -webkit-justify-content: flex-end;
  -webkit-align-items: center;
  -webkit-align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-start;
}
nav a {
  display: block;
  margin-left: 30px;
  font-weight: 300;
  color: #666;
  font-weight: 500;
}
nav a:hover,
nav a.nuxt-link-exact-active {
  color: #c60;
  text-decoration: none;
}
nav a.active {
  cursor: default;
}
@media (min-width: 768px) {
  .navigation.fixed .section-col {
    height: 60px;
    transition: all 300ms ease-in-out;
  }
}
@media (max-width: 767px) {
  .navigation {
    padding: 0 25px;
    position: fixed;
    top: 0;
  }
  .section-col {
    height: 70px;
  }
  .navigation.fixed .section-col {
    height: 60px;
    transition: all 300ms ease-in-out;
  }
}
</style>
