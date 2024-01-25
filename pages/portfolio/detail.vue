
<script lang="ts" setup>
import { Portfolio, PortfolioList } from "~~/misc/types"
import defaultUserImage from "@/assets/images/default-user.png"
import errorImage from "@/assets/images/error.png"

definePageMeta({ middleware: ["auth"] });
const { getPortfolioByID } = usePortfolio();
const { getPortfolioListBy } = usePortfolioList();
const { public: publicCtx } = useRuntimeConfig()


const portfolio_lists = ref<PortfolioList[]>([])
const portfolio = ref<Portfolio>({
  portfolio_id: '',
  portfolio_name: '',
  portfolio_detail: '',
});


onMounted(async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const query: { [key: number | string]: string } = {};

    for (const [key, value] of params) {
      query[key] = value;
    }

    portfolio.value = await getPortfolioByID({ portfolio_id: query.id })
    portfolio_lists.value = await getPortfolioListBy({ portfolio_id: query.id }).then(res => res.docs)
  } catch (e) {
    console.log(e)
  }
})
</script>
<template>
  <v-breadcrumbs :items="[
    { title: 'พอตฟอริโอ้', to: '/portfolio', },
    { title: 'รายละเอียด', disabled: true, }
  ]">
    <template v-slot:title="{ item }">{{ item.title.toUpperCase() }}</template>
  </v-breadcrumbs>
  <v-card elevation="10" class="withbg">
    <v-card-text>
      <div class="d-sm-flex align-center  pt-sm-2">
        <v-card-title>รายละเอียด</v-card-title>
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="12" sm="6" lg="2">
                <v-label>รหัสพอตฟอริโอ้</v-label>
              </v-col>
              <v-col cols="12" sm="6" lg="2">
                <v-label>{{ portfolio.portfolio_id }}</v-label>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" lg="2">
                <v-label>ชื่อพอตฟอริโอ้</v-label>
              </v-col>
              <v-col cols="12" sm="6" lg="2">
                <v-label>{{ portfolio.portfolio_name }}</v-label>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" lg="2">
                <v-label>รายละเอียด</v-label>
              </v-col>
              <v-col cols="12" sm="6" lg="2">
                <v-label>{{ portfolio.portfolio_detail }}</v-label>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div>
          <table class="table table-bordered mt-10" style="min-width: 800px" aria-describedby="title">
            <thead class="thead-dark">
              <tr>
                <th scope="idx+1">ID</th>
                <th scope="Title">รายละเอียด</th>
                <th scope="Title">รูปภาพ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(list, idx) in portfolio_lists " :key="idx">
                <td class="align-middle text-center" align-self="center">{{ idx + 1 }}</td>
                <td class="align-middle text-center" align-self="center">
                  <label>{{ list.portfolio_list_detail }}</label>
                </td>
                <td>
                  <v-img
                    :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultUserImage}`"
                    cover alt="portfolio-list">
                    <template v-slot:error>
                      <v-img :src="errorImage" cover alt="error"></v-img>
                    </template>
                  </v-img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-container>
    </v-card-text>
    <v-card-text class="d-flex flex-wrap justify-center gap-2">
      <v-btn type="submit" color="muted" :to="'/portfolio'">กลับ</v-btn>
    </v-card-text>
  </v-card>
</template>