var sem = document.getElementsByTagName("input");
var butt = document.querySelector("button");
let h = document.getElementsByTagName("span");
let h6 = document.getElementsByTagName("h6");
let p = document.getElementsByTagName("p");
// console.log(sem)
var day;
var month;
var year;
var boolDay = false;
var boolMonth = false;
var boolYear = false;
// 
// console.log(date)
function getDate(){
    let mek;
    let maxDay;
    let maxDate = [maxDay, 12, 2024];
    var date = new Date();
    var dateYear = date.getFullYear();
    var dateMonth = date.getMonth();
    var dateDay = date.getDay();
    for(let i = 0; i < sem.length; i++){
        let dateArr = [dateDay, dateMonth, dateYear]
        console.log(dateArr[i])
        if(dateMonth == 0|2|4|6|7|9|11){
            maxDate[0] = 31;
            // console.log(maxDay)

        }else if(dateMonth == 1){
            maxDate[0] = 28
        }else{
            maxDate[0] = 30
        }
        if(sem[i].value > dateArr[i]){
            mek = (sem[i].value - dateArr[i])
            // console.log(mek)
            h[i].innerText = mek;
        }else{
            mek = dateArr[i] - sem[i].value
            h[i].innerText = mek;
        }
        // mek = 0
    }
}
butt.addEventListener("click", ()=>{
    for(let i = 0; i < sem.length; i++){
        let mes = sem[i].value
        if(mes != "" && i == 0 && mes < 33){
            boolDay = true
        }else if(i < 1){
            boolDay = false

        }
        if(mes != "" && i == 1 && mes < 13){
            boolMonth= true
        }else if(i < 2){
            boolMonth = false
        }
        if(mes != "" && i == 2 && mes < 2024){
            boolYear = true
        }else if(i < 3){
            boolYear = false
        }
        if(boolDay && boolMonth && boolYear){
            getDate()
            for(let j = 0; j < sem.length; j++){
                // h[j].innerText = sem[j].value;
                sem[j].style.border = 1 + "px black solid"
                h6[j].innerText = ""
                p[j].style.color = "black"
                // console.log(mes)
            }
             
        }else{
            h[i].innerText = "-- ";
            sem[i].style.border = 1 + "px red solid"
            h6[i].innerText = "INVALID INPUT"
            p[i].style.color = "red"
        }
        if(boolDay || boolMonth || boolYear){
            let bool = [boolDay, boolMonth, boolYear]
            for(let k = 0; k < 3; k++){
                if(bool[k] && k == i){
                    // h[k].innerText = sem[k].value;
                    sem[k].style.border = 1 + "px black solid"
                    h6[k].innerText = ""
                    p[k].style.color = "black"
                    // console.log(k)
                }
                
            }
        }
        // console.log(mes)
    }


})
butt.addEventListener("touchstart", ()=>{
    for(let i = 0; i < sem.length; i++){
        let mes = sem[i].value
        if(mes != "" && i == 0 && mes < 33){
            boolDay = true
        }else if(i < 1){
            boolDay = false

        }
        if(mes != "" && i == 1 && mes < 13){
            boolMonth= true
        }else if(i < 2){
            boolMonth = false
        }
        if(mes != "" && i == 2 && mes < 2024){
            boolYear = true
        }else if(i < 3){
            boolYear = false
        }
        if(boolDay && boolMonth && boolYear){
            getDate()
            for(let j = 0; j < sem.length; j++){
                // h[j].innerText = sem[j].value;
                sem[j].style.border = 1 + "px black solid"
                h6[j].innerText = ""
                p[j].style.color = "black"
                // console.log(mes)
            }
             
        }else{
            h[i].innerText = "-- ";
            sem[i].style.border = 1 + "px red solid"
            h6[i].innerText = "INVALID INPUT"
            p[i].style.color = "red"
        }
        if(boolDay || boolMonth || boolYear){
            let bool = [boolDay, boolMonth, boolYear]
            for(let k = 0; k < 3; k++){
                if(bool[k] && k == i){
                    // h[k].innerText = sem[k].value;
                    sem[k].style.border = 1 + "px black solid"
                    h6[k].innerText = ""
                    p[k].style.color = "black"
                    // console.log(k)
                }
                
            }
        }
        // console.log(mes)
    }


})

