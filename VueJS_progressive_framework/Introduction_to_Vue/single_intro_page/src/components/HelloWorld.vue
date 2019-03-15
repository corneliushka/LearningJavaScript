<template>
  <div class="div">
    <h3> {{ msg }} </h3>
    <p>
    Hello World App
    </p>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.div {
    background: rgb(116, 128, 149);
}

h3 {
    margin: 40px 0 0;
    padding: 10px;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
