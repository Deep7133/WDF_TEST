let history = [];
function calculate() {
    
        let expression = document.getElementById("display").value;
        let result = new Function('return ' + expression)(); 
        document.getElementById("display2").value = result; 
        saveToHistory(expression, result);
}

function saveToHistory(expression, result) {
    const historyItem = ${expression} = ${result};
    history.push(historyItem); 
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML = ""; 

    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyElement.appendChild(li);
    });
}

function ClearHistory(){
    document.getElementById("history").innerHTML = "";
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("display2").value = "";
    
}


function appendNumber(number) {
    document.getElementById("display").value += number;
}


function performOperation(operation) {
    const display = document.getElementById("display").value;

    document.getElementById("display").value += operation;
    
}