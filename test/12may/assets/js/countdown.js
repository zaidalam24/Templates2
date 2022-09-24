function countDownTimer(date) {
  var elem = $('#countDown');
 
 //$( "p" ).add( "div" ).addClass( "widget" );
  var futureTime = new Date(date).getTime();

  setInterval(function() { 
    // Time left between future and current time in Seconds
    var timeLeft = Math.floor( (futureTime - new Date().getTime()) / 1000 );
    // console.log(timeLeft);
    
    // Days left = time left / Seconds per Day 
    var days =  Math.floor(timeLeft / 86400);
    // console.log(days);
    
    // 86400 seconds per Day
    timeLeft -= days * 86400;
    // console.log(timeLeft);
    
    // Hours left = time left / Seconds per Hour
    var hours = Math.floor(timeLeft / 3600) % 24;
    // console.log(hours);

    // 3600 seconds per Hour
    timeLeft -= hours * 3600;
    // console.log(timeLeft);
    
    // Minutes left = time left / Minutes per Hour
    var min = Math.floor(timeLeft / 60) % 60;
    // console.log(min);
    
    // 60 seconds per minute
    timeLeft -= min * 60;
    // console.log(timeLeft);
    
    // Seconds Left
    var sec = timeLeft % 60;
    
    // Combined DAYS+HOURS+MIN+SEC
    var timeString = "<div class='fun-box'><div class='count-fact'><h1 class='days'>"+days+"</h1><h4>Days</h4></div></div>"+
                     "<div class='fun-box'><div class='count-fact'><h1 class='hours'>"+hours+"</h1><h4>Hours</h4></div></div>"+
                     "<div class='fun-box'><div class='count-fact'><h1 class='minutes'>"+min+"</h1><h4>Minutes</h4></div></div>"+
                     "<div class='fun-box'><div class='count-fact'><h1 class='seconds'>"+sec+"</h1><h4>Seconds</h4></div></div>";
                     
    elem.html(timeString);
    
  }, 1000);
}

// Enter date in this format: January 1, 2017 12:00:00
countDownTimer('May 17, 2020 09:00:00');