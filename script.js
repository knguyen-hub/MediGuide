const loader = document.querySelector("#loading");
const textInput = document.querySelector("#inputPart");
const btn = document.querySelector("#submitInput");

btn.addEventListener("click", showImage);
// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}


async function getImage() {
	let input = "simple diagram showing " + textInput.value
	data = {"inputs": input}
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Shakker-Labs/FLUX.1-dev-LoRA-One-Click-Creative-Template",
		{
			headers: {
				Authorization: "Bearer INSERT_API_KEY_HERE",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	return result;
}

async function showImage() {
	displayLoading();
    let imageElement = document.getElementById("helpppp");
	imageElement.style.display = "none"
	//loader.style.display = "block"
	let response = await getImage();
    imageElement.src = URL.createObjectURL(response);
	//loader.style.display = "none"
	imageElement.style.display = "block"
	hideLoading();
}

//inputElement.addEventListener("change", showImage)