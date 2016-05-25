/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	$("#enterload").html("enter");
	$("#enterload").click(function () {
		$("#textload, #enterload").hide();
		$("leftload").addClass("away");
		$("#leftload").animate({
			left: '-50%'
		}, 800);
		$("#rightload").animate({
			left: '+50%'
		}, 800);
		setTimeout(function () {
			//$("#leftload").css("display", "none");
			$("#leftload").addClass("noshow");
		}, 800);
		$("body").css("overflow-y", "auto");
		$("#mainscreen").css("display", "block");
	});
});
