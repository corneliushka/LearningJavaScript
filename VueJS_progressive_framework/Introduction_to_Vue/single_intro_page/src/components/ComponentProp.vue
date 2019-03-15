<template>
    <div class="div">
        
        <ol>
        <li v-for="(habit, index) in habitList" :key="index">
            {{ habitList.text }}
        </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'ComponentProp',
        props: {
            habit: ['habitList']
            },
            msg: String,
        data () {
            return {
                habitList: [
                    { id: 0,
                        text: 'Sleep 7h' },
                    { id: 1,
                        text: 'Eat Clean' },
                    { id: 2,
                        text: 'Rehydrate' }
                ]
            }
        }
    }

</script>


<style scoped>
.div {
    background: rgb(117, 236, 220);
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
