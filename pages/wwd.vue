<template>
  <div class="what-we-do">
    <BannerWwd />

    <div class="header">
      <h2>Rightapplications offers a wide spectrum of IT services ranging from consulting, web application design, development, server migration and graphic designing to offshore IT Staffing</h2>
    </div>

    <div class="section">
      <div class="section-col">
        <ul>
          <li>Graphic design</li>
          <li>UX/IX design</li>
          <li>Front-end development</li>
          <li>Ecommerce integration</li>
          <li>Back-End development</li>
          <li>3rd-Party extensions/API’s</li>
          <li>Quality assurance testing</li>
        </ul>
      </div>
      <div class="section-col">
        <ul>
          <li>Custom coding</li>
          <li>Mobile development</li>
          <li>Content management Integration</li>
          <li>Server migration</li>
          <li>Consulting</li>
          <li>Project management</li>
          <li>Life cycle support</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BannerWwd from '~/components/banners/bannerwwd'
export default {
  components: {
    BannerWwd
  },
  head: {
    title: 'What We Do Page',
    meta: [
      { hid: 'description', name: 'description', content: 'What We Do page description' },
      { hid: 'keywords', name: 'keywords', content: 'What We Do pag keywords' }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com/wwd' }]
  }
}
</script>

<style scoped>
.what-we-do .header h2 {
  color: #996;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  margin-bottom: 40px;
}

.what-we-do ul,
.what-we-do ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.what-we-do ul {
  margin-bottom: 40px;
}
.what-we-do ul li {
  color: #999;
  padding-left: 15px;
  margin-bottom: 8px;
  position: relative;
}
.what-we-do ul li:before {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #999;
  position: absolute;
  top: 9px;
  left: 0;
}

@media (min-width: 768px) {
  .section {
    padding-bottom: 40px;
  }
  .section-col {
    width: 50%;
  }
}
</style>
