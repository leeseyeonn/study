/* 헤더 js */

/* gnb */
const headerMain = document.querySelector('.dgb_hdr')
const gnb = document.querySelector('.gnb_wrap')
const logo = document.querySelector('.gnb_left .hd1 a img')
const gnbA = document.querySelectorAll('.dgb_hdr .gnb_hdr .main_menu .dgb_gnb li a')
const searchBar = document.querySelector('.dgb_hdr .gnb_hdr .hdr_right .search_bar')
const searchIcon = document.querySelector('.hdr_icon .search_btn img')
const cartIcon = document.querySelector('.hdr_icon a:nth-of-type(1) img')
const userIcon = document.querySelector('.hdr_icon a:nth-of-type(2) img')

/* lnb */
const lnb = document.querySelector('.lnb_wrap')
console.log(headerMain,gnb, lnb, gnbA, logo, searchBar, searchIcon, cartIcon, userIcon)



/* 초기값 셋팅 */

gnb.style.background = 'rgba(255 , 255, 255, 0)'
logo.src = "./images/logo_w.svg"
gnbA.forEach(a => {
    a.style.color = '#fff';
});


searchIcon.src = "./images/search_w.svg"
cartIcon.src = "./images/cart_w.svg"
userIcon.src = "./images/user_w.svg"

/* gnb에 마우스 올렸을때 */
gnb.addEventListener('mouseenter', () => {
    lnb.classList.add('active');
    gnb.classList.add('active');
    logo.src = "./images/logo_b.svg"

    gnbA.forEach(a => {
        a.style.color = '#212121';
    });

    searchBar.classList.add('active');

    searchIcon.src = "./images/search_b.svg"
    cartIcon.src = "./images/cart_b.svg"
    userIcon.src = "./images/user_b.svg"
});


/* 닫기 */
headerMain.addEventListener('mouseleave', () => {
    lnb.classList.remove('active');
    gnb.classList.remove('active');

logo.src = "./images/logo_w.svg"

gnbA.forEach(a => {
    a.style.color = '#fff';
});

searchBar.classList.remove('active');

searchIcon.src = "./images/search_w.svg"
cartIcon.src = "./images/cart_w.svg"
userIcon.src = "./images/user_w.svg"
});