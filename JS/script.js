function countDown(){

  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");

currentDate = new Date();
 console.log(currentDate);

currentYear = new Date().getFullYear();
 console.log(currentYear);

 console.log("Next Year :" ,currentYear+1);

 const newYear = new Date(`01 january  ${currentYear+1} 00:00:00`);  //mentioning New Year Date
 console.log(newYear);

const difference = newYear - currentDate;
 console.log(difference);   //1735732797976 milli second

const d = Math.floor(difference/1000/60/60/24);  //logic for coverting ms to days
 console.log("DAYS :" , d , " days");

const h = Math.floor((difference/1000/60/60)%24);
 console.log("HOURS : " , h , " hours");

const m =Math.floor((difference/1000/60)%60);
 console.log("MINUTES : " , m ," minutes");

const s = Math.floor((difference/1000)%60);
 console.log("SECONDS : ",s," seconds");

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h; 
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
 

}



// countDown();

setInterval(countDown,1000);




