<template>
  <div class="about">
    <!----------TEXT-IMAGE (2)--------->
    <div class="flex flex-wrap overflow-hidden blackBackground">
      <div class="w-full overflow-hidden xl:w-1/2 text-left">
        <h1
          class="text-3xl mt-2 xl:text-6xl md:mt-6 md:ml-16 md:mr-16 xl:mt-32 text-yellow-500 text-center md:text-left"
        >
          {{ store.text[25] }}
        </h1>
        <h3
          class="xl:text-2xl mr-8 mb-4 ml-6 md:mt-6 md:ml-16 md:mr-16 textWhite text-center md:text-left"
        >
          {{ store.text[26] }}
        </h3>
      </div>
      <div class="w-full overflow-hidden xl:w-1/2">
        <img
          src="@/assets/o-nama.jpg"
          alt="Škamp d.o.o. Vodnjan"
          class="block w-full"
        />
      </div>
    </div>
    <!----------/TEXT-IMAGE (2)--------->
    <!----------4 TEXTS--------->
    <div
      class="flex flex-wrap overflow-hidden bg-gray-50 pr-6 pl-6 pt-8 xl:pr-24 xl:pl-24 xl:pt-16"
    >
      <div class="w-full overflow-hidden xl:w-1/2">
        <h2
          class="text-3xl xl:text-6xl text-yellow-500 text-center md:text-left"
        >
          <b>{{ store.text[9] }}</b>
        </h2>
      </div>

      <div
        class="w-full overflow-hidden xl:w-1/2 mt-4 xl:mt-10 text-gray-600 xl:pl-4"
      >
        <h2 class="">
          {{ store.text[10] }}
        </h2>
        <h2><b>Škamp d.o.o</b> {{ store.text[11] }}</h2>
      </div>
      <div></div>
      <div class="w-full overflow-hidden xl:w-1/2 mt-8 xl:mt-16 xl:mb-16">
        <h2
          class="text-3xl xl:text-6xl text-yellow-500 mr-2 text-center md:text-left"
        >
          <b>{{ store.text[12] }}</b>
        </h2>
      </div>

      <div
        class="w-full overflow-hidden xl:w-1/2 mt-4 xl:mt-16 mb-4 text-gray-600 xl:pl-4"
      >
        <h2>
          {{ store.text[13] }}
        </h2>
        <h2>
          {{ store.text[14] }} <b>{{ store.text[15] }}</b
          >{{ store.text[16] }}
        </h2>
        <h2>
          {{ store.text[17] }}
        </h2>
      </div>
    </div>
    <!----------/4 TEXTS--------->
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
