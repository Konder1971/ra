<template>
  <footer>
    <div class="section">
      <div class="section-col">
        <NavigationsFooter />
        <SocialFooter />
        <Copyright />
      </div>
    </div>
  </footer>
</template>

<script>
import NavigationsFooter from '~/components/navigationsfooter'
import SocialFooter from '~/components/socialfooter'
import Copyright from '~/components/copyright'
export default {
  components: {
    NavigationsFooter,
    SocialFooter,
    Copyright
  }
}
</script>

<style scoped>
footer {
  background-color: #393939;
}
footer .section-col {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
@media (min-width: 768px) {
  footer {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
