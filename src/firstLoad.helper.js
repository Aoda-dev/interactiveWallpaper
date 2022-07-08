import anime from 'animejs'
import Typed from 'typed.js'

export const hideTopAndBottomAnimation = () => {
	return new Promise((resolve) => {
		document.querySelector('#app').innerHTML = `
			<div class="overflow-hidden w-screen h-screen bg-zinc-900 flex flex-col items-center text-5xl justify-center font-main text-white">
				<div class="animate-top w-screen h-1/2 bg-black text-black/0">empty</div>
				<div class="animate-bot w-screen h-1/2 bg-black text-black/0">empty</div>
			</div>
		`

		anime({
			easing: 'easeOutExpo',
			targets: '.animate-top',
			translateY: '-100%',
			duration: 2000,
		})

		anime({
			easing: 'easeOutExpo',
			targets: '.animate-bot',
			translateY: '100%',
			duration: 2000,

			complete: () => {
				setTimeout(resolve, 400)
			},
		})
	})
}

export const showAndAnimationText = () => {
	document.querySelector('#app').innerHTML = `
		<div class="w-screen h-screen bg-zinc-900 flex items-center text-5xl justify-center font-main text-white">
			<span class="text-typing"></span>
		</div>
	`

	return new Promise((resolve) => {
		new Typed('.text-typing', {
			strings: ['Hello ^1500', 'Welcome ^300 to ^200 <span style="color: #ff3d00">interactive</span> wallpaper'],
			smartBackspace: true,
			typeSpeed: 70,
			backSpeed: 60,
			onComplete: () => {
				anime({
					targets: '.text-typing',
					opacity: [1, 0],
					delay: 2000,
					duration: 1000,
					complete: () => {
						resolve()
					},
				})
			},
		})
	})
}

export const showTopAndBottomAnimation = () => {
	return new Promise((resolve) => {
		document.querySelector('#app').innerHTML = `
			<div class="overflow-hidden w-screen h-screen bg-zinc-900 flex flex-col items-center text-5xl justify-center font-main text-white">
				<div class="animate-top w-screen h-1/2 bg-black"></div>
				<div class="animate-bot w-screen h-1/2 bg-black"></div>
			</div>
		`

		anime({
			easing: 'easeOutExpo',
			targets: '.animate-top',
			translateY: ['-120%', '0%'],
			duration: 2000,
		})

		anime({
			easing: 'easeOutExpo',
			targets: '.animate-bot',
			translateY: ['120%', '0%'],
			duration: 2000,

			complete: () => {
				setTimeout(resolve, 500)
			},
		})
	})
}
