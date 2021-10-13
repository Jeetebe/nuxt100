<template>
  <div>
    <nuxt-img
      src="/img/top.webp"
      alt="Top"
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
    />
    <div style="padding: 8px">
      <div class="" style="margin: 8px">
        <div class="">
          <div class="">
            <label class="w-full block text-gray-800">Chọn gói cước</label>
            <div class="relative w-full border-none">
              <select
                id="comboA"
                v-model="goicuoc"
                class="
                appearance-none
                border border-gray-300
                inline-block
                py-2
                pl-3
                pr-8
                rounded
                leading-tight
                w-full
                bg-white
              "
                @change="onChange($event)"
              >
                <option value="cs21g">
                  CS21G
                </option>
                <option value="cs21g3">CS21G3</option>
              </select>
              <div
                class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
              "
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <!-- <b-table :items="items" responsive="sm" class="shadow table text-nowrap">
      </b-table> -->
        <table>
          <tr>
            <td style="font-weight: bold; text-align: center; width:32px">#</td>
            <td style="font-weight: bold; text-align: center">SIM SỐ</td>
            <td style="font-weight: bold; text-align: center">GIÁ</td>
            <td style="font-weight: bold; text-align: center"></td>
          </tr>

          <tr v-for="(row, indx) in items" :key="indx" :index="indx">
            <td style="padding-left: 8px; width:16px">{{ indx }}</td>
            <td>{{ row.thuebao }}</td>
            <td style="text-align: center">{{ row.gia }}</td>
            <td style="text-align: right">
              <button
                @click="
                  $router.push({
                    name: 'book',
                    params: { item: row }
                  })
                "
              >
                Đặt ngay
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- <div v-for="(item, indx) in items" :key="indx" :index="indx" class="flex">
        <span>{{ item.name }}</span>
      </div> -->
    </div>

    <nuxt-img
      src="/img/bottom.webp"
      alt="Top"
      style="width: 100%; height: auto; margin-top:16px"
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
    />
    <a href="https://zalo.me/4045465745174208191" title="zalo">
      <nuxt-img
        src="/img/zalo.png"
        alt="Top"
        style="width: 90px; height: 100px;  position: fixed; bottom:0px; right: 0px"
      />
    </a>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      loaded: false,
      goicuoc: "cs21g",
      items: [
        {
          id: 0,
          name: "test0",
          price: "$0"
        },
        {
          id: 1,
          name: "test1",
          price: "$1"
        },
        {
          id: 2,
          name: "test2",
          price: "$2"
        },
        {
          id: 3,
          name: "test3",
          price: "$3"
        }
      ]
    }
  },

  async mounted() {
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

    const url = this.$axios.defaults.baseURL + "cs21g?h=1"

    console.log(url)
    this.items = await fetch(url).then((res) => res.json())
  },
  methods: {
    async onChange(val) {
      console.log(this.goicuoc)
      const url = "https://apptotapi2.tk:4099/" + this.goicuoc + "?h=1"
      this.items = await fetch(url).then((res) => res.json())
    }
  }
}
</script>

<style lang="scss">
// td {
//   border: 1px solid #ccc;
// }
img {
  width: 100%;
  height: 432px;
}
table {
  table-layout: fixed;
  width: 100%;
  margin-top: 16px;
}
table td {
  width: 100%;
}
button {
  background: #0b62ab;
  border: none;
  color: white;
  padding: 8px;
}
</style>
