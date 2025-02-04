const path = require("path");
const getAllFiles = require("./getAllFiles");

 

module.exports = (exceptions=[]) =>{
    let localCommands = [];

    const commandCategories = getAllFiles(
        path.join(__dirname, '..', 'commands'),
        true
    )

    for(const cmdCat of commandCategories){
        const cmdFiles = getAllFiles(cmdCat);

        for(const cmdFile of cmdFiles){
            const cmdObject = require(cmdFile);
            if(exceptions.includes(cmdObject.name)){continue;}
            //console.log(cmdObject)
            localCommands.push(cmdObject);
        }
    }

   

    return localCommands;
}