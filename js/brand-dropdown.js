(function(){
  var BRANDS=["Abarth","BAIC","Dongfeng","GAC","IKCO","Li Auto","VinFast","Acura","Alfa Romeo","Alpine","Ariel","Aston Martin","Audi","Bentley","BMW","Bugatti","Buick","BYD","Cadillac","Caterham","Changan","Chery","Chevrolet","Chrysler","Citroën","CUPRA","Dacia","Daewoo","Daihatsu","Datsun","Dodge","DS","Ferrari","Fiat","Fisker","Force Motors","Ford","Geely","Genesis","GMC","GWM","Haval","Honda","Hongqi","Hummer","Hyundai","Ineos","Infiniti","Isuzu","Jaguar","Jeep","Kia","Koenigsegg","Lada","Lamborghini","Lancia","Land Rover","Lexus","Lincoln","Lotus","Lucid","Lynk & Co","Mahindra","Maruti Suzuki","Maserati","Mercedes-Maybach","Mazda","McLaren","Mercedes-Benz","MG","MINI","Mitsubishi","Morgan","NIO","Nissan","Oldsmobile","Opel","Pagani","Peugeot","Plymouth","Polestar","Pontiac","Porsche","Proton","Ram","Renault","Rimac","Rivian","Rolls-Royce","Rover","Saab","Saturn","Scion","SEAT","Škoda","Smart","SsangYong","Subaru","Suzuki","Tata","Tesla","Toyota","Vauxhall","Volkswagen","Volvo","Wuling","XPeng","Zeekr","Beijing","Arcfox","Denza","Fangchengbao","Yangwang","Deepal","Avatr","Exeed","Jetour","iCar","Luxeed","Voyah","M-Hero","Aeolus","FAW","Bestune","Aion","Hyptec","Tank","Ora","Wey","Mercedes-AMG","ONVO","Firefly","Roewe","Maxus","IM Motors","Exlantix","Forthing","Joyee","Shangjie","Stelato"];
  var CATS=["Sedan","SUV","Compact SUV","Mid-size SUV","Full-size SUV","Luxury SUV","Crossover","Hatchback","Hot Hatch","Coupe","Convertible","Roadster","Station Wagon / Estate","Shooting Brake","Fastback","Liftback","Targa","Sports Car","Supercar","Hypercar","Grand Tourer (GT)","Muscle Car","Luxury Car","Limousine","Pickup Truck","Minivan / MPV","Van","Off-Road / 4x4","Subcompact","Compact Car","Mid-size Car","Full-size Car","Microcar","Kei Car","Classic Car","Concept Car","Commercial Truck"];
  var FL={"Japan": "<rect width=\"30\" height=\"20\" fill=\"#fff\"/><circle cx=\"15\" cy=\"10\" r=\"6\" fill=\"#bc002d\"/>", "Germany": "<rect width=\"30\" height=\"6.67\" fill=\"#000\"/><rect y=\"6.67\" width=\"30\" height=\"6.67\" fill=\"#dd0000\"/><rect y=\"13.33\" width=\"30\" height=\"6.67\" fill=\"#ffce00\"/>", "United States": "<rect width=\"30\" height=\"20\" fill=\"#fff\"/><rect y=\"0.00\" width=\"30\" height=\"1.54\" fill=\"#b22234\"/><rect y=\"3.08\" width=\"30\" height=\"1.54\" fill=\"#b22234\"/><rect y=\"6.15\" width=\"30\" height=\"1.54\" fill=\"#b22234\"/><rect y=\"9.23\" width=\"30\" height=\"1.54\" fill=\"#b22234\"/><rect y=\"12.31\" width=\"30\" height=\"1.54\" fill=\"#b22234\"/><rect y=\"15.38\" width=\"30\" height=\"1.54\" fill=\"#b22234\"/><rect y=\"18.46\" width=\"30\" height=\"1.54\" fill=\"#b22234\"/><rect width=\"12\" height=\"10.77\" fill=\"#3c3b6e\"/><circle cx=\"1.8\" cy=\"1.6\" r=\".5\" fill=\"#fff\"/><circle cx=\"4.4\" cy=\"1.6\" r=\".5\" fill=\"#fff\"/><circle cx=\"7.0\" cy=\"1.6\" r=\".5\" fill=\"#fff\"/><circle cx=\"9.6\" cy=\"1.6\" r=\".5\" fill=\"#fff\"/><circle cx=\"1.8\" cy=\"4.0\" r=\".5\" fill=\"#fff\"/><circle cx=\"4.4\" cy=\"4.0\" r=\".5\" fill=\"#fff\"/><circle cx=\"7.0\" cy=\"4.0\" r=\".5\" fill=\"#fff\"/><circle cx=\"9.6\" cy=\"4.0\" r=\".5\" fill=\"#fff\"/><circle cx=\"1.8\" cy=\"6.4\" r=\".5\" fill=\"#fff\"/><circle cx=\"4.4\" cy=\"6.4\" r=\".5\" fill=\"#fff\"/><circle cx=\"7.0\" cy=\"6.4\" r=\".5\" fill=\"#fff\"/><circle cx=\"9.6\" cy=\"6.4\" r=\".5\" fill=\"#fff\"/><circle cx=\"1.8\" cy=\"8.8\" r=\".5\" fill=\"#fff\"/><circle cx=\"4.4\" cy=\"8.8\" r=\".5\" fill=\"#fff\"/><circle cx=\"7.0\" cy=\"8.8\" r=\".5\" fill=\"#fff\"/><circle cx=\"9.6\" cy=\"8.8\" r=\".5\" fill=\"#fff\"/>", "Italy": "<rect width=\"10\" height=\"20\" fill=\"#009246\"/><rect x=\"10\" width=\"10\" height=\"20\" fill=\"#fff\"/><rect x=\"20\" width=\"10\" height=\"20\" fill=\"#ce2b37\"/>", "United Kingdom": "<rect width=\"30\" height=\"20\" fill=\"#012169\"/><path d=\"M0 0L30 20M30 0L0 20\" stroke=\"#fff\" stroke-width=\"3.4\"/><path d=\"M0 0L30 20M30 0L0 20\" stroke=\"#c8102e\" stroke-width=\"1.2\"/><path d=\"M15 0V20M0 10H30\" stroke=\"#fff\" stroke-width=\"5.4\"/><path d=\"M15 0V20M0 10H30\" stroke=\"#c8102e\" stroke-width=\"3.2\"/>", "South Korea": "<rect width=\"30\" height=\"20\" fill=\"#fff\"/><path d=\"M11 10a4 4 0 0 1 8 0z\" fill=\"#cd2e3a\"/><path d=\"M19 10a4 4 0 0 1-8 0z\" fill=\"#0047a0\"/><g transform=\"translate(5 4.5) rotate(-35)\"><rect x=\"-2.2\" y=\"-1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"0.0\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/></g><g transform=\"translate(25 4.5) rotate(35)\"><rect x=\"-2.2\" y=\"-1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"0.0\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/></g><g transform=\"translate(5 15.5) rotate(35)\"><rect x=\"-2.2\" y=\"-1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"0.0\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/></g><g transform=\"translate(25 15.5) rotate(-35)\"><rect x=\"-2.2\" y=\"-1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"0.0\" width=\"4.4\" height=\".75\" fill=\"#000\"/><rect x=\"-2.2\" y=\"1.3\" width=\"4.4\" height=\".75\" fill=\"#000\"/></g>", "Sweden": "<rect width=\"30\" height=\"20\" fill=\"#006aa7\"/><rect x=\"9\" width=\"3.6\" height=\"20\" fill=\"#fecc00\"/><rect y=\"8.2\" width=\"30\" height=\"3.6\" fill=\"#fecc00\"/>", "France": "<rect width=\"10\" height=\"20\" fill=\"#0055a4\"/><rect x=\"10\" width=\"10\" height=\"20\" fill=\"#fff\"/><rect x=\"20\" width=\"10\" height=\"20\" fill=\"#ef4135\"/>", "China": "<rect width=\"30\" height=\"20\" fill=\"#de2910\"/><polygon fill=\"#ffde00\" points=\"5.00,2.20 5.67,4.27 7.85,4.27 6.09,5.55 6.76,7.63 5.00,6.35 3.24,7.63 3.91,5.55 2.15,4.27 4.33,4.27\"/><polygon fill=\"#ffde00\" points=\"10.94,1.66 10.37,2.11 10.62,2.79 10.01,2.38 9.44,2.83 9.64,2.13 9.04,1.72 9.76,1.70 9.97,1.00 10.21,1.68\"/><polygon fill=\"#ffde00\" points=\"12.98,4.37 12.27,4.47 12.14,5.19 11.82,4.54 11.10,4.64 11.62,4.13 11.31,3.48 11.95,3.82 12.47,3.32 12.34,4.03\"/><polygon fill=\"#ffde00\" points=\"13.00,6.91 12.33,7.20 12.39,7.92 11.91,7.37 11.25,7.66 11.62,7.03 11.14,6.48 11.85,6.65 12.22,6.03 12.29,6.75\"/><polygon fill=\"#ffde00\" points=\"10.97,8.94 10.36,9.34 10.54,10.04 9.98,9.58 9.37,9.98 9.63,9.30 9.07,8.84 9.79,8.88 10.05,8.20 10.24,8.90\"/>", "India": "<rect width=\"30\" height=\"6.67\" fill=\"#ff9933\"/><rect y=\"6.67\" width=\"30\" height=\"6.67\" fill=\"#fff\"/><rect y=\"13.33\" width=\"30\" height=\"6.67\" fill=\"#138808\"/><circle cx=\"15\" cy=\"10\" r=\"2.3\" fill=\"none\" stroke=\"#000080\" stroke-width=\".45\"/><circle cx=\"15\" cy=\"10\" r=\".5\" fill=\"#000080\"/>", "Spain": "<rect width=\"30\" height=\"20\" fill=\"#aa151b\"/><rect y=\"5\" width=\"30\" height=\"10\" fill=\"#f1bf00\"/>", "Czech Republic": "<rect width=\"30\" height=\"10\" fill=\"#fff\"/><rect y=\"10\" width=\"30\" height=\"10\" fill=\"#d7141a\"/><path d=\"M0 0L15 10L0 20z\" fill=\"#11457e\"/>", "Malaysia": "<rect width=\"30\" height=\"20\" fill=\"#fff\"/><rect y=\"0.00\" width=\"30\" height=\"1.43\" fill=\"#cc0001\"/><rect y=\"2.86\" width=\"30\" height=\"1.43\" fill=\"#cc0001\"/><rect y=\"5.71\" width=\"30\" height=\"1.43\" fill=\"#cc0001\"/><rect y=\"8.57\" width=\"30\" height=\"1.43\" fill=\"#cc0001\"/><rect y=\"11.43\" width=\"30\" height=\"1.43\" fill=\"#cc0001\"/><rect y=\"14.29\" width=\"30\" height=\"1.43\" fill=\"#cc0001\"/><rect y=\"17.14\" width=\"30\" height=\"1.43\" fill=\"#cc0001\"/><rect width=\"15\" height=\"11.43\" fill=\"#010066\"/><circle cx=\"5.6\" cy=\"5.7\" r=\"3.2\" fill=\"#fc0\"/><circle cx=\"6.6\" cy=\"5.7\" r=\"2.6\" fill=\"#010066\"/><polygon fill=\"#fc0\" points=\"10.40,3.80 10.83,5.11 12.21,5.11 11.09,5.92 11.52,7.24 10.40,6.43 9.28,7.24 9.71,5.92 8.59,5.11 9.97,5.11\"/>", "Romania": "<rect width=\"10\" height=\"20\" fill=\"#002b7f\"/><rect x=\"10\" width=\"10\" height=\"20\" fill=\"#fcd116\"/><rect x=\"20\" width=\"10\" height=\"20\" fill=\"#ce1126\"/>", "Russia": "<rect width=\"30\" height=\"6.67\" fill=\"#fff\"/><rect y=\"6.67\" width=\"30\" height=\"6.67\" fill=\"#0039a6\"/><rect y=\"13.33\" width=\"30\" height=\"6.67\" fill=\"#d52b1e\"/>", "Croatia": "<rect width=\"30\" height=\"6.67\" fill=\"#f00\"/><rect y=\"6.67\" width=\"30\" height=\"6.67\" fill=\"#fff\"/><rect y=\"13.33\" width=\"30\" height=\"6.67\" fill=\"#171796\"/><rect x=\"12\" y=\"5\" width=\"6\" height=\"7.6\" fill=\"#fff\" stroke=\"#f00\" stroke-width=\".5\"/><rect x=\"12.3\" y=\"5.3\" width=\"1.8\" height=\"1.8\" fill=\"#f00\"/><rect x=\"15.9\" y=\"5.3\" width=\"1.8\" height=\"1.8\" fill=\"#f00\"/><rect x=\"14.1\" y=\"7.1\" width=\"1.8\" height=\"1.8\" fill=\"#f00\"/><rect x=\"12.3\" y=\"8.9\" width=\"1.8\" height=\"1.8\" fill=\"#f00\"/><rect x=\"15.9\" y=\"8.9\" width=\"1.8\" height=\"1.8\" fill=\"#f00\"/><rect x=\"14.1\" y=\"10.7\" width=\"1.8\" height=\"1.8\" fill=\"#f00\"/>"};
  FL['Vietnam']="<rect width=\"30\" height=\"20\" fill=\"#da251d\"/><polygon fill=\"#ffff00\" points=\"15.00,4.20 16.39,8.48 20.90,8.48 17.25,11.13 18.64,15.42 15.00,12.77 11.36,15.42 12.75,11.13 9.10,8.48 13.61,8.48\"/>";
  FL['Iran']="<rect width=\"30\" height=\"6.67\" fill=\"#239f40\"/><rect y=\"6.67\" width=\"30\" height=\"6.67\" fill=\"#fff\"/><rect y=\"13.33\" width=\"30\" height=\"6.67\" fill=\"#da0000\"/><circle cx=\"15\" cy=\"10\" r=\"2.1\" fill=\"none\" stroke=\"#da0000\" stroke-width=\".8\"/>";
  FL['Netherlands']="<rect width=\"30\" height=\"6.67\" fill=\"#ae1c28\"/><rect y=\"6.67\" width=\"30\" height=\"6.67\" fill=\"#fff\"/><rect y=\"13.33\" width=\"30\" height=\"6.67\" fill=\"#21468b\"/>";
  window.CV_FLAG=function(n){return FL[n]?'<svg class="flg" viewBox="0 0 30 20" aria-hidden="true">'+FL[n]+'</svg>':''};
  BRANDS.sort(function(x,y){return x.localeCompare(y)});
  var COMPANIES=["Aston Martin", "AvtoVAZ", "BAIC Group", "Bentley Motors", "BMW Group", "BYD", "Changan Automobile", "Chery", "Dongfeng Motor", "FAW Group", "Ferrari", "Ford Motor Company", "GAC Group", "Geely", "General Motors", "Great Wall Motor", "Honda", "Hyundai Motor Group", "Iran Khodro", "Isuzu Motors", "Jaguar Land Rover", "Koenigsegg", "Lamborghini", "Li Auto", "Lucid Motors", "Mahindra & Mahindra", "Maserati", "Mazda", "McLaren", "Mercedes-Benz Group", "Mitsubishi Motors", "NIO", "Nissan", "Porsche", "Proton", "Renault Group", "Rimac", "Rivian", "Rolls-Royce Motor Cars", "SAIC Motor", "Stellantis", "Subaru Corporation", "Suzuki Motor Corporation", "Tata Motors", "Tesla", "Toyota", "VinFast", "Volkswagen Group", "Volvo Cars", "XPeng"];
  var cfg={
    brand:{items:BRANDS,label:"Brand",ph:"Search brands...",all:"All Brands"},
    category:{items:CATS,label:"Car Category",ph:"Search categories...",all:"All Categories"},
    powertrain:{items:["Petrol","Diesel","Hybrid","Plug-in Hybrid","Mild Hybrid","Electric"],label:"Powertrain",ph:"Search powertrains...",all:"All Powertrains"},
    year:{items:["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2008", "2007", "2005", "2002", "1987", "1977"],label:"Year",ph:"Search year...",all:"All Years"},
    country:{items:["Japan","Germany","United States","Italy","United Kingdom","South Korea","Sweden","France","China","India","Spain","Czech Republic","Malaysia","Romania","Russia","Croatia","Vietnam","Iran"],label:"Country / Origin",ph:"Search countries...",all:"All Countries"},
    company:{items:COMPANIES,label:"Company",ph:"Search companies...",all:"All Companies"}
  };
  var panels={},openKey=null,input=document.querySelector('.search input');

  function build(key){
    var c=cfg[key],chip=document.querySelector('.chip[data-dd="'+key+'"]');
    var p=document.createElement('div');p.className='ddp';if(key==='powertrain'||key==='year'||key==='country')p.style.width='280px';if(key==='brand'||key==='company')p.classList.add('single');
    p.innerHTML='<input type="text" placeholder="'+c.ph+'" autocomplete="off"><div class="cnt"></div><ul></ul>';
    document.body.appendChild(p);
    var f=p.querySelector('input'),ul=p.querySelector('ul'),cnt=p.querySelector('.cnt');
    function render(q){
      q=(q||'').toLowerCase();ul.innerHTML='';
      var list=c.items.filter(function(n){return n.toLowerCase().indexOf(q)>-1});
      cnt.textContent=list.length+' of '+c.items.length;
      if(!q){var a=document.createElement('li');a.textContent=c.all;a.dataset.v='';ul.appendChild(a)}
      list.forEach(function(n,idx){
        var li=document.createElement('li');if(key==='country')li.innerHTML=window.CV_FLAG(n)+n;else li.textContent=n;li.dataset.v=n;if(chip.dataset.val===n)li.className='sel';ul.appendChild(li)});
      if(!list.length){var x=document.createElement('li');x.className='none';x.textContent='No match found';ul.appendChild(x)}
    }
    f.addEventListener('input',function(){render(f.value)});
    ul.addEventListener('click',function(e){
      var li=e.target.closest('li');if(!li||li.classList.contains('none')||li.classList.contains('hd'))return;
      var v=li.dataset.v;chip.dataset.val=v;
      if(key==='country'&&v)chip.querySelector('.lbl').innerHTML=window.CV_FLAG(v)+c.label+': '+v;else chip.querySelector('.lbl').textContent=v?c.label+': '+v:c.label;
      chip.classList.toggle('picked',!!v);
      if(v&&key==='brand'&&input)input.value=v;
      window.dispatchEvent(new CustomEvent('cv:pick',{detail:{key:key,v:v}}));
      close();
    });
    panels[key]={el:p,chip:chip,render:render,filter:f};
    render('');
  }
  function place(key){
    var o=panels[key],r=o.chip.getBoundingClientRect(),el=o.el,ul=el.querySelector('ul');
    var w=el.offsetWidth;
    var left=Math.min(Math.max(12,r.left),window.innerWidth-w-12);
    el.style.left=left+'px';
    var below=window.innerHeight-r.bottom-20,above=r.top-20,useBelow=below>=Math.min(420,above)||below>=above;
    var avail=(useBelow?below:above)-90;
    ul.style.setProperty('--ddh',Math.max(160,Math.min(avail,520))+'px');
    if(useBelow){el.style.bottom='auto';el.style.top=(r.bottom+8)+'px'}
    else{el.style.top='auto';el.style.bottom=(window.innerHeight-r.top+8)+'px'}
  }
  function close(){
    if(!openKey)return;
    panels[openKey].el.classList.remove('show');panels[openKey].chip.classList.remove('open');openKey=null;
  }
  function open(key){
    close();openKey=key;var o=panels[key];
    o.filter.value='';o.render('');o.el.classList.add('show');place(key);
    o.chip.classList.add('open');
    if(window.innerWidth>700)o.filter.focus();
  }
  Object.keys(cfg).forEach(build);
  Object.keys(panels).forEach(function(k){
    panels[k].chip.addEventListener('click',function(e){e.stopPropagation();if(k==='country'){close();if(window.cvGoOrigins)window.cvGoOrigins();return}openKey===k?close():open(k)});
    panels[k].el.addEventListener('click',function(e){e.stopPropagation()});
  });
  document.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  window.addEventListener('resize',function(){if(openKey)place(openKey)});
  window.addEventListener('scroll',close,{passive:true});
})();
