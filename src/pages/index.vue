<template>
  <div class="md:max-w-3xl md:mx-auto bg-gray-400">
    <div class="bg-white">
      <nuxt-img
        class="md:hidden"
        src="/img/top.webp"
        alt="Top"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      />
      <nuxt-img class="hidden md:block" src="/img/pctop.jpg" alt="Top" />
      <div style="padding: 8px">
        <div class="" style="margin: 8px">
          <div class="">
            <div class="flex flex-row items-center">
              <nuxt-img src="/img/chon.jpg" alt="Top" class="h-8 w-48" />

              <div class="relative w-full border-none">
                <select
                  id="comboA"
                  v-model="goicuoc"
                  class="
                    text-white
                    bg-red-500
                    appearance-none
                    border border-gray-300
                    inline-block
                    py-2
                    pl-3
                    pr-8
                    rounded
                    leading-tight
                    minimal
                  "
                  @change="onChange($event)"
                >
                  <option value="CS21G">CS21G &nbsp;</option>
                  <option value="CS21G3">CS21G3 &nbsp;</option>
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
          <table>
            <tr>
              <td style="font-weight: bold; text-align: center; width: 32px">
                STT
              </td>
              <td style="font-weight: bold; text-align: center">SIM SỐ</td>

              <td style="font-weight: bold; text-align: center">GIÁ BÁN</td>
              <td style="font-weight: bold; text-align: center">ĐẶT MUA</td>
            </tr>

            <tr v-for="(row, indx) in items" :key="indx" :index="indx">
              <td style="padding-left: 8px; width: 16px">{{ indx + 1 }}</td>
              <td style="text-align: center" class="font-bold">
                {{ row.thuebao }}
              </td>

              <td style="text-align: center">
                <span
                  v-if="row.goicuoc == 'CS21G'"
                  style="text-align: center"
                  class="line-through"
                >
                  109.000đ
                </span>
                <span v-else style="text-align: center" class="line-through">
                  227.000đ
                </span>
                <span class="text-red-500 font-bold"> {{ row.gia }}</span>
              </td>
              <td style="text-align: center">
                <div v-if="row.trangthai">Đã bán</div>
                <button
                  v-else
                  class="datngay my-1 p-1 bg-blue-600 text-white rounded-sm"
                  @click="
                    $router.push({
                      name: 'book',
                      params: { item: row }
                    })
                  "
                >
                  Mua ngay
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
        src="/img/middle.jpg"
        alt="Top"
        style="width: 100%; height: 100%"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      />
      <div class="flex flex-row">
        <a href="sms:999?&amp;body=BK1 CS21G" class="dangkycs21g w-full">
          <nuxt-img
            src="/img/21g.jpg"
            alt="Top"
            style="width: 100%; height: auto"
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          />
        </a>
        <a href="sms:999?&amp;body=BK1 CS21G3" class="dangkycs21g3 w-full">
          <nuxt-img
            src="/img/21g3.jpg"
            alt="Top"
            style="width: 100%; height: auto"
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          />
        </a>
      </div>

      <nuxt-img
        src="/img/bottom.jpg"
        alt="Top"
        style="width: 100%; height: auto"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      />
      <a href="https://zalo.me/4045465745174208191" title="zalo">
        <nuxt-img
          src="/img/zalo.png"
          alt="Top"
          style="
            width: 90px;
            height: 100px;
            position: fixed;
            bottom: 0px;
            right: 0px;
          "
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      loaded: false,
      goicuoc: "CS21G",
      items: [],
      sim: []
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
img {
  width: 100%;
  height: 432px;
}
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
