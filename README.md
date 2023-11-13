# reselsmart
A project that demonstrates how to integrate ChatGPT and Open AI in order to observe conversations on a custom Discord server.

![Screenshot 2023-11-13 at 9 25 16 AM](https://github.com/reselbob/reselsmart/assets/1110569/1870c96a-a82f-4c66-a8a4-ed693e8c8358)


# Requirements

- A computer running Node.JS 18+

- An account on [Discord](https://discord.com/) with a server that you have administrative privileges on. Also, you need to have a Discord token.

- An account on OpenAI's [OpenAI API](https://beta.openai.com/), and an API key and an organization key.

- An `.env` file with the following properties:

```bash
DISCORD_TOKEN=<YOUR_DISCORD_TOKEN>
OPENAI_ORG=<YOUR_OPENAI_ORG_KEY>
OPENAI_KEY=sk-<YOUR_OPENAI-KEY>
```

# What you need to know how to do

- You need to know how to set up a Discord server.

View [this video](https://youtu.be/5tijQ-PjQw8) to lear how to set up a Discord server.
- You need to know how to set up how to write a Discord bot in Node.js.

Watch [this video](https://youtu.be/EUlnKW6Yy94) to learn how to write a Discord bot in Node.js:



# How to get the bot up and running

```bash
npm install
```

```bash 
node index.js
```

Once `index.js` is up and running the bot will show up in your Discord server.
