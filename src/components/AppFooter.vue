<template>
    <v-footer app class="text-caption py-0" height="18px">
        <v-row no-gutters>
            <v-col class="text-center footer-text"> © 2025 Smart Blogger </v-col>
        </v-row>
        <v-btn icon variant="text" density="compact" size="small">
            <v-icon> mdi-invert-colors </v-icon>
        </v-btn>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            // Footer data can be added here if needed
        };
    }
};
</script>