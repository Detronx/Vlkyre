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
args: string[],
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
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

╔════⧉🐙 𝐊𝐢𝐧𝐠/𝐎𝐰𝐧𝐞𝐫
║• *${Konf.MuveOn}join:*  _join any valid group_
║• *${Konf.MuveOn}dyno:*  _check heroku usage_
║• *${Konf.MuveOn}ban:*  _ban bot in group/user_
║• *${Konf.MuveOn}unban:*  _unban bot in group/user_
║• *${Konf.MuveOn}reboot:*  _reboot sakura server_
║• *${Konf.MuveOn}bugreport:*  _ꜱᴇɴᴅ bug report to devs._
║• *${Konf.MuveOn}leave:*  _leave groups with/without sending text._
║• *${Konf.MuveOn}spam:*  _spam messsage in group/private_
║• *${Konf.MuveOn}help:*  _basic help command_
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
