<template>
  <div class="filter-1">
    <div class="container">
      <div class="nav">
        <ul>
          <li data-f="all">
            ALL
          </li>
          <li data-f="alizarin" class="text-alizarin">
            ALIZARIN
          </li>
          <li data-f="wisteria" class="text-wisteria">
            WISTERIA
          </li>
          <li data-f="emerland" class="text-emerland">
            EMERLAND
          </li>
          <li data-f="sunflower" class="text-sunflower">
            SUNFLOWER
          </li>
        </ul>
      </div>
      <div class="block-cover">
        <div class="box alizarin" />
        <div class="box wisteria" />
        <div class="box emerland" />
        <div class="box belizehole" />
        <div class="box sunflower" />
        <div class="box alizarin" />
        <div class="box wisteria" />
        <div class="box emerland" />
        <div class="box belizehole" />
        <div class="box sunflower" />
        <div class="box alizarin" />
        <div class="box wisteria" />
        <div class="box emerland" />
        <div class="box belizehole" />
        <div class="box sunflower" />
        <div class="box alizarin" />
        <div class="box wisteria" />
        <div class="box emerland" />
        <div class="box belizehole" />
        <div class="box sunflower" />
      </div>
      <script src="/js/filter-1.js" />
    </div>
    <div class="clearfix" />
  </div>
</template>

<script>
export default {
  head: {
    title: '',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          ''
      }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com' }]
    // script: [{ src: '/js/filter-1.js' }] // добавление скрипта в head
  }
}
</script>

<style scoped>

  h2 {
    text-align: center;
    margin: 20px;
  }
  .nav ul li {
    display: inline-block;
    padding: 10px 40px 10px 0;
    cursor: pointer;
  }

  .box {
    border-radius: 4px;
    box-shadow: 6px 7px 28px 0 rgba(16, 16, 16, 0.7);
    min-height: 140px;
    min-width: calc(22% - 28px);
    padding: 0 10px;
    margin: 15px;
    border-width: 3px;
    float: left;
    background-image: linear-gradient(#FFB503 5%, #FF7500 95%);
  }

  .box.alizarin {
    border: 3px solid #e74c3c;
  }

  .box.wisteria {
    border: 3px solid #8e44ad;
  }

  .box.emerland {
    border: 3px solid #2ecc71;
  }

  .box.belizehole {
    border: 3px solid #2980b9;
  }

  .box.sunflower {
    border: 3px solid #f1c40f;
  }

  .text-alizarin {
    color: #e74c3c;
  }

  .text-wisteria {
    color: #8e44ad;
  }

  .text-emerland {
    color: #2ecc71;
  }

  .text-belizehole {
    color: #2980b9;
  }

  .text-sunflower {
    color: #f1c40f;
  }

  .hide {
    opacity: 1;
    animation-name: a1;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  @keyframes a1 {
    to {
      opacity: 0;
      min-height: 0;
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }
  }

</style>
