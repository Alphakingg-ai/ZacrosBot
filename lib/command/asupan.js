cmd.on("ceweindo", ["indo"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Cewe Indo Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `#indo`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("cewevietnam", ["vietnam"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Vietnam Girl Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `vietnamindo`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("cewekorea", ["korea"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Korean Girl Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `#korea`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("cewejepang", ["jepang"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Japanese Girl Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `#jepang`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("cewethailand", ["thailand"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Thailand Girl Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `#thailand`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("cewechina", ["china"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Chinnese Girl Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `#china`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("cewecantik", ["cecan"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Cecan Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `#cecan`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("ceweukhty", ["ukhty"], ["asupan"], async (msg, { client }) => {
    let res = await functions.searchImage("Ukhty Cantik Pinterest");
    res = res.filter((tr) => tr.url.includes("pinimg"));
    let random = functions.randomize(res);
    return client
      .sendButton(
        msg.from,
        (await client.getBuffer(random.url)).buffer,
        "imageMessage",
        [{ id: `#ukhty`, text: "Get Again" }],
        {
          caption: "_Tetha-Bot Asupan_",
          footer: botinfo.footerText,
        }
      )
      .catch((e) =>
        client.reply(msg, `Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`)
      );
  },
  { wait: true });

cmd.on("santuy", ["santuy"], ["asupan"], async (msg, { client }) => {
  return client.sendVideo(msg.from, botinfo.linkApi.zacros + "/asupan/santuy/");
});

cmd.on("loli", ["loli"], ["asupan"], async (msg, { client }) => {
  return client.sendVideo(msg.from, botinfo.linkApi.zacros + "/asupan/loli/");
});

cmd.on("hijaber", ["hijaber"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(msg.from, botinfo.linkApi.zacros + "/asupan/hijaber/");
});
