//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
const path = require("path");
const fileName = path.basename(__filename);
const functionName = fileName.slice(0, -3).toLowerCase();

module.exports = async (BloomBot, mags) => {
  try {
    const query = BloomBot.args.join(" ");
    if (
      !query ||
      (query.includes("youtube") && !BloomBot.TubeRegex.test(query))
    ) {
      await BloomBot.sendMessage(mags.chat, {
        react: { text: "❌", key: mags.key },
      });
      return mags.reply(
        `*😥 Apologies:* ${BloomBot.pushname || BloomBot.Tname}
*❌Error:*
> _No query provided!_

*🌻 Usage* 
> _${BloomBot.prefix}${functionName} song/link_`
      );
    }
    const response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/youtube_sr?q=${query}`
    );
    console.log(response.response);
    const searchData = response.data.youtube_search[0];
    const musicResponse = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/youtube_dl?q=${searchData.TITLE}&quality=music`
    );
    const musicData = musicResponse.data[0];
    const audioFilename = `${BloomBot.between(3000, 4000)}${musicData.YT_Id}.mp3`;
    await BloomBot.exec(
      `${BloomBot.pathFFmpeg} -i ${musicData.quick_dl} -af "apulsator=hz=0.08" ${audioFilename}`
    );
    const audioFile = BloomBot.fs.readFileSync(`./${audioFilename}`);
    const thumbnail = await BloomBot.getBuffer(searchData.HQ_IMAGE);
    const mediaUrl = searchData.LINK || "Not available";
    const authorName = searchData.AUTHOR_NAME || "Not available";
    const description = searchData.DESCRIPTION || "No description available";
    const message = `
*🌻 Here's the information for ${functionName} requested by ${
      BloomBot.pushname || BloomBot.Tname
    }:*
*🎵 Title:* ${searchData.TITLE}
*👁️ Views:* ${searchData.VIEWS}  
*⏱️ Duration:* ${searchData.DURATION_FULL}
*🔗 Link:* ${mediaUrl}
*✍️ Author:* ${authorName}

*📜 Description:*
${description}`;
    await BloomBot.sendMessage(mags.chat, {
      text: message,
      options: {
        contextInfo: {
          externalAdReply: {
            title: searchData.TITLE,
            body: "ⒸBloomBot by Magneum™",
            renderLargerThumbnail: true,
            thumbnailUrl: searchData.HQ_IMAGE,
            mediaUrl,
            mediaType: 1,
            thumbnail,
            sourceUrl: "https://bit.ly/magneum",
          },
        },
      },
    });
    await BloomBot.sendMessage(mags.chat, {
      audio: audioFile,
      mimetype: "audio/mpeg",
      fileName: `${searchData.TITLE}.mp3`,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: searchData.TITLE,
          body: "ⒸBloomBot by Magneum™",
          renderLargerThumbnail: true,
          thumbnailUrl: searchData.HQ_IMAGE,
          mediaUrl,
          mediaType: 1,
          thumbnail,
          sourceUrl: "https://bit.ly/magneum",
        },
      },
    });
    BloomBot.fs.unlinkSync(`./${audioFilename}`);
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
