import { Client, Message, Partials } from 'discord.js';
import { chattingWithSarcasticDiscordBot, chattingWithSarcasticDiscordBota } from './gpt';

const client = new Client({
  intents: [
    "Guilds", 
    "GuildMembers",
    "GuildMessages",
    "MessageContent",
    "DirectMessages",
  ],
  partials: [
    Partials.Channel,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

let a = true;

client.on('messageCreate', async (message: Message) => {
  console.log(message.content);
  if (message.author.bot)
    return;
  message.channel.sendTyping();
  message.channel.send(await chattingWithSarcasticDiscordBot(message.content));
});

client.login('');
