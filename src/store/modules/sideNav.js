import { defineStore } from "pinia";

export const useSideNavStore = defineStore({
    id: 'sideNav',
    state: () => ({
        showSideNav: false
    }),
    actions: {
        toggleSideNav() {
            this.showSideNav = !this.showSideNav;
        }
    }
});