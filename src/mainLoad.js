import anime from 'animejs'
import BIRDS from 'vanta/dist/vanta.birds.min'

export const mainLoad = () => {
	return new Promise((resolve) => {
		document.querySelector('#app').innerHTML = `
			<div class="overflow-hidden relative w-screen h-screen bg-first bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-white">
				<div class="animate-top w-screen absolute h-1/2 bg-black text-black/0">empty</div>
				<div class="animate-bot w-screen absolute h-1/2 bg-black text-black/0">empty</div>

				<div class="vanta-anim w-screen h-screen flex items-center justify-center text-center font-main select-none text-3xl">
					<span class="max-w-xl">First ask yourself who you want to be, and then do what you have to do</span>
				</div>
			</div>
		`

		anime({
			easing: 'easeOutExpo',
			targets: '.animate-top',
			translateY: '-150%',
			duration: 2000,
		})

		anime({
			easing: 'easeOutExpo',
			targets: '.animate-bot',
			translateY: '150%',
			duration: 2000,

			// complete: () => {
			// 	setTimeout(resolve, 400)
			// },
		})

		BIRDS({
			el: '.vanta-anim',
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			birdSize: 0.7,
			wingSpan: 10.0,
			separation: 100.0,
			alignment: 1.0,
			cohesion: 65.0,
			backgroundAlpha: 0.0,
		})
	})
}
