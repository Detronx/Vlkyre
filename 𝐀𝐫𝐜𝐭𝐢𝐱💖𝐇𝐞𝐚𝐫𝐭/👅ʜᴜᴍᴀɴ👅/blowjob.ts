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
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
const got = require(`got`);
const ffmpeg = require(`fluent-ffmpeg`);
import { proto } from "@adiwajshing/baileys";
const Downloader = require(`nodejs-file-downloader`);
const VOID = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/client";
import AʀƈȶɨӼ from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
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

await got(`https://www.reddit.com/r/Blowjobs/random.json`).then(
async (newScpt) => {
var file = JSON.parse(newScpt.body);
var title = file[0].data.children[0].data.title;
var amazeme = file[0].data.children[0].data.url;
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
if (
!amazeme.endsWith(`.png`) &&
!amazeme.endsWith(`.jpg`) &&
!amazeme.endsWith(`.jpeg`)
) {
var amazeme = await got(
`https://www.reddit.com/r/Blowjobs/random.json`
).then(async (newScpt) => {
var file = JSON.parse(newScpt.body);
var title = file[0].data.children[0].data.title;
var amazeme = file[0].data.children[0].data.url;
return Image_Button.VImg(
client,
Fox,
AʀƈȶɨӼ,
`👅 𝐓𝐨𝐩𝐢𝐜: ${title}`,
amazeme
);
});
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} else if (amazeme.endsWith(`.gif`)) {
const downloader = await new Downloader({
url: amazeme,
directory: `${__dirname}`,
fileName: `${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`,
cloneFiles: false,
});
try {
await downloader.download();
ffmpeg(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`)
.on(`end`, async () => {
await Video_Button.VVid(
client,
Fox,
AʀƈȶɨӼ,
`👅 𝐓𝐨𝐩𝐢𝐜: ${title}`,
`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`
);
await VOID.VOID(
`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`,
`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`
);
return;
});
} catch (error) {
return Oops.VOp(client, Fox, AʀƈȶɨӼ, error);
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
} else {
return Image_Button.VImg(
client,
Fox,
AʀƈȶɨӼ,
`👅 𝐓𝐨𝐩𝐢𝐜: ${title}`,
amazeme
);
}
}
);
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
