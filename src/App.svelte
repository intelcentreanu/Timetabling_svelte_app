<script>
import "@babel/polyfill";
import {onMount} from 'svelte';
export let reasonList;
export let reasonLetter;

onMount(async ()=>{
    //processData([reasonLetter,reasonList]);
    reasonLetter.forEach((day,indexX) =>{
        day.forEach((slot,indexY) =>{
            document.getElementById(getId(indexX, indexY)).style.backgroundColor = colourDict[slot];

        })
    })

});
function processData(input){
    reasonLetter = [0];
    reasonList = reasonList[1];

}

function clear() {
  clearAllColours();
  reasonLetter = [["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]];
  reasonList = [["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""]];
}
var dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var timeList = ["8am - 9am",  "9am - 10am", "10am - 11am", "11am - 12am", "12am - 1pm", "1pm - 2pm", "2pm - 3pm", "3pm - 4pm", "4pm - 5pm", "5pm - 6pm", "6pm - 7pm", "7pm -8pm","8pm -9pm"];
var yDictionary = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
  10: 'k',
  11: 'l',
  12: 'm'
};
var xDictionary = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4'
};
var colourDict = {
  "F": "#0DE3F2",
  "P": "#F20D0D",
  "I": "#2CFF1C",
  "U": "#FFFF00",
  "O": "#FF871C",
  "none":"#fff"
};

function getColour(c) {
  return "colour:" + colourDict[c];
}

function clearAllColours() {
  Object.keys(yDictionary).forEach(function (key2) {
    Object.keys(xDictionary).forEach(function (key1) {
      document.getElementById(getId(key1, key2)).style.backgroundColor = "#fff";
    });
  });
}

function getId(x, y) {
  return xDictionary[x] + yDictionary[y];
}

function addVal(x, y,colour=false) {

  if (reasonLetter[x][y] === "none") {
    document.getElementById(getId(x, y)).style.backgroundColor = colourDict[chosen];
    reasonLetter[x][y] = chosen;
    reasonList[x][y] = getReason(chosen);
  } else {
      if(!colour){
          document.getElementById(getId(x, y)).style.backgroundColor = "#fff";
          reasonLetter[x][y] = "none";
          reasonList[x][y] = "";}

  }

  reasonList = reasonList;
  reasonLetter = reasonLetter;

  if(!colour){
      prettyOutput();
  }
}
function prettyOutput(){
    console.log("");
    reasonLetter.forEach((day, y) =>{
        day.forEach((cell,x) =>{
            if(cell !=="none"){
                let toReturn = "Not available at " + timeList[x] + " on " + dayList[y] + " because of " + reasonList[y][x] + "(" + cell + ")";
                console.log(toReturn);

            }

        })
    })

}

function wholeHour(y) {
  for (var i = 0; i < 5; i++) {
    addVal(i, y,true);
  }
  reasonList = reasonList;
  reasonLetter = reasonLetter;
  prettyOutput();
}

function wholeDay(x) {
  for (var i = 0; i < reasonLetter[x].length; i++) {
    addVal(x, i,true);
  }

  reasonList = reasonList;
  reasonLetter = reasonLetter;
  prettyOutput();
}

function showVal(v) {
  if (v === "none") {
    return "";
  } else {
    return v;
  }
}

var reasons = [{
  label: "F",
  text: "Flexible working arrangement",
  reason: "Flexible working arrangement",
  colour: '#0DE3F2'
}, {
  label: "P",
  text: "Pre-approved research or teaching need (eg: clinic session, research requirements)",
  reason: "Pre-approved research or teaching need (eg: clinic session, research requirements)",
  colour: "#F20D0D"
}, {
  label: "I",
  text: "Inflexible administration needs (eg: school meetings)",
  reason: "Inflexible administration needs (eg: school meetings)",
  colour: "#2CFF1C"
}, {
  label: "U",
  text: "University commitments (eg; board member)",
  reason: "University commitments (eg; board member)",
  colour: "#7F1CFF"
}, {
  label: "O",
  text: "Other",
  reason: "",
  colour: "#FF871C"
}];
var chosen = "F";
var otherReason = "";

"use strict";

function getReason(chosen) {
  var dict = {
    "F": 0,
    "P": 1,
    "I": 2,
    "U": 3
  };

  if (chosen === "O") {
    return otherReason;
  } else {
    return reasons[dict[chosen]].text;
  }
}

/// make hover https://svelte.dev/examples#adding-parameters-to-actions


</script>
<style>
app {
	position: relative;
	width: 100%;
	height: 100%;
	color: #333;
	margin: 0;
	padding: 8px;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
label {
	display: block;
}

input, button, select, textarea {
	font-family: Ubuntu;
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
}

input[type=radio] {
    width: 3%;
    height: 1.5em;
}

head{
height:10%;
outline-style: ridge;
outline-color: white;
background-color: #EAEAEA;
text-align:center;
vertical-align:middle;
}

 list {
 height: 10%;
 align-items: center;
 text-align: center;
 display: inline-block;
 }
span.box{
 width: 20px;
 display: inline-block;
 text-align: center;
 vertical-align: top;
}
.align-top{
vertical-align: top
}
.F{
 background-color: #0DE3F2;
 }
.P{
 background-color: #F20D0D;
 }
.I{
  background-color: #2CFF1C;
  }
.U{
   background-color: #FFFF00;
   }
.O{
    background-color: #FF871C;
    }

dataTable{
    height:80%;
    width:100%;
    background-color:#ccc;
    padding:0px;

}

.calendar {
	display: flex;
	padding: 0;
	margin: 0;
}

.calendar button {
	flex: 1;
	min-width: 80px;
	min-height: 40px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-right: 0.4em;
	background-color: white;
}

.calendar button:last-child  {
	margin-right: 0em;
}

.dataTable ul.calendar:first-child button {
	background-color: #eaeaea;
}

.dataTable ul.calendar button:first-child {
	background-color: #eaeaea;
}


/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) {
	.dataTable ul.calendar button {
		font-size: 100%;
	}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
	.dataTable ul.calendar button {
		font-size: 70%;
	}
}

button {
  width:15.7% ;
  font-size: 100%;
  min-height: 40px;
  text-align:center;
  vertical-align:middle;
  background-color:#fff;
  border:1px solid #ccc;
  flex:auto;
  flex-shrink: 1;

}
.nothing {
  background-color:#ccc;
  flex-grow: 1;
  min-width:30px;
}
.day {
     background-color:#eaeaea;
     text-align: center;
     flex-grow: 1;
     font-size: 100%;
     height:100%;


}
.time{
   background-color:#d9d9d9;
   flex-grow: 1;
   font-size: 95%;

}
.val{
 font-weight: bold;
 flex-grow: 1;
}
.clear{
    width:100%;
    height:10%;
    font-size: 100%;

}
ul{
padding:0;
margin:0;
}




</style>
<div class="app">
<div class="list">
<label>
   <input class="vertical-align-middle" type=radio bind:group={chosen} value={reasons[0].label}>
   <span class="box F " style="vertical-align: top;"><strong>{reasons[0].label}</strong></span>
   <span class ="align-top">{reasons[0].text}</span>
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[1].label}>
   <span class="box P"><strong>{reasons[1].label}</strong></span>
   <span >{reasons[1].text}</span>
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[2].label}>
   <span class="box I"><strong>{reasons[2].label}</strong></span>
   <span >{reasons[2].text}</span>
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[3].label}>
   <span class="box U"><strong>{reasons[3].label}</strong></span>
   <span >{reasons[3].text}</span>
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[4].label}>
   <span class="box O"><strong>{reasons[4].label}</strong></span>
   <span >{reasons[4].text}</span>
   <input class="padding:0;" bind:value={otherReason} placeholder={otherReason}>
</label>

</div>

<div class =" dataTable">
<ul class =" calendar" >
      <button class="nothing"></button>
      <button class="day" on:click="{() => wholeDay(0)}">Monday</button>
      <button class="day" on:click="{() => wholeDay(1)}">Tuesday</button>
      <button class="day" on:click="{() => wholeDay(2)}">Wednesday</button>
      <button class="day" on:click="{() => wholeDay(3)}">Thursday</button>
      <button class="day" on:click="{() => wholeDay(4)}">Friday</button>
</ul>
<ul class =" calendar" >
<button class="time" style="padding: 0; " on:click ="{() => wholeHour(0) }" >8am-9am</button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(0,0)}" id ="0a"> {showVal(reasonLetter[0][0])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(1,0)}" id ="1a"> {showVal(reasonLetter[1][0])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(2,0)}" id ="2a"> {showVal(reasonLetter[2][0])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(3,0)}" id ="3a"> {showVal(reasonLetter[3][0])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(4,0)}" id ="4a"> {showVal(reasonLetter[4][0])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(1)}">9am-10am</button>
<button class="val" on:click ="{() => addVal(0,1)}"  id ="0b"> {showVal(reasonLetter[0][1])} </button>
<button class="val" on:click ="{() => addVal(1,1)}" id ="1b"> {showVal(reasonLetter[1][1])} </button>
<button class="val" on:click ="{() => addVal(2,1)}" id ="2b"> {showVal(reasonLetter[2][1])} </button>
<button class="val" on:click ="{() => addVal(3,1)}" id ="3b"> {showVal(reasonLetter[3][1])} </button>
<button class="val" on:click ="{() => addVal(4,1)}" id ="4b"> {showVal(reasonLetter[4][1])} </button>
</ul>
<ul class =" calendar" style="padding: 0 0">
<button class="time" on:click ="{() => wholeHour(2)}">10am-11am</button>
<button class="val" on:click ="{() => addVal(0,2)}" id ="0c"> {showVal(reasonLetter[0][2])} </button>
<button class="val" on:click ="{() => addVal(1,2)}" id ="1c"> {showVal(reasonLetter[1][2])} </button>
<button class="val" on:click ="{() => addVal(2,2)}" id ="2c"> {showVal(reasonLetter[2][2])} </button>
<button class="val" on:click ="{() => addVal(3,2)}" id ="3c"> {showVal(reasonLetter[3][2])} </button>
<button class="val" on:click ="{() => addVal(4,2)}" id ="4c"> {showVal(reasonLetter[4][2])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(3)}">11am-12am</button>
<button class="val" on:click ="{() => addVal(0,3)}" id ="0d"> {showVal(reasonLetter[0][3])} </button>
<button class="val" on:click ="{() => addVal(1,3)}" id ="1d"> {showVal(reasonLetter[1][3])} </button>
<button class="val" on:click ="{() => addVal(2,3)}" id ="2d"> {showVal(reasonLetter[2][3])} </button>
<button class="val" on:click ="{() => addVal(3,3)}" id ="3d"> {showVal(reasonLetter[3][3])} </button>
<button class="val" on:click ="{() => addVal(4,3)}" id ="4d"> {showVal(reasonLetter[4][3])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(4)}">12am-1pm</button>
<button class="val" on:click ="{() => addVal(0,4)}" id ="0e"> {showVal(reasonLetter[0][4])} </button>
<button class="val" on:click ="{() => addVal(1,4)}" id ="1e"> {showVal(reasonLetter[1][4])} </button>
<button class="val" on:click ="{() => addVal(2,4)}" id ="2e"> {showVal(reasonLetter[2][4])} </button>
<button class="val" on:click ="{() => addVal(3,4)}" id ="3e"> {showVal(reasonLetter[3][4])} </button>
<button class="val" on:click ="{() => addVal(4,4)}" id ="4e"> {showVal(reasonLetter[4][4])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(5)}">1pm-2pm</button>
<button class="val" on:click ="{() => addVal(0,5)}" id ="0f"> {showVal(reasonLetter[0][5])} </button>
<button class="val" on:click ="{() => addVal(1,5)}" id ="1f"> {showVal(reasonLetter[1][5])} </button>
<button class="val" on:click ="{() => addVal(2,5)}" id ="2f"> {showVal(reasonLetter[2][5])} </button>
<button class="val" on:click ="{() => addVal(3,5)}" id ="3f"> {showVal(reasonLetter[3][5])} </button>
<button class="val" on:click ="{() => addVal(4,5)}" id ="4f"> {showVal(reasonLetter[4][5])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(6)}">2pm-3pm</button>
<button class="val" on:click ="{() => addVal(0,6)}" id ="0g"> {showVal(reasonLetter[0][6])} </button>
<button class="val" on:click ="{() => addVal(1,6)}" id ="1g"> {showVal(reasonLetter[1][6])} </button>
<button class="val" on:click ="{() => addVal(2,6)}" id ="2g"> {showVal(reasonLetter[2][6])} </button>
<button class="val" on:click ="{() => addVal(3,)}" id ="3g"> {showVal(reasonLetter[3][6])} </button>
<button class="val" on:click ="{() => addVal(4,6)}" id ="4g"> {showVal(reasonLetter[4][6])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(7)}">3pm-4pm</button>
<button class="val" on:click ="{() => addVal(0,7)}" id ="0h"> {showVal(reasonLetter[0][7])} </button>
<button class="val" on:click ="{() => addVal(1,7)}" id ="1h"> {showVal(reasonLetter[1][7])} </button>
<button class="val" on:click ="{() => addVal(2,7)}" id ="2h"> {showVal(reasonLetter[2][7])} </button>
<button class="val" on:click ="{() => addVal(3,7)}" id ="3h"> {showVal(reasonLetter[3][7])} </button>
<button class="val" on:click ="{() => addVal(4,7)}" id ="4h"> {showVal(reasonLetter[4][7])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(8)}">4pm-5pm</button>
<button class="val" on:click ="{() => addVal(0,8)}" id ="0i"> {showVal(reasonLetter[0][8])} </button>
<button class="val" on:click ="{() => addVal(1,8)}" id ="1i"> {showVal(reasonLetter[1][8])} </button>
<button class="val" on:click ="{() => addVal(2,8)}" id ="2i"> {showVal(reasonLetter[2][8])} </button>
<button class="val" on:click ="{() => addVal(3,8)}" id ="3i"> {showVal(reasonLetter[3][8])} </button>
<button class="val" on:click ="{() => addVal(4,8)}" id ="4i"> {showVal(reasonLetter[4][8])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(9)}">5pm-6pm</button>
<button class="val" on:click ="{() => addVal(0,9)}" id ="0j"> {showVal(reasonLetter[0][9])} </button>
<button class="val" on:click ="{() => addVal(1,9)}" id ="1j"> {showVal(reasonLetter[1][9])} </button>
<button class="val" on:click ="{() => addVal(2,9)}" id ="2j"> {showVal(reasonLetter[2][9])} </button>
<button class="val" on:click ="{() => addVal(3,9)}" id ="3j"> {showVal(reasonLetter[3][9])} </button>
<button class="val" on:click ="{() => addVal(4,9)}" id ="4j"> {showVal(reasonLetter[4][9])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(10)}">6pm-7pm</button>
<button class="val" on:click ="{() => addVal(0,10)}" id ="0k"> {showVal(reasonLetter[0][10])} </button>
<button class="val" on:click ="{() => addVal(1,10)}" id ="1k"> {showVal(reasonLetter[1][10])} </button>
<button class="val" on:click ="{() => addVal(2,10)}" id ="2k"> {showVal(reasonLetter[2][10])} </button>
<button class="val" on:click ="{() => addVal(3,10)}" id ="3k"> {showVal(reasonLetter[3][10])} </button>
<button class="val" on:click ="{() => addVal(4,10)}" id ="4k"> {showVal(reasonLetter[4][10])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(11)}">7pm-8pm</button>
<button class="val" on:click ="{() => addVal(0,11)}" id ="0l"> {showVal(reasonLetter[0][11])} </button>
<button class="val" on:click ="{() => addVal(1,11)}" id ="1l"> {showVal(reasonLetter[1][11])} </button>
<button class="val" on:click ="{() => addVal(2,11)}" id ="2l"> {showVal(reasonLetter[2][11])} </button>
<button class="val" on:click ="{() => addVal(3,11)}" id ="3l"> {showVal(reasonLetter[3][11])} </button>
<button class="val" on:click ="{() => addVal(4,11)}" id ="4l"> {showVal(reasonLetter[4][11])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(12)}">8pm-9pm</button>
<button class="val" on:click ="{() => addVal(0,12)}" id ="0m"> {showVal(reasonLetter[0][12])} </button>
<button class="val" on:click ="{() => addVal(1,12)}" id ="1m"> {showVal(reasonLetter[1][12])} </button>
<button class="val" on:click ="{() => addVal(2,12)}" id ="2m"> {showVal(reasonLetter[2][12])} </button>
<button class="val" on:click ="{() => addVal(3,12)}" id ="3m"> {showVal(reasonLetter[3][12])} </button>
<button class="val" on:click ="{() => addVal(4,12)}" id ="4m"> {showVal(reasonLetter[4][12])} </button>
</ul>

</div>

<button class ="clear" on:click="{()=>clear(this)}">Clear All</button>
</div>
