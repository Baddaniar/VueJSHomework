<script>
export default {
  data() {
    return {
      income_summ: 0,
      income_date: "",
      income_type: "",
    }
  },
  emits: ["addIncome"],
  methods: {
    addIncome() {
      this.$emit("addIncome", {
        income_summ: this.income_summ,
        income_date: this.income_date,
        income_type: this.income_type,
      });
    },
  },
};
</script>

<template>
  <div>
    <h2>Внести Доход</h2>
    <label for="income_summ">Сумма дохода</label>
    <input type="number" id="income_summ" v-model="income_summ"/>
    <label for="income_date">Дата дохода</label>
    <input type="date" id="income_date" v-model="income_date"/>
    <label for="income_type">Тип дохода</label>
    <input type="text" id="income_type" v-model="income_type"/>

    <input type="button" value="Добавить доход" @click="addIncome" />
  </div>
</template>

<style>
</style>
