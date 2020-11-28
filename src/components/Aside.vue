<template>
    <aside>
        <div class="logo-wrap">
            <Logo/>
        </div>
        <nav>
            <ul>
                <li><div class="navicon" @click="test"><v-icon name="stream"/></div>&nbsp;History</li>
                <li><div class="navicon"><v-icon name="bookmark"/></div>&nbsp;Bookmarks</li>
            </ul>
        </nav>
    </aside>
</template>

<script>
import Logo from './Logo';
import 'vue-awesome/icons/stream';
import 'vue-awesome/icons/bookmark';
import Icon from 'vue-awesome/components/Icon'
export default {
    components: {
        Logo,
        'v-icon': Icon
    },
    methods: {
        async test (){
            // console.log(x)
            await this.$store.dispatch('search', {text:''})
        }
    }
}
</script>

<style scoped>
  .navicon {
        height: 50px;
        width: 50px;
        text-align: center;
        display: inline-block;
    }

    aside {
        width: 300px;
        height: 100vh;
        background: #F9F9F9;
        position: fixed;
        z-index: 9999;
    }

    aside .logo-wrap {
        padding: 10px;
        height: 50px;
        padding-left: 20px;
    }

    aside nav ul {
        list-style: none;
        margin-top: 75px;
        padding: 20px;
    }

    aside nav ul li {
        font-size: 16px;
        line-height: 50px;
        color: #ababab;
    }

  
</style>