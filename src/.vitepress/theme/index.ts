import DefaultTheme from 'vitepress/theme';
// @ts-ignore
import styleComponents from './styleComponents.vue';

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component('styleComponents', styleComponents)
  },
}
