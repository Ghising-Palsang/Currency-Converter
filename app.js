BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";

const dropdowns = document.querySelectorAll(".select-dropdown");
const btn = document.querySelector("button");
const fromCurr = document.querySelector("#from");
const toCurr = document.querySelector("#to");
const msg = document.querySelector(".msg");



for (let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "NPR"){
            newOption.selected = "selected";
        }
        select.append(newOption)
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })

    const updateFlag = (element) =>{
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
       let img =  element.parentElement.querySelector("img");
        img.src = newSrc;
    }
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();

    let amount = document.querySelector(".amount-placeholder");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    
   
    
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

   let response = await fetch(URL);
   let data = await response.json();
   let rate = data[toCurr.value.toLowerCase()];

   let finalAmt = amount * rate;
   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt}${toCurr/value}`;
   
})

//Final Note : The API DOESNOT WORK. SO CODE DOESNOT RUN AS INTENDED. THOUGH the CONCEPTS WERE HELPFUL.

