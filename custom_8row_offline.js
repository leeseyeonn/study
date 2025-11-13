const offBtn =document.querySelectorAll('.offline_sale_btn_grp .offline_sale_btn') /* 버튼 */
const offChannel = document.querySelector('.channel')
const offSell = document.querySelector('.sell')
const offBook = document.querySelector('.book_store')
const fBox = document.querySelector('.fake_box')

console.log(offBtn, offChannel, offSell, offBook,fBox)

/* 초기값 설정 */
offBtn[0].classList.add('active')


offBtn.forEach((btn, index)=>{
    btn.addEventListener('click',()=>{
        offBtn.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        offChannel.style.display = index === 0 ?  'grid' : 'none';
        offSell.style.display = index === 1 ?  'grid' : 'none';
        offBook.style.display = index === 2 ?  'block' : 'none';
    })
})

/* offChannel.style.display='grid'
offSell.style.display='none'
offBook.style.display='none'


offBtn[0].addEventListener('click',function(){
    offBtn[0].classList.add('active')
    offBtn[1].classList.remove('active')
    offBtn[2].classList.remove('active')
    offChannel.style.display='grid'
    offSell.style.display='none'
    offBook.style.display='none'
})

offBtn[1].addEventListener('click',function(){
    offBtn[0].classList.remove('active')
    offBtn[1].classList.add('active')
    offBtn[2].classList.remove('active')
    offChannel.style.display='none'
    offSell.style.display='grid'
    offBook.style.display='none'
})

offBtn[2].addEventListener('click',function(){
    offBtn[0].classList.remove('active')
    offBtn[1].classList.remove('active')
    offBtn[2].classList.add('active')
    offChannel.style.display='none'
    offSell.style.display='none'
    offBook.style.display='block'
})
 */