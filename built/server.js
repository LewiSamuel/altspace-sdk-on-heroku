"use strict";
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mixed_reality_extension_sdk_1 = require("@microsoft/mixed-reality-extension-sdk");
const path_1 = require("path");
const app_1 = __importDefault(require("./app"));
process.on('uncaughtException', (err) => console.log('uncaughtException', err));
process.on('unhandledRejection', (reason) => console.log('unhandledRejection', reason));
const logger = new mixed_reality_extension_sdk_1.ConsoleLogger();
logger.disable('debug', 'success');
// Start listening for connections, and serve static files
const server = new mixed_reality_extension_sdk_1.WebHost({
    baseDir: path_1.resolve(__dirname, '../public'),
    baseUrl: "http://10.0.1.89:3901",
    logger
});
// Handle new application sessions
server.adapter.onConnection(context => new app_1.default(context, server.baseUrl));
//# sourceMappingURL=server.js.map