

let api = "ema_live_3PXfxxodXImPNmhQ4tnjqYVCERPyR0sOvKZpvgcT";

let email = document.querySelector("#email");
let btn = document.querySelector("#btn");
let resultcon = document.querySelector("#resultcon");
let loading = document.querySelector("#loading")
let p = document.querySelector("#resultcon p");

let str = ""
btn.addEventListener("click",async(e)=>{
    e.preventDefault();
        p.remove()
        loading.src="img/loading.svg";
        let value = email.value;
        console.log(value)
    let fetched = await fetch(`https://api.emailvalidation.io/v1/info?apikey=${api}&email=${value}`)
    let data = await fetched.json();

  for (const key of Object.keys(data)) {
    if(data[key]!==""&& data[key]!==" "){
        str = str + `<div>${key}:${data[key]}`
    }
    
}
    loading.src="";
    resultcon.innerHTML = str;


})




