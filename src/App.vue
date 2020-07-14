<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
html{
	font-size: 10px;
}
body{
	margin: 0;
	background: #F3F5F7;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
p{
	margin: 0;
}
a {
  color: #42b983;
	text-decoration: none;
}
@media (min-width:1025px) {
	html{
		font-size: 37px;
	}
}
@media (max-width:1025px) {
	html{
		font-size: 30px;
	}
}
@media (max-width:867px) {
	html{
		font-size: 24px;
	}
}
@media (max-width:769px) {
	html{
		font-size: 22px;
	}
}
@media (max-width:667px) {
	html{
		font-size: 20px;
	}
}
@media (max-width:567px) {
	html{
		font-size: 18px;
	}
}
@media (max-width:467px) {
	html{
		font-size: 12px;
	}
}
@media (max-width:376px) {
	html{
		font-size: 10px;
	}
}
@media (max-width:360px) {
	.search-right{
		padding-left: 5%;
	}
}
@media (max-width:350px) {
	.search-right{
		padding-left: 3% !important;
	}
  .search-icon{
    margin: 0 0.5rem !important;
  }
}
</style>
