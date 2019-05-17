<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <component-button :value="text" type="primary" size="normal"></component-button>
    <component-button :value="text" type="danger" size="small"></component-button>
    <component-button :value="text" type="default" size="large"></component-button>
    <component-header></component-header>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return{
      text:'中国的好人',
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
  margin-top: 60px;
}
</style>
