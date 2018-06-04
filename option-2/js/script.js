$(document).ready(function() {
	$('.add-review').click(function(event) {
		$('.modal-form, div.opacity').show();
	});
	$('i.close, div.opacity').on('click', function () {
	    $('.modal-form, div.opacity').hide();
	});

	var jsReadyCheck = setInterval(function () {
		if ($.fn.rangeslider) {
			clearInterval(jsReadyCheck);
			$('head').append($("<link>", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/jquery.slick/1.5.8/slick.css" }));
			initIndex2();
		};
	}, 100);

	function initIndex2() {

		var $document   = $(document),
				$inputRange = $('input[type="range"]'),
				$percent = $('#calc').data('percent');
		function valueOutput(element) {
			var value = element.value,
					output = element.parentNode.getElementsByTagName('output')[0];
			output.innerHTML = value;
		}
		function resultCalc() {
			var inputRate = $('#rate').val(),
					inputSuccessDeal = $('#successDeal').val(),
					inputTradingDays = $('#tradingDays').val();
			inputRate = ($percent * inputRate) / 100;
			var result = (inputRate * inputSuccessDeal) * inputTradingDays;
			$('#calcResult').html(result);
			$('#calcResultDay').html(inputTradingDays);
		}
		for (var i = $inputRange.length - 1; i >= 0; i--) {
			valueOutput($inputRange[i]);
		};
		$document.on('input', 'input[type="range"]', function(e) {
			valueOutput(e.target);
			resultCalc();
		});
		resultCalc();
		$inputRange.rangeslider({ polyfill: false });

		// slick slider
		$("#signalsSlider").slick({
			autoplay: true,
			dots: true,
			arrows: false,
			speed: 1000
		});
		$("#reviewsSlider").slick({
			autoplay: false,
			dots: false,
			arrows: true,
			speed: 1000,
			fade: true
		});
		$("#introSlider").slick({
			autoplay: false,
			dots: false,
			arrows: true,
			speed: 1000,
			fade: true
		});
	}


	// // social leaderBoard

	// var $radios  = $('.pamm input:radio'),
	// 		$tbodies = $('.pamm tbody');

	// $radios.one('change', function(e) {
	// 	getBoard($radios.index(this), $(this).val());
	// });

	// $radios.filter(':checked').change();

	// function getBoard (index, period) {
	// 	tradologic.api('/api/v1/social/leaderBoard', 'GET', { period: period, limit: 5, offset: 0 }, function (response) {
	// 				if (response.message != 'OK') {
	// 					return;
	// 				}
	// 				processLeaderBoard(index, response.data.results);
	// 			}
	// 	);
	// }
	// function processLeaderBoard (index, results) {
	// 	var $tbody = $tbodies.eq(index).empty();
	// 	$.each(results, function (i, item) {
	// 		var tr = $('<tr>').append(
	// 				$('<td>').text(item.name),
	// 				$('<td>').text(item.returnOfInvestment.toFixed(1) + '%'),
	// 				$('<td>').text(item.hitRate.toFixed(1) + '%')
	// 		);
	// 		$tbody.append(tr);
	// 	});
	// }

});
