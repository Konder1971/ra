<template>
  <div class="default-layout">
    <Navigations />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
// import '~/static/css/main-default.css' // подключение css
import Navigations from '~/components/navigations'
import Footer from '~/components/footer'
export default {
  components: {
    Navigations,
    Footer
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
*:focus,
a:focus {
  outline: 0;
  outline-offset: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: '';
}
.clearfix:after {
  clear: both;
}
a {
  color: #c60;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

body {
  background-color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  color: #999;
  width: 100vw;
  overflow-x: hidden;
}
h1 {
  color: #666;
  font-size: 40px;
  font-weight: 300;
}
h2 {
  color: #666;
  font-size: 30px;
  font-weight: 300;
}

.btn {
  display: inline-block;
  background-color: rgba(255, 153, 102, 1);
  border-radius: 6px;
  color: #fff;
  font-size: 13px;
  padding: 8px 25px;
}
.btn:hover {
  background-color: rgba(153, 51, 0, 1);
  text-decoration: none;
}

.banner {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
}
.banner header {
  font-size: 45px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 20px;
}
.banner header h1 {
  color: #fff;
  font-size: 45px;
  font-weight: 400;
}
.banner p {
  margin-bottom: 30px;
}
.banner a {
  display: inline-block;
  background-color: #930;
  color: #fff;
  border-radius: 6px;
  padding: 8px 25px;
  margin-bottom: 40px;
}
.banner a:hover {
  background-color: #d44700;
  text-decoration: none;
}

.header {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.section {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  body {
    padding-top: 85px;
  }
  .banner {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .banner .section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }
  .banner .section-col {
    width: 50%;
    text-align: right;
  }
  .header {
    padding: 0 40px;
  }
  .section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 20px;
  }
  .section-col {
    width: 100%;
    padding: 0 20px;
  }
}
@media (max-width: 767px) {
  body {
    padding-top: 70px;
  }
  h1 {
    font-size: 34px;
    font-weight: 400;
  }
}
</style>
