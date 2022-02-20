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
