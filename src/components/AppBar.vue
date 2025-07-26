<template>
    <v-app-bar
        color="primary"
    >
        <v-app-bar-nav-icon @click="toggleNavIcon"></v-app-bar-nav-icon>
        <v-toolbar-title>
            <p class="text-h4">Smart Blogger</p>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'pinia';
import { useSideNavStore } from '@/store/modules/sideNav';
export default {
    name: 'AppBar',
    data: () => ({
        
    }),
    methods: {
        ...mapActions(useSideNavStore, ['toggleSideNav']),
        toggleNavIcon() {
            this.toggleSideNav();
        },
    },
};
</script>