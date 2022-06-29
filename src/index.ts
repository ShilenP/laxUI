import { App } from 'vue'
import Button from './components/Button.vue'
export default {
	install: (app: App) => {
		app.component("Button", Button);
	},
}