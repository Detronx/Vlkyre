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
const ToSticker = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ToSticker`);
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import { proto } from "@adiwajshing/baileys";
const VOID = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/client";
import νℓкуяιє from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
import * as fs from "fs";
import path from "path";
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
export = {
name: dotScrpt,
async handle(
client: Client,
chat: proto.IWebMessageInfo,
νℓкуяιє: νℓкуяιє,
args: string[],
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
): Promise<void> {
try {
const ʟɴᴀᴍᴇ = νℓкуяιє.sender;
const ᴅꜰɴᴀᴍᴇ = νℓкуяιє.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
console.log("💡Is Group: " + νℓкуяιє.isGroup);
await client.getGroupMetaData(νℓкуяιє.chatId, νℓкуяιє);
console.log("💡Is Bot Group Admin: " + νℓкуяιє.isBotGroupAdmin);
console.log("💡Is Sender Group Admin: " + νℓкуяιє.isSenderGroupAdmin);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (νℓкуяιє.isImage || νℓкуяιє.isGIF || νℓкуяιє.isVideo) {
var FileSocketObject = {
message:
νℓкуяιє.type === "image"
? chat.message.imageMessage
: chat.message.videoMessage,
type: νℓкуяιє.type,
};
var FileID: string = chat.key.id;
await ToSticker.VStk(
client,
chat,
args,
νℓкуяιє,
FileID,
FileSocketObject
);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} else if (
νℓкуяιє.isReplyImage ||
νℓкуяιє.isReplyGIF ||
νℓкуяιє.isReplyVideo
) {
var FileSocketObject = {
message: νℓкуяιє.isReplyImage
? chat.message.extendedTextMessage.contextInfo.quotedMessage
.imageMessage
: chat.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage,
type: νℓкуяιє.isReplyImage ? "image" : "video",
};
var FileID: string =
chat.message.extendedTextMessage.contextInfo.stanzaId;
await ToSticker.VStk(
client,
chat,
args,
νℓкуяιє,
FileID,
FileSocketObject
);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} else {
await client.sendMessage(
νℓкуяιє.chatId,
{
text: `✥𝐔𝐬𝐞𝐫: ${chat.pushName} 

Press Below To Read How To Use This Command!`,
footer: "⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔",
title: `🔸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}`,
buttonText: "❝ How To Use? ❞",
sections: [
{
title: "𝐀𝐑𝐆𝐔𝐌𝐄𝐍𝐓 𝐍𝐄𝐄𝐃𝐄𝐃!",
rows: [
{
title: "⚡𝐔𝐬𝐚𝐠𝐞",
rowId: "argument required...",
description: `💡𝐈𝐧𝐟𝐨: In order to use this command, you must follow below instructions:
Option 1 - reply to media: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}
Option 2 - reply to media: ${
ʟᴀʏᴏᴜᴛ.MuveOn
}${dotScrpt.toUpperCase()} _<sticker title>_

╔════◇ *Supported Media Types* ꧂
║- Image
║- Video (10s)
║- PNG
║- JPEG
║- WEBP
╚════════════╝`,
},
],
},
],
},
MessageType.buttonsMessage
);
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} catch (error) {
await client.sendMessage(
νℓкуяιє.chatId,
{
text: `✥𝐔𝐬𝐞𝐫: ${chat.pushName} 

Press Below To Read How To Use This Command!`,
footer: "⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔",
title: `🔸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}`,
buttonText: "❝ How To Use? ❞",
sections: [
{
title: "𝐀𝐑𝐆𝐔𝐌𝐄𝐍𝐓 𝐍𝐄𝐄𝐃𝐄𝐃!",
rows: [
{
title: "⚡𝐔𝐬𝐚𝐠𝐞",
rowId: "argument required...",
description: `💡𝐈𝐧𝐟𝐨: In order to use this command, you must follow below instructions:
Option 1 - reply to media: ${ʟᴀʏᴏᴜᴛ.MuveOn}${dotScrpt.toUpperCase()}
Option 2 - reply to media: ${
ʟᴀʏᴏᴜᴛ.MuveOn
}${dotScrpt.toUpperCase()} _<sticker title>_

╔════◇ *Supported Media Types* ꧂
║- Image
║- Video (10s)
║- PNG
║- JPEG
║- WEBP
╚════════════╝`,
},
],
},
],
},
MessageType.buttonsMessage
);
}
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
