var startTime;
var showerTime = 0;
var timeInterval;
var timeIt;
var ch, cm, cs;
var min, sec;

function setup() {
  noCanvas();
}


function convertSeconds(s) {
  min = floor(s / 60);
  sec = s % 60;
  return min + 'm' + ' ' + nf(sec, 2) + 's';
}
//记录开始时的现实时间
function realTime() {
  function readTime() {
    ch = nf(hour(), 2);
    cm = nf(minute(), 2);
    cs = nf(second(), 2);
    return 'The time now is ' + ch + ":" + cm + ":" + cs;
  };
  var timenow = select('#timenow');
  timenow.html(readTime());
}
//开始timer
function startCounting() {
  //用url设置时间
  starTime = millis();
  var params = getURLParams();
  if (params.minute) {
    min = params.minute;
    showerTime = min * 60;
  }
  var timer = select('#timer');
  timer.html("You've been showering for" +convertSeconds(showerTime));

  timeInterval = setInterval(timeIt, 1000);

  function timeIt() {
    showerTime = floor((millis() / 1000));
    timer.html("You've been showering for" + convertSeconds(showerTime));
  }
}

//停止timer
function stopCounting() {
  clearInterval(timeInterval);
}
//story
function printNum() {
  console.log(ch, min + 1);
  document.getElementById("story").innerHTML = storyline()
}

function storyline() {
 if (ch<=3 || ch>23) {
   if (min<=10){
     return "Intension: Today will be an intense day. The anxiety might come from emotions deep down in your hears intead of daily stuff. Don’t be panic or impulsive, try to turn your negative thoughts into positive ones.";
   }
   if (10<min<=30){
     return "Courage: Your keyword for today is courage. It’s time to face some problems you've been always avoid. Face it and beat it.";
   }
   if (min>30){
     return "Peace: Peace is in your heart today. You are very calm and relax today. But don’t forget to absorb the energy of peace and move on.";
   }
 }
 if (3<ch<=7) {
   if (min<=10){
     return "Communication: Does work give you hard time today? Is there any problem that can be solved by communication? Try to have some conversations with your teammate or closed ones.";
   }
   if (10<min<=30){
     return "Choice: It's a good time to make a choice. Listen to your heart and dont' be affected by unimportant things.";
   }
   if (min>30){
     return "Delight: You will lead a delightful lifestyle, and be fulfilled by happiness. Just seize the good time and enjoy it.";
   }
 }
 if (7<ch<=10) {
   if (min<=10){
     return "Overwhelming: Today will be an overwhelming day. Progress is yet to come. But be patient since your lack of patience might ruin everything";
   }
   if (10<min<=30){
     return "Plan: A good day for having some deep thoughts about your future. Stop working on jumbled stuff and try to re-organize your life. Details of your life will give you hints";
   }
   if (min>30){
     return "New life: Your new life begins today even it might be without your notice. Be prepared, and embrace a new life.";
   }
 }
 if (10<ch<=18) {
   if (min<=10){
     return "Looking back: After all the work it's time now for you to look back. But don't deny your mistakes or bad memories, since your future will be brighter";
   }
   if (10<min<=30){
     return "Meditation: Time to meditate and let your heart talk to you. It's a great opportunity to calm yourself down. A small relax could lead you to a further success";
   }
   if (min>30){
     return "Relaxion: How long haven't you been so relaxed like today? Refresh yourself, try something new for more potential chances";
   }
 }
 if (18<ch<=23) {
   if (min<=10){
     return "Mystery: You might encounter something that makes you feel confused, lost or unexpected. The soil of mystery may grow flowers of surpirses. But be careful, and try to figure out your life before you've gone too far.";
   }
   if (10<min<=30){
     return "Order: Your life has always been well organized, but sometimes it's boring. Today might be a good time to try something new. Don't let the old rules stop you from being a nicer person ";
   }
   if (min>30){
     return "Inspiration: Inspiration will bring you to a brand new world you've never explored before. Enjoy it but don't get lost in unrealistic illusions.";
   }
 }
};

function draw() {
  background(0);
}
