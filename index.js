Discord = require("discord.js");
parseArgs = require("./parse-args");
settings = require("./settings.json");
$ = require("jquery");
bot = new Discord.Client();

msg = undefined

bot.login(settings.token);

bot.on("message", function(message) {
	msg = message;
});
