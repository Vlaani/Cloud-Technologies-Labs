const serverIp = process.env.serverIp;
const Port = process.env.Port;
const dbURI = process.env.dbURL;
const tokenExpiresIn = process.env.tokenExpiresIn;

module.exports = {serverIp, Port, dbURI, tokenExpiresIn};