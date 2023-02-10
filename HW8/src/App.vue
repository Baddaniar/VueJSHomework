<script>
import Purchasses from './Purchasses.vue'
import Income from './Income.vue'
import Statistic from './Statistic.vue'
    export default {
        components:{
            Purchasses,
            Income,
            Statistic
        },
        data() {
            return {
                purchase: [
                    {
                        summ: 10000,
                        date: "2023-02-01",
                        category: 'еда'
                    },
                ],
                income: [
                    {
                        income_summ: 25522,
                        income_date: "2023-02-01",
                        income_type: "Зарплата"
                    }
                ]
            }
        },
        methods: {
            addPurchase(newPurchase){
                console.log(newPurchase)
                this.purchase.push(newPurchase)
                console.log(this.purchase)
            },
            addIncome(newIncome){
                console.log(newIncome)
                this.income.push(newIncome)
                console.log(this.income)
            },
            saveDataLS(){
                localStorage.setItem("purchase",JSON.stringify(this.purchase))
                localStorage.setItem("income",JSON.stringify(this.income))
            },
            importDataLS(){
                this.purchase = JSON.parse(localStorage.getItem("purchase"))
                this.income = JSON.parse(localStorage.getItem("income"))
            }
        }

    }
</script>

<template>
    <Purchasses @addPurchase="addPurchase"/>
    <Income @addIncome="addIncome"/>
    <Statistic :incomes="income" :purchasses="purchase"/>
    <input type="button" value="Сохранить данные" @click="saveDataLS">
    <input type="button" value="Импортировать данные" @click="importDataLS">
</template>

<style scoped>

</style>
