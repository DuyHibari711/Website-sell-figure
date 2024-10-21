//Đổi ảnh
var currentImageIndex = 0;
var images = document.querySelectorAll('#imgChiTiet img');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

function prevImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

function nextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

for (var i = 1; i < images.length; i++) {
    images[i].style.opacity = 0;
}

//Tăng giảm số lượng
var truButton = document.getElementById('tru');
var congButton = document.getElementById('cong');
var soP = document.getElementById('so');

var so = 1;

truButton.addEventListener('click', function () {
    if (so > 1) {
        so--;
        updateso();
    }
});

congButton.addEventListener('click', function () {
    so++;
    updateso();
});

function updateso() {
    soP.textContent = so;
}

updateso();

