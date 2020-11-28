<template>
    <div class="domainCard">
        <div class = "header">
            <h3>{{domain}}</h3>
            <ul>
                <li v-for="(item, index) in values" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        domain: String,
        values: Array
    }
}
</script>

<style scoped>
    .domainCard {
        width: 100%;
        padding: 20px;
        margin-bottom: 10px;
        border-radius: 3px;
        box-shadow: 1px 1px 10px #dadada;;
    }
</style>