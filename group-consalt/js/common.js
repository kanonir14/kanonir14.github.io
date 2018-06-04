$(document).ready(function() {
	ModalQuestion();
	ModalOrder();
	scrollNav();
	formSend();	

	

	$(".open-item").click(function() {
		$(".open-item").toggleClass('open-show');
		$(".icon-arrow").toggleClass('icon-arrow-transform');
	});
	
});

// Попап для вопросов-ответов
function ModalQuestion() {
	var link = $(".issues-list > li > a");
		// item = $(link).attr('href');

	$(link).on('click', function(event) {

		var item = $(this).attr('href');

		$(item + ", .opacity").css({
			visibility: 'visible',
			opacity: '1'
		});

		event.preventDefault();
	});

	$(".icon-close, .opacity").on('click', function(event) {

		$(".modal, .modal-form, .opacity").css({
			visibility: 'hidden',
			opacity: '0'
		});

		event.preventDefault();
	});
}

// Заказать консультацию
function ModalOrder() {
	$(".order").click(function(event) {

		$(".modal").css({
		visibility: 'hidden',
		opacity: '0'
	});

		$(".modal-form, .opacity").css({
			visibility: 'visible',
			opacity: '1'
		});

		event.preventDefault();
		
	});
}

// Плавный скролл навигации к секциям
function scrollNav() {
	

	$(".nav-list a").click(function(event) {
		
		var item = $(this).attr('href'),
			item_offset = $(item).offset().top;

			$("html, body").animate({ scrollTop: item_offset }, 800);


		event.preventDefault();
	});
}

// Работа с формой отправки сообщения на почту
function formSend() {
	$("#form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
		e.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "form.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   congratsMsg();
            }
    	});
    });
}

function congratsMsg() {

	$(".modal, .modal-form").css({
		visibility: 'hidden',
		opacity: '0'
	});

	$(".modal-congrats").css({
		visibility: 'visible',
		opacity: '1'
	});

	$(".modal-congrats a").click(function(event) {
		
		var item = $(this).attr('href'),
			item_offset = $(item).offset().top;

			$("html, body").animate({ scrollTop: item_offset }, 800);

			$(".modal, .modal-congrats, .opacity").css({
				visibility: 'hidden',
				opacity: '0'
			});


		event.preventDefault();
	});
}