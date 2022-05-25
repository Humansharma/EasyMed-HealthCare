const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
const mysql=require("mysql");

const connection =mysql.createConnection({
	host:"localhost",
	user: "root",
	password:"123",
	database:"node.js"
});
connection.connect(function(error){
	if(error)throw error
	else console.log("connected to the database successfully!")
	
})