<script>
import "@babel/polyfill";
import {onMount} from 'svelte';
export let reasonsInput;
export let controlPrefix;
export let isRealtimeParentQuestion;
export let states = [];
export let hover = false;
export let delCell = false;
export let cyonStart = "4";  //time 
export let cyonInterval = 30; //minutes
export let unavailableTimes = "";
export let unavailableTimesText = "";
export let cyon = "";
export let settings = "";
export let r = {}
alert(888)
export let defaultTimes = {
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

if (reasonsInput == "" || reasonsInput == "{}")
{
	reasonsInput = JSON.stringify(defaultTimes);
}

try {
	settings = JSON.parse(settings);
} catch (e) {
	settings = {
		chosen: "F",
		fReason: "",
		pReason: "",
		iReason: "",
		uReason: "",
		oReason: ""
	}
}

try {
	r = JSON.parse(reasonsInput);
} catch (e) {
	reasonsInput = JSON.stringify(defaultTimes);
	r = JSON.parse(reasonsInput);
}

states.push(reasonsInput);

onMount( ()=> {
	unavailableTimes = JSON.stringify(r);
	unavailableTimesText = prettyOutput();
	cyon = cyonOutput();
	
	//if (sessionStorage.getItem("states") !== null) {
	//	try {
	//		states = JSON.parse(sessionStorage.getItem("states"));	
	//	} catch (e) {}
	//}
});

function clear() {
  r = JSON.parse(JSON.stringify(defaultTimes));
  states.push(JSON.stringify(defaultTimes));
  outputData();
}

function undo(save=false) {
  if (states.length === 1) return;
  
  states.pop();
  r = JSON.parse(states[states.length - 1]);
  
  if (save) {
	outputData();
  }
}


var dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var timeList2 = ["8",  "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
var timeList = ["8am - 9am",  "9am - 10am", "10am - 11am", "11am - 12pm", "12pm - 1pm", "1pm - 2pm", "2pm - 3pm", "3pm - 4pm", "4pm - 5pm", "5pm - 6pm", "6pm - 7pm", "7pm - 8pm","8pm - 9pm"];
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

function getId(x, y) {
  return xDictionary[x] + yDictionary[y];
}

function addVal(x, y, colour=false) {
  if(!colour){
	r[dayList[x]][timeList2[y]]["code"] = "none";
	r[dayList[x]][timeList2[y]]["reason"] = "";
  } else {
	r[dayList[x]][timeList2[y]]["code"] = settings.chosen;
    r[dayList[x]][timeList2[y]]["reason"] = getReason(settings.chosen);
  }
  r[dayList[x]][timeList2[y]]["hover"] = hover;
}

function outputData() {
  if (!hover) {
	for (var x=0; x < 5; x++) {
		for (var y=0; y < 13; y++) {
			delete r[dayList[x]][timeList2[y]]["hover"];
		}
	}
	unavailableTimes = JSON.stringify(r);
	unavailableTimesText = prettyOutput();
	cyon = cyonOutput();
	settingsString = JSON.stringify(settings);
	//sessionStorage.setItem("states", JSON.stringify(states));
	triggerRefresh();
  }
}

function addValClick(x, y) {
  if (hover) {
	undo()
  }
  hover = false;
  
  delCell = false;
  
  if (r[dayList[x]][timeList2[y]]["code"] === settings.chosen && !r[dayList[x]][timeList2[y]]["hover"]) {
	addVal(x, y, false);
  } else {
	addVal(x, y, true);
  }
  
  states.push(JSON.stringify(r));
  outputData();
}

function addValHoverEnter(x, y) {
  delCell = r[dayList[x]][timeList2[y]]["code"] === settings.chosen;
  
  if (!delCell) {
	hover = true;
	addVal(x, y, true);
	states.push(JSON.stringify(r));
  }
}

function addValHoverLeave(x, y) {
  if (!hover) return;

  hover = false;
  undo();
}

function prettyOutput(){
    let toReturn = [];
	
    dayList.forEach((day) =>{
        timeList2.forEach((cell) =>{
            if(r[day][cell]["code"] !=="none"){
                toReturn.push("Not available at " + cell + " on " + day + " because of " + r[day][cell]["reason"] + " (" + r[day][cell]["code"] + ").");
            }
        })
    });
    return toReturn.join("\n");
}

function cyonOutput() {
	let toReturn = [];
	
	dayList.forEach((day) =>{
        timeList2.forEach((cell) =>{
            if (r[day][cell]["code"] !== "none") {
                toReturn.push(0);
            } else {
				toReturn.push(1);
			}
        })
    });
	
	return toReturn.join(" ");
}

function wholeHour(y) {
  var color = false;
  
  for (var i = 0; i < 5; i++) {
    if (r[dayList[i]][timeList2[y]]["code"] !== settings.chosen) {
		color = true;
		break;
	}
  }
  
  for (var i = 0; i < 5; i++) {
    addVal(i, y, color);
  }
  states.push(JSON.stringify(r));
  
  outputData();
}

function wholeHourClick(y) {
  if (hover) {
	undo()
  }
  hover = false;
  wholeHour(y)
}

function wholeHourHoverEnter(y) {
  hover = true;
  wholeHour(y)
}

function wholeHourHoverLeave(y) {
  if (!hover) return;
  
  hover = false;
  undo()
}

function wholeDay(x) {
  var color = false;
  
  for (var i = 0; i < 13; i++) {
    if (r[dayList[x]][timeList2[i]]["code"] !== settings.chosen) {
		color = true;
		break;
	}
  }
  
  for (var i = 0; i < 13; i++) {
    addVal(x, i, color);
  }
  states.push(JSON.stringify(r));
  
  outputData();
}

function wholeDayClick(x) {
  if (hover) {
	undo()
  }
  hover = false;
  wholeDay(x)
}

function wholeDayHoverEnter(x) {
  hover = true;
  wholeDay(x)
}

function wholeDayHoverLeave(x) {
  if (!hover) return;
  
  hover = false;
  
  undo()
}

function showVal(v) {
  if (v["code"] === "none") {
    return "";
  } 
  
  return v["reason"] !== "" ? v["reason"] : v["code"];
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
var settingsString = "";

"use strict";

function getReason(chosen) {  
  let reason = null;
  
  switch (chosen) {
	case "F": 
		reason  = settings.fReason;
		break;
	case "P": 
		reason  = settings.pReason;
		break;
	case "I": 
		reason  = settings.iReason;
		break;
	case "U": 
		reason  = settings.uReason;
		break;
	case "O": 
		reason  = settings.oReason;
		break;
  }
  
  return reason !== null ? reason : reasons[dict[chosen]].text;
}
</script>
<style>
.app {
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

input, select, textarea {
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
}

button {
	padding: 0.4em;
	box-sizing: border-box;
	-border: 1px solid #ccc;
	-border-radius: 2px;
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
	-margin-right: 0.4em;
	background-color: white;
	border-left: 0;
	border-top: 1px solid #ccc;
	border-bottom: 0;
	border-right: 1px solid #ccc;
}

.dataTable ul.calendar:last-child button {
	border-bottom: 1px solid #ccc;
}

.calendar button:first-child {
	border-left: 1px solid #ccc;
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

.nothing {
	background-color:#fff !important;
	flex-grow: 1;
	min-width:30px;
	border-right: 1px solid #ccc;
	border-top: 0 !important;
	border-left: 1px solid #fff !important;
	outline: none;
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
.action {
	display: flex; 
	flex-wrap: wrap;
	justify-content: flex-end;
}
.clear{
    height:10%;
	font-size: 100%;
	flex: 1, 2;
	margin: 0.4em;
}

.opacity {
	opacity: 0.2 !important;
}

ul{
	padding:0;
	margin:0;
}

.delete {
	cursor: not-allowed;
	
}
</style>
<div class="app">
	<input type="hidden" id="{controlPrefix + '_unavailableTimes'}" name="{controlPrefix + '_unavailableTimes'}" bind:value={unavailableTimes}/>
	<input type="hidden" id="{controlPrefix + '_unavailableTimesText'}" name="{controlPrefix + '_unavailableTimesText'}" bind:value={unavailableTimesText}/>
	<input type="hidden" id="{controlPrefix + '_cyon'}" name="{controlPrefix + '_cyon'}" bind:value={cyon}/>
	<input type="hidden" id="{controlPrefix + '_settings'}" name="{controlPrefix + '_settings'}" bind:value={settingsString}/>
	<div class="list">
		<label>
		   <input class="vertical-align-middle" type=radio bind:group={settings.chosen} value={reasons[0].label}>
		   <span class="box F "><strong>{reasons[0].label}</strong></span>
		   <span class ="align-top">{reasons[0].text}</span>
		   <input class="padding:0;" bind:value={settings.fReason}>
		</label>
		<label>
		   <input type=radio bind:group={settings.chosen} value={reasons[1].label}>
		   <span class="box P"><strong>{reasons[1].label}</strong></span>
		   <span class ="align-top">{reasons[1].text}</span>
		   <input class="padding:0;" bind:value={settings.pReason}>
		</label>
		<label>
		   <input type=radio bind:group={settings.chosen} value={reasons[2].label}>
		   <span class="box I"><strong>{reasons[2].label}</strong></span>
		   <span class ="align-top">{reasons[2].text}</span>
		   <input class="padding:0;" bind:value={settings.iReason}>
		</label>
		<label>
		   <input type=radio bind:group={settings.chosen} value={reasons[3].label}>
		   <span class="box U"><strong>{reasons[3].label}</strong></span>
		   <span class ="align-top">{reasons[3].text}</span>
		   <input class="padding:0;" bind:value={settings.uReason}>
		</label>
		<label>
		   <input type=radio bind:group={settings.chosen} value={reasons[4].label}>
		   <span class="box O"><strong>{reasons[4].label}</strong></span>
		   <span class ="align-top">{reasons[4].text}</span>
		   <input class="padding:0;" bind:value={settings.oReason}>
		</label>
	</div>

	<div class="action">
		<button class ="clear" on:click|stopPropagation|preventDefault="{()=>undo(true)}">Undo</button>
		<button class ="clear" on:click|stopPropagation|preventDefault="{()=>clear(this)}">Clear All</button>
	</div>

	<div class =" dataTable">
		<ul class ="calendar" >
		  <button class="nothing"></button>
		  <button class="day" on:click|stopPropagation|preventDefault="{() => wholeDayClick(0)}" on:mouseenter|stopPropagation|preventDefault="{() => wholeDayHoverEnter(0)}" on:mouseleave|stopPropagation|preventDefault="{() => wholeDayHoverLeave(0)}">Monday</button>
		  <button class="day" on:click|stopPropagation|preventDefault="{() => wholeDayClick(1)}" on:mouseenter|stopPropagation|preventDefault="{() => wholeDayHoverEnter(1)}" on:mouseleave|stopPropagation|preventDefault="{() => wholeDayHoverLeave(1)}">Tuesday</button>
		  <button class="day" on:click|stopPropagation|preventDefault="{() => wholeDayClick(2)}" on:mouseenter|stopPropagation|preventDefault="{() => wholeDayHoverEnter(2)}" on:mouseleave|stopPropagation|preventDefault="{() => wholeDayHoverLeave(2)}">Wednesday</button>
		  <button class="day" on:click|stopPropagation|preventDefault="{() => wholeDayClick(3)}" on:mouseenter|stopPropagation|preventDefault="{() => wholeDayHoverEnter(3)}" on:mouseleave|stopPropagation|preventDefault="{() => wholeDayHoverLeave(3)}">Thursday</button>
		  <button class="day" on:click|stopPropagation|preventDefault="{() => wholeDayClick(4)}" on:mouseenter|stopPropagation|preventDefault="{() => wholeDayHoverEnter(4)}" on:mouseleave|stopPropagation|preventDefault="{() => wholeDayHoverLeave(4)}">Friday</button>
		</ul>

		{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as index}
		<ul class ="calendar" >
			<button class="time" style="padding: 0;" on:click|stopPropagation|preventDefault ="{() => wholeHourClick(index) }" on:mouseenter|stopPropagation|preventDefault="{() => wholeHourHoverEnter(index)}" on:mouseleave|stopPropagation|preventDefault="{() => wholeHourHoverLeave(index)}">{timeList[index]}</button>
			<button title="{r["Monday"][index + 8]["reason"]}" class="val" class:delete={delCell} class:opacity={r["Monday"][index + 8]["hover"] === true} style="padding: 0; background-color: {r["Monday"][index + 8]["code"] === "none" ? '#fff' : colourDict[r["Monday"][index + 8]["code"]]}" on:click|stopPropagation|preventDefault ="{() => addValClick(0, index)}" on:mouseenter|stopPropagation|preventDefault="{() => addValHoverEnter(0, index)}" on:mouseleave|stopPropagation|preventDefault="{() => addValHoverLeave(0, index)}" id ="{0 + yDictionary[index]}"> {showVal(r["Monday"][index + 8])} </button>
			<button title="{r["Tuesday"][index + 8]["reason"]}" class="val" class:delete={delCell} class:opacity={r["Tuesday"][index + 8]["hover"] === true} style="padding: 0; background-color: {r["Tuesday"][index + 8]["code"] === "none" ? '#fff' : colourDict[r["Tuesday"][index + 8]["code"]]}" on:click|stopPropagation|preventDefault ="{() => addValClick(1,index)}" on:mouseenter|stopPropagation|preventDefault="{() => addValHoverEnter(1, index)}" on:mouseleave|stopPropagation|preventDefault="{() => addValHoverLeave(1, index)}" t={r["Tuesday"][index + 8]["reason"]} id ="{1 + yDictionary[index]}"> {showVal(r["Tuesday"][index + 8])} </button>
			<button title="{r["Wednesday"][index + 8]["reason"]}" class="val" class:delete={delCell} class:opacity={r["Wednesday"][index + 8]["hover"] === true} style="padding: 0; background-color: {r["Wednesday"][index + 8]["code"] === "none" ? '#fff' : colourDict[r["Wednesday"][index + 8]["code"]]}" on:click|stopPropagation|preventDefault ="{() => addValClick(2,index)}" on:mouseenter|stopPropagation|preventDefault="{() => addValHoverEnter(2, index)}" on:mouseleave|stopPropagation|preventDefault="{() => addValHoverLeave(2, index)}" id ="{2 + yDictionary[index]}"> {showVal(r["Wednesday"][index + 8])} </button>
			<button title="{r["Thursday"][index + 8]["reason"]}" class="val" class:delete={delCell} class:opacity={r["Thursday"][index + 8]["hover"] === true} style="padding: 0; background-color: {r["Thursday"][index + 8]["code"] === "none" ? '#fff' : colourDict[r["Thursday"][index + 8]["code"]]}" on:click|stopPropagation|preventDefault ="{() => addValClick(3,index)}" on:mouseenter|stopPropagation|preventDefault="{() => addValHoverEnter(3, index)}" on:mouseleave|stopPropagation|preventDefault="{() => addValHoverLeave(3, index)}" id ="{3 + yDictionary[index]}"> {showVal(r["Thursday"][index + 8])} </button>
			<button title="{r["Friday"][index + 8]["reason"]}" class="val" class:delete={delCell} class:opacity={r["Friday"][index + 8]["hover"] === true} style="padding: 0; background-color: {r["Friday"][index + 8]["code"] === "none" ? '#fff' : colourDict[r["Friday"][index + 8]["code"]]}" on:click|stopPropagation|preventDefault ="{() => addValClick(4,index)}" on:mouseenter|stopPropagation|preventDefault="{() => addValHoverEnter(4, index)}" on:mouseleave|stopPropagation|preventDefault="{() => addValHoverLeave(4, index)}" id ="{4 + yDictionary[index]}"> {showVal(r["Friday"][index + 8])} </button>
		</ul>
		{/each}
	</div>
</div>
-->