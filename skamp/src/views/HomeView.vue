<template>
  <div class="home">
    <!----------TEXT-IMAGE (2)--------->
    <div class="flex flex-wrap overflow-hidden blackBackground">
      <div class="w-full overflow-hidden xl:w-1/2 text-center">
        <h1 class="text-3xl xl:text-6xl text-yellow-500 mt-6 xl:mt-32">
          {{ store.text[7] }}
        </h1>
        <h2 class="text-2xl xl:text-4xl mt-6 textWhite">
          {{ store.text[8] }}
        </h2>
        <ButtonOrange
          :btnText="
            store.lang == 0
              ? 'O nama'
              : store.lang == 3
              ? 'Chi siamo'
              : 'About us'
          "
          btnLink="o-nama"
        />
      </div>

      <div class="w-full overflow-hidden xl:w-1/2">
        <img src="@/assets/pocetna3.jpeg" alt="Bravarija rezanje plazmom" />
      </div>
    </div>
    <!----------/TEXT-IMAGE (2)--------->
    <!----------4 TEXTS--------->
    <div
      class="flex flex-wrap overflow-hidden bg-gray-50 pr-6 pl-6 pt-8 xl:pr-24 xl:pl-24 xl:pt-16"
    >
      <div class="w-full overflow-hidden xl:w-1/2">
        <h2
          class="text-3xl xl:text-6xl text-yellow-500 text-center xl:text-left"
        >
          <b>{{ store.text[9] }}</b>
        </h2>
      </div>

      <div
        class="w-full overflow-hidden xl:w-1/2 mt-4 xl:mt-10 text-gray-600 xl:pl-4"
      >
        <h2>
          {{ store.text[10] }}
        </h2>
        <h2><b>Škamp d.o.o</b> {{ store.text[11] }}</h2>
      </div>
      <div></div>
      <div class="w-full overflow-hidden xl:w-1/2 mt-8 xl:mt-16 xl:mb-16">
        <h2
          class="text-3xl xl:text-6xl text-yellow-500 text-center xl:text-left"
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
    <!----------TEXT-VIDEO (2)--------->
    <div
      class="flex flex-col xl:flex-row overflow-hidden bg-gray-50 md:pl-6 pt-4 md:pr-6 xl:pt-8 xl:pr-24 xl:pl-24"
    >
      <div class="overflow-hidden xl:w-1/2">
        <h1
          class="text-3xl xl:text-6xl text-yellow-500 xl:mt-12 text-center xl:text-left"
        >
          <b>{{ store.text[18] }}</b>
        </h1>
      </div>

      <!--VIDEO-->
      <div class="place-content-center mt-6 xl:mb-12 xl:pl-56 md:mb-6">
        <video
          id="my-video"
          class="video-js vjs-big-play-centered"
          muted
          autoplay="autoplay"
          loop
          preload="auto"
          width="1040"
          height="264"
          data-setup="{}"
        >
          <source src="@/assets/video1.mp4" type="video/mp4" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
            >
          </p>
        </video>
      </div>
      <!--/VIDEO-->
    </div>
    <!----------/TEXT-VIDEO (2)--------->
    <!--TransparentPocetna1-->
    <div
      class="flex flex-wrap overflow-hidden mx-auto pb-12 md:pb-0 bg-pocetna-transparent w-full h-96 textWhite items-center"
    >
      <div class="place-content-center mx-auto mt-24 md:mt-6">
        <h2 class="text-5xl md:text-7xl mb-4">{{ store.text[19] }}</h2>
        <ul class="list-disc ml-6 text-3xl xl:text-4xl">
          <li class="ml-4 md:ml-8">{{ store.text[2] }}</li>
          <li class="ml-4 md:ml-8">{{ store.text[4] }}</li>
          <li class="ml-4 md:ml-8">{{ store.text[3] }}</li>
        </ul>
      </div>
    </div>
    <!--/TransparentPocetna1-->

    <!----------KARTICE--------->
    <div
      class="flex flex-col xl:flex-row pb-8 md:pt-8 md:pb-16 backgroundMetal"
    >
      <!--LIMARIJA-->
      <div
        class="overflow-hidden xl:w-1/3 m-4 text-center rounded-t-lg shadow-lg"
      >
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            class="w-full rounded-t-lg"
            src="@/assets/limarija.jpg"
            alt="Limarija Skamp d.o.o. CNC savijačice"
          />

          <router-link to="limarija">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            ></div>
          </router-link>
        </div>

        <div class="p-6 blackBackground overflow-hidden h-full">
          <h5 class="text-yellow-600 text-2xl font-medium mb-2">
            <b>{{ store.text[2] }}</b>
          </h5>
          <p class="textWhite text-base mb-2">
            {{ store.text[20] }}
          </p>
          <ButtonOrange
            :btnText="
              store.lang == 0
                ? 'Saznaj više'
                : store.lang == 3
                ? 'Scopri di più'
                : 'Find out more'
            "
            btnLink="limarija"
          />
        </div>
      </div>
      <!--/LIMARIJA-->
      <!--STROJNA OBRADA-->
      <div
        class="overflow-hidden xl:w-1/3 m-4 text-center rounded-t-lg shadow-lg"
      >
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            class="w-full rounded-t-lg"
            src="@/assets/strojna.jpg"
            alt="Strojna obrada Skamp d.o.o."
          />
          <router-link to="strojna-obrada">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            ></div>
          </router-link>
        </div>

        <div class="p-6 blackBackground overflow-hidden h-full">
          <h5 class="text-yellow-600 text-2xl font-medium mb-2">
            <b>{{ store.text[3] }}</b>
          </h5>
          <p class="textWhite text-base mb-2">
            {{ store.text[21] }}
          </p>
          <ButtonOrange
            :btnText="
              store.lang == 0
                ? 'Saznaj više'
                : store.lang == 3
                ? 'Scopri di più'
                : 'Find out more'
            "
            btnLink="strojna-obrada"
          />
        </div>
      </div>
      <!--/STROJNA OBRADA-->
      <!--BRAVARIJA-->
      <div
        class="overflow-hidden xl:w-1/3 text-center m-4 rounded-t-lg shadow-lg"
      >
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            class="w-full rounded-t-lg"
            src="@/assets/bravarija.jpg"
            alt="Bravarija Skamp d.o.o."
          />
          <router-link to="bravarija">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            ></div>
          </router-link>
        </div>

        <div class="p-6 blackBackground overflow-hidden h-full">
          <h5 class="text-yellow-600 text-2xl font-medium mb-2">
            <b>{{ store.text[4] }}</b>
          </h5>
          <p class="textWhite text-base mb-2">
            {{ store.text[22] }}
          </p>
          <ButtonOrange
            :btnText="
              store.lang == 0
                ? 'Saznaj više'
                : store.lang == 3
                ? 'Scopri di più'
                : 'Find out more'
            "
            btnLink="bravarija"
          />
        </div>
      </div>
    </div>
    <!----------/KARTICE--------->
    <!----------ORANGELINE--------->
    <div
      class="flex flex-col md:flex-row overflow-hidden bg-yellow-500 p-2 md:p-8 place-content-left md:place-content-center"
    >
      <!--Lokacija-->
      <div class="xl:mr-16 align-icon-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 xl:h-20 xl:w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="xl:text-3xl blackText text-center"
          >Rudarska ulica 34, Vodnjan</span
        >
      </div>
      <!--/Lokacija-->
      <!--Email-->
      <div class="xl:mr-16 align-icon-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 xl:h-20 xl:w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <a
          href="mailto:skamp.pu@gmail.com"
          class="xl:text-3xl blackText text-center"
          >skamp.pu@gmail.com</a
        >
      </div>
      <!--/Email-->
      <!--Kontakt-->
      <div class="xl:mr-16 align-icon-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 xl:h-20 xl:w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clip-rule="evenodd"
          />
        </svg>
        <router-link
          to="/kontakt"
          class="xl:text-3xl blackText text-center underline"
        >
          {{ store.text[58] }}
        </router-link>
      </div>
      <!--/Kontakt-->
    </div>
    <!----------/ORANGELINE--------->
    <div class="">
      <!----------LOCATION--------->
      <div
        class="flex flex-col md:flex-row overflow-hidden bg-gray-50 ml-6 pt-4 pr-6 xl:pt-8 xl:pr-24 xl:pl-48"
      >
        <div class="overflow-hidden xl:w-1/2">
          <h1
            class="text-3xl xl:text-6xl text-yellow-500 xl:mt-48 text-center xl:text-left"
          >
            <b>{{ store.text[23] }}</b>
          </h1>
        </div>

        <!----------LOKACIJA--------->
        <div class="">
          <div class="overflow-hidden">
            <img
              src="@/assets/lokacija.jpg"
              alt="Lokacija Škamp d.o.o. Vodnjan Pula"
              class="w-max object-none"
            />
          </div>
        </div>
        <!----------/LOKACIJA--------->
      </div>
      <!----------LOCATION--------->
      <!--Google maps-->
      <div class="overflow-hidden mt-4 md:mt-8 md:ml-24 md:mr-24">
        <GoogleMap
          api-key="AIzaSyC1bGd4Skv5XVAhFpB9IuIovNRAQR0rogk"
          style="width: 100%; height: 500px"
          :center="center"
          :zoom="14"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
      </div>
      <!--/Google maps-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonOrange from "../components/ButtonOrange.vue";
import { GoogleMap, Marker } from "vue3-google-map";
import store from "@/store.js";

export default {
  name: "HomeView",
  data() {
    return {
      store,
    };
  },
  components: {
    ButtonOrange,
    GoogleMap,
    Marker,
  },
  setup() {
    const center = { lat: 44.96177, lng: 13.86066 };

    return { center };
  },
};
</script>
<style scoped>
.align-icon-middle {
  display: flex;
  align-items: center;
}
.footerText {
  opacity: 1 !important;
}

.align-icon-middle span {
  padding-left: 5px;
}
</style>
