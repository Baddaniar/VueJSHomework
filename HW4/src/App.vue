<script>
    export default {
        data() {
            return {
                linkArray: ['https://picsum.photos/200','https://picsum.photos/201','https://picsum.photos/202','https://picsum.photos/203'],
                interval: 2000
            }
        },
        methods: {
            addPost(){
                this.amount++
            }
        }

    }
</script>
 
<template>
    <img v-href-change="{images: linkArray, interval: interval}" alt="">
    <p>asdasd</p>
</template>

<style scoped>

</style>
