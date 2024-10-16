//Step 1: Create a string to display inside a pop-up 
//Step 2: Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.
//Step 3: Create a dialog box displaying the vault codes 



let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

let num1 = 5 + 5;
// Outputs: 10

let num2 = 2 * 20;
// Outputs: 40

let num3 = 40 - 1;
// Outputs: 39

let vaultCode = num1 + "-" + num2 + "-" + num3;
// Creates the vault code by combining the numbers

alert(message + vaultCode);
// Shows the vault code in a pop-up dialog box

