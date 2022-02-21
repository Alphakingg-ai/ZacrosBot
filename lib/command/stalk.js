cmd.on(
  "ghstalk",
  ["githubstalk"],
  ["stalk"],
  async (msg, { query, client }) => {
    if (!query)
      return client.sendText(
        msg.from,
        `Isi Query!\nContoh : .githubstalk Azyansah`,
        msg
      );
    let res = await functions.axios.get(
      `${botinfo.linkApi.zacros}/info/ghstalk?username=${query}`
    );
    let anu = res.data.result;
    return client.sendImage(
      msg.from,
      anu.avatar,
      functions.parseResult(anu, { title: "Github Stalk" })
    );
  },
  { param: functions.needed("Query"), wait: true }
);

cmd.on(
  "igstalk",
  ["igstalk"],
  ["stalk"],
  async (msg, { query, client }) => {
    if (!query)
      return client.sendText(
        msg.from,
        `Isi Query!\nContoh : #igstalk theodorickalfa09_`,
        msg
      );
    y = require("caliph-api")
     anu = await y.igstalk(query)
     if (anu.status !== 200) return client.sendText(msg.from, "Username tidak valid atau bahkan tidak ada")
      client.sendImage(
      msg.from,
      anu.profile.high, functions.parseResult(anu.data, { title: "Instagram Stalk" })
)
  },
  { wait: true, param: functions.needed("Query") }
);
