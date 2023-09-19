//스크롤이 되면 헤어 모양이 바뀜
const header = document.querySelector('header');

window.addEventListener('scroll',function(){
  if(window.scrollY > 300){
    header.classList.add('on');} 

  if(window.scrollY <= 300){
   header.classList.remove('on');
 }
})

//헤더 버튼
const menuItems = document.querySelectorAll('nav ul>li>a');

menuItems.forEach(function(item,idx){
  item.onclick = function(e){    
    e.preventDefault();  //위로 올라가는 것을 못하게 막아줌
    document.querySelector(`#s${idx+1}`).scrollIntoView({
        hehavior:'smooth'
      });
    }
})