<template>
  <div class="mt-6">
    <div class="p-3 rounded-md border-gray-300 border mx-3">
      <div class="grid grid-cols-2 gap-x-4">
        <div class="text-right w-full">Số thuê bao</div>
        <div class="text-red-600 font-semibold">
          {{ item.thuebao }}
        </div>

        <div class="text-right w-full">Giá bán</div>
        <div class="text-blue-600 font-semibold">
          {{ item.gia }}
        </div>

        <div class="text-right w-full">Gói cước</div>
        <div class="font-semibold">{{ item.goicuoc }}</div>
      </div>
    </div>
    <div class="p-3">
      <p class="uppercase text-black font-semibold">thông tin giao hàng</p>
      <form autocomplete="off" @submit.stop.prevent="submitClick">
        <div class="relative mb-2">
          <label
            for="email"
            class="leading-7 text-sm text-greenfresh font-semibold"
            >Họ tên</label
          >
          <input
            v-model="form.hoten"
            required
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="relative mb-2">
          <label
            for="email"
            class="leading-7 text-sm text-greenfresh font-semibold"
            >Số điện thoại</label
          >
          <input
            v-model="form.kh"
            required
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="relative mb-2">
          <label
            for="email"
            class="leading-7 text-sm text-greenfresh font-semibold"
            >Địa chỉ</label
          >
          <input
            v-model="form.diachi"
            required
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <button
            class="
              bg-gray-400
              text-white
              active:bg-gray-700
              text-sm
              font-bold
              uppercase
              px-6
              py-3
              rounded
              hover:shadow-lg
              outline-none
              focus:outline-none
              mr-1
              mb-1
              w-full
              mt-4
            "
            @click="gohome"
          >
            TRỞ VỀ
          </button>
          <button
            class="
              bg-xanhduong
              text-white
              active:bg-gray-700
              text-sm
              font-bold
              uppercase
              px-6
              py-3
              rounded
              hover:shadow-lg
              outline-none
              focus:outline-none
              mr-1
              mb-1
              w-full
              mt-4
            "
            type="submit"
          >
            ĐẶT MUA
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dbl",
  data: () => {
    return {
      loaded: false,
      item: {
        thuebao: null,
        gia: null,
        goicuoc: null
      },
      form: {
        hoten: null,
        diachi: null,
        loai: "SIM",
        phone: "cskh"
      }
    }
  },
  async mounted() {
    this.item = this.$route.params.item
    this.$axios
      .post(this.$axios.defaults.baseURL + "api/utm/addclick", this.item)
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    gohome() {
      window.location.href = "/"
    },
    submitClick() {
      this.form.caigi = this.item.thuebao
      this.form.gia = this.item.gia
      this.form.info = this.item.goicuoc
      this.$axios
        .post(this.$axios.defaults.baseURL + "addlog", this.form)
        .then(function(response) {
          console.log(response)
          window.location.href = "/success"
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>
/*! CSS Used from: Embedded */
button,
input {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button {
  text-transform: none;
}
[type="submit"],
button {
  -webkit-appearance: button;
}
p {
  margin: 0;
}
button {
  background-color: transparent;
  background-image: none;
}
*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid;
}
input::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button {
  cursor: pointer;
}
button,
input {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
*,
:after,
:before {
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}
.relative {
  position: relative;
}
.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-12 {
  margin-top: 3rem;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.grid {
  display: grid;
}
.min-h-screen {
  min-height: 100vh;
}
.w-full {
  width: 100%;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.gap-3 {
  grid-gap: 0.75rem;
  gap: 0.75rem;
}
.gap-x-4 {
  grid-column-gap: 1rem;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.border {
  border-width: 1px;
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
}
.focus\:border-indigo-500:focus {
  --tw-border-opacity: 1;
  border-color: rgba(99, 102, 241, var(--tw-border-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
}
.bg-xanhduong {
  --tw-bg-opacity: 1;
  background-color: rgba(66, 133, 244, var(--tw-bg-opacity));
}
.p-3 {
  padding: 0.75rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.text-right {
  text-align: right;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.font-semibold {
  font-weight: 600;
}
.font-bold {
  font-weight: 700;
}
.uppercase {
  text-transform: uppercase;
}
.leading-7 {
  line-height: 1.75rem;
}
.leading-8 {
  line-height: 2rem;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgba(220, 38, 38, var(--tw-text-opacity));
}
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgba(37, 99, 235, var(--tw-text-opacity));
}
*,
:after,
:before {
  --tw-shadow: 0 0 transparent;
}
.hover\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
}
.focus\:outline-none:focus,
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
*,
:after,
:before {
  --tw-ring-inset: var(--tw-empty);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
}
.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 transparent);
}
.focus\:ring-indigo-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(199, 210, 254, var(--tw-ring-opacity));
}
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.transition-colors {
  transition-duration: 0.15s;
}
.duration-200 {
  transition-duration: 0.2s;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
*,
:after,
:before {
  box-sizing: border-box;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
button {
  border-radius: 0;
}
button:focus:not(.focus-visible),
button:focus:not(:focus-visible) {
  outline: 0;
}
button,
input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input {
  overflow: visible;
}
button {
  text-transform: none;
}
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
</style>
