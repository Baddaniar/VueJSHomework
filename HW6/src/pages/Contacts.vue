<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "daniar",
        },
        {
          id: 2,
          name: "Aslan",
        },
        {
          id: 3,
          name: "Ilyas",
        },
        {
          id: 4,
          name: "Dymash",
        },
      ],
    };
  },
};
</script>

<template>
  <p>Контакты</p>
  <ul>
    <li v-for="user of users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<style></style>
