document.addEventListener('DOMContentLoaded',()=>{const a=document.getElementById("WhoAmI"),b=["Pterodactyl Dev","WebDeveloper","UI/UX Designer","Software Developer","System Admin","Neural Networks Expert","Pentester","php dumbass","Data Scientist"];let c=0,d=0,e=!1,f=100,g=50,h=1000;function i(){let j=b[c].toLowerCase();document.getElementById("idk").textContent=j.startsWith("e")||j.startsWith("a")?"an":"a";if(d<b[c].length){a.textContent+=b[c].charAt(d),a.style.animation="typing 0.1s ease-out",d++,setTimeout(i,f)}else setTimeout(k,h)}
function l(){d>0?(a.textContent=b[c].substring(0,d-1),a.style.animation="erasing 0.1s ease-out",d--,setTimeout(l,g)):(c=(c+1)%b.length,setTimeout(i,f))}
function k(){e=!0,l()}
i()})
