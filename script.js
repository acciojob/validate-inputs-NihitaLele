// Regex patterns
const namePattern = /^[A-Za-z]{3,}$/;
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const mobilePattern = /^[0-9]{10}$/;

// Input elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");

// Validation function
function validate(input, pattern) {
	if (pattern.test(input.value.trim())) {
		input.style.backgroundColor = "lightgreen";
	} else {
		input.style.backgroundColor = "pink";
	}
}

// Event listeners
nameInput.addEventListener("input", () => validate(nameInput, namePattern));
emailInput.addEventListener("input", () => validate(emailInput, emailPattern));
mobileInput.addEventListener("input", () => validate(mobileInput, mobilePattern));
