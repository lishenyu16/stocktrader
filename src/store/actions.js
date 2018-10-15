import axios from "axios"

export const loadData = ({commit}) => {
    axios.get('/data.json')
        .then((res)=>{
            if(res.data){
                const stocks = res.data.stocks
                const stockPortfolio = res.data.stockPortfolio
                const funds = res.data.funds
                let totalValue = 0
                for(let i in stockPortfolio){
                    totalValue+=i.price*i.quantity
                }
                console.log("total value: ",totalValue)
                const portfolio = {
                    funds,
                    totalValue,
                    stockPortfolio
                }
                commit('SET_STOCKS',stocks)
                commit('SET_PORTFOLIO',portfolio)
            }
        })
}