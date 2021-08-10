let delay, inc_delay = 70;
let heights = [];
let i, j;
let size = 10;

let generateArray = document.getElementById("generateArray");
let arraySize = document.getElementById("arraySize");
let bubbleSort = document.getElementById("bubbleSort");
let selectionSort = document.getElementById("selectionSort");
let mergeSort = document.getElementById("mergeSort");
let quickSort = document.getElementById("quickSort");
let array = document.getElementById("array")
let elements = array.getElementsByTagName("div");

let baseColor = "purple";
let processingColor = "#6ef07d";
let swappingColor = "#e85d54";
let sortedColor = "#549ce8";


arraySize.addEventListener("input", changeArray);
generateArray.addEventListener("click",generate_array);

window.onload = generate_array;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generate_array(){    
    
    removeAllChildNodes(array);

    for(var i =0;i<size;i++){    
        var div = document.createElement("div");
        var num = Math.random() * 500;
        div.style.height = num + "px";
        div.style.width = 1000/size + "px";
        div.style.backgroundColor = "purple";
        div.style.margin = "2px"; 
        document.getElementById("array").appendChild(div);
    }
    elements = array.getElementsByTagName("div");
}

function changeArray(){
    size = arraySize.value;
    generate_array()
}
