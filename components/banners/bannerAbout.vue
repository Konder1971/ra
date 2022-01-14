<template>
  <div class="banner bannerAbout" :style="{'background-image': 'url(' + require('~/assets/images/banners/about.jpg') + ')' }">
    <div class="section">
      <div class="section-col">
        <header>Contact us Today!</header>
        <p>Tell us briefly about your project. We are eager to work with you to make your vision come to life.</p>
        <nuxt-link class="btn-banner" to="" title="">
          Get a Quote
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
   .banner .section-col {
    width: 40%;
  }
}
</style>
