<script>
import "@babel/polyfill";
import {onMount} from 'svelte';
export let reasonsInput;
console.log(reasonsInput);
let r = JSON.parse(reasonsInput);
export let controlPrefix;
console.log(controlPrefix);
onMount( ()=>{
     dayList.forEach((day,indexX) =>{
        timeList2.forEach((slot,indexY) =>{
            document.getElementById(getId(indexX, indexY)).style.backgroundColor = colourDict[slot["code"]];

        })
    })

});

function clear() {
  clearAllColours();
  r = {
        "Monday":{
          "8":{
            "code":"none",
            "reason":""
          },
          "9":{
            "code":"none",
            "reason":""
          },
          "10":{
            "code":"none",
            "reason":""
          },
          "11":{
            "code":"none",
            "reason":""
          },
          "12":{
            "code":"none",
            "reason":""
          },
          "13":{
            "code":"none",
            "reason":""
          },
          "14":{
            "code":"none",
            "reason":""
          },
          "15":{
            "code":"none",
            "reason":""
          },
          "16":{
            "code":"none",
            "reason":""
          },
          "17":{
            "code":"none",
            "reason":""
          },
          "18":{
            "code":"none",
            "reason":""
          },
          "19":{
            "code":"none",
            "reason":""
          },
          "20":{
            "code":"none",
            "reason":""
          }
        },
        "Tuesday":{
          "8":{
            "code":"none",
            "reason":""
          },
          "9":{
            "code":"none",
            "reason":""
          },
          "10":{
            "code":"none",
            "reason":""
          },
          "11":{
            "code":"none",
            "reason":""
          },
          "12":{
            "code":"none",
            "reason":""
          },
          "13":{
            "code":"none",
            "reason":""
          },
          "14":{
            "code":"none",
            "reason":""
          },
          "15":{
            "code":"none",
            "reason":""
          },
          "16":{
            "code":"none",
            "reason":""
          },
          "17":{
            "code":"none",
            "reason":""
          },
          "18":{
            "code":"none",
            "reason":""
          },
          "19":{
            "code":"none",
            "reason":""
          },
          "20":{
            "code":"none",
            "reason":""
          }
        },
        "Wednesday":{
          "8":{
            "code":"none",
            "reason":""
          },
          "9":{
            "code":"none",
            "reason":""
          },
          "10":{
            "code":"none",
            "reason":""
          },
          "11":{
            "code":"none",
            "reason":""
          },
          "12":{
            "code":"none",
            "reason":""
          },
          "13":{
            "code":"none",
            "reason":""
          },
          "14":{
            "code":"none",
            "reason":""
          },
          "15":{
            "code":"none",
            "reason":""
          },
          "16":{
            "code":"none",
            "reason":""
          },
          "17":{
            "code":"none",
            "reason":""
          },
          "18":{
            "code":"none",
            "reason":""
          },
          "19":{
            "code":"none",
            "reason":""
          },
          "20":{
            "code":"none",
            "reason":""
          }
        },
        "Thursday":{
          "8":{
            "code":"none",
            "reason":""
          },
          "9":{
            "code":"none",
            "reason":""
          },
          "10":{
            "code":"none",
            "reason":""
          },
          "11":{
            "code":"none",
            "reason":""
          },
          "12":{
            "code":"none",
            "reason":""
          },
          "13":{
            "code":"none",
            "reason":""
          },
          "14":{
            "code":"none",
            "reason":""
          },
          "15":{
            "code":"none",
            "reason":""
          },
          "16":{
            "code":"none",
            "reason":""
          },
          "17":{
            "code":"none",
            "reason":""
          },
          "18":{
            "code":"none",
            "reason":""
          },
          "19":{
            "code":"none",
            "reason":""
          },
          "20":{
            "code":"none",
            "reason":""
          }
        },
        "Friday":{
          "8":{
            "code":"none",
            "reason":""
          },
          "9":{
            "code":"none",
            "reason":""
          },
          "10":{
            "code":"none",
            "reason":""
          },
          "11":{
            "code":"none",
            "reason":""
          },
          "12":{
            "code":"none",
            "reason":""
          },
          "13":{
            "code":"none",
            "reason":""
          },
          "14":{
            "code":"none",
            "reason":""
          },
          "15":{
            "code":"none",
            "reason":""
          },
          "16":{
            "code":"none",
            "reason":""
          },
          "17":{
            "code":"none",
            "reason":""
          },
          "18":{
            "code":"none",
            "reason":""
          },
          "19":{
            "code":"none",
            "reason":""
          },
          "20":{
            "code":"none",
            "reason":""
          }
        }
      };
}
var dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var timeList2 = ["8",  "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19","20"];

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

  if (getLetter(x,y) === "none") {
    document.getElementById(getId(x, y)).style.backgroundColor = colourDict[chosen];
    r[dayList[x]][timeList2[y]]["code"] = chosen;
    r[dayList[x]][timeList2[y]]["reason"] = getReason(chosen);
  } else {
      if(!colour){
          document.getElementById(getId(x, y)).style.backgroundColor = "#fff";
          r[dayList[x]][timeList2[y]]["code"] = "none";
          r[dayList[x]][timeList2[y]]["reason"] = "";
      }

  }

  r=r;

  let toReturn = prettyOutput();

  //console.log(document.getElementById(cpUnv).valueOf());
  document.getElementById(controlPrefix + '_unavailableTimes').value = JSON.stringify(r);
  document.getElementById(controlPrefix + '_unavailableTimesText').value = toReturn;
  return false;
}
function prettyOutput(){
    let toReturn = "";
    dayList.forEach((day) =>{
        timeList2.forEach((cell) =>{
            if(r[day][cell]["code"] !=="none"){
                toReturn = toReturn + "Not available at " + cell + " on " + day + " because of " + r[day][cell]["reason"] + "(" + r[day][cell]["code"] + "). \n";

            }

        })
    });
    return toReturn;


}

function wholeHour(y) {
  for (var i = 0; i < 5; i++) {
    addVal(i, y,true);
  }
  r=r;
}

function wholeDay(x) {
  for (var i = 0; i < 13; i++) {
    addVal(x, i,true);
  }

  r=r;
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
function getLetter(i,j){
    let day = dayList[i];
    let time = timeList2[j];
    return r[day][time]["code"]
}

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
<input type="hidden" id="{controlPrefix + '_unavailableTimes'}" value=""/>
<input type="hidden" id="{controlPrefix + '_unavailableTimesText'}" value=""/>
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
<button class="val" style="padding: 0; " on:click ="{() => addVal(0,0)}" id ="0a"> {showVal(r["Monday"]["8"]["code"])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(1,0)}" id ="1a"> {showVal(r["Tuesday"]["8"]["code"])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(2,0)}" id ="2a"> {showVal(r["Wednesday"]["8"]["code"])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(3,0)}" id ="3a"> {showVal(r["Thursday"]["8"]["code"])} </button>
<button class="val" style="padding: 0; " on:click ="{() => addVal(4,0)}" id ="4a"> {showVal(r["Friday"]["8"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(1)}">9am-10am</button>
<button class="val" on:click ="{() => addVal(0,1)}"  id ="0b"> {showVal(r["Monday"]["9"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,1)}" id ="1b"> {showVal(r["Tuesday"]["9"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,1)}" id ="2b"> {showVal(r["Wednesday"]["9"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,1)}" id ="3b"> {showVal(r["Thursday"]["9"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,1)}" id ="4b"> {showVal(r["Friday"]["9"]["code"])} </button>
</ul>
<ul class =" calendar" style="padding: 0 0">
<button class="time" on:click ="{() => wholeHour(2)}">10am-11am</button>
<button class="val" on:click ="{() => addVal(0,2)}" id ="0c"> {showVal(r["Monday"]["10"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,2)}" id ="1c"> {showVal(r["Tuesday"]["10"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,2)}" id ="2c"> {showVal(r["Wednesday"]["10"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,2)}" id ="3c"> {showVal(r["Thursday"]["10"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,2)}" id ="4c"> {showVal(r["Friday"]["10"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(3)}">11am-12am</button>
<button class="val" on:click ="{() => addVal(0,3)}" id ="0d"> {showVal(r["Monday"]["11"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,3)}" id ="1d"> {showVal(r["Tuesday"]["11"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,3)}" id ="2d"> {showVal(r["Wednesday"]["11"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,3)}" id ="3d"> {showVal(r["Thursday"]["11"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,3)}" id ="4d"> {showVal(r["Friday"]["11"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(4)}">12am-1pm</button>
<button class="val" on:click ="{() => addVal(0,4)}" id ="0e"> {showVal(r["Monday"]["12"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,4)}" id ="1e"> {showVal(r["Tuesday"]["12"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,4)}" id ="2e"> {showVal(r["Wednesday"]["12"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,4)}" id ="3e"> {showVal(r["Thursday"]["12"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,4)}" id ="4e"> {showVal(r["Friday"]["12"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(5)}">1pm-2pm</button>
<button class="val" on:click ="{() => addVal(0,5)}" id ="0f"> {showVal(r["Monday"]["13"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,5)}" id ="1f"> {showVal(r["Tuesday"]["13"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,5)}" id ="2f"> {showVal(r["Wednesday"]["13"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,5)}" id ="3f"> {showVal(r["Thursday"]["13"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,5)}" id ="4f"> {showVal(r["Friday"]["13"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(6)}">2pm-3pm</button>
<button class="val" on:click ="{() => addVal(0,6)}" id ="0g"> {showVal(r["Monday"]["14"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,6)}" id ="1g"> {showVal(r["Tuesday"]["14"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,6)}" id ="2g"> {showVal(r["Wednesday"]["14"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,6)}" id ="3g"> {showVal(r["Thursday"]["14"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,6)}" id ="4g"> {showVal(r["Friday"]["14"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(7)}">3pm-4pm</button>
<button class="val" on:click ="{() => addVal(0,7)}" id ="0h"> {showVal(r["Monday"]["15"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,7)}" id ="1h"> {showVal(r["Tuesday"]["15"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,7)}" id ="2h"> {showVal(r["Wednesday"]["15"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,7)}" id ="3h"> {showVal(r["Thursday"]["15"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,7)}" id ="4h"> {showVal(r["Friday"]["15"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(8)}">4pm-5pm</button>
<button class="val" on:click ="{() => addVal(0,8)}" id ="0i"> {showVal(r["Monday"]["16"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,8)}" id ="1i"> {showVal(r["Tuesday"]["16"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,8)}" id ="2i"> {showVal(r["Wednesday"]["16"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,8)}" id ="3i"> {showVal(r["Monday"]["16"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,8)}" id ="4i"> {showVal(r["Friday"]["16"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(9)}">5pm-6pm</button>
<button class="val" on:click ="{() => addVal(0,9)}" id ="0j"> {showVal(r["Monday"]["17"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,9)}" id ="1j"> {showVal(r["Tuesday"]["17"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,9)}" id ="2j"> {showVal(r["Wednesday"]["17"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,9)}" id ="3j"> {showVal(r["Thursday"]["17"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,9)}" id ="4j"> {showVal(r["Friday"]["17"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(10)}">6pm-7pm</button>
<button class="val" on:click ="{() => addVal(0,10)}" id ="0k"> {showVal(r["Monday"]["18"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,10)}" id ="1k"> {showVal(r["Tuesday"]["18"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,10)}" id ="2k"> {showVal(r["Wednesday"]["18"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,10)}" id ="3k"> {showVal(r["Thursday"]["18"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,10)}" id ="4k"> {showVal(r["Friday"]["18"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(11)}">7pm-8pm</button>
<button class="val" on:click ="{() => addVal(0,11)}" id ="0l"> {showVal(r["Monday"]["19"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,11)}" id ="1l"> {showVal(r["Tuesday"]["19"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,11)}" id ="2l"> {showVal(r["Wednesday"]["19"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,11)}" id ="3l"> {showVal(r["Thursday"]["19"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,11)}" id ="4l"> {showVal(r["Friday"]["19"]["code"])} </button>
</ul>
<ul class =" calendar" >
<button class="time" on:click ="{() => wholeHour(12)}">8pm-9pm</button>
<button class="val" on:click ="{() => addVal(0,12)}" id ="0m"> {showVal(r["Monday"]["20"]["code"])} </button>
<button class="val" on:click ="{() => addVal(1,12)}" id ="1m"> {showVal(r["Tuesday"]["20"]["code"])} </button>
<button class="val" on:click ="{() => addVal(2,12)}" id ="2m"> {showVal(r["Wednesday"]["20"]["code"])} </button>
<button class="val" on:click ="{() => addVal(3,12)}" id ="3m"> {showVal(r["Thursday"]["20"]["code"])} </button>
<button class="val" on:click ="{() => addVal(4,12)}" id ="4m"> {showVal(r["Friday"]["20"]["code"])} </button>
</ul>

</div>

<button class ="clear" on:click="{()=>clear(this)}">Clear All</button>
</div>
