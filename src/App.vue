<template>
  <div id="app">    
      <img src="./assets/logo.png">   
      <div>
        <p>
          If Element is successfully added to this project, you'll see an
          <code v-text="'<el-button>'"></code>
          below
        </p>
        <el-button>el-button</el-button>
      </div>
    
    <div class="row">
      <div class="col-sm-6">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
      <div class="col-sm-5">
        <elementForm />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import elementForm from './components/elementForm'

export default {
  name: 'app',
  components: {
    HelloWorld,
    elementForm
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
