`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import * as fs from "fs";
const Oops = require(`../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const Text_List = require(`../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Text_List`);
import { MessageType } from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
const Image_Button = require(`../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Image_Button`);
const Video_Button = require(`../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Video_Button`);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const Filter_Media = async (
client: any,
Fox: any,
AʀƈȶɨӼ: any,
FileName: any,
ConvertedName: any,
Filter: any
): Promise<void> => {
try {
require("child_process").exec(
`ffmpeg -i ${FileName} ${Filter} ${ConvertedName}`,
async () => {
await client
.sendMessage(
AʀƈȶɨӼ.chatId,
fs.readFileSync(ConvertedName),
MessageType.audio
)
.catch((error: any) => Oops.VOp(client, Fox, AʀƈȶɨӼ, error));
await VOID.VOID(FileName, ConvertedName);
}
);
} catch (error) {
console.log(error);
}
};
export = {
VFmedia: Filter_Media,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
