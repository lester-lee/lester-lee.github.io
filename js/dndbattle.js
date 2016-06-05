/*jslint browser: true*/
/*global $, jQuery, alert*/
function initText() {
	var str = $.trim($("#num-init").val()) + $.trim($("#name-init").val());
	return str !== "";
}
$(document).ready(function () {
	$('#add-init').on('click', function () {
		if (initText()) {
			var init = '<li>';
			init = $.trim($('#num-init').val());
			init += ' | ';
			init += $.trim($('#name-init').val());
			init += '</li>';
			$('#init-list').append(init);
		}
	});
});
