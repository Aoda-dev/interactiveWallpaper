import { firstLoad } from './firstLoad'
import { mainLoad } from './mainLoad'

import './style.css'

const init = async () => {
	await firstLoad()
	await mainLoad()
}

init()
