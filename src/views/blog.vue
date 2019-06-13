<template>
    <v-container>
        <div id="blogScreenCap">
            <v-img height="100%" width="100%" :src="require('@/assets/blog.png')"></v-img>
        </div>        
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'

export default {
    components: {
    },
    created() {
        store.commit('navigation/setTopBarTitle', 'Blog')
    },
    methods: {
        ...mapActions('navigation', ['navigate'])
    }
}
</script>

<style>
    #blogScreenCap {
        margin-top: -30px;
    }
</style>