<template>
  <!----------TEXT-IMAGE (2)--------->
  <div class="flex flex-wrap overflow-hidden blackBackground">
    <div class="w-full overflow-hidden xl:w-1/2">
      <h1
        class="text-3xl mt-2 xl:text-6xl md:mt-6 md:ml-16 md:mr-16 xl:mt-32 text-yellow-500 text-center md:text-left"
      >
        {{ store.text[41] }}
      </h1>
      <h3
        class="xl:text-2xl mr-8 mb-4 ml-6 md:mt-6 md:ml-16 md:mr-16 textWhite text-center md:text-left"
      >
        {{ store.text[42] }}
      </h3>
    </div>

    <!--VIDEO-->
    <div class="overflow-hidden xl:w-1/2">
      <img src="@/assets/bravarijaVUE.jpg" alt="" />
    </div>
  </div>
  <!----------/TEXT-IMAGE (2)--------->
  <!----------TEXT--------->
  <div
    class="flex flex-wrap overflow-hidden bg-gray-50 pr-6 pl-6 pt-8 xl:pr-24 xl:pl-24 xl:pt-16"
  >
    <div class="w-full overflow-hidden xl:w-1/2">
      <h2 class="text-3xl xl:text-6xl text-yellow-500 text-center md:text-left">
        <b>{{ store.text[43] }}</b>
      </h2>
    </div>

    <div
      class="w-full overflow-hidden xl:w-1/2 text-gray-600 xl:pl-4 text-center md:text-left mb-6"
    >
      <h2>
        {{ store.text[44] }}
      </h2>
      <h2>
        {{ store.text[45] }}
      </h2>
    </div>
  </div>
  <!----------TEXT--------->
  <!--Galerija-->
  <section class="overflow-hidden text-gray-700">
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div class="flex flex-col md:flex-row -m-1 md:-m-2">
        <div class="md:flex flex-col md:flex-row md:w-1/3">
          <div class="w-full p-1 md:p-2">
            <h3 class="text-center">{{ store.text[46] }}</h3>
            <img
              alt="CNC plazma Skamp d.o.o."
              class="block object-cover object-center w-full h-5/6 rounded-lg"
              src="@/assets/pocetna.jpg"
            />
          </div>
        </div>

        <div class="md:flex md:flex-wrap md:w-1/3">
          <div class="w-full p-1 md:p-2">
            <h3 class="text-center">{{ store.text[47] }}</h3>
            <img
              alt="CNC glodalica Skamp d.o.o."
              class="block object-cover object-center w-full h-5/6 rounded-lg"
              src="@/assets/glodalica.jpg"
            />
          </div>
        </div>

        <div class="md:flex md:flex-wrap md:w-1/3">
          <div class="w-full p-1 md:p-2">
            <h3 class="text-center">{{ store.text[48] }}</h3>
            <img
              alt="CNC pila Skamp d.o.o."
              class="block object-cover object-center w-full h-5/6 rounded-lg"
              src="@/assets/pila.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Galerija-->
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
