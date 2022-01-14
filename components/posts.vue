<!-- ./components/Posts.vue -->
<template>
  <section class="">
    <div class="">
      <h1>
        News
      </h1>
      <div class="">
        <div v-for="post in posts" :key="post.id" class="column is-half">
          <div class="">
            <header class="c">
              <p class="card-header-title">
                {{ post.title }}
              </p>
            </header>
            <div class="">
              <div class="">
                {{ post.summary }}
                <br>
                <small>
                  автор: <strong>{{ post.author }}</strong>
                  || {{ post.published }}
                </small>
              </div>
            </div>
            <footer class="">
              <nuxt-link
                :to="`/post/${post.id}`"
                class=""
              >
                Read More
              </nuxt-link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import posts from '~/posts.json'

export default {
  name: 'Posts',
  data () {
    return { posts }
  }
}
</script>
