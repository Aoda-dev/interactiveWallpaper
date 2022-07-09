import anime from 'animejs'
import BIRDS from 'vanta/dist/vanta.birds.min'

export const mainLoad = () => {
	return new Promise((resolve) => {
		const date = new Date()
		const [time, timeFormat] = date.toLocaleTimeString().split(' ')

		document.querySelector('#app').innerHTML = `
			<div class="origin-container">
				<div class="animate-top w-screen absolute h-1/2 bg-black text-black/0">empty</div>
				<div class="animate-bot w-screen absolute h-1/2 bg-black text-black/0">empty</div>

				<div class="vanta-anim w-screen h-screen space-y-2 flex flex-col items-center justify-center text-center font-main select-none ">
					<div class="text-9xl">
						<span class="time">${time}</span>
						<span class="timeFormat">${timeFormat}</span>
						<button id="changeBack" class="p-10">click me</button>
					</div>
					<span class="text-lg text-white/90">First ask yourself who you want to be, and then do what you have to do</span>
				</div>
			</div>
		`

		const timeWrapper = document.querySelector('.time')
		const timeFormatWrapper = document.querySelector('.timeFormat')

		const changeBackBtn = document.getElementById('changeBack')

		changeBackBtn.addEventListener('click', () => {
			document.querySelector('.origin-container').classList.add('glitch-active')

			setTimeout(() => {
				document.querySelector('.origin-container').classList.remove('glitch-active')
				document.querySelector('.origin-container').classList.remove('bg-second')
				document.querySelector('.origin-container').classList.add('bg-first')
			}, 500)
		})

		setInterval(() => {
			const date = new Date()
			const [time, timeFormat] = date.toLocaleTimeString().split(' ')

			timeWrapper.innerText = time
			timeFormatWrapper.innerText = timeFormat
		}, 1000)

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
