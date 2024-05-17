// Установите дату, до которой нужно вести обратный отсчет
var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

// Обновление таймера каждую секунду
var x = setInterval(function () {

    // Текущая дата и время
    var now = new Date().getTime();

    // Разница между текущим временем и датой окончания
    var distance = countDownDate - now;

    // Вычисление дней, часов, минут и секунд
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Добавление ведущих нулей, если необходимо
    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Вывод времени в формате "дд дней чч:мм:сс"
    document.getElementById("timer_countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

    // Если таймер истек, выведите сообщение
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer_countdown").innerHTML = "00:00:00:00";
    }
}, 1000); // обновление каждую секунду


function scrollNext() {
    document.getElementById("next").scrollIntoView({behavior: "smooth"});
}

let currentImageIndex = 1; // Индекс текущего изображения
const totalImages = 5; // Общее количество изображений

function jumpToImage(direction) {
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    } else {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
    }

    // Обновляем изображение и миниатюры
    updateImages();
}

function prevImage() {
    jumpToImage('prev');
}

function nextImage() {
    jumpToImage('next');
}

function updateImages() {
    const currentImage = document.getElementById('currentImage');
    const thumbnailPrev = document.getElementById('thumbnailPrev');
    const thumbnailNext = document.getElementById('thumbnailNext');

    currentImage.src = `img (${currentImageIndex + 1}).png`;
    thumbnailPrev.src = `img (${(currentImageIndex - 1 + totalImages) % totalImages + 1}).png`;
    thumbnailNext.src = `img (${(currentImageIndex + 1) % totalImages + 1}).png`;
}
