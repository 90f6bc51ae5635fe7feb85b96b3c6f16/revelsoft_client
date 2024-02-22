import type { ConTact } from "~~/misc/types"

const prefix = 'contact'

const generateConTactClientID = (): Promise<string> => secureFetch(`${useRuntimeConfig().public.apiBaseUrl}/${prefix}/generateConTactClientID`, { method: "POST", })

const getConTactBy = (data?: any): Promise<{ docs: ConTact[], totalDocs: number, }> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getConTactBy`, {
    method: "POST",
    body: JSON.stringify(data),
})

const getConTactByID = (data: { ConTact_id: string }): Promise<ConTact> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getConTactByID`, {
    method: "POST",
    body: JSON.stringify(data),
})

const insertConTactClient = (data: any): Promise<ConTact> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/insertConTactClient`, {

    method: "POST",
    body: JSON.stringify(data),
})

const updateConTactBy = (data: any): Promise<ConTact> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/updateConTactBy`, {
    method: "POST",
    body: JSON.stringify(data),
})

const deleteConTact = (data: any): Promise<ConTact> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/deleteConTact`, {
    method: "POST",
    body: JSON.stringify(data),
})

export default function useConTact() {
    return {
        generateConTactClientID,
        getConTactBy,
        getConTactByID,
        insertConTactClient,
        updateConTactBy,
        deleteConTact
    };
}