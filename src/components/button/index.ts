import { App, Plugin } from 'vue'
import Button from './Button.vue'

export default {
	install: (app: App) => {
		app.component("Button", Button);
	},
} as Plugin

export {
	Button as SxButton
}