import { firstLoad } from './firstLoad'
import { mainLoad } from './mainLoad'

import './style.sass'

const init = async () => {
	await firstLoad()
	await mainLoad()
}

init()
