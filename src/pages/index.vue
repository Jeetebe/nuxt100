<template>
  <div class="bg-white">
    Version 20.10
    <nuxt-img
      src="/img/top.jpg"
      alt="Top"
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
    />
    <div style="padding: 8px">
      <div class="" style="margin: 8px">
        <div class="">
          <div class="flex flex-row">
            <!-- <label class="inline-block">Chọn gói cước</label> -->
            <nuxt-img
              src="/img/chon.jpg"
              alt="Top"
              class="h-8"
              sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            />
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
                <option value="cs21g">CS21G &nbsp;</option>
                <option value="cs21g3">CS21G3 &nbsp;</option>
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
            <td style="font-weight: bold; text-align: center; width: 32px">
              STT
            </td>
            <td style="font-weight: bold; text-align: center">SIM SỐ</td>

            <td style="font-weight: bold; text-align: center" colspan="2">
              GIÁ BÁN
            </td>
            <td style="font-weight: bold; text-align: center">ĐẶT MUA</td>
          </tr>

          <tr v-for="(row, indx) in items" :key="indx" :index="indx">
            <td style="padding-left: 8px; width: 16px">{{ indx + 1 }}</td>
            <td style="text-align: center">{{ row.thuebao }}</td>
            <td
              v-if="row.goicuoc == 'CS21G'"
              style="text-align: center"
              class="line-through"
            >
              109.000đ
            </td>
            <td v-else style="text-align: center" class="line-through">
              227.000đ
            </td>
            <td style="text-align: center" class="text-red-500 font-bold">
              {{ row.gia }}
            </td>
            <td style="text-align: center">
              <button
                class="datngay my-1 p-1 bg-blue-600 text-white rounded-sm"
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
      src="/img/middle.jpg"
      alt="Top"
      style="width: 100%; height: 100%"
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
    />
    <div class="flex flex-row">
      <a href="sms:9084?&amp;body=BK1 CS21G" class="dangky w-full">
        <nuxt-img
          src="/img/21g.jpg"
          alt="Top"
          style="width: 100%; height: auto"
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        />
      </a>
      <a href="sms:9084?&amp;body=BK1 CS21G3" class="dangky w-full">
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
