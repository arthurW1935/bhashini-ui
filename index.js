// --------------API URL----------------
// used one of the API's of my fellow student
// Project Repo: https://github.com/AbhinavGupta-de/Bhashini_Project
const API_URL = "https://bhashiniproject.up.railway.app/translate";


// integer reference of the languages as per the api documentation 
const LANG = {
	"Hindi": 2,
	"Bengali": 3,
    "Gujarati": 4,
    "Kannada": 5,
    "Malayalam": 6,
    "Marathi": 7,
    "Odia": 8,
    "Punjabi": 9,
    "Tamil": 10,
    "Telugu": 11,
    "Assamese": 12,
};

// adding event listener to the submit button
document.querySelector("button[type='submit']").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const sourceLanguage = document.getElementById("sourceLanguage").value;
    const content = document.getElementById("contentTextArea").value;
    const targetLanguage = document.getElementById("targetLanguage").value;
    
    // check if sourceLanguage and targetLanguage are selected
    if (sourceLanguage === "Choose a Language..." || targetLanguage === "Choose a Language...") {
        alert("Please select source and target languages.");
        return;
    }
    
    // check if content is empty
    if (content === "") {
        alert("Please enter the content to be translated.");
        return;
    }
    
    // check if sourceLanguage and targetLanguage are same
    if (sourceLanguage === targetLanguage) {
        alert("Source and target languages cannot be same.");
        return;
    }

    // creating the request data
    const requestData = {
        source: LANG[sourceLanguage],
        content: content,
        target: LANG[targetLanguage]
    };

    // API call
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    })
        .then((response) => response.json())
        .then((data) => {
            // Update the output textarea with the translated text
            document.getElementById("resultTextArea").value = data.translated_content;
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred while translating the text.");
        });
});