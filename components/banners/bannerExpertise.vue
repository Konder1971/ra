<template>
  <div class="banner bannerAbout" :style="{'background-image': 'url(' + require('~/assets/images/banners/servicescapabilities.jpg') + ')' }">
    <div class="section">
      <div class="section-col">
        <header>Our services & capabilities</header>
        <p>We are fully committed to adding value to our client businesses in every stage – from planning to maintaining. Our design and development process is based on problem solving</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
   .banner .section-col {
    width: 45%;
  }
}
</style>
