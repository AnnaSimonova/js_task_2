"use strict";
const skillRangesBlock = document.querySelector(".skill-ranges");

function addSkill(name, range) {
    // var parts = window.location.search.substr(1).split("&");
    // var $_GET = {};
    // for (var i = 0; i < parts.length; i++) {
    //     var temp = parts[i].split("=");
    //     $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    // }

    const skillRange = document.createElement("div");
    skillRange.setAttribute("class", "skill-range");
    skillRange.innerHTML = name;
    skillRange.style.width = range + "%";
    skillRangesBlock.appendChild(skillRange);
}