<template>
  <div class="error">
    <h1>Error 404</h1>
    <NLink to="/">
      Home
    </NLink>
    <button @click="goToHome">
      Home
    </button>

    <div class="bg-1">
      Lorem ipsum dolor sit
      <a href>amet consectetur adipisicing elit</a>. Assumenda id rerum
      saepe asperiores alias porro nostrum doloribus, nulla necessitatibus adipisci?
    </div>

    <div class="bg-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum enim deserunt deleniti ut unde pariatur,
      velit nostrum, sapiente, quaerat officiis
      <a href>alias modi voluptatum laudantium</a> quasi maxime nisi! Nostrum, molestiae provident!
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.error {
  background-color: hsla(0, 0%, 100%, 0.998);
  color: hsla(0, 0%, 9%, 1);
}
.bg-1 {
  background-color: hsla(120, 77%, 90%, 1);
  border: 1px solid hsla(120, 77%, 90%, 0.999);
  color: hsla(0, 0%, 9%, 1);
  word-wrap: break-word;
  word-break: break-word;
  padding: 20px;
  margin: 20px;
}
.bg-1 a {
  color: hsla(120, 77%, 15%, 1);
  font-weight: 600;
}
.bg-2 {
  background-color: hsla(205, 100%, 94%, 1);
  border: 1px solid hsla(205, 100%, 94%, 0.999);
  color: hsla(0, 0%, 9%, 1);
  padding: 20px;
  margin: 20px;
}
.bg-2 a {
  color: hsla(206, 100%, 15%, 1);
  font-weight: 600;
}
footer {
  color: hsla(0, 0%, 100%, 0.997);
  background-color: hsla(0, 0%, 18%, 0.999);
}
</style>
