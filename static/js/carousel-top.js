$(() => {
    $carousel = $('#carousel-top');
    $nextButton = $carousel.find('[data-slide="next"]');
    $prevButton = $carousel.find('[data-slide="prev"]');

    $prevButton.hide();

    $carousel.on('slide.bs.carousel', (e) => {
        let $e = $(e.relatedTarget);
        let idx = $e.index();
        let itemsPerSlide = 4;
        let totalItems = $carousel.find('.carousel-item').length;

        if (idx >= totalItems - itemsPerSlide) {;
            $nextButton.hide();
        } else {
            $nextButton.show();
        }

        if (idx === 0) {
            $prevButton.hide();
        } else {
            $prevButton.show();
        }
    });

    // для демонстрации. Удалить перед переводом шаблонов в динамические шаблоны.
    const cardTemplate = `<div class="carousel-top-card">
        <span class="carousel-top-card-header"><a href="" class="carousel-top-card-link">Являясь всего лишь.</a></span>
        <div class="carousel-top-card-image-container">
            <a href="" class="carousel-top-card-link">
            <img class="carousel-top-card-image" src="../static/images/carousel-top-card-image-example.jpg" width="262" height="139" alt="card-image">
        </a>
        </div>
        <span class="carousel-top-card-text text-opacity-gradient">
            Прежде всего, существующая теория обеспечивает широкому кругу (специалистов) участие в формировании экономической целесообразности принимаемых решений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности однозначно
        </span>
    </div>`;

    $carousel.find('[data-card]').replaceWith(cardTemplate);
});
