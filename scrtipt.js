const sectionImg = document.querySelectorAll('.section__img')
const sectionBtn = document.querySelectorAll('.section__btn')

document.addEventListener('DOMContentLoaded', () => {
	sectionImg.forEach(image => {
		image.src = '/images/Image-container.svg'
	})

	sectionBtn.forEach(button => {
		const btnArrow = document.createElement('img')
		btnArrow.src = '/images/icons/white arrow.svg';
        btnArrow.className = 'btn__arrow';
		button.appendChild(btnArrow)
	})
})
