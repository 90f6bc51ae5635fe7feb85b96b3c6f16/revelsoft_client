
<script lang="ts" setup>
import { Skill, SkillList } from "~~/misc/types"
import defaultUserImage from "@/assets/images/default-user.png"
import errorImage from "@/assets/images/error.png"

definePageMeta({ middleware: ["auth"] });

const { getSkillByID } = useSkill();
const { getSkillListBy } = useSkillList();
const { public: publicCtx } = useRuntimeConfig();

const skill = ref<Skill>({
  skill_id: '',
  skill_name: '',
  skill_detail: '',
});

const skill_lists = ref<SkillList[]>([])

onMounted(async () => {
 
  
  try {
    const params = new URLSearchParams(window.location.search);
    const query: { [key: number | string]: string } = {};
    const reader = new FileReader();
    for (const [key, value] of params) {
      query[key] = value;
    }
    
   

    skill.value = await getSkillByID({ skill_id: query.id })
    skill_lists.value = await getSkillListBy({ skill_id: query.id }).then(res => res.docs)
    console.log('IMG', skill_lists)
  } catch (e) {
    console.log(e)
  }
})

</script>
<template>
  <v-breadcrumbs :items="[
    { title: 'ทักษะ', to: '/skill', },
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
                <v-label>รหัสทักษะ</v-label>
              </v-col>
              <v-col cols="12" sm="6" lg="2">
                <v-label>{{ skill.skill_id }}</v-label>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" lg="2">
                <v-label>ชื่อทักษะ</v-label>
              </v-col>
              <v-col cols="12" sm="6" lg="2">
                <v-label>{{ skill.skill_name }}</v-label>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-container>
      <div>
        <table class="table table-bordered" style="min-width: 800px" aria-describedby="title">
          <thead class="thead-dark">
            <tr>
              <th scope="idx+1">ID</th>
              <th scope="Title">ภาษาที่ใช้</th>
              <th scope="Title">รูปภาพ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, idx) in skill_lists " :key="idx">
              <td class="align-middle text-center" align-self="center">{{ idx + 1 }}</td>
              <td class="align-middle text-center" align-self="center">
                <label>{{ list.skill_list_name }}</label>
              </td>
              <td class="align-middle text-center">
                <v-avatar size="300">
                  <v-img
                    :src="`${list.skill_list_img ? `${publicCtx.apiBaseUrl}${list.skill_list_img}` : defaultUserImage}`"
                    cover alt="skill-list">
                    <template v-slot:error>
                      <v-img :src="errorImage" cover alt="error"></v-img>
                    </template>
                  </v-img>
                </v-avatar>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </v-container>
    <v-card-text class="d-flex flex-wrap justify-center gap-2">
      <v-btn type="submit" color="muted" :to="'/skill'">กลับ</v-btn>
    </v-card-text>
  </v-card>
</template>