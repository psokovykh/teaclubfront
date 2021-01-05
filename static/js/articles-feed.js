// этот скрипт не используется, пока есть вопросы по шаблону главной в Фигме на максимальном разрешении
// для работы нужно на страницу добавить <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/underscore@1.11.0/underscore-min.js"></script>
$(() => {
	const throttled = _.throttle(checkCards, 100);

	$(window).resize(throttled);

	function checkCards() {
		let containers = $('.articles-feed');

		if ($(window).width() > 1600){
			containers.find('.size-c').removeClass('size-c').addClass('size-b');
		} else {
			containers.find('.size-b').removeClass('size-b').addClass('size-c');
		}
	}

	checkCards();
});