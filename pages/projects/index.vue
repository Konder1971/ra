<template>
  <div class="projects">
    <div class="section">
      <ul>
        <li v-for="project in projects" :key="project.id">
          <Nuxt-Link :to="`projects/${project.id}`">
            {{ project.name }}
          </Nuxt-Link>
        </li>
      </ul>
    </div>

    <div class="selectprojects">
      <div class="section">
        <div class="section-col">
          <div class="select">
            <select>
              <option>All</option>
              <option>Websites</option>
              <option>Web Applications</option>
              <option>Mobile Applications</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="nav">
        <ul>
          <li data-f="all">
            ALL
          </li>
          <li data-f="wordpress" class="text-wordpress">
            Wordpress
          </li>
          <li data-f="javascript" class="text-javascript">
            Javascript
          </li>
          <li data-f="html5css3" class="text-html5css3">
            Html5/CSS3
          </li>
          <li data-f="android" class="text-android">
            Android
          </li>
        </ul>
      </div>
    </div>
    <div class="projectsblocks">
      <div class="section">
        <Nuxt-Link class="box wordpress section-col projectblock" to="">
          <em class="pepic" :style="{'background-image': 'url(' + require('~/assets/images/portfolio/Foundry360.jpg') + ')' }"><i>view project</i></em>
          <h3>Wordpress</h3>
          <ul>
            <li>Wordpress</li>
            <li>Websites</li>
          </ul>
        </Nuxt-Link>
        <Nuxt-Link class="box javascript section-col projectblock" to="">
          <em class="pepic" :style="{'background-image': 'url(' + require('~/assets/images/portfolio/Foundry360.jpg') + ')' }"><i>view project</i></em>
          <h3>javascript</h3>
          <ul>
            <li>javascript</li>
            <li>Websites</li>
          </ul>
        </Nuxt-Link>
        <Nuxt-Link class="box html5css3 section-col projectblock" to="">
          <em class="pepic" :style="{'background-image': 'url(' + require('~/assets/images/portfolio/Foundry360.jpg') + ')' }"><i>view project</i></em>
          <h3>html5css3</h3>
          <ul>
            <li>html5css3</li>
            <li>Websites</li>
          </ul>
        </Nuxt-Link>
        <Nuxt-Link class="box android section-col projectblock" to="">
          <em class="pepic" :style="{'background-image': 'url(' + require('~/assets/images/portfolio/Foundry360.jpg') + ')' }"><i>view project</i></em>
          <h3>android</h3>
          <ul>
            <li>android</li>
            <li>Websites</li>
          </ul>
        </Nuxt-Link>
      </div>
      <script src="/js/filter-1.js" />
      <!-- <script src='/js/projects.js' /> --> <!-- добавление скрипта в тело страницы -->
    </div>
    <div class="clearfix" />

    <div class="filter">
      <div class="section">
        <div class="section-col">
          <div class="filter">
            <h3>Filter:</h3>
            <ul>
              <li><a>All</a></li>
              <li><a>Wordpress</a></li>
              <li><a>css3</a></li>
              <li><a>html5</a></li>
              <li><a>Javascript</a></li>
              <li><a>PHP</a></li>
              <li><a>MySQL</a></li>
              <li><a>CMS</a></li>
              <li><a>Woocommerce</a></li>
              <li><a>Design</a></li>
              <li><a>Landing Page</a></li>
              <li><a>React</a></li>
              <li><a>Flash</a></li>
              <li><a>E-Commerce</a></li>
              <li><a>Joomla</a></li>
              <li><a>Yii2</a></li>
              <li><a>Parallax Scrolling</a></li>
              <li><a>Drupal</a></li>
              <li><a>E-Mail</a></li>
              <li><a>iOS</a></li>
              <li><a>Android</a></li>
              <li><a>Back-End development</a></li>
              <li><a>Java</a></li>
              <li><a>scss</a></li>
              <li><a>Magento</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Projects',
  computed: {
    ...mapGetters({
      projects: 'projects/getProjects'
    })
  },
  head: {
    title: 'Projects',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Wide spectrum of IT services ranging from consulting, web application design, development, server migration and graphic designing to offshore IT Staffing.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'graphic design, UX/IX design, Front-end development, Ecommerce, Back-End development, Mobile development, Content management Integration, Server migration, Consulting, Project management'
      }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com' }],
    script: [{ src: '/js/projects.js' }]
    // script: [{ src: '/js/filter-1.js' }] // добавление скрипта в head
  }
}
</script>

<style scoped>
  .nav ul li {
    display: inline-block;
    padding: 10px 40px 10px 0;
    cursor: pointer;
  }
  .hide {
    opacity: 1;
    animation-name: a1;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
  @keyframes a1 {
    to {
      opacity: 0;
      min-height: 0;
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
      height: 0;
      width: 0;
    }
  }

.selectprojects {
  margin-bottom: 30px;
}
.select option {
  color: #666;
  font-size: 16px;
}
.projectblock {
  text-decoration: none;
  margin-bottom: 30px;
}
.projectblock em {
  display: block;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 11px;
}

.projectblock em i {
  opacity: 0;
  font-style: normal;
  display: -webkit-flex;
  -webkit-fflex-direction: column;
  -webkit-fflex-wrap: nowrap;
  -webkit-fjustify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: 300;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 300ms ease-in-out;
}
.projectblock:hover em i {
  opacity: 1;
  transition: all 300ms ease-in-out;
}
.projectblock h3 {
    color: #666;
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    margin-bottom: 4px;
}
.projectblock ul,
.projectblock ul li,
.filter ul,
.filter ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.projectblock ul li {
  display: inline-block;
  line-height: 20px;
  font-size: 13px;
  color:#777;
  font-weight: 300;
}
.projectblock ul li:after {
  content: '.';
  display: inline-block;
  font-size: 13px;
  line-height: 20px;
  line-height: inherit;
  font-weight: 600;
  position: relative;
  top: -2px;
  margin-left: 5px;
}
.projectblock ul li:last-child:after {
  display: none;
}
.projectblock:hover h3,
.projectblock:hover li {
  color: #c60;
}

.filter h3 {
  color: #2e2834;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  text-transform: uppercase;
}
.filter ul li {
  display: inline-block;
  margin: 0 10px 15px 0;
}
.filter ul li a {
  cursor: pointer;
  display: block;
  text-decoration: none;
}
@media (min-width: 768px) {
  .projects {
    padding: 30px 0;
  }
  .select {
    float: right;
  }
  .projectblock {
    width: 25%;
    float: left;
    display: block;
  }
}
</style>
