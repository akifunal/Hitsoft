window.addEventListener('load', navbarScroll)

// OnScroll Navbar event
function navbarScroll() {
	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
		// On Scroll
		document.querySelector('nav').classList.add('navbar-scroll')
	} else {
		// On Start
		document.querySelector('nav').classList.remove('scrolled-nav-bar')
	}
}
