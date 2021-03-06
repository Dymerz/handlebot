
const dotenv = require('dotenv')
dotenv.config({ path: '.env.dev' });
dotenv.config({ path: '.env' });

const BotClient = require('./src/structs/client');

if (typeof process.env.TOKEN !== 'string') {
    throw new TypeError('Le token doit être un string');
}

client = new BotClient()
client.login().then(function () {
    client.start()
})