<template>
  <router-link :to="btnLink">
    <button
      class="blackBackground hover:bg-yellow-600 text-white font-bold py-2 xl:py-4 px-6 xl:px-16 rounded m-4 inline-block ease-in-out leading-tight uppercase rounded"
    >
      {{ btnText }}
    </button>
  </router-link>
</template>
<script>
export default {
  props: ["btnText", "btnLink"],
  name: "ButtonGray",
};
</script>
<style></style>
