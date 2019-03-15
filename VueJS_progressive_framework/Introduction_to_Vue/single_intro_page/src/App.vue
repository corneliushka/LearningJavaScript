<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="HelloWorld App"/>
    <Conditionals msg="Conditionals App"/>
    <ForLoops msg="ForLoops App"/>
    <HandlingUserInput msg="HandlingUserInput App"/>
    <ComponentProp msg="ComponentPro App"/>
    <VModel msg="V-Model"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Conditionals from './components/Conditionals.vue'
import ForLoops from './components/ForLoops.vue'
import HandlingUserInput from './components/HandlingUserInput.vue'
import VModel from './components/VModel.vue'
import ComponentProp from './components/ComponentProp.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Conditionals,
    ForLoops,
    HandlingUserInput,
    ComponentProp
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
  display: block;
  background-color: aliceblue;
  padding: 10px;
}
</style>
