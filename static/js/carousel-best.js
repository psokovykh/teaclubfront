$(() => {
    const $carousel = $('#carousel-best');
    const $indicators = $carousel.find('.carousel-indicators li');

    let finishedSliding = false;

    $indicators.on('click', (e) => {
        const activeIndex = $carousel.find('.carousel-indicators li.active').data('slideTo');
        const newIndex    = $(e.target).data('slideTo');

        let count   = newIndex - activeIndex;
        let forward = true;

        if (count === 0) {
            return;
        }

        if (count < 0) {
            forward = false;
            count   = Math.abs(count);
        }

        moveCarousel(forward, count);
    });

    async function moveCarousel(isForward, count) {
        for (let i = 0; i < count; i++) {
            finishedSliding = false;

            if (isForward) {
                $carousel.carousel('next');
            } else {
                $carousel.carousel('prev');
            }

            await new Promise((resolve, reject) => {
                const interval = setInterval(() => {
                    if (finishedSliding) {
                        resolve();
                        clearInterval(interval);
                    }

                }, 10)
            });     }
    }

    $carousel.on('slid.bs.carousel', () => {
        finishedSliding = true;
    })

    // для демонстрации. Удалить перед переводом шаблонов в динамические шаблоны.
    const cardTemplate = `<div class="mark-container size-c">
                        <div class="card-mark">Срочно</div>
                            <div class="card no-border">
                                <a href=".">
                                    <div class="card-img-top">
                                        <div class="card-img-grad">
                                            <p>Дебаты Александра Каргина и Беллы Рапопорт</p>
                                            <!--Span to size of the image-->
                                            <img class="card-img-top" src="../static/images/card_prev.png" alt="Изображение">
                                        </div>
                                    </div>
                                </a>
                                <div class="card-body">
                                    <div class="card-meta">
                                        23 марта 2020
                                        <a href="." class="card-tag">Мероприятия</a>
                                        <a href="." class="card-tag">Видео</a>
                                    </div>
                                    <a href="."><h5 class="card-title">Дебаты Александра Каргина и Беллы Рапопорт</h5>
                                    <!--Pre-wrapped-->
                                    <p class="card-text">Запись дебатов Александра Каргина и Беллы Рапопорт!
                        15 марта в дискуссии "Правый и левый подходы к культурной идентичности"</p></a>
                                </div>
                            </div>
                        </div>`;

    $carousel.find('[data-card]').replaceWith(cardTemplate);
});