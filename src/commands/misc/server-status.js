const checkIfPCOnline = require("../../utils/checkIfPCOnline");
const checkMinecraftRunning = require("../../utils/checkMinecraftRunning");

module.exports = {
    
    name: 'server-status',
    description: "returns server status text",
    devOnly: false,

    callback: async (client, interaction) => {
        await interaction.deferReply();
        const status = await checkIfPCOnline('192.168.1.130');
        let statusString = "";

        if(status) {

            const Query = require("minecraft-query");
            const q = new Query({host: '192.168.1.130', port: 25565, timeout: 7500});
            const currentDate = new Date();
            const mcStatus = await checkMinecraftRunning();

            if(mcStatus===false){

                statusString += `======================\n**SERVER IS ONLINE** ✅\n======================\nMinecraft is offline ❌`;
                console.log("Status string: " + statusString);
                interaction.editReply(statusString);

            }
            else{
                q.fullStat()
                .then(success => {
                    
                    const { motd, gametype, game_id, version, map, port, online_players, max_players, players,  } = success;
                    statusString += `======================\n**SERVER IS ONLINE** ✅\n======================\n`
                    + `🌟 Motd: - ${motd}\n`
                    + `🎮 Gametype: - ${gametype}\n`
                    + `🆔 Game ID: - ${game_id}\n`
                    + `🔖 Version: - ${version}\n`
                    + `🗺️ Map: - ${map}\n`
                    + `🔌 Port: - ${port}\n`
                    + `👥 Online Players: - ${online_players}\n`
                    + `👤 Players: - ${players.length > 0 ? players.join(", ") : "None"}\n======================`;
                  

                    console.log("Status string: " + statusString);   
                    interaction.editReply(statusString);
                
                });
            } 
        }
        else{ 

            statusString = "======================\n**SERVER IS OFFLINE** ❌\n======================";
            interaction.editReply(statusString);
        
        }    
    }
}