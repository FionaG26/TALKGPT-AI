import SpeechRecognition from "react-speech-recognition";
document.addEventListener("DOMContentLoaded", function() {
  // Code to be executed after the HTML elements are loaded
  
  // Add event listener to the submit button
  var submitBtn = document.getElementById("send-btn");
  submitBtn.addEventListener("click", function() {
    sendMessage();
  });
});

function sendMessage() {
  // Code to handle sending the message
}


document.getElementById("voice-btn").addEventListener("click", function() {
  startVoiceRecognition();
});

var chatHistory = []; // Array to store chat history

function sendMessage() {
  var userInput = document.getElementById("user-input");
  var messageContainer = document.getElementById("message-container");

  if (userInput.value.trim() !== "") {
    var userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerHTML = "<p>" + userInput.value + "</p>";
    messageContainer.appendChild(userMessage);
    userInput.value = "";
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Store user message in chat history
    chatHistory.push(userMessage.innerHTML);

    // Simulate bot response
    setTimeout(function() {
      var botMessage = document.createElement("div");
      botMessage.className = "message bot";
      botMessage.innerHTML = "<p>Sorry, I am just a frontend design. I cannot respond like TalkGPT.</p>";
      messageContainer.appendChild(botMessage);
      messageContainer.scrollTop = messageContainer.scrollHeight;

      // Store bot message in chat history
      chatHistory.push(botMessage.innerHTML);
    }, 500);
  }
}

function startVoiceRecognition() {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function(event) {
    const result = event.results[0][0].transcript;
    document.querySelector("#user-input").value = result;
    sendMessage();
  };
}

function displayChatHistory() {
  var messageContainer = document.getElementById("message-container");
  messageContainer.innerHTML = "";

  for (var i = 0; i < chatHistory.length; i++) {
    var message = document.createElement("div");
    message.className = "message";
    message.innerHTML = chatHistory[i];
    messageContainer.appendChild(message);
  }

  messageContainer.scrollTop = messageContainer.scrollHeight;
}

window.addEventListener("load", function() {
  // Load chat history from local storage or initialize an empty array
  chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

  // Display chat history
  displayChatHistory();
});

window.addEventListener("beforeunload", function() {
  // Save chat history to local storage
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
});

document.getElementById("show-history-btn").addEventListener("click", displayChatHistory);

document.getElementById("clear-history-btn").addEventListener("click", function() {
  clearChatHistory();
});

function clearChatHistory() {
  chatHistory = []; // Clear the chat history array

  // Clear the chat history container
  var messageContainer = document.getElementById("message-container");
  messageContainer.innerHTML = "";
}

// Get the form and submit button elements
const form = document.querySelector('form');
const submitButton = document.querySelector('.button');

// Disable the submit button initially
submitButton.disabled = true;

// Function to check if all form inputs are filled
function checkFormInputs() {
  const inputs = form.querySelectorAll('input');
  let isFormValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      isFormValid = false;
    }
  });

  return isFormValid;
}

// Function to handle form input changes
function handleInputChange() {
  if (checkFormInputs()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Add event listeners to form inputs
form.addEventListener('input', handleInputChange);

const signupButton = document.getElementById('signup-button');
const createAccountPopup = document.getElementById('create-account-popup');

signupButton.addEventListener('click', function() {
  if (createAccountPopup.classList.contains('hidden')) {
    createAccountPopup.classList.remove('hidden');
  } else {
    createAccountPopup.classList.add('hidden');
  }
});
