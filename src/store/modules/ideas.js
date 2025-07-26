import { defineStore } from "pinia";
import http from "../http";

export const useIdeasStore = defineStore({
    id: 'ideas',
    state: () => ({
        ideas: []
    }),
    actions: {
        fetchIdeas(topic) {
            let url = '/smart-blogger-api/blogger-ideas';
           return http.post(url, topic)
        },
        saveIdea(idea) {
            let url = '/smart-blogger-api/save-post';
            return http.post(url, idea);
        },
        getSavedIdeas() {
            let url = '/smart-blogger-api/posts';
            return http.get(url);
        },
        deleteIdea(id) {
            let url = `/smart-blogger-api/delete-post/${id}`;
            return http.delete(url);
        },
    }
});