<template>
  <v-card class="scrollable-container fill-height elevation-2">
    <v-card-title class="text-h5">Get creative blog post ideas instantly</v-card-title>
    <v-divider></v-divider>
    <v-conatiner class="px-2 mt-2">
      <v-row no-gutters class="bg-">
        <v-col cols="11"class="pr-2">
            <v-text-field 
              v-model="topic"
              label="Enter a topic" 
              variant="outlined"
              :rules="[v => !!v || 'Topic is required', v => v.length >= 3 || 'Minimum 3 characters']"
            ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn color="primary" icon class="mt-2" @click="getIdeas()">
             <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>  
      </v-row>
    </v-conatiner>
    <v-card-text class="scrollable-content py-2">
      <v-data-table :headers="headers" :items="contents.map(idea => ({ idea, actions: '' }))" hide-default-header hide-default-footer class="elevation-1">
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn v-tooltip:top="'Save the idea'" size="small" variant="outlined" class="text-green mr-2" icon @click="savePost(item)">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
            <v-btn v-tooltip:top="'Copy to clipboard'" icon size="small" variant="outlined" color="green" @click="copyToClipboard(item.idea)">
            <v-icon>mdi-content-copy</v-icon>
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
import { useIdeasStore } from '@/store/modules/ideas';
export default {
  name: 'HomePage',
  data() {
    return {
      isLoading: false,
      topic: '',
      headers: [
        {
          title: 'Ideas',
          key: 'idea'
        },
        {
          title: 'Actions',
          key: 'actions'
        }
      ],
      contents: []
    };
  },
  methods: {
    ...mapActions(useIdeasStore, ['fetchIdeas', 'saveIdea']),
    getIdeas() {
      this.isLoading = true;
      this.contents = [];
      this.fetchIdeas({ topic: this.topic })
        .then(res => {
            this.contents = res.data.content;
        })
        .catch(() => {
          console.log('Failed to fetch ideas');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    savePost(item) {
      let data = {
        topic: this.topic,
        post: item.idea.split('.')[1]
      }
      this.saveIdea(data)
        .then(() => {
          console.log('Post saved successfully');
        })
        .catch(() => {
          console.error('Failed to save post');
        });
    }
  }
};
</script>
