import stocks from '../../data/stocks'
import axios from "axios"

const state = {
    stocks:[],
    totalValue:0
}

const mutations = {
    'SET_STOCKS'(state,stocks) {
        // state.stocks = stocks
        axios.get('/data.json')
        .then((res)=>{
            if(res.data){
                const stocks = res.data.stocks
                const stockPortfolio = res.data.stockPortfolio
                state.stocks = stocks
                let totalValue = 0
                for(let i in stockPortfolio){
                    totalValue+=stockPortfolio[i].price*stockPortfolio[i].quantity
                }
                state.totalValue = totalValue
            }
            else{
                console.log("no datas")
            }
        })
    },
    'RND_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price =Math.round( stock.price*(Math.random()+0.5))
        });
    }
}

const actions = {
    buyStock: ({commit},order) => {
        commit('BUY_STOCK',order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS',stocks)
    },
    randomizeStocks: ( {commit} )=>{
        commit('RND_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks;
    },
    totalValue(state){
        return state.totalValue
    }
}

export default {   
    state,
    mutations,
    actions,
    getters,
}