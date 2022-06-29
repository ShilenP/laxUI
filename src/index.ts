import { App } from 'vue'

import * as components from './components'

const Vuelax = {
	install: (app: App) => {
		for (const componentKey in components) {
			app.use((components as any)[componentKey])
		}
	}
}

export default Vuelax

export * from './components'
