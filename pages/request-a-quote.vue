<template>
  <div class="request-a-quote">
    <BannerRequestAQuote />

    <div class="contact-blocks">
      <div class="section">
        <div class="section-col">
          <h2>Get In Touch</h2>

          <div class="form">
            <form>
              <div class="form-block">
                <div class="row row-2col">
                  <div class="col">
                    <label>
                      Contact Person
                      <span class="required">*</span>
                    </label>
                    <input v-model="text" type="text" placeholder>
                  </div>
                  <div class="col">
                    <label for>
                      Company Name
                    </label>
                    <input v-model="text" type="text" placeholder>
                  </div>
                </div>

                <div class="clearfix" />

                <div class="row row-2col">
                  <div class="col">
                    <label for>
                      Valid E-Mail Address
                      <span class="required">*</span>
                    </label>
                    <input v-model="email" type="email">
                  </div>
                  <div class="col">
                    <label>
                      Phone Number
                    </label>
                    <input type="tel">
                  </div>
                </div>

                <div class="clearfix" />

                <div class="row row-2col">
                  <div class="col">
                    <label>
                      Country (select Country)
                    </label>
                    <div class="select">
                      <select>
                        <option>l</option>
                        <option />
                        <option />
                        <option />
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <label for>
                      Services Category (select Services)
                    </label>
                    <div class="select">
                      <select>
                        <option>l</option>
                        <option />
                        <option />
                        <option />
                      </select>
                    </div>
                  </div>
                </div>

                <div class="clearfix" />

                <div class="row">
                  <div class="col">
                    <label>
                      I am interested in
                      <span class="required">*</span></label>
                    <input v-model="text" type="text">
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <label>
                      Describe your requirements
                      <span class="required">*</span>
                    </label>
                    <textarea v-model="message" />
                  </div>
                </div>

                <div class="row row-2col">
                  <div class="col">
                    <label>
                      Or Uploads Files
                    </label>
                    <input type="file">
                  </div>
                  <div class="col">
                    <label>
                      How many programmers do you need
                    </label>
                    <div class="select">
                      <select>
                        <option>l</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="clearfix" />

                <div class="row row-2col">
                  <div class="col">
                    <label>
                      Would you like to have representative contact you through phone?
                    </label>
                    <input type="checkbox">
                  </div>
                  <div class="col">
                    <label>
                      Select Budget (Select Budget)
                    </label>
                    <div class="select">
                      <select>
                        <option>----</option>
                        <option>----</option>
                        <option>----</option>
                        <option>----</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="clearfix" />
              </div>

              <div class="send-message">
                <input type="submit" value="Send Message" class="btn">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerRequestAQuote from '~/components/banners/bannerrequestaquote'
export default {
  components: {
    BannerRequestAQuote
  },
  head: {
    title: 'request-a-quote Page',
    meta: [
      { hid: 'description', name: 'description', content: 'request-a-quote page description' },
      { hid: 'keywords', name: 'keywords', content: 'request-a-quote pag keywords' }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com/request-a-quote' }]
  }
}
</script>

<style scoped>
.request-a-quote h2 {
  margin-bottom: 20px;
}
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
@media (min-width: 768px) {
  .request-a-quote {
    padding-bottom: 40px;
  }
}
</style>
