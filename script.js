let a = +prompt("Enter value of 'a':",0);
let b = +prompt("Enter value of 'b':",0);

//equation-1
let equation_1 =  ((a*a)+(2*a*b)+(b*b));
console.log(equation_1);

//equation-2
let equation_2 = ((a*a)-(2*a*b)+(b*b));
console.log(equation_2);

//equation-3
let equation_3 = ((a+b) * (a-b));
console.log(equation_3);

let r = +prompt("Enter radius of circle in cm:",0);

//equation-4 (area of circle)
let area = Math.PI * r * r;
area = area.toFixed(3);
console.log(`Area of a circle with radius ${r}cm is ${area}cm.`);

//equation-5 (circumference of circle)
let circumference = 2 * Math.PI * r;
circumference = circumference.toFixed(3);
console.log(`Circumference of a circle with radius ${r}cm is ${circumference}cm.`);

//equation-6 (diameter of circle)
let diameter = 2 * r;
console.log(`Diameter of a circle with radius ${r}cm is ${diameter}cm.`);

//displaying the results on dom
let eq1 = document.querySelector('.equation-1');
eq1.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${a} + ${b})<sup>2</sup> = (${a})<sup>2</sup> + 2(${a})(${b}) + (${b}<sup>2</sup>) <br>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${a} + ${b})<sup>2</sup> = ${equation_1}`;

let eq2 = document.querySelector('.equation-2');
eq2.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${a} - ${b})<sup>2</sup> = (${a})<sup>2</sup> - 2(${a})(${b}) + (${b}<sup>2</sup>) <br>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${a} - ${b})<sup>2</sup> = ${equation_2}`;

let eq3 = document.querySelector('.equation-3');
eq3.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${a})<sup>2</sup> - (${b})<sup>2</sup> = (${a} + ${b}) (${a} - ${b}) <br>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${a})<sup>2</sup> - (${b})<sup>2</sup> = ${equation_3}`;

let eq4 = document.querySelector('.equation-4');
eq4.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Area of a circle with radius ${r}cm = ${Math.PI.toFixed(3)}(${r})<sup>2</sup> <br>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Area of a circle with radius ${r}cm = ${area}`;

let eq5 = document.querySelector('.equation-5');
eq5.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Circumference of a circle with radius ${r}cm = 2(${Math.PI.toFixed(3)})(${r}) <br>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Circumference of a circle with radius ${r}cm = ${circumference}`;

let eq6 = document.querySelector('.equation-6');
eq6.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diameter of a circle with radius ${r}cm = 2(${r}) <br>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diameter of a circle with radius ${r}cm = ${diameter}`;

