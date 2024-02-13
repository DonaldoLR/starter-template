const menuButton = document.getElementById('hamburger-menu-button');
const navigation = document.getElementById('navigation');
menuButton.addEventListener('click', function () {
	if (menuButton.classList.contains('is-active')) {
		menuButton.classList.remove('is-active');
		navigation.classList.remove('active');
	} else {
		menuButton.classList.add('is-active');
		navigation.classList.add('active');
	}
});
