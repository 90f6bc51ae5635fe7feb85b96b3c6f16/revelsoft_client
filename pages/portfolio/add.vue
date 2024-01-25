
<script lang="ts" setup>
import Swal from "sweetalert2"
import { Portfolio, PortfolioList } from "~/misc/user";
import errorImage from "@/assets/images/error.png"
definePageMeta({ middleware: ["auth"] });
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"


const { generatePortfolioID, insertPortfolio, } = usePortfolio();
const { public: publicCtx } = useRuntimeConfig()
const router = useRouter();
const submitting = ref(false)

const portfolio_lists = ref<PortfolioList[]>([])
const portfolio_list_image = ref<{ files?: File[], src: string }[]>([])
const portfolio = ref<Portfolio>({
  portfolio_id: '',
  portfolio_name: '',
  portfolio_detail: '',
});


onMounted(async () => {
  try {
    const id = await generatePortfolioID()
    portfolio.value.portfolio_id = id
  } catch (e) {
    console.log(e)
  }
})

async function onSubmit() {
  if (submitting.value || !validateForm()) return

  try {
    submitting.value = true

    let portfolio_list_imgs: File[] = [];
    portfolio_list_image.value.forEach(val => {
      if (val.files) {
        portfolio_list_imgs.push(val.files[0]);
      }
    });

    await insertPortfolio({
      portfolio: portfolio.value,
      portfolio_lists: portfolio_lists.value,
      portfolio_list_img: portfolio_list_imgs,
    });
    void Swal.fire({ title: 'สำเร็จ', text: 'บันทึกข้อมูลแล้ว', icon: "success" })
    await router.push({ path: '/portfolio' });
  } catch (e) {
    console.log(e)
    submitting.value = false
  }
}

function validateForm(): boolean {
  const {
    portfolio_id,
    portfolio_name,
  } = portfolio.value

  if (!(portfolio_id && portfolio_name)) {
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
  portfolio_list_image.value[idx] = { src: '' }
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
  portfolio_list_image.value.push({ src: '' })
}


</script>

<template>
  <v-breadcrumbs :items="[
    { title: 'พอตฟอริโอ้', to: '/portfolio', },
    { title: 'เพิ่มรายการใหม่', disabled: true, }
  ]">
    <template v-slot:title="{ item }">{{ item.title.toUpperCase() }}</template>
  </v-breadcrumbs>
  <v-card elevation="10" class="withbg">
    <v-card-title>เพิ่มรายการใหม่</v-card-title>
    <v-card-text class="py-4">
      <v-row>
        <v-col cols="12" md="12">
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
            <v-col cols="12" sm="6" lg="4">
              <v-label class="mb-2">ชื่อพอตฟอริโอ้<span class="text-error ml-1">*</span></v-label>
              <v-text-field v-model="portfolio.portfolio_name" :rules="[rules.required]" density="compact"
                variant="outlined" class="btn-small"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="mt-4 mb-4" style="overflow-x: auto;">
        <table class="table table-bordered" style="min-width: 800px" aria-describedby="title">
          <thead>
            <tr>
              <th scope="index">ID</th>
              <th scope="Title">ภาษาที่ใช้</th>
              <th scope="Title">รูปภาพ</th>
              <th scope="#" style="width: 100px;">ลบ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, index) in portfolio_lists" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td class="align-middle text-center" align-self="center">
                <v-text-field v-model="list.portfolio_list_detail" label="ภาษาที่ใช้" density="compact" variant="outlined"
                  hide-details style="min-width: 350px;"></v-text-field>
              </td>
              <td>
                <div class="text-center" style="max-width: 400px;">
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
                </div>
              </td>
              <td class="align-middle text-center">
                <v-icon clickable @click="deleteRow(index)" color="error">mdi mdi-close-thick</v-icon>
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

<style></style>