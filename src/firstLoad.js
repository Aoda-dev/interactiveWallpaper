import {
	hideTopAndBottomAnimation,
	showAndAnimationText,
	showTopAndBottomAnimation,
} from './firstLoad.helper'
import { loading } from './loading'

export const firstLoad = async () => {
	await loading()
	await hideTopAndBottomAnimation()
	await showAndAnimationText()
	await showTopAndBottomAnimation()
	await loading()
}
