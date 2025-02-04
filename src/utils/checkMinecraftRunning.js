// API call to check if Minecraft server is running
async function checkMinecraftRunning() {
    try {
      const response = await fetch('http://192.168.1.130:3000/is-minecraft-running');  // Change URL to your actual endpoint
      const data = await response.json(); // Parse the JSON response
      console.log(data);
      if (data.isMinecraftRunning == true) {
        console.log('Is Minecraft running?', data.isMinecraftRunning);
        return true;
      } else {
        console.error('Invalid response format');
        return false;
      }
    } catch (error) {
      console.error('Error fetching the server status:', error);
      return false;
    }
  }

  
module.exports = checkMinecraftRunning;
