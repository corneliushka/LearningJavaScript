<template>
    <div class="div">
        <h3> {{ msg }} </h3>
        <ol>
            <li v-for="(liste, index) in todos" :key="index">
                {{ liste.text }}
            </li>
        </ol>
    </div>
</template>
<script>
    export default {
        name: 'ForLoops',
        props: {
            msg: String
        },
        data () {
            return {
                todos : [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build Something Awesome'}
                ]  
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.div {
    background: rgb(177, 203, 226);
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
