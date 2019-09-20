![Moleculer logo](http://moleculer.services/images/banner.png)

# moleculer-telegram-bot-api 

Node.js module to interact with official Telegram Bot API. A bot token is required and can be obtained by talking to @botfather.

# Install

```bash
$ npm install moleculer-telegram-bot-api --save
```

# Usage

> Before use please set the `YOUR_TELEGRAM_BOT_TOKEN`.

```js
let { ServiceBroker }     = require("moleculer");
let TelegramBotApiService             = require("../../index");

// Create broker
let broker = new TelegramBotApiService({
    token: 'YOUR_TELEGRAM_BOT_TOKEN',
    polling: true
});

// Load my service
broker.createService({
    name: "telegram",
    mixins: [TelegramBotApiService]
});

// Start server
broker.start().then(() => {

    broker
        .call("on", {
            type: 'text',
            callback: (msg) => {
                let params = {
                    typeContent: 'msg',
                    chatId: '' + msg.chat.id,
                    messageId: msg.message_id,
                    message: msg.text,
                    username: msg.from.username,
                    userId: msg.from.id,
                    user: msg.from,
                };
                        
                console.log("New Message received:", params);
            }
        })
        .then((msg) => {
            const chatId = msg.chat.id;
              
            // send a message to the chat acknowledging receipt of their message
            broker.call("telegram.sendMessage", {
                chatId, 
                message: 'Received your message'
            });
        })
        .catch(console.error);

});
```

# Settings

<!-- AUTO-CONTENT-START:SETTINGS -->
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `token` | `String` | **required** | Telegram Bot API Token. |
| `polling` | `Bool` | `true` | Create a bot that uses 'polling' to fetch new updates |

<!-- AUTO-CONTENT-END:SETTINGS -->

<!-- AUTO-CONTENT-TEMPLATE:SETTINGS
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
{{#each this}}
| `{{name}}` | {{type}} | {{defaultValue}} | {{description}} |
{{/each}}
{{^this}}
*No settings.*
{{/this}}

-->

# License
The project is available under the [MIT license](https://tldrlegal.com/license/mit-license).

# Contact
Copyright (c) 2019 Tom Stepanov
