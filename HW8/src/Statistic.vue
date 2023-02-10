<script>
export default {
  props: {
    incomes: Array,
    purchasses: Array,
  },
  data() {
    return {};
  },
  computed: {
    biggestPurchaseIndex() {
        return this.purchasses.reduce((acc, curr, i) => this.purchasses[acc].summ > curr.summ ? acc : i, 0);
    },
    fullIncome(){
      return this.incomes.map(item => item.income_summ).reduce((prev, curr) => prev + curr, 0)
    },
    fullPurchasses(){
      return this.purchasses.map(item => item.summ).reduce((prev, curr) => prev + curr, 0)
    },
    techSumm(){
      return this.purchasses.filter(({category}) => category === "техника").reduce((acc, item) => acc + item.summ, 0)
    },
    clothesSumm(){
      return this.purchasses.filter(({category}) => category === "одежда").reduce((acc, item) => acc + item.summ, 0)
    },
    grotherySumm(){
      return this.purchasses.filter(({category}) => category === "еда").reduce((acc, item) => acc + item.summ, 0)
    },
    otherSumm(){
      return this.purchasses.filter(({category}) => category === "другое").reduce((acc, item) => acc + item.summ, 0)
    },
    enterSumm(){
      return this.purchasses.filter(({category}) => category === "развлечение").reduce((acc, item) => acc + item.summ, 0)
    }
  },
};
</script>

<template>
  <h2>Статистика</h2>
  <h3>Итоговый баланс:</h3>
  <p>Доход:{{fullIncome}}</p>
  <p>Расход:{{fullPurchasses}}</p>
  <h3>Самые большое расходы за последний месяц</h3>
  <div>
    <p>Сумма:{{purchasses[biggestPurchaseIndex].summ}} Дата: {{purchasses[biggestPurchaseIndex].date}} Категория: {{purchasses[biggestPurchaseIndex].category}}</p>
  </div>
  <h3>Расходы по категориями</h3>
  <div>
    <p>техника: {{techSumm}}</p>
    <p>одежда: {{clothesSumm}}</p>
    <p>еда: {{grotherySumm}}</p>
    <p>развлечение: {{enterSumm}}</p>
    <p>другое: {{otherSumm}}</p>
  </div>

</template>

<style></style>
