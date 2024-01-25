
<script lang="ts" setup>
import Swal from "sweetalert2"
import { Skill, SkillList } from "~~/misc/types"
import defaultUserImage from "@/assets/images/default-user.png"
import errorImage from "@/assets/images/error.png"

definePageMeta({ middleware: ["auth"] });
const { getSkillByID, updateSkillBy } = useSkill();
const { getSkillListBy,} = useSkillList();
const { public: publicCtx } = useRuntimeConfig()
const router = useRouter();
const submitting = ref(false)
const skill = ref<Skill>({
  skill_id: '',
  skill_name: '',
  skill_detail: '',
});

const skill_lists = ref<SkillList[]>([])
const skill_list_image = ref<{ files?: File[], src: string ,skill_list_id: string }[]>([])

onMounted(async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const query: { [key: number | string]: string } = {};

    for (const [key, value] of params) {
      query[key] = value;
    }
    skill.value = await getSkillByID({ skill_id: query.id })
    skill_lists.value = await getSkillListBy({ skill_id: query.id }).then(res => res.docs) 
    for(const list of skill_lists.value){
      console.log('LIST',list);
      skill_list_image.value.push({
        src: '' , skill_list_id:''
        
      })
    }
  
    console.log('SKILL IMG ', skill_list_image.value);
  } catch (e) {
    console.log(e)
  }
})

async function onSubmit() {
  if (submitting.value || !validateForm()) return
  
  try {
    submitting.value = true
    let skill_list_imgs: File[] = [];
    skill_list_image.value.forEach(val => {
      if (val.files) skill_list_imgs.push(val.files[0]);
      
    });

    await updateSkillBy({
      skill: skill.value,
      skill_lists: skill_lists.value,
      skill_list_img: skill_lists.value.map((item, idx) => skill_list_imgs[idx])
      
    });
    void Swal.fire({ title: 'สำเร็จ', text: 'บันทึกข้อมูลแล้ว', icon: "success" })
    await router.push({ path: '/skill' });
    console.log('your image is : ', skill_list_imgs);
    
  } catch (e) {
    console.log(e)
    submitting.value = false
  }
}

function clearImage(idx: number) {
  skill_list_image.value[idx] = { src: '' , skill_list_id:''  }
}

function deleteRow(idx: number) {
  skill_lists.value.splice(idx, 1)
}

function addRow() {
  skill_lists.value.push({
    skill_list_id: '',
    skill_id: skill.value.skill_id,
    skill_list_name: ''
  })
  skill_list_image.value.push({ src: '', skill_list_id:''})
}

function changeImage(e: Event, idx: number) {
  const reader = new FileReader();
  const target = e.target as HTMLInputElement;

  if (!skill_list_image.value[idx] ) {
    skill_list_image.value[idx] = { files: [], src: '' , skill_list_id: ''};

  }
  
  if (target.files?.length) {
    const file = target.files[0];

    reader.onloadend = () => {
      skill_list_image.value[idx].src = reader.result as string
    };

    reader.readAsDataURL(file);
  }
}

function validateForm(): boolean {
  if (!(skill.value.skill_id && skill.value.skill_name)) {
    void Swal.fire({ text: 'กรุณากรอกข้อมูลให้ครบถ้วน', icon: "warning" })
    return false
  }
  return true
}
</script>

<template>
  <v-breadcrumbs :items="[
    { title: 'ทักษะ', to: '/skill', },
    { title: 'แก้ไขรายการ', disabled: true, }
  ]">
    <template v-slot:title="{ item }">{{ item.title.toUpperCase() }}</template>
  </v-breadcrumbs>
  <v-card elevation="10" class="withbg">
    <v-card-title>แก้ไขรายการ</v-card-title>
    <v-card-text class="py-4">
      <v-row>
        <v-col cols="12" sm="6" lg="4">
          <v-label class="mb-2">ชื่อทักษะ<span class="text-error ml-1">*</span></v-label>
          <v-text-field v-model="skill.skill_name" :rules="[rules.required]" density="compact" variant="outlined"
            class="btn-small"></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
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
          <tr v-for="(list, idx) in skill_lists" :key="idx">
            <td class="text-center">{{ idx + 1 }}</td>
            <td class="align-middle text-center" align-self="center">
              <v-text-field v-model="list.skill_list_name" label="ภาษาที่ใช้" density="compact" variant="outlined"
                hide-details style="min-width: 350px;"></v-text-field>
            </td>
            <td>
              <div class="text-center" style="max-width: 400px;">
                <v-avatar size="200px">
                  <template v-if="skill_list_image[idx].src">
                    <v-img :src="skill_list_image[idx].src" aspect-ratio="1" cover max-height="200px"></v-img>
                  </template>
                  <template v-else-if="list.skill_list_img">
                    <v-img :src="`${publicCtx.apiBaseUrl}${list.skill_list_img}`" aspect-ratio="1" max-height="200px" cover>
                      <template v-slot:error>
                        <v-img :src="errorImage" alt="error"></v-img>
                      </template>
                    </v-img>
                  </template>
                  <template v-else>
                    <v-img :src="defaultUserImage" aspect-ratio="1" max-height="200px"></v-img>
                  </template>
                </v-avatar>
                <v-file-input v-model ="skill_list_image[idx].files " class="mt-4" accept="image/png, image/jpeg"
                  label="รูป" density="compact" @change="changeImage($event, idx)"
                  @click:clear="clearImage(idx)"></v-file-input>
              </div>
            </td>
            <td class="align-middle text-center">
              <v-icon clickable @click="deleteRow(idx)" color="error">mdi mdi-close-thick</v-icon>
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
    <v-card-text class="d-flex flex-wrap justify-center gap-2">
      <v-btn color="save" @click="onSubmit">
        <template v-if="submitting">
          <v-progress-circular class="mr-2" indeterminate color="success" :size="16"></v-progress-circular>
        </template> บันทึก
      </v-btn>
      <v-btn color="muted" :to="'/skill'">ยกเลิก</v-btn>
    </v-card-text>
  </v-card>
</template>