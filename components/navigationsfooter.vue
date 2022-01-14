<template>
  <div class="navigationsFooter">
    <ul>
      <li>
        <NuxtLink to="/" title="">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" title="">
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/expertise" title="">
          Expertise
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" title="">
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" title="">
          Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" title="">
          Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/privacy-policy" title>
          Privacy policy
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul {
  display: -webkit-flex;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  -webkit-align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
}
li:after {
    content: "/";
    margin: 0 15px;
}
li:last-child::after {
  display: none;
}
a {
  display: block;
  float: left;
  text-transform: uppercase;
  font-size: 14px;
  color: #999;
}
a:hover {
 color: #fff;
 text-decoration: none;
}
</style>
