cmd.on(
  "stickermaker",
  ["sticker", "stiker"],
  ["maker"],
  async (msg, { query, usedPref, commandNpref, command }) => {
    if (
      (msg.isMedia && !msg.type.includes("videoMessage")) ||
      (msg.quotedMsg.isMedia && !msg.quotedMsg.type.includes("videoMessage"))
    ) {
      const getbuff = msg.quotedMsg.isMedia ? msg.quotedMsg : msg;
      const dlfile = await client.downloadMediaMessage(getbuff);
      const baper = new Buffer.from(dlfile);
      await client.sendSticker(msg.from, baper, { quoted: msg });
    } else if (
      (msg.isMedia && msg.message.videoMessage.seconds < 11) ||
      (msg.quotedMsg.type.includes("videoMessage") &&
        msg.quotedMsg.message.videoMessage.seconds < 11)
    ) {
      const getbuff = msg.quotedMsg.isMedia ? msg.quotedMsg : msg;
      const dlfile = await client.downloadMediaMessage(getbuff);
      const baper = new Buffer.from(dlfile);
      //const exif = functions.createExif(botinfo.botname, botinfo.ownername ,"watermark");
      await client.sendSticker(msg.from, baper, { quoted: msg });
    } else {
      client.reply(
        msg,
        `Pastikan kirim gambar/video dengan caption *${commandNpref}* atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`
      );
    }
  },
  { wait: true, _media: true }
);

cmd.on(
  "toimg",
  ["toimg"],
  ["maker"],
  async (msg, { client }) => {
    client.toImage(msg.from, (await msg.quotedMsg.downloadMsg()).buffer);
  },
  { usedPrefix: true, param: functions.needed("Tag sticker") }
);

cmd.on(
  "tomp3",
  ["tomp3"],
  ["maker"],
  async (msg, { query, usedPref, commandNpref, command }) => {
  try {
   const getbuff = msg.quotedMsg.isMedia ? msg.quotedMsg : msg;
   const dlfile = await client.downloadAndSaveMediaMessage(getbuff);
    ran = "./lib/sampah.mp3"
     functions.exec(`ffmpeg -i ${dlfile} ${ran}`, (err) => {
		if (err) return console.log(err)
		buffer = functions.fs.readFileSync(ran)
	client.sendMessage(msg.from, buffer, "audioMessage", {mimetype: 'audio/mp4', quoted: msg, filename: 'jiah.mp3'})
    functions.exec("rm ./lib/sampah.mp3")
	})
  } catch {
  client.sendText(msg.from, "*WARNING* | Kirim atau tag pesan video dengan command #tomp3!!")
   }
  },
  { wait: true, _media: true });
