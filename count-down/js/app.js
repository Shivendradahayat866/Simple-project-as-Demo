const endDate="26 jun 2028 12:00:00 AM" //new Date()  .toLocaleTimeString()   .toLocaleString()  

document.getElementById("end-date").innerText=endDate;

const inputs = document.querySelectorAll("input")

function clock(){
    const end= new Date(endDate)
    const now= new Date()
    const diff = (end-now)/1000;
    // console.log(diff);
     
    if(diff<0){
        let text = document.getElementById("end-date");
        text.innerText = "Sorry! your Time is Out! Your in let ";
        text.style.color ="red"
        return;
    }
    inputs[0].value = Math.floor(diff/ 3600 / 365 / 24)
    inputs[1].value = Math.floor(diff / 3600 / 24)
    inputs[2].value = Math.floor((diff / 3600)% 24)
    inputs[3].value = Math.floor((diff / 60) %60 )
    inputs[4].value = Math.floor(diff)% 60
    

}
//initial call

// clock()

setInterval(
    function (){
        clock()
    },1000
)