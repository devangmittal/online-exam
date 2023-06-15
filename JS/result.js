const show = () =>
{
	document.getElementById("questions").innerHTML = sessionStorage.getItem("tquestion");
	document.getElementById("correct").innerHTML = sessionStorage.getItem("correctquestion");
	document.getElementById("marks").innerHTML = sessionStorage.getItem("tmarks");
	document.getElementById("username").innerHTML = sessionStorage.getItem("temp");

}