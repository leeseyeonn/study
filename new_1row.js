// 🔥 탭 기능
document.querySelectorAll('.main_product_tab button').forEach(btn => {
    btn.addEventListener('click', function () {
        const id = this.getAttribute('data-id');

        document.querySelectorAll('.tabcontent').forEach(tab => tab.classList.remove('active'));
        document.getElementById(id).classList.add('active');

        // 탭 바뀔 때 swiper 재생성
        initBestSlider();
    });
});

// 🔥 Swiper 초기화 함수 (매번 재호출)
function initBestSlider() {
    document.querySelectorAll('.swiperBest').forEach(container => {

        if (container.swiper) {
            container.swiper.destroy(true, true);
        }

        new Swiper(container, {
            slidesPerView: 5,
            spaceBetween: 20,
            scrollbar: {
                el: container.querySelector('.custom-scroll'),
                draggable: true,
            },
            navigation: {
                nextEl: container.querySelector('.custom-next'),
                prevEl: container.querySelector('.custom-prev'),
            },
            loop: false,
        });
    });
}

// 첫 실행
initBestSlider();
document.getElementById("tab1").classList.add('active');

