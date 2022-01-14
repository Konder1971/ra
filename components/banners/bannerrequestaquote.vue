<template>
  <div class="banner bannerrequestaquote" :style="{'background-image': 'url(' + require('~/assets/images/banners/get3v.jpg') + ')' }">
    <div class="section">
      <div class="section-col">
        <header><h1>Request a Quote</h1></header>
        <p>We have a dedicated customer service panel catering to all forms of service and product related queries 24×7.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner.bannerrequestaquote header {
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .banner.bannerrequestaquote {
    margin-bottom: 60px;
  }
   .banner.bannerrequestaquote .section-col {
    width: 44%;
  }
}
</style>
