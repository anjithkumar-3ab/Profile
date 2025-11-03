// Test script to get your Telegram Chat ID
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('❌ TELEGRAM_BOT_TOKEN not found in .env file!');
  process.exit(1);
}

console.log('✅ Bot Token found!');
console.log('🤖 Starting Telegram Bot...\n');

const bot = new TelegramBot(token, { polling: true });

console.log('📱 Bot is running!');
console.log('👉 Send a message to your bot on Telegram\n');
console.log('Waiting for messages...\n');

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || 'No username';
  const firstName = msg.from.first_name || 'Unknown';
  
  console.log('🎉 Message received!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 Your Chat ID: ${chatId}`);
  console.log(`👤 From: ${firstName} (@${username})`);
  console.log(`💬 Message: ${msg.text}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  console.log('✅ Add this to your .env file:');
  console.log(`TELEGRAM_CHAT_ID=${chatId}\n`);
  
  // Send confirmation message back
  bot.sendMessage(chatId, `✅ Success!\n\nYour Chat ID is: ${chatId}\n\nAdd this to your .env file as:\nTELEGRAM_CHAT_ID=${chatId}`);
  
  console.log('✨ You can close this script now (Ctrl+C)');
});

bot.on('polling_error', (error) => {
  console.error('❌ Polling error:', error.message);
});

console.log('Press Ctrl+C to stop');
