const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
//ALL SELECTOR
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

window.addEventListener("load", ()=>{
  updateExchangerate();
})

//function to load all countries
for(let select of dropdowns){
     for(currCode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currCode;
        newoption.value=currCode;
        if(select.name === "from" && currCode==="USD"){
            newoption.selected="selected";
        }
        else if(select.name === "to" && currCode==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
     }
     select.addEventListener("change", (evt)=>{
        updateflag(evt.target);
     });
}

const updateflag=(element)=>{
   let currCode=element.value;
   let countrycode=countryList[currCode];
   let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
   let img=element.parentElement.querySelector("img");
   img.src=newsrc;
};

btn.addEventListener("click",(evt)=>{
   evt.preventDefault();
  updateExchangerate();

});

const updateExchangerate=async ()=>{
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval ==="" || amtval<1){
     amtval=1;
     amount.value="1";
    }
    //console.log(fromcurr.value,tocurr.value);
    const url=`${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data= await response.json();
    let rate=data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
    let finalamount=amtval*rate;
    msg.innerText=`${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
}