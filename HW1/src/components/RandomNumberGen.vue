<script>
    export default {
        data () {
            return {
                counter: [],
                number: 0,
            } 
        },
        methods: {
            getRandom(){
                console.log(Math.floor(Math.random() * 100))
                this.counter.push(Math.floor(Math.random() * 100))
            }
        },
    }
</script>

<template>
    <div>
        <button @click="getRandom">clikme button</button>
        <p v-for="index in counter">{{ index }}</p>
    </div>
</template>

<style scoped>
</style>