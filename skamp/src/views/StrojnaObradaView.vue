<template>
  <!----------TEXT-IMAGE (2)--------->
  <div class="flex flex-wrap overflow-hidden blackBackground">
    <div class="w-full overflow-hidden xl:w-1/2">
      <h1
        class="text-3xl mt-2 xl:text-6xl md:mt-6 md:ml-16 md:mr-16 xl:mt-32 text-yellow-500 text-center md:text-left"
      >
        {{ store.text[35] }}
      </h1>
      <h3
        class="xl:text-2xl mr-8 mb-4 ml-6 md:mt-6 md:ml-16 md:mr-16 textWhite text-center md:text-left"
      >
        {{ store.text[36] }}
      </h3>
    </div>

    <!--VIDEO-->
    <div class="w-full overflow-hidden xl:w-1/2">
      <img src="@/assets/strojna2.jpg" alt="" />
    </div>
  </div>
  <!----------/TEXT-IMAGE (2)--------->
  <div
    class="flex flex-col xl:flex-row justify-center m-6 text-center md:text-left"
  >
    <div class="rounded-lg shadow-lg bg-white max-w-sm p-2 m-4">
      <img class="rounded-t-lg" src="@/assets/strojna.jpg" alt="" />

      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2 text-yellow-500">
          {{ store.text[37] }}
        </h5>
        <p class="text-gray-700 text-base mb-4">
          {{ store.text[38] }}
        </p>
      </div>
    </div>
    <div class="rounded-lg shadow-lg bg-white max-w-sm p-2 m-4">
      <img class="rounded-t-lg" src="@/assets/strojna2.jpg" alt="" />
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2 text-yellow-500">
          {{ store.text[37] }}
        </h5>
        <p class="text-gray-700 text-base mb-4">
          {{ store.text[39] }}
        </p>
      </div>
    </div>
    <div class="rounded-lg shadow-lg bg-white max-w-sm p-2 m-4">
      <img class="rounded-t-lg" src="@/assets/strojna3.jpg" alt="" />
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2 text-yellow-500">
          {{ store.text[37] }}
        </h5>
        <p class="text-gray-700 text-base mb-4">
          {{ store.text[40] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>
