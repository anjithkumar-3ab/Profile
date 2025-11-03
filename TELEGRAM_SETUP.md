# Telegram Bot Setup Instructions

## Your Bot Token
```
7909654212:AAHZjcy0pfa7pE6OZFIfA6O4QPANpsGrQdc
```

## Steps to Get Your Chat ID:

### Method 1: Using the GetIDs Bot (Easiest)
1. Open Telegram and search for `@userinfobot`
2. Start a chat with the bot
3. Send any message
4. The bot will reply with your Chat ID
5. Copy the Chat ID and add it to your `.env` file

### Method 2: Using Your Own Bot
1. Open Telegram and search for your bot using the username you created
2. Click "Start" or send any message to your bot
3. Visit this URL in your browser (replace YOUR_BOT_TOKEN):
   ```
   https://api.telegram.org/bot7909654212:AAHZjcy0pfa7pE6OZFIfA6O4QPANpsGrQdc/getUpdates
   ```
4. Look for `"chat":{"id":` in the response
5. Copy the number after `"id":`
6. Add it to your `.env` file as `TELEGRAM_CHAT_ID`

### Method 3: Use the test script
Run this command in terminal:
```bash
node server/telegram-test.js
```
Then send a message to your bot and check the console.

## Update .env File
After getting your Chat ID, update the `.env` file:
```
TELEGRAM_CHAT_ID=your_chat_id_here
```

## Features:
- ✅ Contact form submissions sent to Telegram instantly
- ✅ Formatted messages with emojis
- ✅ Shows sender name, email, subject, and message
- ✅ Includes timestamp
- ✅ Works alongside email notifications

## Test Your Setup:
1. Get your Chat ID using one of the methods above
2. Add it to `.env` file
3. Restart your server (`npm run dev`)
4. Fill out the contact form on your portfolio
5. You should receive a Telegram notification!
