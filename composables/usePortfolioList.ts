import { PortfolioList } from "~~/misc/types"

const prefix = 'portfolio-list'

const generatePortfolioListID = (): Promise<string> => secureFetch(`${useRuntimeConfig().public.apiBaseUrl}/${prefix}/generatePortfolioListID`, { method: "POST", })
console.log(generatePortfolioListID)
const getPortfolioListBy = (data: any = {}): Promise<{ docs: PortfolioList[], totalDocs: number, }> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getPortfolioListBy`, {
    method: "POST",
    body: JSON.stringify(data),
})

const getPortfolioListByID = (data: { portfolio_list_id: string }): Promise<PortfolioList> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getPortfolioListByID`, {
    method: "POST",
    body: JSON.stringify(data),
})

const insertPortfolioList = (data: any): Promise<PortfolioList> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/insertPortfolioList`, {
    method: "POST",
    body: JSON.stringify(data),
})

const updatePortfolioListBy = (data: any): Promise<PortfolioList> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/updatePortfolioListBy`, {
    method: "POST",
    body: JSON.stringify(data),
})


const deletePortfolioList = (data: { portfolio_list_id: string }): Promise<PortfolioList> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/deletePortfolioList`, {
    method: "POST",
    body: JSON.stringify(data),
})

export default function usePortfolioList() {
    return {
        generatePortfolioListID,
        getPortfolioListBy,
        getPortfolioListByID,
        insertPortfolioList,
        updatePortfolioListBy,
        deletePortfolioList,
    };
}