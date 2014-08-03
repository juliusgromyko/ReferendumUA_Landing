$(document).ready(function (e) {
    var clock = $(".clock").FlipClock(7200, {
        countdown: true
    });

    // появление хедера при скролинге страницы
    $(window).scroll(function () {
        self = $("#header");
        if (self.hasClass("hidden")) self.removeClass("hidden");
        if ($(document).scrollTop() == 0) self.addClass("hidden");
    });

    // подписка на голосования (надо добавить фалидацию)
    $("#subscribeForm").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "file.php",
            data: $(this).serialize(),
            success: function (response) {
                alert("Вы подписаны. Мы будем присылать Вам уведомления о новых голосованиях.");
            },
            error: function (xhr, str) {
                alert("Возникли технические неисправности. Попробуйте пожалуйста позже.");
            }
        });
    });

    // простой фоновый слайдер фоновых изображений
    var images = [
        "img/1.jpg",
        "img/2.jpg",
        "img/title_refer-ua.png"
    ];

    var offset = 0;
    var max = 0;
    function slider () {
        $(images).each(function (i, el) {
            setTimeout(function () {
                $(".jumbotron").css("background-image", "url(" + el + ")");
            }, 2000 + offset);
            offset += 2000;
        });
        max++;
        if (!max > 100) slider();
    };

    try {
        slider();
    } catch (ex) {}
});