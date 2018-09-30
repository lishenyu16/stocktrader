const state = {
    funds :10000,
    stocks:[]
}

const mutations = {
    BUY_STOCK(state,{stockId,quantity,stockPrice}){
        const record = state.stocks.find( element => stockId==element.id )
        if(record){
            record.quantity+=quantity
        }
        else{
            state.stocks.push({id:stockId,quantity:quantity})
        }
        state.funds-=quantity*stockPrice
    },
    SELL_STOCK(state,{stockId,quantity,stockPrice}){
        const record = state.stocks.find( element => stockId==element.id )
        if(record.quantity>quantity){
            record.quantity-=quantity
        }
        else{
            state.stocks.splice(state.stocks.indexOf(record),1)
        }
        state.funds+=quantity*stockPrice
    }
}

const actions = {
    sellStock({commit},order){
        commit('SELL_STOCK',order)
    }
}

const getters = {
    //Below method returns all the stocks (id,quantity,name,price) of portfolio
    //Because above local stocks array only constains (id,quantity) props, we should add stock name and price to objects
    //(id,quantity) => (id,quantity,name,price)
    // getters below are injected from stocks.js modules
    //it looks for this stock from all stocks.
    stockPortfolio(state,getters){
        //map transforms each element in this array
        return state.stocks.map( stock => {
            const record = getters.stocks.find(element => element.id==stock.id)
            return {
                id:record.id,
                quantity:stock.quantity,
                name:record.name,
                price:record.price
            }
        })
        
    },
    funds(stat){
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}