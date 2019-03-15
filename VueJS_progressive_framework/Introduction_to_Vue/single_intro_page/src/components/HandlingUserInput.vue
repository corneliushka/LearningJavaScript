<template>
    <div class="div">
        <h3> {{ msg }}</h3>
        <p> {{ message }} </p>
        <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
</template>

<script>
    export default {
        name: 'HandlingUserInput',
        props: {
            msg: String
        },
        data () {
            return {
                message: 'Hello Vue.js ! '
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = 
                this.message.split('').reverse().join('')
            }
        }
    } 

</script>


<style scoped>
.div {
    background: rgb(165, 228, 163);
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
