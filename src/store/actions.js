import axios from "axios"

export const loadData = ({commit}) => {
    axios.get('/data.json')
        .then((res)=>{
            if(res.data){
                const stocks = res.data.stocks
                const stockPortfolio = res.data.stockPortfolio
                const funds = res.data.funds

                const portfolio = {
                    funds,
                    stockPortfolio
                }
                commit('SET_STOCKS',stocks)
                commit('SET_PORTFOLIO',portfolio)
            }
        })
}