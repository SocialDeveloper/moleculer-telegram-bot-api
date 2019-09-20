"use strict";

let { ServiceBroker } 	            = require("moleculer");
let TelegramBotApiService 			= require("../../index");

// Create broker
let broker = new ServiceBroker({
    logger: true,
    //logLevel: "warn"
    logLevel: "debug"
});

require('dotenv').config();

// Load my service
broker.createService({
    name: "telegram",
    mixins: [TelegramBotApiService],
    settings: {
        // Create Telegram Bot App
        token: '00000000:AAAAAAAAAAAAA',
        botOptions: {
            polling: true
        }
    }
});

// Start server
broker.start().then((data) => {
    // Add listener
    broker
        .call("telegram.on", { type: 'text', callback: (msg) => {
            let params = {
                typeContent: 'msg',
                chatId: '' + msg.chat.id,
                messageId: msg.message_id,
                message: msg.text,
                username: msg.from.username,
                userId: msg.from.id,
                user: msg.from,
                lang: 'ru'
            };

            console.log("New Message received:", params)
        }})
        .then(res => console.log("Response TG:", res))
        .catch(console.error);

    // Call action
    broker
        .call("telegram.sendMessage", { chatId: -1001473190001, message: "Hey <b>bro</b> <a href='tg://user?id=422222222'>User</a>", options: {parse_mode: 'HTML'}})
        .then(res => console.log("Response TG:", res))
        .catch(console.error);

    // Call action
    broker
        .call("telegram.forwardMessage", { chatId: -1001473190001, fromChatId: -1001473190000, messageId: 1000, options: {parse_mode: 'HTML'}})
        .then(res => console.log("Response TG:", res))
        .catch(err => {
            return this.Promise.reject();
        });
});
