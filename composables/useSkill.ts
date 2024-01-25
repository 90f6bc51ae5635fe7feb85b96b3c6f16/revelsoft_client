import { log } from "console"
import { Skill, SkillList } from "~~/misc/types"
const prefix = 'skill'

const generateSkillID = (): Promise<string> => secureFetch(`${useRuntimeConfig().public.apiBaseUrl}/${prefix}/generateSkillID`, { method: "POST", })

const getSkillBy = (data?: any): Promise<{ docs: Skill[], totalDocs: number, }> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getSkillBy`, {
  method: "POST",
  body: JSON.stringify(data),
})

const getSkillByID = (data: { skill_id: string }): Promise<Skill> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getSkillByID`, {
  method: "POST",
  body: JSON.stringify(data),
})

const insertSkill = async (data: { skill: Skill, skill_lists: SkillList[], skill_list_img?: File[] }): Promise<Skill> => {
  const formData = new FormData();
  formData.append("skill", JSON.stringify(data.skill));
  formData.append("skill_lists", JSON.stringify(data.skill_lists));

  if (data.skill_list_img?.length) {
    data.skill_list_img.forEach((img) => {
      formData.append("skill_list_img", img);
    });
  }console.log('DATRA',formData)

  return await secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/insertSkill`, {
    method: "POST",
    body: formData,
  })
}


const updateSkillBy = async (data: { skill: Skill, skill_lists: SkillList[], skill_list_img?: File[] }): Promise<Skill> => {
  const formData = new FormData();
  formData.append("skill", JSON.stringify(data.skill));
  formData.append("skill_lists", JSON.stringify(data.skill_lists));

  if (data.skill_list_img?.length) {
    
    data.skill_list_img.forEach((img) => {
      console.log('loggg',img)
      formData.append("skill_list_img", img);
      console.log('lo12',formData)
    });
    // console.log('data1',data.skill_list_img)
    // console.log('data2',formData)
  }

  return await secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/updateSkillBy`, {
    method: "POST",
    body: formData,
  })
}

const deleteSkill = (data: any): Promise<Skill> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/deleteSkill`, {
  method: "POST",
  body: JSON.stringify(data),
})

export default function useSkill() {
  return {
    generateSkillID,
    getSkillBy,
    getSkillByID,
    insertSkill,
    updateSkillBy,
    deleteSkill
  };
}