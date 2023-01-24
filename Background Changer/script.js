const getcolor=()=>{
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode = "#" + randomnumber.toString(16);
   console.log(randomcode);
   document.body.style.backgroundColor=randomcode;
   document.getElementById("hash-color").innerText=randomcode;
}
document.getElementById('btn').addEventListener("click",getcolor);