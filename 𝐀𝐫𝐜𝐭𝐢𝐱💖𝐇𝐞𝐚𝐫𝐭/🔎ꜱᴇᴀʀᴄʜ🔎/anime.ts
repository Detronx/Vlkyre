`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const Image_Button = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Image_Button`);
const Video_Button = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Video_Button`);
const Text_List = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Text_List`);
import { MessageType } from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
const Oops = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops`);
import { proto } from "@adiwajshing/baileys";
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/client";
const malScraper = require(`mal-scraper`);
import AʀƈȶɨӼ from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import * as fs from "fs";
import path from "path";
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
export = {
name: dotScrpt,
async handle(
client: Client,
Fox: proto.IWebMessageInfo,
AʀƈȶɨӼ: AʀƈȶɨӼ,
args: string[],
ӄʀʏȶɛӄ
): Promise<void> {
try {
const ʟɴᴀᴍᴇ = AʀƈȶɨӼ.sender;
const ᴅꜰɴᴀᴍᴇ = AʀƈȶɨӼ.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
console.log("💡Is Group: " + AʀƈȶɨӼ.isGroup);
await client.getGroupMetaData(AʀƈȶɨӼ.chatId, AʀƈȶɨӼ);
console.log("💡Is Bot Group Admin: " + AʀƈȶɨӼ.isBotGroupAdmin);
console.log("💡Is Sender Group Admin: " + AʀƈȶɨӼ.isSenderGroupAdmin);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (args.length === 0) {
await client.sendMessage(
AʀƈȶɨӼ.chatId,
{
text: `✥𝐔𝐬𝐞𝐫: ${Fox.pushName} 

Press Below To Read How To Use This Command!`,
footer: "⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔",
title: `🔸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}`,
buttonText: "❝ _How To Use?_ ❞",
sections: [
{
title: "𝐀𝐑𝐆𝐔𝐌𝐄𝐍𝐓 𝐍𝐄𝐄𝐃𝐄𝐃!",
rows: [
{
title: "⚡𝐔𝐬𝐚𝐠𝐞",
rowId: "argument required...",
description: `💡𝐈𝐧𝐟𝐨: In order to use this command, you must follow below instructions:
Option 1 - ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()} _anime name_`,
},
],
},
],
},
MessageType.buttonsMessage
);
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (!args) {
await client.sendMessage(
AʀƈȶɨӼ.chatId,
{
text: `✥𝐔𝐬𝐞𝐫: ${Fox.pushName} 

Press Below To Read How To Use This Command!`,
footer: "⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔",
title: `🔸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}`,
buttonText: "❝ _How To Use?_ ❞",
sections: [
{
title: "𝐀𝐑𝐆𝐔𝐌𝐄𝐍𝐓 𝐍𝐄𝐄𝐃𝐄𝐃!",
rows: [
{
title: "⚡𝐔𝐬𝐚𝐠𝐞",
rowId: "argument required...",
description: `💡𝐈𝐧𝐟𝐨: In order to use this command, you must follow below instructions:
Option 1 - ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()} _anime name_`,
},
],
},
],
},
MessageType.buttonsMessage
);
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const name = args.join(" ");
console.log(name);
await malScraper.getInfoFromName(name).then(async (data) => {
return Image_Button.VImg(
client,
Fox,
AʀƈȶɨӼ,
`💡 𝐓𝐢𝐭𝐥𝐞: *${data.title}*
🧀 𝗣𝗿𝗲𝗺𝗶𝗲𝗿𝗲𝗱: _${data.premiered}_
😈 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁: _${data.broadcast}_
❓ 𝗚𝗲𝗻𝗿𝗲𝘀: _${data.genres}_
📜 𝗘𝗻𝗴𝗹𝗶𝘀𝗵𝗧𝗶𝘁𝗹𝗲: _${data.englishTitle}_
🈶 𝗝𝗮𝗽𝗮𝗻𝗲𝘀𝗲𝗧𝗶𝘁𝗹𝗲: _${data.japaneseTitle}_
🫒 𝗧𝘆𝗽𝗲: _${data.type}_
👀 𝗘𝗽𝗶𝘀𝗼𝗱𝗲𝘀: _${data.episodes}_
🔥 𝗥𝗮𝘁𝗶𝗻𝗴: _${data.rating}_
🛰️ 𝗔𝗶𝗿𝗲𝗱: _${data.aired}_
💯 𝗦𝗰𝗼𝗿𝗲: _${data.score}_
⭐ 𝗙𝗮𝘃𝗼𝗿𝗶𝘁𝗲𝘀: _${data.favorites}_
🏅 𝗥𝗮𝗻𝗸𝗲𝗱: _${data.ranked}_
⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: _${data.duration}_
🛸 𝗦𝘁𝘂𝗱𝗶𝗼𝘀: _${data.studios}_
🥳 𝗣𝗼𝗽𝘂𝗹𝗮𝗿𝗶𝘁𝘆: _${data.popularity}_
🥷 𝗠𝗲𝗺𝗯𝗲𝗿𝘀: _${data.members}_
👌🏽‍ 𝗦𝗰𝗼𝗿𝗲𝗦𝘁𝗮𝘁𝘀: _${data.scoreStats}_
🫐 𝗦𝗼𝘂𝗿𝗰𝗲: _${data.source}_
🔎 𝗦𝘆𝗻𝗼𝗻𝘆𝗺𝘀: _${data.synonyms}_
🕸️ 𝗦𝘁𝗮𝘁𝘂𝘀: _${data.status}_
🎯 𝗜𝗱: _${data.id}_
📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱: _${data.url}_`,
data.picture
);
});
} catch (error) {
return Oops.VOp(client, Fox, AʀƈȶɨӼ, error);
}
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
