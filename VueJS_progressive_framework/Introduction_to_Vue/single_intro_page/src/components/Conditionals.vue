<template>
    <div class="div">
        <h3>{{ msg }}</h3>
        <p v="seen">
            Now you see me
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Conditionals',
        props: {
            msg: String
        },
        data () {
            return {
            seen: true
            }
        }
    } 

</script>


<style scoped>

.div {
    background: rgb(207, 173, 196);
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
