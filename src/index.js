/*
 * moleculer-telegram-bot-api
 * Copyright (c) 2019 Tom Stepanov
 * MIT Licensed
 */

"use strict";

const { MoleculerError } = require("moleculer").Errors;
const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();
/**
 * Send a message using the Telegram Bot API.
 *
 * https://core.telegram.org/bots/api
 *
 * @module Service
 */
module.exports = {
    name: "telegram",

    /**
     * Settings
     */
    settings: {
        /** @type {String} Visit https://core.telegram.org/bots/api for documentation */
        token: process.env.TELEGRAM_BOT_TOKEN,
        /** @type {Object} Visit https://core.telegram.org/bots/api for documentation */
        botOptions: process.env.TELEGRAM_BOT_OPTIONS,
    },

    /**
     * Actions
     */
    actions: {

        /**
         * Add listener for the specified event
         *
         * @actions
         * @param {String} type - Message text
         * @param {String} callback - Message text
         * @returns {String}
         */
        on: {
            params: {
                type: { type: "string" },
                callback: { type: "function" },
            },
            handler(ctx) {
                return this.on(ctx.params.type, ctx.params.callback);
            }
        },

        /**
         * Returns basic information about the bot in form of a `User` object.
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#getme
         */
        getMe: {
            params: {
                options: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.getMe(ctx.params.options);
            }
        },

        /**
         * Send a message
         *
         * @actions
         * @param {String} message - Message text
         * @returns {String}
         */
        sendMessage: {
            params: {
                chatId: { type: "number" },
                message: { type: "string" },
                options: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendMessage(ctx.params.chatId, ctx.params.message, ctx.params.options);
            }
        },

        /**
         * Use this method to forward messages of any kind. On success, the sent Message is returned.
         * @param  {Number|String} chatId     Unique identifier for the message recipient
         * @param  {Number|String} fromChatId Unique identifier for the chat where the original message was sent
         * @param  {Number|String} messageId  Unique message identifier
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         */
        forwardMessage: {
            params: {
                chatId: { type: "number" },
                fromChatId: { type: "number" },
                messageId: { type: "number" },
                options: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.forwardMessage(
                    ctx.params.chatId,
                    ctx.params.fromChatId,
                    ctx.params.messageId,
                    ctx.params.options
                );
            }
        },

        /**
         * Send photo
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String|stream.Stream|Buffer} photo A file path or a Stream. Can
         * also be a `file_id` previously uploaded
         * @param  {Object} [options] Additional Telegram query options
         * @param  {Object} [fileOptions] Optional file related meta-data
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#sendphoto
         * @see https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files
         */
        sendPhoto: {
            params: {
                chatId: { type: "number" },
                photo: { type: "string" },
                options: { type: "object", optional: true},
                fileOptions: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendPhoto(
                    ctx.params.chatId,
                    ctx.params.photo,
                    ctx.params.options,
                    ctx.params.fileOptions
                );
            }
        },

        /**
         * Send audio
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String|stream.Stream|Buffer} audio A file path, Stream or Buffer.
         * Can also be a `file_id` previously uploaded.
         * @param  {Object} [options] Additional Telegram query options
         * @param  {Object} [fileOptions] Optional file related meta-data
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#sendaudio
         */
        sendAudio: {
            params: {
                chatId: { type: "number" },
                audio: { type: "string" },
                options: { type: "object", optional: true},
                fileOptions: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendAudio(
                    ctx.params.chatId,
                    ctx.params.audio,
                    ctx.params.options,
                    ctx.params.fileOptions
                );
            }
        },

        /**
         * Send Document
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String|stream.Stream|Buffer} doc A file path, Stream or Buffer.
         * Can also be a `file_id` previously uploaded.
         * @param  {Object} [options] Additional Telegram query options
         * @param  {Object} [fileOptions] Optional file related meta-data
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#sendDocument
         */
        sendDocument: {
            params: {
                chatId: { type: "number" },
                document: { type: "string" },
                options: { type: "object", optional: true},
                fileOptions: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendDocument(
                    ctx.params.chatId,
                    ctx.params.document,
                    ctx.params.options,
                    ctx.params.fileOptions
                );
            }
        },

        /**
         * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document).
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String|stream.Stream|Buffer} video A file path or Stream.
         * Can also be a `file_id` previously uploaded.
         * @param  {Object} [options] Additional Telegram query options
         * @param  {Object} [fileOptions] Optional file related meta-data
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#sendvideo
         */
        sendVideo: {
            params: {
                chatId: { type: "number" },
                video: { type: "string" },
                options: { type: "object", optional: true},
                fileOptions: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendVideo(
                    ctx.params.chatId,
                    ctx.params.video,
                    ctx.params.options,
                    ctx.params.fileOptions
                );
            }
        },

        /**
         * Use this method to send rounded square videos of upto 1 minute long.
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String|stream.Stream|Buffer} videoNote A file path or Stream.
         * Can also be a `file_id` previously uploaded.
         * @param  {Object} [options] Additional Telegram query options
         * @param  {Object} [fileOptions] Optional file related meta-data
         * @return {Promise}
         * @info The length parameter is actually optional. However, the API (at time of writing) requires you to always provide it until it is fixed.
         * @see https://core.telegram.org/bots/api#sendvideonote
         * @see https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files
         */
        sendVideoNote: {
            params: {
                chatId: { type: "number" },
                videoNote: { type: "string" },
                options: { type: "object", optional: true},
                fileOptions: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendVideoNote(
                    ctx.params.chatId,
                    ctx.params.videoNote,
                    ctx.params.options,
                    ctx.params.fileOptions
                );
            }
        },

        /**
         * Use this method to send animation gifs.
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String|stream.Stream|Buffer} animation A file path or Stream.
         * Can also be a `file_id` previously uploaded.
         * @param  {Object} [options] Additional Telegram query options
         * @param  {Object} [fileOptions] Optional file related meta-data
         * @return {Promise}
         * @info The length parameter is actually optional. However, the API (at time of writing) requires you to always provide it until it is fixed.
         * @see https://core.telegram.org/bots/api#sendvideonote
         * @see https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files
         */
        sendAnimation: {
            params: {
                chatId: { type: "number" },
                animation: { type: "string" },
                options: { type: "object", optional: true},
                fileOptions: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendAnimation(
                    ctx.params.chatId,
                    ctx.params.animation,
                    ctx.params.options,
                    ctx.params.fileOptions
                );
            }
        },

        /**
         * Send voice
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String|stream.Stream|Buffer} voice A file path, Stream or Buffer.
         * Can also be a `file_id` previously uploaded.
         * @param  {Object} [options] Additional Telegram query options
         * @param  {Object} [fileOptions] Optional file related meta-data
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#sendvoice
         * @see https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files
         */
        sendVoice: {
            params: {
                chatId: { type: "number" },
                voice: { type: "string" },
                options: { type: "object", optional: true},
                fileOptions: { type: "object", optional: true},
            },
            handler(ctx) {
                return this.sendVoice(
                    ctx.params.chatId,
                    ctx.params.voice,
                    ctx.params.options,
                    ctx.params.fileOptions
                );
            }
        },

        /**
         * Use this method to send a group of photos or videos as an album.
         * On success, an array of the sent [Messages](https://core.telegram.org/bots/api#message)
         * is returned.
         *
         * If you wish to specify file options add a `fileOptions` property to the target input in `media`.
         *
         * @param  {String} chatId Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
         * @param  {Array} media A JSON-serialized array describing photos and videos to be sent, must include 2–10 items
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#sendmediagroup
         */
        sendMediaGroup: {
            params: {
                chatId: { type: "number" },
                media: { type: "string" },
                options: { type: "object", optional: true}
            },
            handler(ctx) {
                return this.sendMediaGroup(
                    ctx.params.chatId,
                    ctx.params.media,
                    ctx.params.options
                );
            }
        },

        /**
         * Send location.
         * Use this method to send point on the map.
         *
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {Float} latitude Latitude of location
         * @param  {Float} longitude Longitude of location
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#sendlocation
         */
        sendLocation: {
            params: {
                chatId: { type: "number" },
                latitude: { type: "number" },
                longitude: { type: "number" },
                options: { type: "object", optional: true}
            },
            handler(ctx) {
                return this.sendLocation(
                    ctx.params.chatId,
                    ctx.params.latitude,
                    ctx.params.longitude,
                    ctx.params.options
                );
            }
        },

        /**
         * Use this method to send answers to callback queries sent from
         * inline keyboards. The answer will be displayed to the user as
         * a notification at the top of the chat screen or as an alert.
         * On success, True is returned.
         *
         * This method has **older, compatible signatures ([1][answerCallbackQuery-v0.27.1])([2][answerCallbackQuery-v0.29.0])**
         * that are being deprecated.
         *
         * @param  {String} callbackQueryId Unique identifier for the query to be answered
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#answercallbackquery
         */
        answerCallbackQuery: {
            params: {
                queryId: { type: "number" },
                data: { type: "object", optional: true}
            },
            handler(ctx) {
                return this.answerCallbackQuery(
                    ctx.params.queryId,
                    ctx.params.data
                );
            }
        },

        /**
         * Send answers to an inline query.
         * @param  {String} inlineQueryId Unique identifier of the query
         * @param  {InlineQueryResult[]} results An array of results for the inline query
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#answerinlinequery
         */
        answerInlineQuery: {
            params: {
                queryId: { type: "number" },
                data: { type: "array" }
            },
            handler(ctx) {
                return this.answerInlineQuery(
                    ctx.params.queryId,
                    ctx.params.data
                );
            }
        },

        /**
         * Use this method to edit only the reply markup of messages
         * sent by the bot or via the bot (for inline bots).
         * On success, the edited Message is returned.
         *
         * Note that you must provide one of chat_id, message_id, or
         * inline_message_id in your request.
         *
         * @param  {Object} replyMarkup  A JSON-serialized object for an inline keyboard.
         * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#editmessagetext
         */
        editMessageReplyMarkup: {
            params: {
                replyMarkup: { type: "object" },
                data: { type: "object", optional: true}
            },
            handler(ctx) {
                return this.editMessageReplyMarkup(
                    ctx.params.replyMarkup,
                    ctx.params.data
                );
            }
        },

        /**
         * Answer pre-checkout query.
         * Use this method to confirm shipping of a product.
         *
         * @param  {String} preCheckoutQueryId  Unique identifier for the query to be answered
         * @param  {Boolean} ok Specify if every order details are ok
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#answerprecheckoutquery
         */
        answerPreCheckoutQuery: {
            params: {
                queryId: { type: "number" },
                ok: { type: "boolean" },
                errorMessage: { type: "string" },
            },
            handler(ctx) {
                return this.answerPreCheckoutQuery(
                    ctx.params.queryId,
                    ctx.params.ok,
                    ctx.params.errorMessage,
                );
            }
        },

        /**
         * Use this method to edit text messages sent by the bot or via
         * the bot (for inline bots). On success, the edited Message is
         * returned.
         *
         * Note that you must provide one of chat_id, message_id, or
         * inline_message_id in your request.
         *
         * @param  {String} text  New text of the message
         * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#editmessagetext
         */
        editMessageText: {
            params: {
                text: { type: "string" },
                options: { type: "object" },
            },
            handler(ctx) {
                return this.editMessageText(ctx.params.text, ctx.params.options);
            }
        },

        /**
         * Use this method to delete a message.
         * @param  {Number|String} chatId  Unique identifier of the target chat
         * @param  {String} messageId  Unique identifier of the target message
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#deletemessage
         */
        deleteMessage: {
            params: {
                chatId: { type: "number" },
                messageId: { type: "number" },
            },
            handler(ctx) {
                return this.deleteMessage(ctx.params.chatId, ctx.params.messageId);
            }
        },

        /**
         * Leave a group, supergroup or channel.
         * @param  {Number|String} chatId Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#leavechat
         */
        leaveChat: {
            params: {
                chatId: { type: "number" },
            },
            handler(ctx) {
                return this.leaveChat(ctx.params.chatId);
            }
        },

        /**
         * Use this method to pin a message in a supergroup.
         * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
         * Returns True on success.
         *
         * @param  {Number|String} chatId  Unique identifier for the message recipient
         * @param  {String} messageId Identifier of a message to pin
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#pinchatmessage
         */
        pinChatMessage: {
            params: {
                chatId: { type: "number" },
                messageId: { type: "number" },
                options: { type: "object" },
            },
            handler(ctx) {
                return this.pinChatMessage(ctx.params.chatId, ctx.params.messageId, ctx.params.options);
            }
        },

        /**
         * Use this method to get a list of profile pictures for a user.
         * Returns a [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object.
         * This method has an [older, compatible signature][getUserProfilePhotos-v0.25.0]
         * that is being deprecated.
         *
         * @param  {Number} userId  Unique identifier of the target user
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#getuserprofilephotos
         */
        getUserProfilePhotos: {
            params: {
                userId: { type: "number" },
                options: { type: "object" },
            },
            handler(ctx) {
                return this.getUserProfilePhotos(ctx.params.userId, ctx.params.options);
            }
        },

        /**
         * Use this method to edit captions of messages sent by the
         * bot or via the bot (for inline bots). On success, the
         * edited Message is returned.
         *
         * Note that you must provide one of chat_id, message_id, or
         * inline_message_id in your request.
         *
         * @param  {String} caption  New caption of the message
         * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#editmessagecaption
         */
        editMessageCaption: {
            params: {
                caption: { type: "string" },
                options: { type: "object" },
            },
            handler(ctx) {
                return this.editMessageCaption(ctx.params.caption, ctx.params.options);
            }
        },

        /**
         * Use this method to get information about a member of a chat.
         * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
         * @param  {Number} userId  Unique identifier of the target user
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#getchatmember
         */
        getChatMember: {
            params: {
                chatId: { type: "number" },
                userId: { type: "number" },
            },
            handler(ctx) {
                return this.getChatMember(ctx.params.chatId, ctx.params.userId);
            }
        },

        /**
         * Use this method to get the number of members in a chat.
         * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#getchatmemberscount
         */
        getChatMembersCount: {
            params: {
                chatId: { type: "number" },
            },
            handler(ctx) {
                return this.getChatMembersCount(ctx.params.chatId);
            }
        },

        /**
         * Returns the administrators in a chat in form of an Array of `ChatMember` objects.
         * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#getchatadministrators
         */
        getChatAdministrators: {
            params: {
                chatId: { type: "number" },
            },
            handler(ctx) {
                return this.getChatMembersCount(ctx.params.chatId);
            }
        },

        /**
         * Get file.
         * Use this method to get basic info about a file and prepare it for downloading.
         * Attention: link will be valid for 1 hour.
         *
         * @param  {String} fileId  File identifier to get info about
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#getfile
         */
        getFile: {
            params: {
                fileId: { type: "string" },
            },
            handler(ctx) {
                return this.getFile(ctx.params.fileId);
            }
        },

        /**
         * Use this method to export an invite link to a supergroup or a channel.
         * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
         * Returns exported invite link as String on success.
         *
         * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#exportchatinvitelink
         */
        exportChatInviteLink: {
            params: {
                chatId: { type: "number" },
            },
            handler(ctx) {
                return this.exportChatInviteLink(ctx.params.chatId);
            }
        },

        /**
         * Use this method to kick a user from a group or a supergroup.
         * In the case of supergroups, the user will not be able to return
         * to the group on their own using invite links, etc., unless unbanned
         * first. The bot must be an administrator in the group for this to work.
         * Returns True on success.
         *
         * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
         * @param  {Number} userId  Unique identifier of the target user
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#kickchatmember
         */
        kickChatMember: {
            params: {
                chatId: { type: "number" },
                userId: { type: "number" },
                untilDate: { type: "number", optional: true},
            },
            handler(ctx) {
                return this.kickChatMember(ctx.params.chatId, ctx.params.userId, {until_date:  ctx.params.untilDate});
            }
        },

        /**
         * Use this method to unban a previously kicked user in a supergroup.
         * The user will not return to the group automatically, but will be
         * able to join via link, etc. The bot must be an administrator in
         * the group for this to work. Returns True on success.
         *
         * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
         * @param  {Number} userId  Unique identifier of the target user
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#unbanchatmember
         */
        unbanChatMember: {
            params: {
                chatId: { type: "number" },
                userId: { type: "number" },
            },
            handler(ctx) {
                return this.unbanChatMember(ctx.params.chatId, ctx.params.userId);
            }
        },

        /**
         * Use this method to restrict a user in a supergroup.
         * The bot must be an administrator in the supergroup for this to work
         * and must have the appropriate admin rights. Pass True for all boolean parameters
         * to lift restrictions from a user. Returns True on success.
         *
         * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
         * @param  {Number} userId Unique identifier of the target user
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#restrictchatmember
         */
        restrictChatMember: {
            params: {
                chatId: { type: "number" },
                userId: { type: "number" },
                permissions: { type: "object" },
                untilDate: { type: "number", optional: true},
            },
            handler(ctx) {
                return this.restrictChatMember(
                    ctx.params.chatId,
                    ctx.params.userId,
                    Object.assign({until_date:  ctx.params.untilDate}, ctx.params.permissions)
                );
            }
        },

        /**
         * Use this method to promote or demote a user in a supergroup or a channel.
         * The bot must be an administrator in the chat for this to work
         * and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user.
         * Returns True on success.
         *
         * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
         * @param  {Number} userId
         * @param  {Object} [options] Additional Telegram query options
         * @return {Promise}
         * @see https://core.telegram.org/bots/api#promotechatmember
         */
        promoteChatMember: {
            params: {
                chatId: { type: "number" },
                userId: { type: "number" },
                permissions: { type: "object"},
            },
            handler(ctx) {
                return this.promoteChatMember(ctx.params.chatId, ctx.params.userId, ctx.params.permissions);
            }
        },
    },

    /**
     * Methods
     */
    methods: {
        on(type, callback) {
            this.logger.debug(`Adding listener for '${type}' event.`);

            this.client.on(type, callback);
        },
        getMe(options) {
            return this.client.getMe(options).then(res => {
                this.logger.info(`Telegram bot -> '${res.first_name}' | STARTED`);
                return res;
            }).catch(err => {
                // Possible errors: https://core.telegram.org/bots/api
                return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
            });
        },
        sendMessage(chatId, message, options) {
            this.logger.debug(`Sending message to '${message}' telegram. Chat Id: ${message}`, options);

            return this.client.sendMessage(chatId, message, options)
                .then(res => {
                    this.logger.debug(`The Message sent to '${chatId}' successfully! Resp: ${res}`);
                    return res;
                }).catch(err => {
                    // Possible errors: https://core.telegram.org/bots/api
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        forwardMessage(chatId, fromChatId, messageId, options) {
            this.logger.debug(`Forwarding message '${messageId}' from chat '${fromChatId}' to chat '${chatId}'`, options);

            return this.client.forwardMessage(chatId, fromChatId, messageId, options)
                .then(res => {
                    //this.logger.debug(`The Message forwarded from chat '${fromChatId}' to chat '${chatId}' successfully! Resp: ${res}`);
                    return res;
                }).catch(err => {
                    // Possible errors: https://core.telegram.org/bots/api
                    this.logger.warn(`The Message '${messageId}' not forwarded from chat '${fromChatId}' to chat '${chatId}'`, err);

                    return this.Promise.reject();
                });

        },
        sendPhoto(chatId, photo, options, fileOptions) {
            return this.client.sendPhoto(chatId, photo, options, fileOptions)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendAudio(chatId, audio, options, fileOptions) {
            return this.client.sendAudio(chatId, audio, options, fileOptions)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendDocument(chatId, document, options, fileOptions) {
            return this.client.sendDocument(chatId, document, options, fileOptions)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendVideo(chatId, video, options, fileOptions) {
            return this.client.sendVideo(chatId, video, options, fileOptions)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendVideoNote(chatId, videoNote, options, fileOptions) {
            return this.client.sendVideo(chatId, videoNote, options, fileOptions)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendAnimation(chatId, animation, options, fileOptions) {
            return this.client.sendAnimation(chatId, animation, options, fileOptions)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendVoice(chatId, voice, options, fileOptions) {
            return this.client.sendVoice(chatId, voice, options, fileOptions)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendMediaGroup(chatId, media, options) {
            return this.client.sendMediaGroup(chatId, media, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        sendLocation(chatId, latitude, longitude, options) {
            return this.client.sendLocation(chatId, latitude, longitude, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        answerCallbackQuery(queryId, data) {
            return this.client.answerCallbackQuery(queryId, data)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        answerInlineQuery(queryId, data) {
            return this.client.answerInlineQuery(queryId, data)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        editMessageReplyMarkup(replyMarkup, data) {
            return this.client.editMessageReplyMarkup(replyMarkup, data)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        editMessageCaption(caption, options) {
            return this.client.editMessageCaption(caption, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        answerPreCheckoutQuery(queryId, ok, errorMessage) {
            return this.client.answerPreCheckoutQuery(queryId, ok, errorMessage)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        editMessageText(text, options) {
            if(!options || !options.chat_id || !options.message_id) return;

            return this.client.editMessageText(text, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        deleteMessage(chatId, messageId) {
            return this.client.deleteMessage(chatId, messageId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        leaveChat(chatId, messageId) {
            return this.client.deleteMessage(chatId, messageId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        pinChatMessage(chatId, messageId, options) {
            return this.client.pinChatMessage(chatId, messageId, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });

        },
        getUserProfilePhotos(userId, options) {
            return this.client.getUserProfilePhotos(userId, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        getChatMember(chatId, userId) {
            return this.client.getChatMember(chatId, userId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        getChatMembersCount(chatId) {
            return this.client.getChatMembersCount(chatId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        getChatAdministrators(chatId) {
            return this.client.getChatAdministrators(chatId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        getFile(fileId) {
            return this.client.getFileLink(fileId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        exportChatInviteLink(chatId) {
            return this.client.exportChatInviteLink(chatId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        kickChatMember(chatId, userId, options) {
            return this.client.kickChatMember(chatId, userId, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        unbanChatMember(chatId, userId) {
            return this.client.unbanChatMember(chatId, userId)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        restrictChatMember(chatId, userId, options) {
            return this.client.restrictChatMember(chatId, userId, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        },
        promoteChatMember(chatId, userId, options) {
            return this.client.promoteChatMember(chatId, userId, options)
                .then(res => {
                    return res;
                }).catch(err => {
                    return this.Promise.reject(new MoleculerError(err.message + " " + err.detail, 500, "POSTMESSAGE_ERROR"));
                });
        }
    },

    /**
     * Service created lifecycle event handler
     */
    created() {
        /* istanbul ignore next */
        if (this.settings.token == null) this.logger.warn("The `token` is not configured. Please set the 'TELEGRAM_BOT_TOKEN' environment variable!");

        return this.Promise.resolve();
    },

    /**
     * Service started lifecycle event handler
     */
    started() {
        this.logger.info(`Bot started`);
        this.client = new TelegramBot(this.settings.token, this.settings.botOptions);

        this.getMe();
        return this.Promise.resolve();
    },

    /**
     * Service stopped lifecycle event handler
     */
    stopped() {
        /* istanbul ignore next */
        return this.Promise.resolve();
    }
};
