# Uptime-Bot

```diff
+ The source code will work on Repl.it.
+ Node V14 Required.
+ Keeps glitch and Repl.it projects online
- Bot can't be hosted on glitch
```

## About

Uptimer is a open-source, free discord bot that allows you to make your projects online 24/7.

## Supported Sites

- [Glitch](https://glitch.com/)
- [Repl](http://repl.it/)

## Ussage

> Works for [Glitch](https://glitch.com/)

1. Go to Your Project. Click the share button.

![Glitch First](https://github.com/naveenpoddar/uptimer/blob/main/images/glitch-first.png?raw=true)

2. Copy the url in `Live Site`.

![Glitch Second](https://github.com/naveenpoddar/uptimer/blob/main/images/glitch-second.png?raw=true)

4. Next go to your Discord Server with uptimer and go to the uptimer channel.

![Uptimer Channel](https://github.com/naveenpoddar/uptimer/blob/main/images/uptimer.png?raw=true)

5. Now add that url in Uptimer bot, using this command `<prefix>add <the url you just copied>`.

> Works for [Repl](http://repl.it/)

1. Go to your project. if your project looks like this and it dont have the browser window so continue the steps, if you already have a browser window in the top right corner skip to `step 3`.

![Repl](https://github.com/naveenpoddar/uptimer/blob/main/images/repl-first.png?raw=true)

2. Now go to your main file in my case it is `index.js`, and on the top of your file paste this code, and it will create an express app.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`);
});
```

3. Next Click `Run` button, if already running stop it and `Run` the project, you'll see a browser window appeared in the top right corner.

4. Now copy the url in the browser window.

![Repl Second](https://github.com/naveenpoddar/uptimer/blob/main/images/repl-second.png?raw=true)

4. Next go to your Discord Server with uptimer and go to the uptimer channel.

![Uptimer Channel](https://github.com/naveenpoddar/uptimer/blob/main/images/uptimer.png?raw=true)

5. Now add that url in Uptimer bot, using this command `<prefix>add <the url you just copied>`.

## Queries?

If you have any questions regarding this project, or you are not able to use this bot, feel free to dm me at swampplays11#6613

## .env File

```env
BOT_TOKEN="your bot token"
MONGO_URI="your mongo-db uri"
```
