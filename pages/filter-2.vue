<template>
  <div class="filter-1">
    <div class="container">
      <div id="myBtnContainer">
        <button class="btn active" onclick="filterSelection('all')">
          Show all
        </button>
        <button class="btn" onclick="filterSelection('korob')">
          Korob
        </button>
        <button class="btn" onclick="filterSelection('cars')">
          Cars
        </button>
        <button class="btn" onclick="filterSelection('animals')">
          Animals
        </button>
        <button class="btn" onclick="filterSelection('fruits')">
          Fruits
        </button>
        <button class="btn" onclick="filterSelection('colors')">
          Colors
        </button>
      </div>

      <div class="container">
        <div class="filterDiv cars">
          BMW
        </div>
        <div class="filterDiv korob">
          kr-1
        </div>
        <div class="filterDiv colors fruits">
          Orange
        </div>
        <div class="filterDiv cars">
          Volvo
        </div>
        <div class="filterDiv colors">
          Red
        </div>
        <div class="filterDiv korob">
          kr-2
        </div>
        <div class="filterDiv cars animals">
          Mustang
        </div>
        <div class="filterDiv colors">
          Blue
        </div>
        <div class="filterDiv animals">
          Cat
        </div>
        <div class="filterDiv korob">
          kr-3
        </div>
        <div class="filterDiv korob">
          kr-4
        </div>
        <div class="filterDiv animals">
          Dog
        </div>
        <div class="filterDiv fruits">
          Melon
        </div>
        <div class="filterDiv fruits animals">
          Kiwi
        </div>
        <div class="filterDiv fruits">
          Banana
        </div>
        <div class="filterDiv fruits">
          Lemon
        </div>
        <div class="filterDiv korob">
          kr-5
        </div>
        <div class="filterDiv animals">
          Cow
        </div>
      </div>
      <script src="/js/filter-2.js" />
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
    // script: [{ src: '/js/filter-2.js' }] // добавление скрипта в head
  }
}
</script>

<style scoped>
.filterDiv {
  float: left;
  background-color: #2196F3;
  color: #ffffff;
  width: 100px;
  line-height: 100px;
  text-align: center;
  margin: 2px;
  display: none;
}

.show {
  display: block;
}

.container {
  margin-top: 20px;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>
