<template>
    <div>
        <app-stock v-for="stock in stocks">

        </app-stock>
    </div>
</template>
<script>
    import Stock from './Stock.vue'
    export default {
        data() {
            return {
                stocks: [
                    { id:1,name:"BMW",price:110 },
                    { id:2,name:"APPLE",price:320},
                    { id:3,name:"GOOGL",price:400 },
                    { id:4,name:"AMAZON",price:421 }
                ]
            }
        },
        components:{
            appStock:Stock
        }
    }
</script>
