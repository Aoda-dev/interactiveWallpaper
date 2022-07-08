export const loading = async () => {
	return new Promise((resolve) => {
		document.querySelector('#app').innerHTML = `
			<div class="overflow-hidden w-screen h-screen bg-black flex flex-col items-center text-5xl justify-center font-main text-white">
				<span class="loader"></span>
			</div>
		`

		setTimeout(resolve, 2000)
	})
}
