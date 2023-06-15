let questions = [
	{
		question: "Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class.?",
		no: 1,
		option1: "Final",
		option2: "Static",
		option3: "Protected",
		option4: "Abstract",
		ans: "Static",

	}, {
		question: "How is an array initialized in java language?",
		no: 2,
		option1: "int a[3] = {1,2,3};",
		option2: "int a = {1,2,3};",
		option3: "int a[] = {1,2,3};",
		option4: "int a[] = new int[3];",
		ans: "int a = {1,2,3};",
	},
	{
		question: "Number of primitive data types in Java are?",
		no: 3,
		option1: 6,
		option2: 7,
		option3: 8,
		option4: 9,
		ans: 8,
	},
	{
		question: "When an array is passed to a method, what does the method receive?",
		no: 4,
		option1: "The reference of the array.",
		option2: "A copy of the array.",
		option3: "Length of the Array.",
		option4: "Copy of first Element.",
		ans: "The reference of the array.",

	},
	{
		question: "Arrays in java are?",
		no: 5,
		option1: "object references.",
		option2: "objects",
		option3: "primitive datatypes",
		option4: "none",
		ans: "objects",

	}];


let c = 0;
const tquestion = questions.length;
let correctquestion = 0;
let marks = [tquestion];
for (let i = 0; i < tquestion; i++) {
	marks[i] = 0;
}
const getKeyByValue = (object, value) =>
{
	return Object.keys(object).find(key => object[key] === value);
}

const userID = () =>
{
	let user = sessionStorage.getItem("temp");
	document.getElementById("username").innerHTML = user;
	console.log("succuss" + user);

}


const handlenxt = () =>
{
	let inputcss = document.getElementsByName("option");
	for (let i = 0; i < inputcss.length; i++) {
		inputcss[i].style.background = "";
	}
	c++;
	if (c >= 5) {
		alert("Test is Complete.");
		document.getElementById("submit").style.visibility = "visible";
		c = 4;
		return;
	}
	document.getElementById("quizquestion").innerHTML = questions[c].question;
	document.getElementById("option1").setAttribute("value", questions[c].option1);
	document.getElementById("option2").setAttribute("value", questions[c].option2);
	document.getElementById("option3").setAttribute("value", questions[c].option3);
	document.getElementById("option4").setAttribute("value", questions[c].option4);
	console.log(questions[c]);
}

const handlepre = () =>
{
	let inputcss = document.getElementsByName("option");
	for (let i = 0; i < inputcss.length; i++) {
		inputcss[i].style.background = "";
	}
	c--;
	if (c < 0) {
		alert("Cannot go back.You are on first Question.");
		c = 0;
	}
	document.getElementById("quizquestion").innerHTML = questions[c].question;
	document.getElementById("option1").setAttribute("value", questions[c].option1);
	document.getElementById("option2").setAttribute("value", questions[c].option2);
	document.getElementById("option3").setAttribute("value", questions[c].option3);
	document.getElementById("option4").setAttribute("value", questions[c].option4);
	console.log(questions[c]);
}

const submitbtn = () =>
{
	let mark = 0;
	for (let i = 0; i < tquestion; i++) {
		if (marks[i] == 5) {
			mark = mark + 5;
		}
	}
	sessionStorage.setItem("tquestion", tquestion);
	sessionStorage.setItem("correctquestion", correctquestion);
	sessionStorage.setItem("tmarks", mark);
	window.location.href = "result.html";
}

const userAnswer = (answer) =>
{
	let useroption = document.getElementById(answer).value;
	if (useroption == questions[c].ans) {
		document.getElementById(answer).style.background = "#568203";
		correctquestion++;
		marks[c] = 5;
	} else {
		document.getElementById(answer).style.background = "#BA0021";
		let key = getKeyByValue(questions[c], questions[c].ans);
		document.getElementById(key).style.background = "#568203";

	}

}