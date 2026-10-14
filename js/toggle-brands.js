(function(){
  var btn=document.getElementById('toggleBrands'),tiles=document.getElementById('brandTiles');
  if(!btn||!tiles)return;
  btn.addEventListener('click',function(e){
    e.preventDefault();
    var collapsed=tiles.classList.toggle('collapsed');
    btn.innerHTML=collapsed?'View All Brands &nbsp;→':'Show Less &nbsp;↑';
  });
})();
