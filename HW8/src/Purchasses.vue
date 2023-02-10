<script>
export default {
  data() {
    return {
      summ: 0,
      date: "",
      category: "",
      categoryes: ["техника", "одежда", "еда", "развлечение", "другое"],
    }
  },
  emits: ["addPurchase"],
  methods: {
    addPurchase() {
      this.$emit("addPurchase", {
        summ: this.summ,
        date: this.date,
        category: this.category,
      });
    },
  },
};
</script>

<template>
  <div>
    <h2>Внести покупку</h2>
    <label for="">Сумма покупки</label>
    <input type="number" v-model="summ"/>
    <label for="purc_date">Дата покупки</label>
    <input type="date" id="purc_date" v-model="date"/>
    <label for="category_select">Категория покупки</label>
    <select name="category_select" id="category_select" v-model="category">
      <option
        v-for="purc_category of categoryes"
        :value="purc_category"
        :key="purc_category.index"
      >
        {{ purc_category }}
      </option>
    </select>
    <input type="button" value="Добавить покупку" @click="addPurchase" />
  </div>
</template>

<style>
</style>
