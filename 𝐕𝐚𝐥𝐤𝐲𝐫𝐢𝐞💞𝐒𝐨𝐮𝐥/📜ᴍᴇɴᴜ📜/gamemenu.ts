`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import { MessageType } from "../../𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/message-type";
import { proto } from "@adiwajshing/baileys";
import Client from "../../𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/client";
import νℓкуяιє from "../../𝐊𝐫𝐲𝐨⚜️𝐓𝐞𝐤/msb";
import Konf from "../../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞🀄𝐕𝐞𝐧𝐭/config";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
import * as fs from 'fs';
import path from 'path';
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
export = {
name: dotScrpt,
async handle(
client: Client,
chat: proto.IWebMessageInfo,
νℓкуяιє: νℓкуяιє,
args: string[]
): Promise<void> {
await client.sendMessage(
νℓкуяιє.chatId,
{
quoted: chat.message,
contextInfo: {
mentionedJid: [νℓкуяιє.sender],
},
timestamp: Date(),
image: { url: "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞👜𝐁𝐚𝐠/νℓкуяιє.png" },
caption: `╔◇✥𝐔𝐬𝐞𝐫: ${chat.pushName}
║🦋 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞: _Is an Advance Whatsapp User-Bot!_
║🛰️ 𝐖𝐞𝐛𝐬𝐢𝐭𝐞: _VlkyreAI.krakinzkon.repl.co_
╚◇════════════◇꧂

╔════⧉💰 𝗚𝗮𝗺𝗲𝘀
║• *${Konf.MuveOn}shop:*  _visit krakinzlab member store_
║• ${Konf.MuveOn}inv:*  _check your inventory or replied person's_
║• *${Konf.MuveOn}buy:*  _buy items from store_
║• *${Konf.MuveOn}pay:*  _reply to person to pay money_
║• *${Konf.MuveOn}hunt:*  _catch pokemon in forest_
║• *${Konf.MuveOn}zoo:*  _make a zoo_
║• *${Konf.MuveOn}gamble* _gamble with AI_
║• *${Konf.MuveOn}fish:*  _Catch A Fish From A Vast Ocean_
║• *${Konf.MuveOn}daily:*  _Gives You 200 per day_
║• *${Konf.MuveOn}work:*  _Work to Earn Money_
║• *${Konf.MuveOn}rob:*  _rob someone_
║• *${Konf.MuveOn}balance:*  _check your balance or replied person's_
║• *${Konf.MuveOn}truthdare:*  _get random truth/dare query_
╚════════════╝`,
footer: "`⦓ 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ⦔",
buttons: [
{
buttonId: `${Konf.MuveOn}help`,
buttonText: { displayText: `${Konf.MuveOn}help` },
type: 1,
},
{
buttonId: `${Konf.MuveOn}menu`,
buttonText: { displayText: `${Konf.MuveOn}menu` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
);
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
