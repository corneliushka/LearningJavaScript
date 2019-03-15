<template>
    <div class="div">
        <h3> {{ msg }}</h3>
        <input v-model='message'>
    </div> 
</template>

<script>
export default {
    name: 'VModel',
    props: {
        msg: String
    },
    data () {
        return {
            message: 'Hello ! I am a V-Model component !'
        }
    }
}
</script>

<style scoped>
.div {
    background: rgb(31, 140, 235);
}

ol {
    display: inline-block;

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
    display: flex;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
