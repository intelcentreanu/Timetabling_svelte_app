<script>
export let name;
"use strict";


var data = [["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]];
var reasonList = [["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""]];

function clear() {
  clearAllColours();
  data = [["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]];
  reasonList = [["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""]];
}

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
  "O": "#FF871C"
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
  if (data[x][y] === "none") {
    document.getElementById(getId(x, y)).style.backgroundColor = colourDict[chosen];
    data[x][y] = chosen;
    reasonList[x][y] = getReason(chosen);
  } else {
      if(!colour){
          document.getElementById(getId(x, y)).style.backgroundColor = "#fff";
          data[x][y] = "none";
          reasonList[x][y] = "";}

  }

  reasonList = reasonList;
  data = data;
}

function wholeHour(y) {
  for (var i = 0; i < 5; i++) {
    addVal(i, y,true);
  }
  reasonList = reasonList;
  data = data;
}

function wholeDay(x) {
  for (var i = 0; i < data[x].length; i++) {
    addVal(x, i,true);
  }

  reasonList = reasonList;
  data = data;
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
</script>
<style>
theTable{
width:100%;
background-color: #ccc;
}
radioList  {
    height: 100%;
}
input[type=radio] {
    width: 5%;
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
boxes {
 width:100%;
 }
 list {
 height: 10%;
 }
 span{
 width: 20px;
 display: inline-block;
 text-align: center;
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

}

calendar{
  text-align:center;
  vertical-align:middle;
  background-color:#ccc;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  flex:auto;
  width:100%;
  padding: 0;
  list-style: none;

}

button {
  width:6.2%;
  font-size: 100%;
  min-height: 40px;
  text-align:center;
  vertical-align:middle;
  background-color:#fff;
  border:1px solid #ccc;
  flex:auto;
  flex-basis:auto;
  flex-shrink: 1;

}
.nothing {
  background-color:#ccc;
  flex-grow: 1;
  min-width:30px;
}
.day {
     background-color:#eaeaea;
     flex-grow: 1;
     font-size: 70%;
     height:100%;


}
.time{
   background-color:#d9d9d9;
   flex-grow: 1;
   font-size: 70%;

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
all{
width:90%;
height: 100%;
}



</style>
<div class="all">
<div class="list">
<label>
   <input type=radio bind:group={chosen} value={reasons[0].label}>
   <span class="F"><strong>{reasons[0].label}</strong></span>
   {reasons[0].text}
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[1].label}>
   <span class="P"><strong>{reasons[1].label}</strong></span>
   {reasons[1].text}
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[2].label}>
   <span class="I"><strong>{reasons[2].label}</strong></span>
   {reasons[2].text}
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[3].label}>
   <span class="U"><strong>{reasons[3].label}</strong></span>
   {reasons[3].text}
</label>
<label>
   <input type=radio bind:group={chosen} value={reasons[4].label}>
   <span class="O"><strong>{reasons[4].label}</strong></span>
   {reasons[4].text}
   <input bind:value={otherReason} placeholder={otherReason}>
</label>

</div>

<div class="theTable">

<div class =" dataTable">
  <ul class =" flex-container calendar">
      <button class="nothing"></button>
      <button class="time" on:click ="{() => wholeHour(0) }" >8am-9am</button>
      <button class="time" on:click ="{() => wholeHour(1)}">9am-10am</button>
      <button class="time" on:click ="{() => wholeHour(2)}">10am-11am</button>
      <button class="time" on:click ="{() => wholeHour(3)}">11am-12pm</button>
      <button class="time" on:click ="{() => wholeHour(4)}">12pm-1pm</button>
      <button class="time" on:click ="{() => wholeHour(5)}">1pm-2pm</button>
      <button class="time" on:click ="{() => wholeHour(6)}">2pm-3pm</button>
      <button class="time" on:click ="{() => wholeHour(7)}">3pm-4pm</button>
      <button class="time" on:click ="{() => wholeHour(8)}">4pm-5pm</button>
      <button class="time" on:click ="{() => wholeHour(9)}">5pm-6pm</button>
      <button class="time" on:click ="{() => wholeHour(10)}">6pm-7pm</button>
      <button class="time" on:click ="{() => wholeHour(11)}">7pm-8pm</button>
      <button class="time" on:click ="{() => wholeHour(12)}">8pm-9pm</button>
  </ul>
  <ul class =" calendar">
    <button class="day" on:click="{() => wholeDay(0)}">Monday</button>
    <button class="val" on:click ="{() => addVal(0,0)}" id ="0a"> {showVal(data[0][0])} </button>
    <button class="val" on:click ="{() => addVal(0,1)}" id ="0b"> {showVal(data[0][1])} </button>
    <button class="val" on:click ="{() => addVal(0,2)}" id ="0c"> {showVal(data[0][2])} </button>
    <button class="val" on:click ="{() => addVal(0,3)}" id ="0d"> {showVal(data[0][3])} </button>
    <button class="val" on:click ="{() => addVal(0,4)}" id ="0e"> {showVal(data[0][4])} </button>
    <button class="val" on:click ="{() => addVal(0,5)}" id ="0f"> {showVal(data[0][5])} </button>
    <button class="val" on:click ="{() => addVal(0,6)}" id ="0g"> {showVal(data[0][6])} </button>
    <button class="val" on:click ="{() => addVal(0,7)}" id ="0h"> {showVal(data[0][7])} </button>
    <button class="val" on:click ="{() => addVal(0,8)}" id ="0i"> {showVal(data[0][8])} </button>
    <button class="val" on:click ="{() => addVal(0,9)}" id ="0j"> {showVal(data[0][9])} </button>
    <button class="val" on:click ="{() => addVal(0,10)}" id ="0k"> {showVal(data[0][10])} </button>
    <button class="val" on:click ="{() => addVal(0,11)}" id ="0l"> {showVal(data[0][11])} </button>
    <button class="val" on:click ="{() => addVal(0,12)}" id ="0m"> {showVal(data[0][12])} </button>
  </ul>
  <ul class ="calendar">
  <button class="day" on:click="{() => wholeDay(1)}">Tuesday</button>
    <button class="val" on:click ="{() => addVal(1,0)}" id ="1a"> {showVal(data[1][0])} </button>
    <button class="val" on:click ="{() => addVal(1,1)}" id ="1b"> {showVal(data[1][1])} </button>
    <button class="val" on:click ="{() => addVal(1,2)}" id ="1c"> {showVal(data[1][2])} </button>
    <button class="val" on:click ="{() => addVal(1,3)}" id ="1d"> {showVal(data[1][3])} </button>
    <button class="val" on:click ="{() => addVal(1,4)}" id ="1e"> {showVal(data[1][4])} </button>
    <button class="val" on:click ="{() => addVal(1,5)}" id ="1f"> {showVal(data[1][5])} </button>
    <button class="val" on:click ="{() => addVal(1,6)}" id ="1g"> {showVal(data[1][6])} </button>
    <button class="val" on:click ="{() => addVal(1,7)}" id ="1h"> {showVal(data[1][7])} </button>
    <button class="val" on:click ="{() => addVal(1,8)}" id ="1i"> {showVal(data[1][8])} </button>
    <button class="val" on:click ="{() => addVal(1,9)}" id ="1j"> {showVal(data[1][9])} </button>
    <button class="val" on:click ="{() => addVal(1,10)}" id ="1k"> {showVal(data[1][10])} </button>
    <button class="val" on:click ="{() => addVal(1,11)}" id ="1l"> {showVal(data[1][11])} </button>
    <button class="val" on:click ="{() => addVal(1,12)}" id ="1m"> {showVal(data[1][12])} </button>
  </ul>
  <ul class =" calendar">
  <button class="day" on:click="{() => wholeDay(2)}">Wednesday</button>
    <button class="val" on:click ="{() => addVal(2,0)}" id ="2a"> {showVal(data[2][0])} </button>
    <button class="val" on:click ="{() => addVal(2,1)}" id ="2b"> {showVal(data[2][1])} </button>
    <button class="val" on:click ="{() => addVal(2,2)}" id ="2c"> {showVal(data[2][2])} </button>
    <button class="val" on:click ="{() => addVal(2,3)}" id ="2d"> {showVal(data[2][3])} </button>
    <button class="val" on:click ="{() => addVal(2,4)}" id ="2e"> {showVal(data[2][4])} </button>
    <button class="val" on:click ="{() => addVal(2,5)}" id ="2f"> {showVal(data[2][5])} </button>
    <button class="val" on:click ="{() => addVal(2,6)}" id ="2g"> {showVal(data[2][6])} </button>
    <button class="val" on:click ="{() => addVal(2,7)}" id ="2h"> {showVal(data[2][7])} </button>
    <button class="val" on:click ="{() => addVal(2,8)}" id ="2i"> {showVal(data[2][8])} </button>
    <button class="val" on:click ="{() => addVal(2,9)}" id ="2j"> {showVal(data[2][9])} </button>
    <button class="val" on:click ="{() => addVal(2,10)}" id ="2k"> {showVal(data[2][10])} </button>
    <button class="val" on:click ="{() => addVal(2,11)}" id ="2l"> {showVal(data[2][11])} </button>
    <button class="val" on:click ="{() => addVal(2,12)}" id ="2m"> {showVal(data[2][12])} </button>
  </ul>
  <ul class =" calendar">
    <button class="day" on:click="{() => wholeDay(3)}">Thursday</button>
    <button class="val" on:click ="{() => addVal(3,0)}" id ="3a"> {showVal(data[3][0])} </button>
    <button class="val" on:click ="{() => addVal(3,1)}" id ="3b"> {showVal(data[3][1])} </button>
    <button class="val" on:click ="{() => addVal(3,2)}" id ="3c"> {showVal(data[3][2])} </button>
    <button class="val" on:click ="{() => addVal(3,3)}" id ="3d"> {showVal(data[3][3])} </button>
    <button class="val" on:click ="{() => addVal(3,4)}" id ="3e"> {showVal(data[3][4])} </button>
    <button class="val" on:click ="{() => addVal(3,5)}" id ="3f"> {showVal(data[3][5])} </button>
    <button class="val" on:click ="{() => addVal(3,6)}" id ="3g"> {showVal(data[3][6])} </button>
    <button class="val" on:click ="{() => addVal(3,7)}" id ="3h"> {showVal(data[3][7])} </button>
    <button class="val" on:click ="{() => addVal(3,8)}" id ="3i"> {showVal(data[3][8])} </button>
    <button class="val" on:click ="{() => addVal(3,9)}" id ="3j"> {showVal(data[3][9])} </button>
    <button class="val" on:click ="{() => addVal(3,10)}" id ="3k"> {showVal(data[3][10])} </button>
    <button class="val" on:click ="{() => addVal(3,11)}" id ="3l"> {showVal(data[3][11])} </button>
    <button class="val" on:click ="{() => addVal(3,12)}" id ="3m"> {showVal(data[3][12])} </button>
  </ul>
  <ul class =" calendar">
    <button class="day" on:click="{() => wholeDay(4)}">Friday</button>
    <button class="val" on:click ="{() => addVal(4,0)}" id="4a"> {showVal(data[4][0])} </button>
    <button class="val" on:click ="{() => addVal(4,1)}" id="4b"> {showVal(data[4][1])} </button>
    <button class="val" on:click ="{() => addVal(4,2)}" id="4c"> {showVal(data[4][2])} </button>
    <button class="val" on:click ="{() => addVal(4,3)}" id="4d"> {showVal(data[4][3])} </button>
    <button class="val" on:click ="{() => addVal(4,4)}" id="4e"> {showVal(data[4][4])} </button>
    <button class="val" on:click ="{() => addVal(4,5)}" id="4f"> {showVal(data[4][5])} </button>
    <button class="val" on:click ="{() => addVal(4,6)}" id="4g"> {showVal(data[4][6])} </button>
    <button class="val" on:click ="{() => addVal(4,7)}" id="4h"> {showVal(data[4][7])} </button>
    <button class="val" on:click ="{() => addVal(4,8)}" id="4i"> {showVal(data[4][8])} </button>
    <button class="val" on:click ="{() => addVal(4,9)}" id="4j"> {showVal(data[4][9])} </button>
    <button class="val" on:click ="{() => addVal(4,10)}" id="4k"> {showVal(data[4][10])} </button>
    <button class="val" on:click ="{() => addVal(4,11)}" id="4l"> {showVal(data[4][11])} </button>
    <button class="val" on:click ="{() => addVal(4,12)}" id="4m"> {showVal(data[4][12])} </button>
  </ul>
</div>
</div>
<button class ="clear" on:click="{()=>clear(this)}">Clear All</button>
</div>
