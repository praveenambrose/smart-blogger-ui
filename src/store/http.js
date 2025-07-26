import axios from "axios";
import { de } from "vuetify/locale";

const instance = axios.create({});

export default {
    get(url) {
        return instance.get(url)
    },
    post(url, data) {
        return instance.post(url, data)
    },
    delete(url) {
        return instance.delete(url)
    }
}