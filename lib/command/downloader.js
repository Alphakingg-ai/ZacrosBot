let caliph = require("caliph-api");

cmd.on(
  "yt",
  ["ytmp3", "ytmp4"],
  ["downloader"],
  async (msg, { client, query, prefix, isUrl, command }) => {
    if (!isUrl)
      return client.reply(msg, `Link Yang Anda Masukan Bukan Dari Url`);
    let type =
      command.endsWith("3") ||
      command.endsWith("audio") ||
      command.endsWith("aud")
        ? await caliph.downloader.youtube.ytmp3(isUrl[0])
        : await caliph.downloader.youtube.ytmp4(isUrl[0]);
    let data =
      command.endsWith("3") ||
      command.endsWith("audio") ||
      command.endsWith("aud")
        ? {
            type: "audio",
            mimetype: "audio/mpeg",
            filename: type.title + ".mp3",
            quoted: msg,
          }
        : {
            type: "video",
            mimetype: "video/mp4",
            filename: type.title + ".mp4",
            quoted: msg,
          };
    let thumbnail = (await client.getBuffer(type.thumb)).buffer;
    client.sendMessage(msg.from, thumbnail, "imageMessage", {
      quoted: msg,
      caption: functions.parseResult(type, { title: "Youtube Downloader" }),
    });
    client.sendMessage(
      msg.from,
      (await client.getBuffer(type.result)).buffer,
      data.type + "Message",
      {
        ...data,
        contextInfo: {
          externalAdReply: {
            title: type.title,
            description: `Zacros`,
            mediaType: "VIDEO",
            thumbnail,
            mediaUrl: isUrl[0],
            thumbnailUrl: type.thumb,
          },
        },
      }
    );
  },
  {
    query: `Masukan Link Youtube`,
    param: functions.needed("Link Youtube/Video"),
  }
);

cmd.on(
  "playdua",
  ["play"],
  ["downloader"],
  async (msg, { query, client, prefix }) => {
    let res = await functions.ytSearch(query);
    let data = res.all[0].url;
    let mod = await caliph.downloader.youtube.ytmp3(data);
    let thumbnail = (await client.getBuffer(mod.thumb)).buffer;
    client.sendMessage(msg.from, thumbnail, "imageMessage", {
      quoted: msg,
      caption: functions.parseResult(mod, { title: "Youtube Player" }),
    });
    client.sendMessage(
      msg.from,
      (await client.getBuffer(mod.result)).buffer,
      "audioMessage",
      {
        ..."audioMessage",
        contextInfo: {
          externalAdReply: {
            title: mod.title,
            description: `Zacros`,
            mediaType: "VIDEO",
            thumbnail,
            mediaUrl: data,
            thumbnailUrl: mod.thumb,
          },
        },
      }
    );
  },
  {
    query:
      "Masukan Judul Lagu \nContoh : #play Linkin Park - In The End",
    param: functions.needed("query"),
  }
);

cmd.on(
  "yts",
  ["ytsearch"],
  ["search", "downloader"],
  async (msg, { query, client }) => {
    let a = (await functions.ytSearch(query)).all;
    let b = ``;
    for (let c of a)
      b +=
        functions.parseResult(c, {
          title: "Youtube Search",
          ignoreKey: ["duration"],
        }) + "\n";
    return client.sendText(msg.from, b.trim());
  },
  {
    query: "Isi Dengan Kata Kunci \nContoh : #ytsearch Linkin Park",
    param: functions.needed("query"),
  }
);

async (msg, { client }) => {
if (!userDb[msg.sender.jid]) {
functions.fs.writeFileSync(
          "./src/json/user.json",
          JSON.stringify(userDb, null, 2)
        );
};
};
