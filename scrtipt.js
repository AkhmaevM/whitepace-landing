const sectionImg = document.querySelectorAll('.section__img');
const sectionBtn = document.querySelectorAll('.section__btn');
const reviewCard = document.querySelectorAll('.reviews__card');
const reviewQuote = document.querySelector('.reviews__icon');



document.addEventListener('DOMContentLoaded', () => {
	sectionImg.forEach(image => {
		image.src = '/images/Image-container.svg';
	})

	sectionBtn.forEach(button => {
		const btnArrow = document.createElement('img')
		btnArrow.src = '/images/icons/white arrow.svg';
		btnArrow.className = 'btn__arrow';
		button.appendChild(btnArrow);
	})


	reviewCard.forEach(card => {
		card.addEventListener('mouseover', () => {
			reviewQuote.src = '/images/icons/Quote.svg';
		})
	})
	// reviewCard.addEventListener('onMouse', () => {
	// 	reviewQuote.src = '/images/icons/Quote.svg';
	// })

})
