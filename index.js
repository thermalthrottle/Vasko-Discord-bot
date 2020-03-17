const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NDI1Nzc5Njk2NjU1OTI1MjY4.XnDIRA.S_ifJndAwRu7tlMeqlyRWOnHq00';

const PREFIX = "!";

const author = "Dimitar Todorov";
//console logs
bot.on('ready', () => 
{
    console.log("The bot is online");
}
);
//azis songs commands
bot.on('message', azisSongs =>{

    //command array
    let args = azisSongs.content.substring(PREFIX.length).split("/ ");

    //Azis - Hop
    if(args[0] === "хоп") {
        azisSongs.reply('И влиза малко по малко');
    }
    //Azis - Sen trope
    else if(args[0] === "СенТропе") 
    {
        azisSongs.reply('Други на малдивите. в Дубай пък третите');
        azisSongs.reply('Але, алелелей!');
    }
    //Azis - Avtomontior
    else if(args[0] === "автомонтьор") {
        azisSongs.reply('Златни ръце! Ще ремонтирам всичко аз подред');
    }
    //Azis - Evala
    else if(args[0] === "евала") {
        azisSongs.reply('Евала бе брат ми, евала! Евала за таз кола!');
    }
    //Azis - Kato tebe vtori nyama
    else if(args[0] === "защо") {
        azisSongs.reply('какво и всякакви въпроси. Не задавай луд ли си какво си?');
    }
    else if(args[0] === "Василке, пак ли тука киснеш ма")
    {
        azisSongs.reply('Ми къде да кисна, Ванко?');
    }
} );
/*
bot.on('message', msg=>{

    let arguments = msg.content.substring(PREFIX.length).split(" ");

    switch(arguments[0])
    {
        case "obrashtenie":
            switch(arguments[1])
            {
                case "info":
                    if(!obrasht)
                    {
                        msg.reply("Все още няма обръщение!");
                    }
                    else
                    {
                        msg.reply("Обращението е " + obrasht);
                    }
                    break;
                case "set":
                    obrasht = arguments[2];
                    msg.reply("Беше зададено обръщение " + obrasht);
            }
            break;
    }
})
*/
bot.login(token);