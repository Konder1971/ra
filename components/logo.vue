<template>
  <NuxtLink to="/" title class="logo">
    <img src="~/assets/images/logo_rightapplications.png" alt>
    <em />
    <span>
      Right
      <br>applications
    </span>
  </NuxtLink>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  text-transform: uppercase;
  color: #000;
}
.logo:hover {
  color: #c60;
  text-decoration: none;
}
.logo img {
  width: auto;
  float: left;
  transition: all 300ms ease-in-out;
}
em {
  background-color: #d44700;
  width: 2px;
  margin: 0 15px;
  transition: all 300ms ease-in-out;
}
span {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  transition: all 300ms ease-in-out;
}
@media (min-width: 768px) {
  .logo img {
    height: 40px;
  }
  .navigation.fixed .logo img {
    height: 33px;
  }
  .navigation.fixed em {
    margin: 0 10px;
  }
  .navigation.fixed span {
    font-size: 12px;
  }
}
@media (max-width: 767px) {
  .logo img {
    height: 40px;
  }
  .navigation.fixed .logo img {
    height: 33px;
  }
  .navigation.fixed em {
    margin: 0 10px;
  }
  .navigation.fixed span {
    font-size: 12px;
  }
}
</style>
