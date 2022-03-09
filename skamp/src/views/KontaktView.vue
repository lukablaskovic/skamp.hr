<template>
  <!----------TEXT-IMAGE (2)--------->
  <div
    class="flex flex-col md:flex-row overflow-hidden blackBackground md:pl-16 md:pr-16 md:pb-16"
  >
    <!--KONTAKT FORMA-->
    <div class="w-full overflow-hidden text-center md:text-left mt-4 xl:ml-6">
      <h1 class="text-4xl md:text-5xl text-yellow-500 mb-4 ml-3 mt-4">
        <b>{{ store.text[49] }}</b
        ><!--<span class="text-white"> (u izradi...)</span>-->
      </h1>
      <form class="md:w-2/3 xl:w-1/2 xl:mr-12">
        <div class="flex flex-wrap -mx-3 mb-2 px-3">
          <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              class="block uppercase tracking-wide text-yellow-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              {{ store.text[50] }}*
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-500 rounded py-3 px-4md:mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              v-model="ime"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-yellow-500 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              {{ store.text[51] }}*
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              v-model="prezime"
            />
          </div>
        </div>

        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-yellow-500 text-xs font-bold mb-2"
            for="grid-password"
          >
            {{ store.text[52] }}
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="text"
            type="text"
            v-model="tvrtka"
          />
        </div>

        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-yellow-500 text-xs font-bold mb-2"
            for="grid-password"
          >
            {{ store.text[53] }}*
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            v-model="email"
          />
        </div>

        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-yellow-500 text-xs font-bold mb-2"
            for="grid-password"
          >
            {{ store.text[54] }}*
          </label>
          <textarea
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            v-model="poruka"
          ></textarea>
        </div>

        <div
          class="md:flex md:items-center text-center md:text-left pb-4 ml-3 mt-6"
        >
          <div class="md:w-1/3">
            <button
              class="shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded mb-4"
              type="button"
              id="button"
              @click.prevent="sendEmail"
            >
              {{ store.text[55] }}
            </button>
          </div>
          <div class="md:w-2/3"></div>
          <p v-if="check" class="text-red-500 text-xs italic mb-4 md:mr-4">
            {{ store.text[56] }}
          </p>
          <p v-if="sent" class="text-green-500 italic mb-4">
            {{ store.text[57] }}
          </p>
        </div>
      </form>
    </div>
    <!--/KONTAKT FORMA-->
    <!--Google maps-->
    <div class="overflow-hidden w-full md:w-1/2 xl:mr-16 md:mt-24">
      <GoogleMap
        api-key="AIzaSyCAx1d5yyFL-_3NX2D12OUMgwQ7XMZtEr4"
        style="width: 100%; height: 400px"
        :center="center"
        :zoom="14"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
    <!--/Google maps-->
  </div>
  <!----------/TEXT-IMAGE (2)--------->
</template>
<script>
// @ is an alias to /src
import { GoogleMap, Marker } from "vue3-google-map";
import emailjs from "@emailjs/browser";
import store from "@/store.js";

export default {
  name: "HomeView",
  data() {
    return {
      ime: "",
      prezime: "",
      poruka: "",
      tvrtka: "",
      email: "",
      check: false,
      sent: false,
      store,
    };
  },
  components: {
    GoogleMap,
    Marker,
  },
  setup() {
    const center = { lat: 44.96177, lng: 13.86066 };

    return { center };
  },
  methods: {
    async sendEmail() {
      if (
        this.ime == "" ||
        this.prezime == "" ||
        this.poruka == "" ||
        this.email == ""
      ) {
        this.check = true;
        return;
      }
      const btn = document.getElementById("button");
      btn.innerHTML = "Slanje...";
      if (this.tvrtka == "") this.tvrtka == "-";
      await emailjs.send("service_w58icuj", "template_fy73qcl", {
        from_name: this.ime + " " + this.prezime,
        from_email: this.email,
        message: this.poruka,
        tvrtka: this.tvrtka,
      });
      this.sent = true;
      setTimeout(() => {
        location.reload();
      }, 3000);
    },
  },
};
</script>
