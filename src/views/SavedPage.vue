<template>
    <v-card class="scrollable-container fill-height elevation-2">
        <v-card-title class="text-h5">Saved Posts</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="scrollable-content">
            <v-data-table :headers="headers" :items="savedPosts" hide-default-footer class="elevation-1">
                <template v-slot:[`item.actions`]="{ item }">
                    <v-btn v-tooltip:top="'Copy to clipboard'" icon size="small" variant="outlined" color="green" class="mr-2" @click="copyToClipboard(item.post)">
                        <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                    <v-btn v-tooltip:top="'Delete post'" icon size="small" variant="outlined" color="red" @click="deletePost(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card-text>  
        <v-overlay absolute contained persistent class="justify-center align-center" :model-value="isLoading" color="white" opacity="0">
            <v-progress-circular :size="100" color="primary" indeterminate></v-progress-circular>
        </v-overlay>
    </v-card>
</template>

<script>
import { mapActions } from 'pinia';
import { useIdeasStore } from '../store/modules/ideas';
export default {
    name: 'SavedPage',
    data() {
        return {
            headers: [
                {
                    title: 'Topic',
                    key: 'topic',
                    width: '40%',
                    class: 'text-black'
                },
                {
                    title: 'Post',
                    key: 'post',
                    width: '40%',
                    class: 'text-black'
                },
                {
                    title: 'Actions',
                    key: 'actions',
                    width: '20%',
                    class: 'text-black'
                }
            ],
            savedPosts: [],
            isLoading: false
        };
    },
    mounted() {
        this.fetchSavedPosts();
    },
    methods: {
        ...mapActions(useIdeasStore, ['getSavedIdeas', 'deleteIdea']),
        copyToClipboard(text) {
            navigator.clipboard.writeText(text);
        },
        fetchSavedPosts() {
            this.isLoading = true;
            this.getSavedIdeas().then(response => {
                this.savedPosts = response.data.posts;
            }).catch(error => {
                console.error('Error fetching saved posts:', error);
            }).finally(() => {
                this.isLoading = false;
            });
        },
        deletePost(item) {
            this.isLoading = true;
            this.deleteIdea(item.id).then(() => {
                this.savedPosts = this.savedPosts.filter(post => post.id !== item.id);
                console.log('Post deleted successfully');
            }).catch(error => {
                console.error('Failed to delete post:', error);
            }).finally(() => {
                this.isLoading = false;
            });
        }
    }
};
</script>