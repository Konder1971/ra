<template>
  <div class="about">
    <BannerAbout />

    <div class="header">
      <h1>About</h1>
      <h2>We provide solutions that are adaptable, easy to use, and time sensitive</h2>
      <p>Rightapplications is a global digital technology studio with a team of passionate hand-picked professionals. We offer IT consultation, custom application/software development, enterprise IT solution, and UI/UX design. We provide a wide range of services and engagement models to ensure a variety of ways to best serve our clients. We work with founders and product owners in a wide range of industries; so, you can rest assured our team has the expertise required to help you build the right product for your target users. We also assist our clients in achieving their business objectives by outsourcing their non-core business processes in the areas of technology and digital marketing. We work very closely with our clients, helping them beyond product development. We develop custom mobile apps, web apps, and web-based applications; and make all the pieces work together. We are experts in developing complex applications that typically need to be integrated with other systems or different APIs and complex datasets.</p>
      <p>Rightapplications was established in 2011 and operates from 2 offices: New York City (USA) and Eastern Europe (Ukraine).</p>
      <h3>Our Team</h3>
    </div>

    <div class="section">
      <div class="section-col">
        <ul>
          <li>
            <img src="~assets/images/our-team/Alex_Michayelenko.png" alt>
            <h4>Alex Michayelenko</h4>
            <p>Managing Director & CEO</p>
          </li>
          <li>
            <img src="~assets/images/our-team/Vlad_Milyavsky.png" alt>
            <h4>Vlad Milyavsky</h4>
            <p>Founder</p>
          </li>
          <li>
            <img src="~assets/images/our-team/Evgeny_Motroshilov.png" alt>
            <h4>Evgeny Motroshilov</h4>
            <p>System Engineer/Administrator</p>
          </li>
          <li>
            <img src="~assets/images/our-team/Eugine_Pokrova.png" alt>
            <h4>Eugine Pokrova</h4>
            <p>IT Production Director</p>
          </li>
          <li>
            <img src="~assets/images/our-team/Roman_Seredenko.png" alt>
            <h4>Roman Seredenko</h4>
            <p>IOS Mobile Production Director</p>
          </li>
          <li>
            <img src="~assets/images/our-team/Denis_Myak.png" alt>
            <h4>Denis Myak</h4>
            <p>Senior Software Developer</p>
          </li>
          <li>
            <img src="~assets/images/our-team/Alex_Kachechka.png" alt>
            <h4>Andrey Vasylyshyn</h4>
            <p>Java/Android Production Manager</p>
          </li>
          <li>
            <img src="~assets/images/our-team/Pavel_Michayelenko.png" alt>
            <h4>Pavel Michayelenko</h4>
            <p>Senior UX/UI/Graphic Designer</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BannerAbout from '~/components/banners/bannerAbout'
export default {
  components: {
    BannerAbout
  },
  head: {
    title: 'About Page',
    meta: [
      { hid: 'description', name: 'description', content: 'About page description' },
      { hid: 'keywords', name: 'keywords', content: 'About pag keywords' }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com/about' }]
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 10px;
}
h2 {
  color: #996;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  margin-bottom: 20px;
}
h3 {
  color: #666;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 45px;
}
.header p {
  color: #999;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 20px;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  text-align: center;
  width: 25%;
}
li img {
  max-width: 100%;
  margin-bottom: 10px;
}
li h4 {
  color: #2e2834;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
  text-transform: uppercase;
}
li p {
  font-size: 14px;
}

@media (min-width: 768px) {
  .header {
    padding-top: 50px;
  }
  .header h3 {
    padding-top: 20px;
  }
  .section {
    padding-bottom: 20px;
  }
  li {
    margin-bottom: 50px;
  }
}
</style>
