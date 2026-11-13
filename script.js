(function(){
var h=document.querySelector('.hero');
h.addEventListener('pointermove',function(e){var r=h.getBoundingClientRect();h.style.setProperty('--mx',(e.clientX-r.left)+'px');h.style.setProperty('--my',(e.clientY-r.top)+'px')});
var p=document.createElement('div');p.id='prog';document.body.prepend(p);
addEventListener('scroll',function(){var d=document.documentElement;p.style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight)*100)+'%'},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting)x.target.classList.add('in')})},{threshold:.3});
document.querySelectorAll('.skills').forEach(function(el){io.observe(el)});
var cards=[].slice.call(document.querySelectorAll('#pg .card')),cats=['design','app','team'],bs=document.querySelectorAll('.filters button');
bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(x){x.setAttribute('aria-pressed',x===b)});cards.forEach(function(c,i){c.hidden=!(b.dataset.f==='all'||cats[i]===b.dataset.f)})})});
var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.zoom').forEach(function(z){z.addEventListener('click',function(){var im=z.querySelector('img');li.src=im.src;li.alt=im.alt;lb.showModal()})});
lb.addEventListener('click',function(e){if(e.target===lb||e.target.className==='close')lb.close()});
document.getElementById('cf').addEventListener('submit',function(e){e.preventDefault();var f=e.target;location.href='mailto:you@example.com?subject='+encodeURIComponent('Portfolio message from '+f.n.value)+'&body='+encodeURIComponent(f.m.value)});
})();