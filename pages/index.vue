<template>
  <div class="page-home">
    <BannerHome />

    <div class="sfd">
      <div class="header">
        <h1>Software development company Rightapplications<br />New York City</h1>
      </div>
      <div class="section">
        <div class="section-col">
          <h3>Project Planning</h3>
          <p>
            From idea to project plan, we’ll work to research, define, and
            validate your product. We will build a strategy based on your
            business goals and set expectations regarding timelines, budget, and
            staged process
          </p>
          <NuxtLink to="/expertise/#ppa" title="">
            Read More
          </NuxtLink>
        </div>
        <div class="section-col">
          <h3>User Friendly Design</h3>
          <p>
            Our focus is to craft smart and intuitive user experiences through a
            user-tested, data-driven design approach. We create well branded,
            clean and user-friendly interfaces based on research, wireframes and
            user feedback.
          </p>
          <NuxtLink to="/expertise/#design" title="">
            Read More
          </NuxtLink>
        </div>
        <div class="section-col">
          <h3>Product Development</h3>
          <p>
            We are specializing on building custom applications designed to
            solve simple or sophisticated business requirements. We build mobile
            experiences for how users interact with your product. From mobile
            apps to tablet apps to mobile websites.
          </p>
          <NuxtLink to="expertise/#development" title="">
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="weare">
      <div class="header">
        <h2>We are a Young but Experience Team</h2>
        <p>
          We work as technology partners with clients to make digital products
          that serve their purpose efficiently and elegantly.
        </p>
      </div>
      <div class="section">
        <NuxtLink class="section-col" to="/about" title="">
          <img src="~assets/images/ic_1.png" alt="">
          <span>Our Team</span>
        </NuxtLink>
        <NuxtLink class="section-col" to="/expertise" title="">
          <img src="~assets/images/ic_2.png" alt="">
          <span>Expertise</span>
        </NuxtLink>
        <NuxtLink class="section-col" to="/clients" title="">
          <img src="~assets/images/ic_3.png" alt="">
          <span>Clients</span>
        </NuxtLink>
      </div>
    </div>

    <div class="cpao">
      <div class="section">
        <div class="section-col">
          <span>88</span>
          <strong>Clients</strong>
        </div>
        <div class="section-col">
          <span>112</span>
          <strong>Projects</strong>
        </div>
        <div class="section-col">
          <span>107</span>
          <strong>Applications</strong>
        </div>
        <div class="section-col">
          <span>24/7</span>
          <strong>Online Support</strong>
        </div>
      </div>
    </div>

    <div class="whatWedo">
      <div class="section">
        <div class="section-col">
          <h2>What We Do</h2>
          <p>
            Rightapplications offers a wide spectrum of IT services ranging from
            consulting, web application design, development, server migration
            and graphic designing to offshore IT Staffing.
            <NuxtLink to="/wwd" title="">
              Learn More
            </NuxtLink>
          </p>
          <ul>
            <li>Graphic design</li>
            <li>UX/IX design</li>
            <li>Front-end development</li>
            <li>Ecommerce integration</li>
            <li>Back-End development</li>
            <li>3rd-Party extensions/API’s</li>
            <li>Quality assurance testing</li>
          </ul>
          <ul>
            <li>Custom coding</li>
            <li>Mobile development</li>
            <li>Content management Integration</li>
            <li>Server migration</li>
            <li>Consulting</li>
            <li>Project management</li>
            <li>Life cycle support</li>
          </ul>
          <h3>Need a Quote?</h3>
          <NuxtLink class="btn" to="/request-a-quote" title="">
            Click here
          </NuxtLink>
        </div>
        <div class="section-col">
          <img src="~assets/images/pic-1ddd.png" alt="">
        </div>
      </div>
    </div>

    <div class="stunningPortfolios">
      <div class="header">
        <h2>Stunning Portfolios</h2>
        <p>
          Please visit some of the projects we have designed and developed for
          our clients
        </p>
      </div>
      <div class="section stunningPortfolios-block">
        <NuxtLink
          class="section-col portfolio-link"
          to
          :style="{
            'background-image':
              'url(' +
              require('~/static/images/portfolio/Foundry360.jpg') +
              ')',
          }"
        >
          <div>
            <h4>Foundry 360</h4>
            <p>Foundry / Wordpress / Websites</p>
          </div>
        </NuxtLink>
        <NuxtLink
          class="section-col portfolio-link"
          to
          :style="{
            'background-image':
              'url(' +
              require('~/static/images/portfolio/Foundry360.jpg') +
              ')',
          }"
        >
          <div>
            <h4>Foundry 360</h4>
            <p>Foundry / Wordpress / Websites</p>
          </div>
        </NuxtLink>
        <NuxtLink
          class="section-col portfolio-link"
          to
          :style="{
            'background-image':
              'url(' +
              require('~/static/images/portfolio/Foundry360.jpg') +
              ')',
          }"
        >
          <div>
            <h4>Foundry 360</h4>
            <p>Foundry / Wordpress / Websites</p>
          </div>
        </NuxtLink>
        <NuxtLink
          class="section-col portfolio-link"
          to
          :style="{
            'background-image':
              'url(' +
              require('~/static/images/portfolio/Foundry360.jpg') +
              ')',
          }"
        >
          <div>
            <h4>Foundry 360</h4>
            <p>Foundry / Wordpress / Websites</p>
          </div>
        </NuxtLink>
      </div>
      <div class="section">
        <div class="section-col">
          <NuxtLink to="/projects" class="btn" title="Projects">
            More Projects
          </NuxtLink>
        </div>
      </div>
      <!-- <script src='/js/home-projects.js' /> --> <!-- добавление скрипта в тело страницы -->
    </div>

    <div class="whyUs-home">
      <div class="section">
        <div class="section-col">
          <div>
            <h2>Why us</h2>
            <p>
              Dedicated team of Designers, developers and QA testers. Issues are
              resolved in proactive manner and client support. Transparency in
              communication at all development stages. Project management using
              Agile methods for effective results. Signs offs implemented at
              every stage. Detailed supervision of the Project Development
              Lifecycle.
            </p>
          </div>
        </div>
        <div class="section-col">
          <div>
            <h3>
              Let’s
              <strong>work together</strong>
            </h3>
            <p>Dedicated team of Designers, developers and QA testers.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mapHome">
      <div class="section">
        <div class="section-col usa">
          <h3>USA</h3>
          <p>
            100 Grand Cove Way
            <br>Suite 5H <br>Edgewater, NJ 07020
            <br>
          </p>
        </div>
        <div class="section-col mapCenter">
          <img src="~assets/images/map_1-1.png" alt="">
        </div>
        <div class="section-col europe">
          <h3>Europe</h3>
          <p>
            Chichibabina 7, Kharkov,
            <br>Kharkiv oblast, 61000, <br>Ukraine
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerHome from '~/components/banners/bannerHome'
export default {
  components: {
    BannerHome
  },
  head: {
    title: 'software development company Rightapplications',
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
    script: [{ src: '/js/home-projects.js' }]
  }
}
</script>

<style scoped>
.header {
  text-align: center;
}
.header p {
  font-size: 18px;
}

.sfd {
  background-color: #fff;
  border-bottom: 1px solid #d6d6d6;
  box-shadow: inset 0px -8px 8px -8px rgba(0, 0, 0, 0.125);
}
.sfd h3 {
  color: #2e2834;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}
.sfd p {
  color: #999;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
}

.weare a {
  font-weight: 600;
}
.weare a:hover {
  text-decoration: none;
  opacity: 0.7;
}
.weare img {
  margin-bottom: 10px;
}

.cpao {
  background-color: rgb(86, 86, 86);
}

.whatWedo {
  background-color: #f9f9f9;
  border-bottom: 1px solid #d6d6d6;
  box-shadow: inset 0px -8px 8px -8px rgba(0, 0, 0, 0.125);
}
.whatWedo ul,
.whatWedo ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.whatWedo ul li {
  padding-left: 15px;
  margin-bottom: 8px;
  position: relative;
}
.whatWedo ul li:before {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #999;
  position: absolute;
  top: 9px;
  left: 0;
}
.whatWedo h3 {
  color: #996;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 15px;
}
.whatWedo img {
  max-width: 100%;
}

.stunningPortfolios {
  background-color: #fff;
}
.stunningPortfolios-block {
  margin-bottom: 30px;
}
.portfolio-link,
.portfolio-link:hover {
  text-decoration: none;
  transition: all 300ms ease-in-out;
}
.portfolio-link div {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 300ms ease-in-out;
}
.portfolio-link:hover div {
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 300ms ease-in-out;
}
.portfolio-link h4,
.portfolio-link p {
  color: #fff;
  font-weight: 400;
}
.portfolio-link:hover h4,
.portfolio-link:hover p {
  text-decoration: none;
  color: #fff;
}

.portfolio-link h4 {
  font-size: 25px;
}
.portfolio-link p {
  font-style: italic;
}

.whyUs-home .section-col:first-child div {
  background-color: #f4f4f4;
  padding: 30px 40px 36px;
}
.whyUs-home .section-col:first-child div h2 {
  margin-bottom: 20px;
}
.whyUs-home .section-col:first-child div p {
  line-height: 30px;
}
.whyUs-home .section-col:last-child div h3 {
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #666;
}
.whyUs-home .section-col:last-child div h3 strong {
  font-weight: 500;
}

.mapHome {
  background-color: rgb(241, 235, 227);
}
.mapHome .section h3 {
  color: #996;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 15px;
}
.mapHome .section p {
  color: #666;
  font-size: 16;
  line-height: 28px;
}

@media (min-width: 768px) {
  .header h1 {
    margin-bottom: 30px;
  }

  .sfd,
  .weare {
    padding-top: 50px;
  }
  .sfd .section-col,
  .weare .section-col {
    width: 33.333333%;
    margin-bottom: 65px;
  }
  .cpao .section-col {
    width: 25%;
  }
  .cpao .section-col,
  .stunningPortfolios-block {
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .stunningPortfolios-block a.section-col {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 25%;
    display: block;
    padding: 0;
    margin: 0 20px;
  }
  .whatWedo ul {
    display: inline-block;
  }
  .whatWedo .section-col,
  .whyUs-home .section-col {
    width: 50%;
  }
  .weare .section-col,
  .cpao .section-col,
  .stunningPortfolios-block .section-col {
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .mapHome .usa,
  .mapHome .europe {
    width: 25%;
  }
  .mapHome .mapCenter {
    width: 50%;
  }

  .weare .header {
    margin-bottom: 50px;
  }
  .weare .header h2 {
    margin-bottom: 15px;
  }

  .cpao {
    padding-bottom: 60px;
    padding-top: 60px;
  }
  .cpao span {
    font-size: 45px;
    color: #ccc;
    font-weight: 300;
  }
  .cpao strong {
    font-size: 18px;
    color: #ddd;
  }
  .cpao .section-col:last-child span,
  .cpao .section-col:last-child strong {
    color: #f93;
  }

  .whatWedo {
    padding-top: 60px;
    padding-bottom: 75px;
  }
  .whatWedo h2 {
    margin-bottom: 40px;
  }
  .whatWedo p {
    margin-bottom: 30px;
  }
  .whatWedo ul {
    margin-bottom: 15px;
  }
  .whatWedo .section-col:first-child ul {
    margin-right: 40px;
  }
  .whatWedo .section-col:last-child {
    text-align: right;
  }

  .stunningPortfolios {
    padding-top: 50px;
  }
  .stunningPortfolios .header {
    margin-bottom: 50px;
  }
  .stunningPortfolios .header h2 {
    margin-bottom: 15px;
  }
  .stunningPortfolios .btn {
    float: right;
  }

  .whyUs-home {
    background-color: #fff;
    padding-top: 60px;
    padding-bottom: 80px;
  }

  .mapHome {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .mapHome .section {
    align-items: center;
  }
}

@media (max-width: 767px) {
  .stunningPortfolios-block .section-col {
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
}
</style>
