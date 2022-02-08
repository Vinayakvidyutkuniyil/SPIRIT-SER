const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/Mbaz2g9.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `sᴘɪʀɪᴛ sᴇʀ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ sᴘɪʀɪᴛ sᴇʀ
Creator number 👉: wa.me/17098008221

Githublink (Setup)  👇:    https://github.com/nishadahammed/Miss-Aliza

DEPLOYE  👇:  https://heroku.com/deploy?template=https://github.com/nishadahammed/Miss-Aliza.git

PUBLIC BOT GROUP 👇: https://chat.whatsapp.com/BnaB7uA4dQF8Qhcac3bGWE


`}) 

}));
