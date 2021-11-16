<template>
  <div class="md:max-w-3xl md:mx-auto bg-white">
    <div
      class="flex flex-row justify-center justify-items-center bg-gray-200 p-3"
    >
      <nuxt-img class="h-8 w-40" src="/img/mobi.png" alt="Top" />
    </div>
    <div>
      <nuxt-img class="object-contain" src="/img/topcs21g3.jpg" alt="Top" />
    </div>
    <div>
      <nuxt-img class="object-contain" src="/img/step.jpg" alt="Top" />
    </div>

    <div class="flex flex-col items-center p-6 bg-gray-200 md:mx-12 mx-4">
      <p class="p-2 font-bold">THÔNG TIN ĐẶT HÀNG</p>
      <input
        v-model="form.hoten"
        required
        class="
          w-full
          bg-white
          rounded
          border border-gray-300
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
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
        placeholder="Họ và tên"
      />
      <input
        v-model="form.diachi"
        required
        class="
          my-2
          w-full
          bg-white
          rounded
          border border-gray-300
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
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
        placeholder="Số điện thoại"
      />
      <input
        v-model="form.hoten"
        required
        class="
          w-full
          bg-white
          rounded
          border border-gray-300
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
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
        placeholder="Địa chỉ"
      />
      <div class="flex flex-row w-full mt-4">
        <span>Nhà mạng </span>
        <nuxt-img class="h-4 w-20 ml-6" src="/img/mobi.png" alt="Top" />
      </div>
      <div>
        <nuxt-img class="object-contain h-20" src="/img/button.jpg" alt="Top" />
      </div>
    </div>
    <nuxt-img
      src="/img/bottom2.jpg"
      alt="Top"
      style="width: 100%; height: auto"
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      loaded: false,
      goicuoc: "CS21G",
      items: [],
      sim: [],
      form: {
        hoten: null,
        diachi: null,
        loai: "SIM",
        phone: null,
        kh: null
      }
    }
  },

  async mounted() {
    const me = this
    // tracking utm
    var query = this.$route.query
    if (query.utm_source) {
      const utm = {
        utm_source: query.utm_source,
        utm_medium: query.utm_medium,
        utm_content: query.utm_content,
        utm_campaign: query.utm_campaign
      }
      this.$axios
        .post(this.$axios.defaults.baseURL + "api/utm/add", utm)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }

    const url = this.$axios.defaults.baseURL + "sim4g?h=1"

    console.log(url)
    this.sim = await fetch(url).then((res) => res.json())
    this.sim.forEach(function(item, index) {
      if (item.goicuoc === "CS21G") {
        me.items.push(item)
      }
    })
  },
  methods: {
    async onChange(val) {
      const me = this
      this.items = []
      console.log(this.goicuoc)
      // const url = "https://apptotapi2.tk:4099/" + this.goicuoc + "?h=1"
      // this.items = await fetch(url).then((res) => res.json())
      this.sim.forEach(function(item, index) {
        if (item.goicuoc === me.goicuoc) {
          me.items.push(item)
        }
      })
    }
  }
}
</script>

<style lang="scss">
// td {
//   border: 1px solid #ccc;
// }
// img {
//   width: 100%;
// }
table {
  table-layout: fixed;
  width: 100%;
  margin-top: 16px;
  font-size: 12px;
}
table td {
  width: 100%;
  border-bottom: 1px solid gray;
}
select.minimal {
  background-image: linear-gradient(45deg, transparent 50%, white 50%),
    linear-gradient(135deg, white 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}

select.minimal:focus {
  background-image: linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  border-color: green;
  outline: 0;
}
</style>
