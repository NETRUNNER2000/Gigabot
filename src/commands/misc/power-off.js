// URL of the API endpoint
const apiUrl = "http://192.168.1.130:3000/power-off";

// Password to authenticate the request
const apiPassword = "your-secure-password";

// Function to call the API
async function putComputerToSleep() {
//   try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
    } else {
      const responseData = await response.json();
      console.log("Success:", responseData.message);
    }
//   } catch (error) {
//     console.error("Failed to make the request:", error.message);
//   }
}

module.exports = {
    name: 'power-off',
    description: "Shutdown server",
    devOnly: false,

    callback: async (client, interaction) => {
        await interaction.deferReply();
        putComputerToSleep();
        interaction.editReply(`======================\n**Shuttin down server**\n======================`);
    }
}