let commisionBrocker = 1.94;
let commisionStation = 8;
let commisionSellLong = 1 - ((commisionBrocker + commisionStation) / 100); // долгая продажа 
let commisionSellFast = 1 - (commisionStation / 100); // быстрая продажа 
let commisionBuyLong = 1 + (commisionBrocker / 100);  // долгая покупка
let commisionBuyFast = 1;  // быстрая покупка

minerals = {
    Isogen: 37,
    Megacyte: 40,
    Mexallon: 36,
    Nocxium: 38,
    Pyerite: 35,
    Tritanium: 34,
    Zydrine: 39,
    Morphite: 11399,
};
