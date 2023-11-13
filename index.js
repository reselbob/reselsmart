// Create a Discord bot using the OpenAI API that interacts on a Discord server
require('dotenv').config();
const {sendChatToChatGPT} = require('./jsonLoader');

const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

const { OpenAI} = require('openai')

const openai = new OpenAI({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_KEY,
});
// Check for when a message on discord is sent
client.on('messageCreate', async (message) => {
    // Check if the message is from the bot
    try {

        console.log(message.content);
        if(message.author.bot) return;

        const question = message.content;
        await message.reply('Please stand by, ReselSmart is thinking...');
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: question }],
            model: "gpt-3.5-turbo",
        });

        console.log(completion.choices[0]);

        await message.reply(`From ReselSmart: ${completion.choices[0].message.content}`);

        // send the answer to OpenAI via LongChain to using the function loadJson in jsonLoader.js
        const json = {
            question: question,
            answer: completion.choices[0].message.content,
            company: 'ReselSmart'
        }
        const {documentLength} = await sendChatToChatGPT(json);
        console.log(`The document length is ${documentLength}`);


    } catch (e) {
        await message.reply(`From ReselSmart is having a hard time answering your question. Please try again later. Sorry!`);
        console.log(e)
    }
});

client.login(process.env.DISCORD_TOKEN)
console.log('ReselSmart bot is ready');





