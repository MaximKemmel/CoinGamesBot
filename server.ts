const TelegramBot = require("node-telegram-bot-api");
const token = "7306405647:AAF5V1eCZF_dXOvwfwRf2oof6IBEE6SrEXA";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
});
