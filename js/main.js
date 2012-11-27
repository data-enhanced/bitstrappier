/* Author: David Cochran

*/

$(document).ready(function() {

		// Fix Twitter Bootstrap Dropdown menu in iOS 5+ and Android
		// https://github.com/twitter/bootstrap/issues/4550#issuecomment-8525357
			$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

});

