import type { Portfolio } from "~~/misc/types"

const prefix = 'portfolio'

const generatePortfolioClientID = (): Promise<string> => secureFetch(`${useRuntimeConfig().public.apiBaseUrl}/${prefix}/generatePortfolioClientID`, { method: "POST", })

const getPortfolioClientBy = (data?: any): Promise<{ docs: Portfolio[], totalDocs: number, }> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getPortfolioClientBy`, {
    method: "POST",
    body: JSON.stringify(data),
})

const getPortfolioByID = (data: { portfolio_id: string }): Promise<Portfolio> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getPortfolioByID`, {
    method: "POST",
    body: JSON.stringify(data),
})

const insertPortfolio = (data: any): Promise<Portfolio> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/insertPortfolio`, {
    method: "POST",
    body: JSON.stringify(data),
})

const updatePortfolioBy = (data: any): Promise<Portfolio> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/updatePortfolioBy`, {
    method: "POST",
    body: JSON.stringify(data),
})

const deletePortfolio = (data: any): Promise<Portfolio> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/deletePortfolio`, {
    method: "POST",
    body: JSON.stringify(data),
})

export default function usePortfolio() {
    return {
        generatePortfolioClientID,
        getPortfolioClientBy,
        getPortfolioByID,
        insertPortfolio,
        updatePortfolioBy,
        deletePortfolio
    };
}