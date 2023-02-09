<script>
export default {

}
</script>

<template>
  <nav>
    <a href="/gallery">галерея</a>
    <a href="/home">Главная</a>
    <a href="/contacts">Контакты</a>
  </nav>
  <router-view/>
</template>

<style>
  nav{
    display: flex;
    flex-direction: column;
  }
</style>