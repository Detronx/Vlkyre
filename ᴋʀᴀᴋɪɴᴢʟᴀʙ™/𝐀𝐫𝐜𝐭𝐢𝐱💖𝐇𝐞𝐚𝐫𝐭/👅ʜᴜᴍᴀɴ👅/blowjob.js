"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const Image_Button = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Image_Button`);
const Video_Button = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Video_Button`);
const Text_List = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Text_List`);
const Oops = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops`);
const got = require(`got`);
const ffmpeg = require(`fluent-ffmpeg`);
const Downloader = require(`nodejs-file-downloader`);
const VOID = require(`../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const path_1 = __importDefault(require("path"));
var scriptName = path_1.default.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
module.exports = {
    name: dotScrpt,
    handle(client, Fox, AʀƈȶɨӼ, args, ӄʀʏȶɛӄ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ʟɴᴀᴍᴇ = AʀƈȶɨӼ.sender;
                const ᴅꜰɴᴀᴍᴇ = AʀƈȶɨӼ.commandName;
                const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
                const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
                ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
                console.log("💡Is Group: " + AʀƈȶɨӼ.isGroup);
                yield client.getGroupMetaData(AʀƈȶɨӼ.chatId, AʀƈȶɨӼ);
                console.log("💡Is Bot Group Admin: " + AʀƈȶɨӼ.isBotGroupAdmin);
                console.log("💡Is Sender Group Admin: " + AʀƈȶɨӼ.isSenderGroupAdmin);
                ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
                yield got(`https://www.reddit.com/r/Blowjobs/random.json`).then((newScpt) => __awaiter(this, void 0, void 0, function* () {
                    var file = JSON.parse(newScpt.body);
                    var title = file[0].data.children[0].data.title;
                    var amazeme = file[0].data.children[0].data.url;
                    ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
                    if (!amazeme.endsWith(`.png`) &&
                        !amazeme.endsWith(`.jpg`) &&
                        !amazeme.endsWith(`.jpeg`)) {
                        var amazeme = yield got(`https://www.reddit.com/r/Blowjobs/random.json`).then((newScpt) => __awaiter(this, void 0, void 0, function* () {
                            var file = JSON.parse(newScpt.body);
                            var title = file[0].data.children[0].data.title;
                            var amazeme = file[0].data.children[0].data.url;
                            return Image_Button.VImg(client, Fox, AʀƈȶɨӼ, `👅 𝐓𝐨𝐩𝐢𝐜: ${title}`, amazeme);
                        }));
                        ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
                    }
                    else if (amazeme.endsWith(`.gif`)) {
                        const downloader = yield new Downloader({
                            url: amazeme,
                            directory: `${__dirname}`,
                            fileName: `${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`,
                            cloneFiles: false,
                        });
                        try {
                            yield downloader.download();
                            ffmpeg(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`)
                                .outputOptions([
                                `-pix_fmt yuv420p`,
                                `-c:v libx264`,
                                `-movflags +faststart`,
                                `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
                            ])
                                .save(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`)
                                .on(`end`, () => __awaiter(this, void 0, void 0, function* () {
                                yield Video_Button.VVid(client, Fox, AʀƈȶɨӼ, `👅 𝐓𝐨𝐩𝐢𝐜: ${title}`, `${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`);
                                yield VOID.VOID(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`, `${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`);
                                return;
                            }));
                        }
                        catch (error) {
                            return Oops.VOp(client, Fox, AʀƈȶɨӼ, error);
                        }
                        ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
                    }
                    else {
                        return Image_Button.VImg(client, Fox, AʀƈȶɨӼ, `👅 𝐓𝐨𝐩𝐢𝐜: ${title}`, amazeme);
                    }
                }));
            }
            catch (error) {
                return Oops.VOp(client, Fox, AʀƈȶɨӼ, error);
            }
        });
    },
};
