<template>
  <div class="blog">
    <BannerBlog />

    <div class="section">
      <div class="section-col">
        <div class="blogblock">
          <a class="post-pic" href="" title="">
            <img src="~assets/images/blog/javaScript-frameworks.jpg" alt="">
          </a>
          <h2><a href="" title="">Top 10 most popular JavaScript frameworks</a></h2>
          <div class="post-date">
            November 28, 2019
          </div>
          <p>
            After years of struggling with competitors and sometimes unflattering PR, JavaScript settled down as the primary language for web development but… the race keeps going. New JS frameworks and libraries – tools that make JavaScript more accessible and easier to use – pop up so often that choosing the one best suited to the job
          </p>
          <a href="" class="btn" title="">Continue Reading</a>
        </div>

        <div class="blogblock">
          <a class="post-pic" href="" title="">
            <img src="~assets/images/blog/javaScript-frameworks.jpg" alt="">
          </a>
          <h2><a href="" title="">Top 10 most popular JavaScript frameworks</a></h2>
          <div class="post-date">
            November 28, 2019
          </div>
          <p>
            After years of struggling with competitors and sometimes unflattering PR, JavaScript settled down as the primary language for web development but… the race keeps going. New JS frameworks and libraries – tools that make JavaScript more accessible and easier to use – pop up so often that choosing the one best suited to the job
          </p>
          <a href="" class="btn" title="">Continue Reading</a>
        </div>

        <div class="blogblock">
          <a class="post-pic" href="" title="">
            <img src="~assets/images/blog/javaScript-frameworks.jpg" alt="">
          </a>
          <h2><a href="" title="">Top 10 most popular JavaScript frameworks</a></h2>
          <div class="post-date">
            November 28, 2019
          </div>
          <p>
            After years of struggling with competitors and sometimes unflattering PR, JavaScript settled down as the primary language for web development but… the race keeps going. New JS frameworks and libraries – tools that make JavaScript more accessible and easier to use – pop up so often that choosing the one best suited to the job
          </p>
          <a href="" class="btn" title="">Continue Reading</a>
        </div>

        <div class="blogpagination">
          <ul>
            <li><a href="" /></li>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="" /></li>
          </ul>
        </div>
      </div>
      <div class="section-col">
        <NavigationCategory />
      </div>
    </div>
  </div>
</template>

<script>
import BannerBlog from '~/components/banners/bannerBlog'
import NavigationCategory from '~/components/navigationcategory'
export default {
  name: 'Blog',
  components: {
    BannerBlog,
    NavigationCategory
  },
  head: {
    title: 'Blog',
    meta: [
      { hid: 'description', name: 'description', content: 'Blog page description' },
      { hid: 'keywords', name: 'keywords', content: 'blog pag keywords' }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com/blog' }]
  }
}
</script>

<style scoped>
.blog ul,
.blog li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.blog .blogpagination li {
  display: inline-block;
}
.blog a,
.blog a:hover {
  text-decoration: none;
}
.blogblock {
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 50px;
  margin-bottom: 52px;
}
.blogblock .post-pic {
  display: block;
  margin-bottom: 15px;
  width: 100%;
  float: left;
}
.blogblock .post-pic img {
  width: 100%;
  float: left;
}
.blogblock h2 {
  margin-bottom: 10px;
}
.blogblock .post-date {
  color: #222;
  margin-bottom: 12px;
}
.blogblock p {
  font-size: 14px;
  margin-bottom: 18px;
}
@media (min-width: 768px) {
  .blog .section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .blog .section-col:first-child {
    width: 75%;
  }
  .blog .section-col:last-child {
    width: 25%;
  }
}
</style>
