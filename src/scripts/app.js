const menuButton = document.getElementById('hamburger-menu-button');
menuButton.addEventListener('click', function () {
	menuButton.classList.contains('is-active')
		? menuButton.classList.remove('is-active')
		: menuButton.classList.add('is-active');
});
