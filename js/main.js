
//animation
const animItems = document.querySelectorAll('._anim-item')
if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(){
        for(let index = 0; index < animItems.length;index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active-animation')
            }
            else {
                if(!animItem.classList.contains('_anim-no-hide'))
                animItem.classList.remove('_active-animation')
            }
        }
    }
    function offset(el){
        const react = el.getBoundingClientRect(),
               scrollLeft = window.pageXOffset ||document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset ||document.documentElement.scrollTop;
        return{top:react.top + scrollTop,left:react.left + scrollLeft}
    }
    setTimeout(()=>{
        animOnScroll()
    },500)

}

//Tabs
const btnGallery = document.querySelector('.page-gallery-btn')
console.log(btnGallery)
const contentGallery = document.querySelector('.gallery-filter')

btnGallery.addEventListener('click',function (event){
    console.log(btnGallery)
    contentGallery.classList.toggle('active')
})



//registration tabs
const btnOpen = document.querySelector('.enter__link');
const btnLink = document.getElementById('enter__link')
const wrapModal = document.querySelector('.modal-wrap')
const modal = document.querySelector('.profile-recovery');
const overlay =document.querySelector('.overlay');
const nextModal=document.querySelector('.close');

function myTabs (){
    btnOpen.addEventListener('click',()=> {
        modal.classList.add('form-active');
        wrapModal.classList.add('form-active')
    })

    wrapModal.addEventListener('click', ()=>{
        overlay.classList.remove('form-active');
    })

    btnLink.addEventListener('click',()=>{
        modal.classList.add('form-active');
    })

    nextModal.addEventListener('click',()=>{
        modal.classList.remove('form-active')
        wrapModal.classList.remove('form-active')
    })

    overlay.addEventListener('click',()=>{
        modal.classList.remove('form-active');
    })
}



