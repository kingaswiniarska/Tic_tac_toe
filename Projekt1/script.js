let graczKrzyzyk=true;
let licznik=0;
const kolor='#d21841';
const przyciski=document.querySelectorAll('.przyciskGry');
console.log(przyciski);
const info=document.getElementById('infoGry');
 
info.textContent='Aktualnie gra:X';
 
przyciski.forEach(function(przycisk){
    przycisk.addEventListener('click',function(){
    console.log('kliknięto')
      wstawZnak(przycisk);
    });
});
 
function wstawZnak(przycisk){
  if (graczKrzyzyk){
    przycisk.textContent="X";
    graczKrzyzyk=false;
    info.textContent='Aktualnie gra:O';
  }else{
    przycisk.textContent="O";
    graczKrzyzyk=true;
    info.textContent='Aktualnie gra:X';}
  przycisk.disabled=true;
  sprawdzWygrana();
}
 
function sprawdzWygrana(){
  licznik++;
 if(przyciski[0].textContent==przyciski[1].textContent && przyciski[1].textContent==przyciski[2].textContent &&przyciski[1].textContent!=''){
   przyciski[0].style.color=kolor;
   przyciski[1].style.color=kolor;
   przyciski[2].style.color=kolor;
   wygrana();
 }else if(przyciski[3].textContent==przyciski[4].textContent && przyciski[3].textContent==przyciski[5].textContent && przyciski[4].textContent!=''){
   przyciski[3].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[5].style.color=kolor;
   wygrana();
  }else if(przyciski[6].textContent==przyciski[7].textContent && przyciski[7].textContent==przyciski[8].textContent && przyciski[7].textContent!=''){
   przyciski[6].style.color=kolor;
   przyciski[7].style.color=kolor;
   przyciski[8].style.color=kolor;
   wygrana();
  }else if(przyciski[0].textContent==przyciski[3].textContent && przyciski[3].textContent==przyciski[6].textContent && przyciski[3].textContent!=''){
   przyciski[0].style.color=kolor;
   przyciski[3].style.color=kolor;
   przyciski[6].style.color=kolor;
   wygrana();
  }else if(przyciski[1].textContent==przyciski[4].textContent && przyciski[4].textContent==przyciski[7].textContent && przyciski[4].textContent!=''){
   przyciski[1].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[7].style.color=kolor;
   wygrana();
  }else if(przyciski[2].textContent==przyciski[5].textContent && przyciski[5].textContent==przyciski[8].textContent && przyciski[5].textContent!=''){
   przyciski[2].style.color=kolor;
   przyciski[5].style.color=kolor;
   przyciski[8].style.color=kolor;
   wygrana();
  }else if(przyciski[0].textContent==przyciski[4].textContent && przyciski[4].textContent==przyciski[8].textContent && przyciski[8].textContent!=''){
   przyciski[0].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[8].style.color=kolor;
   wygrana();
  }else if(przyciski[2].textContent==przyciski[4].textContent && przyciski[4].textContent==przyciski[6].textContent &&        przyciski[4].textContent!=''){
   przyciski[2].style.color=kolor;
   przyciski[4].style.color=kolor;
   przyciski[6].style.color=kolor;
   wygrana();
  }else if(licznik==9){
    info.textContent='remis!';
  }
}
 
function wygrana(){
  przyciski.forEach(function(przycisk){
      przycisk.disabled=true;
     przycisk.classList.remove('hover');
    console.log('usuwam');
});
  if (graczKrzyzyk){
    info.textContent='wygrywa kółko';
  }else{
    info.textContent='wygrywa krzyżyk!';
  }
}