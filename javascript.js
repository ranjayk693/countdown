const newDate = "01 January 2024 12:00 AM";
document.getElementById("end-date").innerHTML = newDate;

const updateDate = document.querySelectorAll("input");
const time = () => {
  const end = new Date(newDate);
  const now = new Date();
  let differnce = (end - now) / 1000; //it will converted into hour
  if (differnce < 0) return;
  updateDate[0].value = Math.floor(differnce / 3600 / 24);
  updateDate[1].value = Math.floor(differnce / 3600) % 24;
  updateDate[2].value = Math.floor(differnce / 60) % 60;
  updateDate[3].value = Math.floor(differnce % 60);

  //seting to date

  //   console.log("end date:  ", end);
  //   console.log("today date:  ", now);
  //   console.log("differnce time:  ", (end - now)/1000/60/60);
};

setInterval(() => time(), 1000);
// time();
