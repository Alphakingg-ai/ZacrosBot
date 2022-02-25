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
  "emoji",
  ["emoji"],
  ["maker"],
  async (msg, { query, client }) => {
   const arg = "Error! emoji yang kamu kirim tidak valid.\n\nContoh: #emoji 😎"
    if (!query) return client.sendText(msg.from, `Isi Query!\nContoh : #emoji 😎`, msg);
    if (!encodeURIComponent(query).includes("%")) return client.reply(msg, arg)
    function sendSFU (to, url, q) {
     let request = require("request")
      var names = new Date().getTime()
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(functions.fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./lib" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./lib" + names + ".png";
        let asw = "./lib" + names + ".webp";
        functions.exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = functions.fs.readFileSync(asw);
            client.sendMessage(to, media, "stickerMessage", { quoted: q });
            functions.fs.unlinkSync(filess);
            functions.fs.unlinkSync(asw);
          }
        );
      });
    }
     try {
      const axios = require ('axios')
      const html = await axios.get(`https://emojipedia.org/${encodeURIComponent(query)}`)
      const $ = require('cheerio').load(html.data)
      let links = {}
      $("section.vendor-list").find("div.vendor-container.vendor-rollout-target").each(function (a, b) {
      links[$(b).find("h2").text().toLowerCase().replace(/ /g, '_')] = $(b).find("img").attr("srcset").split(" ")[0]
     })
     sendSFU(msg.from, links.apple, msg)
     } catch {
     client.reply(msg, arg)
     }
   },
 { param: functions.needed("emoji"), wait: true });

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

cmd.on(
  "vibrato",
  ["vibra"],
  ["maker"],
  async (msg, { query, usedPref, commandNpref, command }) => {
  try {
    var msger = "*WARNING* | Reply pesan audio atau vn dengan command #vibra!!"
     encmedia = msg.quotedMsg.isMedia ? msg.quotedMsg : "./lib/audio.mp3"
      media = await client.downloadAndSaveMediaMessage(encmedia)
       ran = "./lib/yeah.mp3"
        functions.exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=10" ${ran}`, (err) => {
        functions.fs.unlinkSync(media)
       topt = functions.fs.readFileSync(ran)
      client.sendMessage(msg.from, topt, "audioMessage", {mimetype: "audio/mp4", ptt: true})
     functions.fs.unlinkSync(ran)
    });
  } catch {
  client.sendText(msg.from, msger)
   }
  },
  { wait: true, _media: true });
  
cmd.on(
  "reverse",
  ["reverse"],
  ["maker"],
  async (msg, { query, usedPref, commandNpref, command }) => {
  try {
    var msgror = "*WARNING* | Reply pesan audio atau vn dengan command #reverse!!"
     encmedia = msg.quotedMsg.isMedia ? msg.quotedMsg : "./lib/audio.mp3"
      media = await client.downloadAndSaveMediaMessage(encmedia)
       ran = "./lib/yeah.mp3"
        functions.exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err) => {
        functions.fs.unlinkSync(media)
       topt = functions.fs.readFileSync(ran)
      client.sendMessage(msg.from, topt, "audioMessage", {mimetype: "audio/mp4", ptt: true})
     functions.fs.unlinkSync(ran)
    });
  } catch {
  client.sendText(msg.from, msgror)
   }
  },
  { wait: true, _media: true });
