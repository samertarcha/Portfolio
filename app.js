const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');
const form = document.querySelector('.contact-form');

toggle.addEventListener('click', () => {
	toggle.classList.toggle('active');
	nav.classList.toggle('active');
});

navItem.forEach(item => {
	item.addEventListener('click', () => {
		toggle.classList.remove('active');
		nav.classList.remove('active');
	});
});

function sendEmail() {
	Email.send({
		SecureToken: '403f0beb-4167-4414-bdde-b2a6b3fbed58',
		To: 'info@samertarcha.com',
		From: 'info@samertarcha.com',
		Subject: 'Message from Portfolio',
		Body:
			'Message from: ' +
			document.getElementById('contact-name').value +
			'<br>' +
			'Email: ' +
			document.getElementById('contact-email').value +
			'<br>' +
			'Message: ' +
			document.getElementById('contact-message').value,
	}).then(
		Swal.fire({
			icon: 'success',
			title: 'Message sent successfully',
			timer: 2000,
		})
	);
}

// Animation on scroll
AOS.init({
	mirror: true,
	once: false,
});
