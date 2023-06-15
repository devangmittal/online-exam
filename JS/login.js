const signIn = () =>
{

	let user = document.getElementById("name").value;
	let pas = document.getElementById("pass").value;



	let pas1 = sessionStorage.getItem(user);
	if (pas == pas1) {
		window.location.href = "question.html";
		sessionStorage.setItem("temp", user);
		console.log("valid");
	}
	else {
		console.log("not valid");
	}

}


const signUp = () =>
{
	let user = document.getElementById("name").value;
	let pas = document.getElementById("pass").value;
	sessionStorage.setItem(user, pas);
}