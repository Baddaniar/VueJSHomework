<script>
    export default {
        data () {
            return {
                counter: 0,
            } 
        },
        methods: {
            logger(){
                this.counter++
            },

        },
        
    }
</script>

<template>
    <div>
        <p>Like Counter</p>
        <button @click="logger">{{ counter }}</button>

    </div>
</template>

<style scoped>
.btn {
    color:red
};
.btn-1{
    color: aqua;
}
</style>