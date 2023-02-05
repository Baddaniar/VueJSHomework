<script>
import DiagramData from "./DiagramData.vue"
import Diagram from "./Diagram.vue"
    export default {
        components:{
            DiagramData,
            Diagram
        },
        data() {
            return {
                allData: [
                    {
                        catName: "cars",
                        catPercent: 75
                    },
                    {
                        catName: "toys",
                        catPercent: 50
                    },
                    {
                        catName: "weapon",
                        catPercent: 100
                    }
                ]
            }
        },
        methods: {
            addData(data){
                console.log(data)
                this.allData.push(data)
                console.log(this.allData)
            }
        }

    }
</script>

<template>
    <DiagramData @addData="addData"/>
    <Diagram :allData="allData"/>
</template>

<style scoped>

</style>
