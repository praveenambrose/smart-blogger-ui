<template>
    <v-navigation-drawer :model-value="showSideNav" width="200" permanent>
        <v-list selectable color="primary" class="pa-2">
            <v-list-item v-for="item in navList" :key="item.title" @click="navigatePage(item)">
                <v-list-item-title class="text-primary"> <v-icon class="mr-5 mb-1">{{ item.icon }}</v-icon> {{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'pinia';
import { useSideNavStore } from '@/store/modules/sideNav';
export default {
    name: 'AppSidebar',
    data: () => ({
        navList: [
            { title: 'Generate', icon: 'mdi-lightbulb-on', route: '/' },
            { title: 'Saved Ideas', icon: 'mdi-content-save', route: '/saved' },
        ]
    }),
    computed: {
        ...mapState(useSideNavStore, ['showSideNav']),
    },
    methods: {
        navigatePage(item) {
            if(this.$router.currentRoute.value.path !== item.route) {
                console.log('Navigating to:', item.route);
                this.$router.push(item.route);
            }
        }
    },
};
</script>