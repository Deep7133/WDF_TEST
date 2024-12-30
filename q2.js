let history = [];

        function calculate() {
            const expression = document.getElementById("display").value;

            try {
                const result = new Function('return ' + expression)();
                document.getElementById("display2").value = result;
                saveToHistory(expression, result);
            } catch (error) {
                document.getElementById("display2").value = "Error";
            }
        }

        function saveToHistory(expression, result) {
            const historyItem = `${expression} = ${result}`;
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

        function ClearHistory() {
            history = []; // Clear the history array
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
            document.getElementById("display").value += operation;
        }