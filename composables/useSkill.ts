import type { Skill } from "~~/misc/types"

const prefix = 'skill'

const generateSkillClientID = (): Promise<string> => secureFetch(`${useRuntimeConfig().public.apiBaseUrl}/${prefix}/generateSkillClientID`, { method: "POST", })

const getSkillClientBy = (data?: any): Promise<{ docs: Skill[], totalDocs: number, }> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getSkillClientBy`, {
  method: "POST",
  body: JSON.stringify(data),
})

const getSkillByID = (data: { skill_id: string }): Promise<Skill> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getSkillByID`, {
  method: "POST",
  body: JSON.stringify(data),
})

const insertSkill = (data: any): Promise<Skill> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/insertSkill`, {
  method: "POST",
  body: JSON.stringify(data),
})

const updateSkillBy = (data: any): Promise<Skill> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/updateSkillBy`, {
  method: "POST",
  body: JSON.stringify(data),
})

const deleteSkill = (data: any): Promise<Skill> => secureFetch(
  `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/deleteSkill`, {
  method: "POST",
  body: JSON.stringify(data),
})

export default function useSkill() {
  return {
    generateSkillClientID,
    getSkillClientBy,
    getSkillByID,
    insertSkill,
    updateSkillBy,
    deleteSkill
  };
}