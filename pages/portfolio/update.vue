
<script lang="ts" setup>
import Swal from "sweetalert2"
import { Portfolio, PortfolioList } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"


definePageMeta({ middleware: ["auth"] });
const { getPortfolioByID, updatePortfolioBy, generatePortfolioID } = usePortfolio();
const { getPortfolioListBy, updatePortfolioListBy } = usePortfolioList();

const router = useRouter();

const { public: publicCtx } = useRuntimeConfig()
const submitting = ref(false)
const portfolio = ref<Portfolio>({
  portfolio_id: '',
  portfolio_name: '',
  portfolio_detail: '',
});
const portfolio_lists = ref<PortfolioList[]>([])
const portfolio_list_image = ref<{ files?: File[], src: string, portfolio_list_id: string }[]>([])

onMounted(async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const query: { [key: number | string]: string } = {};

    for (const [key, value] of params) {
      query[key] = value;
    }

    portfolio.value = await getPortfolioByID({ portfolio_id: query.id })
    portfolio_lists.value = await getPortfolioListBy({ portfolio_id: query.id }).then(res => res.docs)
    for (const list of portfolio_lists.value) {
      console.log('LIST', list);
      portfolio_list_image.value.push({
        src: '', portfolio_list_id: ''

      })
    }
  } catch (e) {
    console.log(e)
  }
})

async function onSubmit() {
  if (submitting.value || !validateForm()) return

  try {
    submitting.value = true
    let portfolio_list_imgs: File[] = []
    // let portfolio_list_imgs: File[] = portfolio_lists.value;
    portfolio_list_image.value.forEach(val => {
      if (val.files) {
        portfolio_list_imgs.push(val.files[0]);
      }
    });

    await updatePortfolioBy({
      portfolio: portfolio.value,
      portfolio_lists: portfolio_lists.value,
      portfolio_list_img: portfolio_list_imgs,
    });
    void Swal.fire({ title: 'สำเร็จ', text: 'บันทึกข้อมูลแล้ว', icon: "success" })
    await router.push({ path: '/portfolio' });
    console.log('summit : ', portfolio_list_imgs);

  } catch (e) {
    console.log(e)
    submitting.value = false
  }
}

function validateForm(): boolean {
  if (!(portfolio.value.portfolio_id && portfolio.value.portfolio_name)) {
    void Swal.fire({ text: 'กรุณากรอกข้อมูลให้ครบถ้วน', icon: "warning" })
    return false
  }

  return true
}

function changeImage(e: Event, idx: number) {
  const reader = new FileReader();
  const target = e.target as HTMLInputElement;

  if (target.files?.length) {
    const file = target.files[0];

    reader.onloadend = () => {
      portfolio_list_image.value[idx].src = reader.result as string
    };

    reader.readAsDataURL(file);
  }
}

function clearImage(idx: number) {
  portfolio_list_image.value[idx] = { src: '', portfolio_list_id: '' }
}

function deleteRow(idx: number) {
  portfolio_lists.value.splice(idx, 1)
}

function addRow() {
  portfolio_lists.value.push({
    portfolio_list_id: '',
    portfolio_id: portfolio.value.portfolio_id,
    portfolio_list_detail: ''
  })
  portfolio_list_image.value.push({ src: '', portfolio_list_id: '' })
}

</script>

<template>
  <v-breadcrumbs :items="[
    { title: 'พอตฟอริโอ้', to: '/portfolio', },
    { title: 'แก้ไขรายการ', disabled: true, }
  ]">
    <template v-slot:title="{ item }">{{ item.title.toUpperCase() }}</template>
  </v-breadcrumbs>
  <v-card elevation="10" class="withbg">
    <v-card-title>แก้ไขรายการ</v-card-title>
    <v-card-text class="py-4">
      <v-col>
        <v-row>
          <v-col>
            <v-col cols="12" sm="6" lg="12">
              <v-label class="mb-2">รหัสพอตฟอริโอ้<span class="text-error ml-1">*</span></v-label>
              <v-text-field v-model="portfolio.portfolio_id" density="compact" :rules="[rules.required]"
                variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" lg="12">
              <v-label class="mb-2">รายละเอียด<span class="text-error ml-1"></span></v-label>
              <v-textarea v-model="portfolio.portfolio_detail" density="compact" variant="outlined"
                class="btn-small"></v-textarea>
            </v-col>
          </v-col>
          <v-col cols="12" sm="6" lg="6">
            <v-label class="mb-2">ชื่อพอตฟอริโอ้<span class="text-error ml-1">*</span></v-label>
            <v-text-field v-model="portfolio.portfolio_name" density="compact" :rules="[rules.required]"
              variant="outlined"></v-text-field>
          </v-col>
        </v-row>
        <div class="mt-4 mb-4" style="overflow-x: auto;">
          <table class="table table-bordered" style="min-width: 800px" aria-describedby="title">
            <thead>
              <tr>
                <th scope="index">ID</th>
                <th scope="Title">รายละเอียด</th>
                <th scope="Title">รูปภาพ</th>
                <th scope="#" style="width: 100px;">ลบ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(list, index) in portfolio_lists" :key="index">
                <!-- <td class="text-center">{{ index + 1 }}</td>
                <td class="align-middle text-center" align-self="center">
                  <v-text-field v-model="list.portfolio_list_detail" label="ภาษาที่ใช้" density="compact"
                    variant="outlined" hide-details style="min-width: 350px;"></v-text-field>
                </td>
                <td>
                  <containner size="200px">
                    <template v-if="portfolio_list_image[index].src">
                      <v-img :src="portfolio_list_image[index].src" aspect-ratio="1" cover max-height="200px"></v-img>
                    </template>
                    <template v-else-if="list.portfolio_list_img">
                      <v-img :src="`${publicCtx.apiBaseUrl}${list.portfolio_list_img}`" aspect-ratio="1" cover
                        max-height="200px">
                        <template v-slot:error>
                          <v-img :src="errorImage" alt="error"></v-img>
                        </template>
                      </v-img>
                    </template>
                    <template v-else>
                      <v-img :src="defaultImage" aspect-ratio="1" max-height="200px"></v-img>
                    </template>
                  </containner>
                  <v-file-input v-model="portfolio_list_image[index].files" class="mt-4" accept="image/png, image/jpeg"
                    label="รูป" density="compact" @change="changeImage($event, index)"
                    @click:clear="clearImage(index)"></v-file-input>
                </td> -->
                <!-- <td class="align-middle text-center">
                  <v-icon clickable @click="deleteRow(index)" color="error">mdi mdi-close-thick</v-icon>
                </td> -->
              </tr>
              <tr v-for="(list, idx) in portfolio_lists " :key="idx">
                <td class="text-center">{{ idx + 1 }}</td>
                <td class="align-middle text-center" align-self="center">
                  <v-text-field v-model="list.portfolio_list_detail" label="ภาษาที่ใช้" density="compact"
                    variant="outlined" hide-details style="min-width: 350px;"></v-text-field>
                </td>
                <td class="text-center" style="max-width: 200px;">
                  <v-img
                    :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                    cover alt="portfolio-list">
                  </v-img>
                  <v-file-input @change="changeImage($event, idx)" @click:clear="clearImage(idx)">
                  </v-file-input>
                  <!-- <v-file-input class="mt-4" accept="image/png, image/jpeg" label="รูป" density="compact"
                    @change="changeImage($event, idx)" @click:clear="clearImage(idx)"></v-file-input> -->
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="align-middle text-center" :colspan="4">
                  <v-btn color="success" @click="addRow">
                    <v-icon>mdi mdi-plus-thick</v-icon>เพิ่มคุณสมบัติ
                  </v-btn>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </v-col>
    </v-card-text>
    <v-card-text class="d-flex flex-wrap justify-center gap-2">
      <v-btn color="save" @click="onSubmit">
        <template v-if="submitting">
          <v-progress-circular class="mr-2" indeterminate color="success" :size="16"></v-progress-circular>
        </template> บันทึก
      </v-btn>
      <v-btn color="muted" :to="'/portfolio'">ยกเลิก</v-btn>
    </v-card-text>
  </v-card>
</template>