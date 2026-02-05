function myTime() {             /*名为myTime()。它的作用是获取当前时间，并将小时、分钟和秒数分别显示在页面上的元素中。*/
    let time = new Date();      /*创建了一个Date对象，用于获取当前时间*/
    let hh = time.getHours();   /*时*/
    let mm = time.getMinutes(); /*分*/
    let ss = time.getSeconds(); /*秒*/
    /*使用document.getElementById()方法获取页面上的元素，并使用innerText属性将对应的数字显示在这些元素中*/
    document.getElementById("1").innerText = Math.floor(hh / 10);
    document.getElementById("2").innerText = hh % 10;
    document.getElementById("4").innerText = Math.floor(mm / 10);
    document.getElementById("5").innerText = mm % 10;
    document.getElementById("7").innerText = Math.floor(ss / 10);
    document.getElementById("8").innerText = ss % 10;
}

setInterval(myTime, 1000);/*代码使用setInterval()函数来定时执行myTime()函数，每隔1000毫秒（即1秒）执行一次*/