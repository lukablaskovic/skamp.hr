<template>
  <nav class="px-2 sm:px-4 py-2.5 bg-gray-50">
    <div
      class="container flex flex-wrap justify-evenly items-center mx-auto text-center"
    >
      <a href="/" class="flex">
        <img src="@/assets/logo.png" alt="" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white logo"
          >ŠKAMP d.o.o.</span
        >
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <div
          class="flex flex-col md:flex-row md:space-x-8 mt-0 md:text-sm md:font-medium items-center"
        >
          <div>
            <router-link
              to="/"
              class="md:p-4 navItem hover:text-yellow-500"
              :class="store.lang == 3 ? 'text-xl md:text-base	' : 'text-xl'"
            >
              <div class="text-center">{{ store.text[0] }}</div></router-link
            >
          </div>
          <div>
            <router-link
              to="/o-nama"
              class="md:p-4 navItem hover:text-yellow-500"
              :class="store.lang == 3 ? 'text-xl md:text-base	' : 'text-xl'"
              ><div class="text-center">{{ store.text[1] }}</div>
            </router-link>
          </div>
          <div>
            <router-link
              to="/limarija"
              class="md:p-4 navItem hover:text-yellow-500"
              :class="store.lang == 3 ? 'text-xl md:text-base	' : 'text-xl'"
              ><div class="text-center">{{ store.text[2] }}</div>
            </router-link>
          </div>
          <div>
            <router-link
              to="/strojna-obrada"
              class="md:p-4 navItem hover:text-yellow-500"
              :class="store.lang == 3 ? 'text-xl md:text-base	' : 'text-xl'"
              ><div class="text-center">{{ store.text[3] }}</div>
            </router-link>
          </div>
          <div>
            <router-link
              to="/bravarija"
              class="md:p-4 navItem hover:text-yellow-500"
              :class="store.lang == 3 ? 'text-xl md:text-base	' : 'text-xl'"
              ><div class="text-center">{{ store.text[4] }}</div>
            </router-link>
          </div>
          <div>
            <router-link
              to="/galerija"
              class="md:p-4 navItem hover:text-yellow-500"
              :class="store.lang == 3 ? 'text-xl md:text-base	' : 'text-xl'"
              ><div class="text-center">{{ store.text[5] }}</div>
            </router-link>
          </div>
          <div>
            <router-link
              to="/kontakt"
              class="md:p-4 navItem hover:text-yellow-500"
              :class="store.lang == 3 ? 'text-xl md:text-base	' : 'text-xl'"
              ><div class="text-center">{{ store.text[6] }}</div>
            </router-link>
          </div>
          <!--LANGUAGE CHANGE-->
          <div class="mt-2 md:mt-0">
            <div>
              <div class="dropdown inline-block relative">
                <button
                  style="width: 130px"
                  class="blackBackground text-white font-semibold py-2 px-4 rounded inline-flex items-center place-content-center"
                >
                  <img
                    v-if="crntLang == 0"
                    src="@/assets/flags/hr.svg"
                    class="w-6"
                  />
                  <img
                    v-if="crntLang == 1"
                    src="@/assets/flags/gb.svg"
                    class="w-6"
                  />
                  <img
                    v-if="crntLang == 2"
                    src="@/assets/flags/de.svg"
                    class="w-6"
                  />
                  <img
                    v-if="crntLang == 3"
                    src="@/assets/flags/it.svg"
                    class="w-6"
                  />
                  &nbsp;{{ store.langs[crntLang] }}
                </button>
                <div class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <div class="">
                    <a
                      class="rounded-t text-white bg-gray-700 hover:bg-gray-800 py-2 px-3 block whitespace-no-wrap"
                      href="#"
                      @click="changeLanguage(0)"
                      ><img
                        src="@/assets/flags/hr.svg"
                        class="w-6 float-left"
                      />&nbsp;{{ store.langs[0] }}</a
                    >
                  </div>
                  <div>
                    <a
                      class="text-white bg-gray-700 hover:bg-gray-800 py-2 px-3 block whitespace-no-wrap"
                      href="#"
                      @click="changeLanguage(1)"
                      ><img
                        src="@/assets/flags/gb.svg"
                        class="w-6 float-left"
                      />&nbsp;{{ store.langs[1] }}</a
                    >
                  </div>
                  <div class="">
                    <a
                      class="text-white bg-gray-700 hover:bg-gray-800 py-2 px-3 block whitespace-no-wrap"
                      href="#"
                      @click="changeLanguage(2)"
                      ><img
                        src="@/assets/flags/de.svg"
                        class="w-6 float-left"
                      />&nbsp;{{ store.langs[2] }}</a
                    >
                  </div>
                  <div class="">
                    <a
                      class="rounded-b text-white bg-gray-700 hover:bg-gray-800 py-2 px-3 block whitespace-no-wrap"
                      href="#"
                      @click="changeLanguage(3)"
                      ><img
                        src="@/assets/flags/it.svg"
                        class="w-6 float-left"
                      />&nbsp;{{ store.langs[3] }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/LANGUAGE CHANGE-->
        </div>
      </div>
    </div>
  </nav>

  <router-view />
  <!--/FOOTER-->
  <div
    class="flex mt-12 p-8 blackBackground text-gray-200 mx-auto place-content-center"
  >
    <div class="w-full overflow-hidden md:w-1/3 text-center">
      <h3>
        <b>{{ currentYear }} © Škamp d.o.o. {{ store.text[24] }}.</b>
      </h3>
      <h2>Rudarska ulica 34, Vodnjan</h2>
      <h2>skamp.pu@gmail.com</h2>
    </div>
  </div>
  <!--/FOOTER-->
</template>
<script>
import store from "@/store.js";
export default {
  data() {
    return {
      crntLang: 0,
      currentYear: new Date().getFullYear(),
      store,
    };
  },
  methods: {
    changeLanguage(crntLang) {
      store.lang = crntLang;
      this.crntLang = store.lang;
      if (crntLang == 0) location.reload();
      else if (crntLang == 1) {
        store.text = store.textEN;
        store.langs = store.langsEN;
      } else if (crntLang == 3) {
        store.text = store.textIT;
        store.langs = store.langsIT;
      } else {
        store.text = store.textEN;
        store.langs = store.langsEN;
      }
    },
  },
};
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}
#app {
  font-family: "Poppins", sans-serif;
  background-color: #f9fbfa;
  color: #252525;
}
.textWhite {
  color: #f9fbfa;
}
.backgroundMetal {
  background-image: url("@/assets/background1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.blackText {
  color: #252525;
}
.blackBackground {
  background-color: #252525;
}
.b2 {
  background-color: #3b3b3b;
}
.b3 {
  background-color: #515151;
}
.logo {
  color: #252525;
}

.navItem {
  color: #252525;
}

nav a.router-link-exact-active {
  color: #d7751e;
}
</style>
