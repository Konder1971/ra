<template>
  <div class="socialFooter">
    <a href="https://www.linkedin.com/company/rightapplications" target="_blank" title="LinkedIn">
      <img src="~assets/images/linkedin-in.svg" alt>
    </a>
    <a href="https://www.facebook.com/rightapplications/" target="_blank" title="Facebook">
      <img src="~assets/images/facebook-f.svg" alt>
    </a>
    <a href="https://twitter.com/rightapplicatio" target="_blank" title="Twitter">
      <img src="~assets/images/twitter.svg" alt>
    </a>
  </div>
</template>

<script>
</script>

<style scoped>
.socialFooter {
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.socialFooter a {
  background-color: #323232;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 10px;
}
.socialFooter a img {
  height: 20px;
}
.socialFooter a:hover {
  background-color: #222;
}
</style>
