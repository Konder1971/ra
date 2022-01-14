<template>
  <div class="clients">
    <BannerClients />

    <div class="slients-logo">
      <div class="section">
        <div class="section-col">
          <div class="image-container">
            <img src="~assets/images/clients/logo-Aptito.png" alt="Aptito">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-420software.png" alt="420software">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-NewsON.png" alt="NewsON software development company Rightapplications">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-Dolan-Media-Management.png" alt="Dolan Media Management">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/castle-point-logo.png" alt="castle-point-logo">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-Corner.png" alt="Corner">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-IRC.png" alt="IRC">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-Consumer-Reports_1.png" alt="ConsumerReports">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-eurasianet.png" alt="Eurasianet">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-fios1.png" alt="Fios1 Verizon">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-Hears_1.png" alt="Hearst">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-Hearst.png" alt="Hearst">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-Informulary.png" alt="Informulary">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-JournalBroadcast-Group.png" alt="JournalBroadcast Group">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-WRNN-TV.png" alt="WRNNTV software  development company Rightapplications">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/logo-young-adalt-ministry.png" alt="Young Adult Ministry in a Box software development company Rightapplications">
          </div>

          <div class="image-container">
            <img src="~assets/images/clients/pic2.png" alt="Young adalt ministry">
          </div>
        </div>

        <div class="section-col">
          <ul>
            <li>Aptito</li>
            <li>McGrawHill</li>
            <li>Geoffrey Gray</li>
            <li>Peter Bergen</li>
            <li>Passare</li>
            <li>NewsON</li>
            <li>Open Society Foundations</li>
            <li>Consumer Reports</li>
            <li>Toddy Gear</li>
            <li>Young Adult Ministry in a Box</li>
            <li>Universals &amp; Contrasts</li>
            <li>420software</li>
            <li>Corner</li>
            <li>Dolan Media Management</li>
            <li>Eurasianet</li>
            <li>Gradarius</li>
            <li>Hearst</li>
            <li>Informulary</li>
            <li>IRC</li>
            <li>JournalBroadcast Group</li>
            <li>WRNNTV</li>
            <li>Art2Score</li>
            <li>Zellto</li>
            <li>Weiss Wellness</li>
            <li>IDS Solutions</li>
            <li>SSA Group</li>
            <li>Heroes Group AG</li>
            <li>Hoola Hoop</li>
            <li>Hentsū</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="slients-csd">
      <div class="section">
        <div class="section-col">
          <h3>Custom Software Development.</h3>
          <p>
            We deliver development services with a personal experience. You need a website or web/mobile application that looks beautiful, works great on all platforms and is easy to manage? A powerful product is essential in today’s competitive markets. We can help you to realize your ideas which will impress your customers and prospects and help you win in your business. During the whole period of work we have made happy hundreds of our customers, meet customer requirements and provide customized solutions, whether it was startup or enterprise, website or mobile / web application. Our customers are satisfied that we take upon ourselves all their problems with projects and realize the ideas, at the same time allowing them to keep complete control over the direction and details of the project. We achieve this through a specific approach to each of our client, particularly thanks to 24/7 support, whether it phone call, email or meeting. Also our project manager will help you clearly identify your goals that developers could perform their work, making your project on-budget and on-time. Let our team to be your partner and contribute to your business.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerClients from '~/components/banners/bannerclients'
export default {
  components: {
    BannerClients
  },
  head: {
    title: 'clients Page',
    meta: [
      { hid: 'description', name: 'description', content: 'clients page description' },
      { hid: 'keywords', name: 'keywords', content: 'clients pag keywords' }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com/clients' }]
  }
}
</script>

<style scoped>

.slients-logo,
.slients-csd {
  padding-bottom: 40px;
}

.slients-logo .section-col:first-child {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
.image-container img {
  display: block;
  float: left;
  margin: 0 40px 40px 0;
}

.slients-logo ul,
.slients-logo ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.slients-logo ul li {
  color: #999;
  padding-left: 15px;
  margin-bottom: 8px;
  position: relative;
}
.slients-logo ul li:before {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #999;
  position: absolute;
  top: 9px;
  left: 0;
}

.clients h3 {
  color: #2e2834;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .clients {
    padding-bottom: 40px;
  }
  .slients-logo {
    padding-top: 20px;
  }
  .slients-logo .section-col:first-child {
    width: 67%;
  }
  .slients-logo .section-col:last-child {
    width: 33%;
  }
}
</style>
