<template>
  <router-link :to="btnLink">
    <button
      class="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 xl:py-4 px-6 xl:px-16 rounded m-4 inline-block ease-in-out leading-tight uppercase rounded"
    >
      {{ btnText }}
    </button>
  </router-link>
</template>
<script>
export default {
  props: ["btnText", "btnLink"],
  name: "ButtonOrange",
};
</script>
<style></style>
