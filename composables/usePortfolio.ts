import { Portfolio, PortfolioList } from "~~/misc/types"
const prefix = 'portfolio'

const generatePortfolioID = (): Promise<string> => secureFetch(`${useRuntimeConfig().public.apiBaseUrl}/${prefix}/generatePortfolioID`, { method: "POST", })

const getPortfolioBy = (data?: any): Promise<{ docs: Portfolio[], totalDocs: number, }> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getPortfolioBy`, {
    method: "POST",
    body: JSON.stringify(data),
})

const getPortfolioByID = (data: { portfolio_id: string }): Promise<Portfolio> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/getPortfolioByID`, {
    method: "POST",
    body: JSON.stringify(data),
})

const insertPortfolio = async (data: { portfolio: Portfolio, portfolio_lists: PortfolioList[], portfolio_list_img?: File[] }): Promise<Portfolio> => {
    const formData = new FormData();
    formData.append("portfolio", JSON.stringify(data.portfolio));
    formData.append("portfolio_lists", JSON.stringify(data.portfolio_lists));

    if (data.portfolio_list_img?.length) {
        data.portfolio_list_img.forEach((img) => {
            formData.append("portfolio_list_img", img);
        });
    }
    return await secureFetch(
        `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/insertPortfolio`, {
        method: "POST",
        body: formData,
    })
}

const updatePortfolioBy = async (data: { portfolio: Portfolio, portfolio_list_img?: File[], portfolio_lists: PortfolioList[] }): Promise<Portfolio> => {
    const formData = new FormData();
    formData.append("portfolio", JSON.stringify(data.portfolio));
    formData.append("portfolio_lists", JSON.stringify(data.portfolio_lists));
    console.log('data img : ', data.portfolio_list_img);

    if (data.portfolio_list_img?.length) {
        data.portfolio_list_img.forEach((img) => {
            formData.append("portfolio_list_img", img);
            console.log('img is : ', img);
        });
    }

    return await secureFetch(
        `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/updatePortfolioBy`, {
        method: "POST",
        body: formData,
    })
}

const deletePortfolio = (data: any): Promise<Portfolio> => secureFetch(
    `${useRuntimeConfig().public.apiBaseUrl}/${prefix}/deletePortfolio`, {
    method: "POST",
    body: JSON.stringify(data),
})

export default function usePortfolio() {
    return {
        generatePortfolioID,
        getPortfolioBy,
        getPortfolioByID,
        insertPortfolio,
        updatePortfolioBy,
        deletePortfolio,
    };
}