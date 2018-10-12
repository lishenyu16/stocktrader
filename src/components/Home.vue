<template>
    <div>
        <h1>The home component</h1>
        <h6>end day./ save datas and load ur datas</h6>
        <hr>
        <p>Your funds: {{funds | currency}} </p>
    </div>
    
</template>
<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },
    }
</script>
