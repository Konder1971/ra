<template>
  <div class="contact">
    <div class="map">
      <div class="section">
        <div class="section-col">
          <img src="~assets/images/mapR2.jpg" alt>
        </div>
      </div>
    </div>

    <div class="contact-blocks">
      <div class="section">
        <div class="section-col">
          <h1>Contact Us</h1>
          <div class="form">
            <form>
              <div class="form-block">
                <div class="row row-2col">
                  <div class="col">
                    <label>
                      Full Name
                      <span class="required">*</span>
                    </label>
                    <input v-model="text" type="text" placeholder>
                  </div>
                  <div class="col">
                    <label for>
                      Valid E-Mail Address
                      <span class="required">*</span>
                    </label>
                    <input v-model="email" type="email">
                  </div>
                </div>

                <div class="clearfix" />

                <div class="row">
                  <div class="col">
                    <label>Message Title</label>
                    <input v-model="text" type="text">
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <label>
                      Message
                      <span class="required">*</span>
                    </label>
                    <textarea v-model="message" />
                  </div>
                </div>
              </div>

              <div class="send-message">
                <input type="submit" value="Send Message" class="btn">
              </div>

              <p>Contact us today, and we will find the best way of collaboration!</p>
            </form>
          </div>
        </div>

        <div class="section-col">
          <div class="lets-talk">
            <h2>let's Talk</h2>
            <h3>WE'RE HERE TO HELP.</h3>
            <p>If you’re interested in starting your project together with us or to get more information – we always in touch. Right Applications friendly team will gladly help you with the realization of any ideas into reality and quickly solve your problems. We’re glad to each client and always open to new projects!</p>
          </div>

          <div class="sociac-block">
            <h2>Around The Web</h2>
            <nuxt-link
              class="face"
              to="https://www.facebook.com/rightapplications/"
              target="_blank"
              title="Facebook"
            >
              <img src="~/assets/images/facebook-f2.svg" alt>
            </nuxt-link>
            <nuxt-link to="https://twitter.com/rightapplicatio" target="_blank" title="Twitter">
              <img src="~/assets/images/twitter2.svg" alt>
            </nuxt-link>
            <nuxt-link
              to="https://www.linkedin.com/company/rightapplications"
              target="_blank"
              title="LinkedIn"
            >
              <img src="~/assets/images/linkedin-in2.svg" alt>
            </nuxt-link>
          </div>

          <div class="contact-information">
            <h2>Contact Information</h2>
            <div class="ci-block">
              <h3>US HEADQUARTER</h3>
              <p>
                <strong>Address:</strong> 100 Grand Cove Way Suite 5H, Edgewater, NJ 07020
              </p>
              <p>
                <strong>Hours of Operation:</strong> Mon – Fri, 8AM – 5PM
              </p>
            </div>
            <div class="ci-block">
              <h3>UKRAINE HEADQUARTER</h3>
              <p>
                <strong>Address:</strong> Chichibabina 7, Kharkov, Kharkiv oblast, 61000, Ukraine
              </p>
              <p>
                <strong>Hours of Operation:</strong> Mon – Fri, 9AM – 23PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'US HEADQUARTER Address: 2850 Shore Parkway Suite # 6n Brooklyn NY 11235 USA Hours of Operation: Mon – Fri, 8AM – 5PM Front Desk: (718) 684-8800'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'graphic design,ux/ix design,front-end development,ecommerce,back-end development,mobile development,content management integration, server migration, consulting, project management'
      }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com/contact' }]
  }
}
</script>

<style scoped>
.form-block {
  background-color: #ebebeb;
  padding: 22px 30px 8px 30px;
  width: 100%;
  float: left;
  margin-bottom: 25px;
}
.row {
  width: 100%;
  float: left;
  margin-bottom: 20px;
}
.row-2col {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.row-2col .col {
  width: 47%;
  float: left;
}
label,
input,
textarea {
  display: block;
  width: 100%;
  float: left;
  border: none;
}
input,
textarea {
  padding: 10px;
}
label {
  font-weight: 600;
  font-size: 13px;
  color: #000;
  margin-bottom: 5px;
}
.required {
  color: #c00;
}
textarea {
  height: 120px;
}
.send-message {
  width: 100%;
  float: left;
  margin-bottom: 30px;
}
.send-message input {
  width: auto;
  display: inline-block;
  padding: 8px 25px;
}

.contact h1 {
  margin-bottom: 4px;
}
.contact h2 {
  margin-bottom: 12px;
}
.contact h3 {
  color: #2e2834;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.map img {
  display: block;
  float: left;
  width: 100%;
}
.sociac-block a {
  display: inline-block;
  margin: 0 50px 0 0;
}
.sociac-block a:hover {
  opacity: 0.7;
}
.sociac-block img {
  height: 40px;
}
.sociac-block a.face img {
  height: 34px;
  position: relative;
  top: -3px;
}
.contact .lets-talk {
  margin-bottom: 40px;
}
.contact .lets-talk h3 {
  margin-bottom: 15px;
}
.contact .sociac-block {
  margin-bottom: 35px;
}
.contact-information h3 {
  margin-bottom: 2px;
}
.ci-block {
  margin-bottom: 20px;
}
.contact p {
  color: #999;
  font-size: 14px;
  line-height: 21px;
}
.contact p strong {
  color: #2e2834;
  font-weight: 600;
}
@media (min-width: 768px) {
  .contact {
    padding-bottom: 40px;
  }
  .contact h1 {
    position: relative;
    top: -8px;
  }
  .map {
    margin-bottom: 60px;
  }
  .contact-blocks .section-col {
    width: 50%;
  }
}
</style>
