import React, { useState } from 'react';
import ChatBot from "react-chatbotify";

function Form() {
  const [form, setForm] = React.useState({});

	const formStyle = {
		marginTop: 10,
		marginLeft: 20,
		border: "1px solid #491d8d",
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	}
  const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => setForm({...form, name: params.userInput}),
			path: "ask_age"
		},
		ask_age: {
			message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
			function: (params) => setForm({...form, age: params.userInput}),
			path: async (params) => {
				if (isNaN(Number(params.userInput))) {
					await params.injectMessage("Age needs to be a number!");
					return;
				}
				return "ask_pet";
			}
		},
		ask_pet: {
			message: "Would you like to connect with fellow gamers enthusiasts? ",
			options: ["Yes", "No"],
			chatDisabled: true,
			function: (params) => setForm({...form, pet_ownership: params.userInput}),
			path: "ask_choice"
		},
		ask_choice: {
			message: "Which genre are you most interested in? Select at least one.",
			checkboxes: {items: ["Action", "Cards", "Classic", "Educational"], min: 1, max: 4},
			chatDisabled: true,
			function: (params) => setForm({...form, pet_choices: params.userInput}),
			path: "ask_work_days"
		},
		ask_work_days: {
			message: "Which platform do you prefer the most to play games on?",
			checkboxes: {items: ["Action", "Cards", "Classic", "Educational"], min: 1, max: 4},
			chatDisabled: true,
			function: (params) => setForm({...form, num_work_days: params.userInput}),
			path: "end"
		},
		end: {
			message: "Thank you! You're now ready to take off!",
			chatDisabled: true
		},
	}

	const onSubmit = () => {
		console.log("submitted");
		// axios.post('/user', {
		// 	firstName: 'Fred',
		// 	lastName: 'Flintstone'
		//   })
		//   .then(function (response) {
		// 	console.log(response);
		//   })
		//   .catch(function (error) {
		// 	console.log(error);
		//   });
	  }

  return (
    <div className="container">
      <ChatBot options={{chatHistory: {disabled:true} ,chatInputContainerStyle: {backgroundColor:"black", color:"white"}, chatInputAreaStyle: {backgroundColor:"black", color:"white"} ,chatWindowStyle: {backgroundColor:"black"}, headerStyle: {backgroundColor: "red"}, theme: {embedded: true, desktopEnabled: true, showFooter: false}}} flow={flow}/>
	  <button onClick={onsubmit} >Submit</button>
	</div>
  );
}


export default Form;
