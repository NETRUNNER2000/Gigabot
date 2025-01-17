const checkIfPCOnline = require("../../utils/checkIfPCOnline");
const checkMinecraftRunning = require("../../utils/checkMinecraftRunning");

module.exports = {
    
    name: 'server-status',
    description: "returns server status text",
    devOnly: false,

    callback: async (client, interaction) => {

        const status = await checkIfPCOnline('192.168.1.130');
        let statusString = "";

        if(status) {

            const Query = require("minecraft-query");
            const q = new Query({host: '192.168.1.130', port: 25565, timeout: 7500});
            const currentDate = new Date();
            const mcStatus = await checkMinecraftRunning();

            if(mcStatus===false){

                statusString += `Server is online ✅\nMinecraft Server: ❌`;
                console.log("Status string: " + statusString);
                interaction.reply(statusString);

            }
            else{
                q.fullStat()
                .then(success => {
                    
                    const { motd, gametype, game_id, version, map, port, online_players, max_players, players,  } = success;
                    statusString += `Server is online ✅\n\nmotd: ${motd}\ngametype: ${gametype}\ngame_id: ${game_id}\nversion: ${version}\nmap: ${map}\nport: ${port}\nonline_players: ${online_players}\nplayers: ${players}`;
                    console.log("Status string: " + statusString);   
                    interaction.reply(statusString);
                
                });
            } 
        }
        else{ 

            statusString = "Server is offline ❌";
            interaction.reply(statusString);
        
        }    
    }
}