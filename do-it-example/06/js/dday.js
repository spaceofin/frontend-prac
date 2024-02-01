// 계산해야 하는 값
// 오늘까지, 100, 200, 365, 500

function handler(e){
    alert(e.target.value);
}

function structDay(day){
    this.year = day.getFullYear();
    this.month = day.getMonth()+1;
    this.date = day.getDate();

    return this.year + "년 " + this.month + "월 " + this.date + "일" 
}

function calcDays(startDate){

    this.oneDayMS = 1000*60*60*24;

    var now = new Date().getTime(); // 현재 날짜를 밀리초로 바꿉니다.
    this.startDate = new Date(startDate).getTime(); // 시작 날을 밀리초로 바꿉니다. 

    this.gap = Math.trunc((now - this.startDate)/this.oneDayMS);

    this.day100 = structDay(new Date(this.startDate + 100*this.oneDayMS));
    this.day200 = structDay(new Date(this.startDate + 200*this.oneDayMS));
    this.day365 = structDay(new Date(this.startDate + 365*this.oneDayMS));
    this.day500 = structDay(new Date(this.startDate + 500*this.oneDayMS));

}

//var days = new calcDays('2022-05-01');
//var days = new calcDays(document.querySelector('#sDate').value);
//document.querySelector('#date100').innerText = year + "년 " + month + "월 " + date + "일";
// document.querySelector('#toToday').innerText = days.gap+'일';
// document.querySelector('#date100').innerText = days.day100;
// document.querySelector('#date200').innerText = days.day200;
// document.querySelector('#date365').innerText = days.day365;
// document.querySelector('#date500').innerText = days.day500;


function setDate(){
    var days = new calcDays(document.querySelector('#sDate').value);

    document.querySelector('#toToday').innerText = days.gap+'일';
    document.querySelector('#date100').innerText = days.day100;
    document.querySelector('#date200').innerText = days.day200;
    document.querySelector('#date365').innerText = days.day365;
    document.querySelector('#date500').innerText = days.day500;

}
