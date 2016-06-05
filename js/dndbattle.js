/*jslint browser: true*/
/*global $, jQuery, alert, tinysort*/
function initText() {
	var num = $.trim($("#num-init").val());
	var name = $.trim($("#name-init").val());
	return num.length > 0 && name.length > 0;
}

function addToList() {
	var initnum = $.trim($('#num-init').val());
	var init = '<li id="num' + initnum + '">' +
		initnum +
		' | ' +
		$.trim($('#name-init').val()) +
		'</li>';
	$('#init-list').append(init);
}

function addCharBox() {
	var name = $.trim($('#name-init').val());
	var init = $.trim($('#num-init').val());
	var charDiv = '<div class="character" id="name' + init + '">' +
		'<h3>' + name + '</h3>' +
		'<div class="char-stats">' +
		'<textarea class="ac" placeholder="AC"></textarea>' +
		'<textarea class="hp" placeholder="HP"></textarea>' +
		'<textarea class="mp" placeholder="MP"></textarea>' +
		'</div>' +
		'<h4>Battle Actions</h4>' +
		'<textarea class="actions"></textarea>' +
		'<h4>Notes</h4>' +
		'<textarea class="notes"></textarea>' +
		'</div>';

	$('#main-battle').append(charDiv);
}

function clearInit() {
	$('#init-list').html('');
}

function clearChar() {
	$('#main-battle').html('');
}

$(document).ready(function () {
	$('#add-init').on('click', function () {
		if (initText()) {
			$('#error-init').hide();
			addToList();
			addCharBox();
		} else {
			$('#error-init').show();
		}
	});
	$('#clear-init').on('click', function () {
		clearInit();
		clearChar();
	});
	$('#sort-init').on('click', function () {
		tinysort('ol#init-list>li', {
			attr: 'id'
		});
		tinysort('section#main-battle>div', {
			attr: 'id'
		});
	});
});
