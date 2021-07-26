let allBtns = document.getElementsByClassName("btn");
let outputElement = document.getElementById("output");
let outputStr = "";
let myBol = false;
let myOp = ["+", "-", "*", "/"];
for (let i = 0; i < allBtns.length; i++) {

    allBtns[i].addEventListener("click", function () {

        if (myBol || outputStr == "0") {
            myBol = false;
            outputStr = "";
        }

      /*   if (allBtns[i].innerHTML == "+" || allBtns[i].innerHTML == "-" ||
            allBtns[i].innerHTML == "/" || allBtns[i].innerHTML == "*") {
            if (myOp.indexOf(outputElement.innerHTML.slice(-1)) > -1) {
               
                outputStr = outputStr.slice(0, -1);
               //outputElement.innerHTML = outputStr; 
                
            }
        }
 */


        if (allBtns[i].innerHTML == "C") {

            outputElement.innerHTML = "";
            outputStr = "";

        } else if (allBtns[i].innerHTML == "CE") {

            outputStr = outputStr.toString();
            outputStr = outputStr.slice(0, -1);
            // outputStr =  outputStr.substring(0, outputStr.length - 1);
            outputElement.innerHTML = outputStr;

        } else if (allBtns[i].innerHTML == "=") {

            let result = eval(outputStr);
            myBol = true;
            outputStr = result;
            outputElement.innerHTML = outputStr;

        } else {

            outputStr += allBtns[i].innerHTML;
            outputElement.innerHTML = outputStr;
        }

    })

}