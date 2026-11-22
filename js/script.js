/* =====  Wedding invitation – behaviour  =====
   EDIT THIS: wedding date (T) and WhatsApp number (WA)  */
var T=new Date("2027-04-24T19:00:00+05:30");
var WA="910000000000"; // country code + number, no + or spaces

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("on")})},{threshold:.4});
document.querySelectorAll(".s").forEach(function(s){io.observe(s)});
for(var i=0;i<24;i++){var st=document.createElement("i");st.className="star";st.style.left=Math.random()*100+"%";st.style.top=Math.random()*100+"%";st.style.animationDelay=Math.random()*2.5+"s";document.getElementById(i%2?"s1":"s3").appendChild(st)}
var wall=document.getElementById("wall");
["","",""].forEach(function(c,i){
var f=document.createElement("div");f.className="fr";
f.innerHTML='<div class="ph"><img src="images/Couple-'+(i+1)+'.jpg" alt="'+c+'" style="width:100%;height:100%;object-fit:cover" onerror="this.remove()"></div><p>'+c+'</p>';wall.appendChild(f)});
function tick(){
var d=T-new Date(), el=document.getElementById("cd");
if(d<=0){el.textContent="Today we celebrate! ॐ";return}
var s=Math.floor(d/1000);
el.textContent=Math.floor(s/86400)+" days · "+Math.floor(s%86400/3600)+" hrs · "+Math.floor(s%3600/60)+" min · "+(s%60)+" sec";
}
tick();setInterval(tick,1000);
document.getElementById("send").onclick=function(){
var t="Hi! RSVP for the wedding%0AName: "+encodeURIComponent(n.value)+"%0A"+encodeURIComponent(a.value)+"%0AGuests: "+g.value;
window.open("https://wa.me/"+WA+"?text="+t,"_blank")};
