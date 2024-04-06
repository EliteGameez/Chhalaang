import React, { useEffect, useState } from 'react';
import ChatBot from "react-chatbotify";
import MyConnections from '../components/MyConnections/MyConnections';
import axios from 'axios';

const Form = () => {
  const [form, setForm] = React.useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

	const formStyle = {
		marginTop: 10,
		marginLeft: 20,
		border: "1px solid #491d8d",
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	};
  const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => setForm({...form, name: params.userInput}),
			path: "age"
		},
		age: {
			message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
			function: (params) => setForm({...form, age: params.userInput}),
			path: async (params) => {
				if (isNaN(Number(params.userInput))) {
					await params.injectMessage("Age needs to be a number!");
					return;
				}
				return "location";
			}
		},
		location: {
			message: "Which location are you from? ",
			function: (params) => setForm({...form, location: params.userInput}),
			path: "interest"
		},
		interest: {
			message: "Which genre are you most interested in? Select at least one.",
			checkboxes: {items: ["Action", "Cards", "Classic", "Educational"], min: 1, max: 4},
			chatDisabled: true,
			function: (params) => setForm({...form, pet_choices: params.userInput}),
			path: "platforms"
		},
		platforms: {
			message: "Which platform do you prefer the most to play games on?",
			checkboxes: {items: ["xBox", "Play Station", "Nintindu switch"], min: 1, max: 4},
			chatDisabled: true,
			function: (params) => setForm({...form, num_work_days: params.userInput}),
			path: "end"
		},
		end: {
			message: "Thank you! You're now ready to take off!",
			chatDisabled: true
		},
	};

	useEffect(()=> {
		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		  }); 
	});

	const onSubmit = () => {
		axios.post('https://teamelitegameez.pythonanywhere.com/signup', form, {
			headers: {
			  Accept: "application/json",
			  "Content-Type": "application/json;charset=UTF-8",
			},
		  })
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	  };

  return (
    <div className="container">
      <ChatBot options={{chatHistory: {disabled:true} ,chatInputContainerStyle: {backgroundColor:"black", color:"white"}, chatInputAreaStyle: {backgroundColor:"black", color:"white"} ,chatWindowStyle: {backgroundColor:"black"}, headerStyle: {backgroundColor: "red"}, theme: {embedded: true, desktopEnabled: true, showFooter: false}}} flow={flow}/>
	  <button onClick={onSubmit} >Submit</button>
	</div>
  );
}


export default Form;
