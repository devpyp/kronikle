<template>
    <div class="history">
        <header>    </header>
        <div class="content-pane">
           <div class="content">
               <div class="historyList">
                   <li v-for="item in historyItems" :key=item.domain>
                    <GrouedHistoryItem v-bind:domain="item.domain" v-bind:values = "item.values"/>
                   </li>
               </div>
               
           </div>
        </div>
    </div>
</template>

<script>
// import { mapGetter   s } from 'vuex'
import GrouedHistoryItem from '../components/GroupedHistoryItem';
export default {
    components: {
        GrouedHistoryItem
    },
    data: () => {},
    computed: {
        historyItems: function() {
            return this.$store.getters.getGroupedHistoryItems
        }
    }
}
</script>

<style scoped>
    .history {
        background: #f9f9f9;
        padding-left: 300px;
        width: 100%;
        height: 100%;
        position: relative;
    }
    header {
        background: #f9f9f9;
        width: 100%;
        height: 100px;
        position: fixed;
    }
    .content-pane {
        height: 100vh;
        width: 100%;
        padding: 50px;
        padding-top: 150px;
        background: #fff;
        border-radius: 20px;
    }

    .content {
        height: 100%;
    }

    .historyList {
        list-style: none;
    }
</style>

