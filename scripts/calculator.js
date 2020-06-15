const add = (a, b) => a + b;
			const subtract = (a, b) => a - b;
			const multiply = (a, b) => a * b;
			const divide = (a, b) => a / b;
			const operate = (op) => op(lastNum, currentNum);
			const display = () => (document.querySelector("#display").textContent = displayStr);
            function chooseOperation(){
                switch (operation) {
                    case "add":
                        operate(add);
                        return;
                    case "subtract":
                        operate(sub);
                        return;
                    case "multiply":
                        operate(multiply);
                        return;
                    case "divide":
                        operate(divide);
                        return;
                    
                }
            }
			let displayStr = "";
            let currentNum = 0;
            let lastNum = 0;
            let operation = "";

			document.querySelectorAll(".number").forEach((button) => {
				button.addEventListener("click", (e) => {
					displayStr += `${e.target.getAttribute("data-do")}`;
					display();
				});
			});
            document.querySelectorAll(".operator").forEach((button) => {
				button.addEventListener("click", (e) => {
					operation = e.target.getAttribute("data-do");
				});
			});