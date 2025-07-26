import { createVuetify } from "vuetify";
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#BB86FC',
          secondary: '#03DAC6',
          accent: '#03DAC5',
          error: '#CF6679',
          info: '#6200EE',
          success: '#03DAC5',
          warning: '#FF9800'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});