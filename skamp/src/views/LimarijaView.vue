<template>
  <!----------TEXT-IMAGE (2)--------->
  <div class="flex flex-wrap overflow-hidden blackBackground">
    <div class="w-full overflow-hidden xl:w-1/2">
      <h1
        class="text-3xl mt-2 xl:text-6xl md:mt-6 md:ml-16 md:mr-16 xl:mt-32 text-yellow-500 text-center md:text-left"
      >
        {{ store.text[27] }}
      </h1>
      <h3
        class="xl:text-2xl mr-8 mb-4 ml-6 md:mt-6 md:ml-16 md:mr-16 textWhite text-center md:text-left"
      >
        {{ store.text[28] }}
      </h3>
    </div>

    <!--VIDEO-->
    <div class="w-full overflow-hidden xl:w-1/2">
      <img class="h-full" src="@/assets/cnc-laser.jpg" alt="" />
    </div>
    <!--/VIDEO-->
  </div>
  <!----------/TEXT-IMAGE (2)--------->
  <!----------4 TEXTS--------->
  <div
    class="flex flex-wrap overflow-hidden bg-gray-50 pr-6 pl-6 pt-8 xl:pr-24 xl:pl-24 xl:pt-16"
  >
    <div class="w-full overflow-hidden xl:w-1/2">
      <h2 class="text-3xl xl:text-6xl text-yellow-500 text-center md:text-left">
        <b>{{ store.text[29] }}</b>
      </h2>
    </div>

    <div
      class="w-full overflow-hidden xl:w-1/2 text-gray-600 xl:pl-4 mb-4 md:mb-20 text-center md:text-left"
    >
      <h2>
        {{ store.text[30] }}
      </h2>
    </div>
    <div></div>
  </div>
  <!----------/4 TEXTS--------->
  <!----------IMAGES (2)--------->
  <div class="flex flex-col md:flex-row overflow-hidden blackBackground">
    <div class="w-full overflow-hidden">
      <img class="h-full" src="@/assets/limarija.jpg" alt="" />
    </div>
    <div class="w-full overflow-hidden">
      <img class="h-full" src="@/assets/cnc1.jpg" alt="" />
    </div>
  </div>
  <!----------/IMAGES (2)--------->
  <!----------4 TEXTS--------->
  <div
    class="flex flex-wrap overflow-hidden bg-gray-50 pr-6 pl-6 pt-8 xl:pr-24 xl:pl-24 xl:pt-16"
  >
    <div class="w-full overflow-hidden xl:w-1/2">
      <h2 class="text-3xl xl:text-6xl text-yellow-500 text-center md:text-left">
        <b>{{ store.text[31] }}</b>
      </h2>
    </div>

    <div
      class="w-full overflow-hidden xl:w-1/2 text-gray-600 xl:pl-4 mb-4 md:mb-20 text-center md:text-left"
    >
      <h2>
        {{ store.text[32] }}
        <b>{{ store.text[33] }}</b> {{ store.text[34] }}
      </h2>
    </div>
  </div>

  <div class="flex flex-wrap overflow-hidden bg-gray-50 justify-center">
    <!--VIDEO-->
    <div class="w-full xl:w-1/2 overflow-hidden">
      <video
        id="my-video"
        class="video-js vjs-big-play-centered"
        muted
        autoplay="autoplay"
        loop
        preload="auto"
        width="960"
        height="720"
        data-setup="{}"
      >
        <source src="@/assets/video2.mp4" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
        </p>
      </video>
    </div>
    <!--/VIDEO-->
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
