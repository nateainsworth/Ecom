<script setup lang="ts">
  const search = ref(false)

  const colorMode = useColorMode()
  const setColorTheme = (newTheme: Theme) => {
    colorMode.preference = newTheme
  }

  const notificationValue = ref('"1"');
</script>

<template> 
<nav class="navbar shadow-lg sticky top-0 w-full z-10 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="navbar-nav nav-btns grid grid-cols-12 place-content-center p-4">
      <div class="col-span-9 self-center">
        <a class="navbar-brand text-3xl" href="#">LOGO</a>
      </div>

      <ElementsNavbarBtn :notification="notificationValue" >
        <IconsBasket />
      </ElementsNavbarBtn>

      <ElementsNavbarBtn>
        <IconsBars />
      </ElementsNavbarBtn>

      <ElementsNavbarBtn @click="search = !search">
        <IconsSearch />
      </ElementsNavbarBtn>
      
    </div>
  </div>
</nav>

<div class="max-w-6xl mx-auto search-drop px-4 py-8" v-if="search">
  <input class="nav-search p-2 rounded-full w-full" placeholder="Search..." type="text"/>
</div>

</template>
<style lang="scss" scoped>

</style>