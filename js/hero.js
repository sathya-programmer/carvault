/* ---- Hero car showcase ----
   To add/remove cars, edit this list. "image" can be a file path (e.g. "images/cars/bmw-m4.jpg")
   or an embedded data URI; "position" (optional) picks which part of the photo stays in frame;
   "fallback" (optional) is a second file used if the first fails to load;
   "zoom" (optional, e.g. 1.3) enlarges cars that sit small inside a big dark photo.
   Copies of the photos are also in images/cars/. */
(function(){
  var heroCars = [
    { name: "Ferrari F430", image: "images/hero/hero-001.jpg", position: "center", zoom: 1.3 },
    { name: "Sports Car", image: "images/hero/hero-002.jpg", position: "center" },
    { name: "Lamborghini Aventador", image: "images/hero/hero-003.jpg", position: "50% 45%" },
    { name: "Porsche 911 GT3", image: "images/hero/hero-004.webp", fallback: "images/cars/porsche-911-gt3.png", position: "50% 55%" },
    { name: "Lamborghini Huracán Performante", image: "images/hero/hero-005.jpg", position: "center" },
    { name: "Ferrari 488", image: "images/hero/hero-006.jpg", position: "50% 45%" },
    { name: "Lamborghini Huracán Evo", image: "images/hero/hero-007.jpg", position: "50% 55%" },
    { name: "Lamborghini Aventador SV", image: "images/hero/hero-008.jpg", position: "50% 55%" }
  ];
  window.cvHeroSrc=heroCars.map(function(c){return c.image});
  var abBg=document.querySelector('.ab-hero .bgimg');if(abBg&&!abBg.getAttribute('src'))abBg.src=window.cvHeroSrc[3]||window.cvHeroSrc[0];
  var INTERVAL = 2000;
  var box=document.getElementById('heroSlides');
  if(!box||!heroCars.length)return;
  var imgs=[],cur=0,timer=null;
  heroCars.forEach(function(c){
    var im=new Image();im.alt=c.name;im.draggable=false;
    if(c.fallback)im.onerror=function(){im.onerror=null;im.src=c.fallback};
    im.src=c.image;
    if(c.position)im.style.objectPosition=c.position;
    if(c.zoom>1){var o=(-(c.zoom-1)/2*100)+'%';im.style.width=im.style.height=(c.zoom*100)+'%';im.style.inset='auto';im.style.left=im.style.top=o}
    box.appendChild(im);imgs.push(im);
  });
  function next(){
    var old=imgs[cur];old.classList.remove('on');old.classList.add('out');
    setTimeout(function(){old.classList.remove('out')},1300);
    cur=(cur+1)%imgs.length;
    imgs[cur].classList.remove('out');void imgs[cur].offsetWidth;imgs[cur].classList.add('on');
  }
  function start(){clearInterval(timer);if(imgs.length>1)timer=setInterval(next,INTERVAL)}
  imgs[0].classList.add('on');start();
  document.addEventListener('visibilitychange',function(){document.hidden?clearInterval(timer):start()});
})();
