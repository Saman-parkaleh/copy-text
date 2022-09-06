var text=document.getElementById('textarea');
 var btn=document.getElementById('btn');


btn.addEventListener('click',()=> {
text.select();

var textvalue=text.value;

navigator.clipboard.writeText(textvalue);
btn.innerText='درحال کپی شدن'

btn.style.background='rgb(264, 00, 00)'
setTimeout(() => {
    btn.innerText='کپی کن';
    
    btn.style.background='aqua'
}, 1500);

})

 