// URL of the API endpoint
const apiUrl = "http://192.168.1.130:3000/sleep";

// Password to authenticate the request
const apiPassword = "your-secure-password";

// Function to call the API
async function putComputerToSleep() {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: apiPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
    } else {
      const responseData = await response.json();
      console.log("Success:", responseData.message);
    }
  } catch (error) {
    console.error("Failed to make the request:", error.message);
  }
}

// Call the function
putComputerToSleep();
