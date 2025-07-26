<template>
  <v-app>
    <app-bar></app-bar>
    <app-sidebar></app-sidebar>
    <v-main>
      <v-container fluid class="fill-height pa-2">
        <v-row no-gutters class="fill-height">
          <router-view />
        </v-row>
      </v-container>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    'app-bar': AppBar,
    'app-sidebar': AppSidebar,
    'app-footer': AppFooter
  }
};

</script>

<style lang="scss">
.scrollable-container {
    display: flex !important;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: hidden;
}
.scrollable-content {
    flex: 1 1 0px;
    overflow: auto;
    .v-table,
    .v-table__wrapper {
        height: 100%;
    }
}
</style>
