<template>
    <div>
        <header class="bg-primary text-white">
            <div class="container text-center">
                <h1>The Stock Trader Homepage</h1>
                <p class="lead">A simple stock trader system built with Vue.js</p>
                <p>Total account value : {{totalValue | currency}} </p>
            </div>
        </header>

        <section id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2>About this site</h2>
                        <p class="lead">This is a simple monitor of stock trader system built with Vue.js,
                            you can load datas from firebase by clicking 'load data' from dropdown list in the nav bar,
                            or go to "Stocks" to buy stocks and sell them in "Portfolio". By clicking 'End Day' you can 
                            get a randomized price of each stock to simulate the prices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>
<script>
    import axios from "axios"
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            },
            totalValue(){
                return this.$store.getters.totalValue + this.funds
            }
        },
    }
</script>
