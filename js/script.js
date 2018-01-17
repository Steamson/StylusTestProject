$(document).ready(function() {
	Resize();
})

$(window).resize(function() {
    Resize();
})

function Resize() {
	if ($(window).width() < 544) {
        $('.ws-block').addClass('resize'); // даем классу col-xs новый класс new-style
    }
    else if ($(window).width() >= 544 && $('.ws-block').hasClass('resize')) {
        $('.ws-block').removeClass('resize');
    }
}