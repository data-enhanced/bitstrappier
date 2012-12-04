/* Author: David Cochran

*/

$(document).ready(function() {

		// Fix Twitter Bootstrap 2.1 - 2.2.1 dropdown menu in iOS 5+ and Android
		// https://github.com/twitter/bootstrap/issues/4550#issuecomment-8525357
			$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
			// an alternative possible fix
			// https://github.com/twitter/bootstrap/issues/4550#issuecomment-10986399

});

