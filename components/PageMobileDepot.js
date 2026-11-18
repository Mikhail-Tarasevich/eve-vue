Vue.component('page-mobile-depot', {
    template: `
    <div>
        <h1>Mobile Depot</h1>
        <br>
        <p>Постройка Mobile Depot:</p>
        <br>
        <p>Цены в Jita:</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td>Товар</td><td align="center">Sell</td><td align="center">Buy</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>Mobile Depot</td><td align="right">{{mobiledepot.sell}}</td><td align="right">{{mobiledepot.buy}}</td><td align="right">{{mobiledepot.delta}}</td></tr>
                <tr><td>Guidance Systems</td><td align="right">{{guidancesystems.sell}}</td><td align="right">{{guidancesystems.buy}}</td><td align="right">{{guidancesystems.delta}}</td></tr>
                <tr><td>Smartfab Units</td><td align="right">{{smartfabunits.sell}}</td><td align="right">{{smartfabunits.buy}}</td><td align="right">{{smartfabunits.delta}}</td></tr>
                <tr><td>Nuclear Reactors</td><td align="right">{{nuclearreactors.sell}}</td><td align="right">{{nuclearreactors.buy}}</td><td align="right">{{nuclearreactors.delta}}</td></tr>
                <tr><td>High-Tech Transmitters</td><td align="right">{{hightechtransmitters.sell}}</td><td align="right">{{hightechtransmitters.buy}}</td><td align="right">{{hightechtransmitters.delta}}</td></tr>
                <tr><td>Zydrine</td><td align="right">{{zydrine.sell}}</td><td align="right">{{zydrine.buy}}</td><td align="right">{{zydrine.delta}}</td></tr>
                <tr><td>Pyerite</td><td align="right">{{pyerite.sell}}</td><td align="right">{{pyerite.buy}}</td><td align="right">{{pyerite.delta}}</td></tr>
                <tr><td>Tritanium</td><td align="right">{{tritanium.sell}}</td><td align="right">{{tritanium.buy}}</td><td align="right">{{tritanium.delta}}</td></tr>
            </tbody>
        </table>
        <br>
        <p>Профит.<br>Купить недостающие материалы по sell за {{AllMaterialsSell}}, построить за {{TotalWork}} ISK и продать</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td align="center">Себестоимость</td><td align="center">Долгая продажа</td><td align="center">Быстрая продажа</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>{{TotalSell.costPrice}}</td><td>{{TotalSell.sellLong}}</td><td>{{TotalSell.sellFast}}</td><td>{{TotalSell.delta}}</td></tr>
            </tbody>
        </table>
        <br>
        <p>Профит.<br>Купить недостающие материалы по buy за {{AllMaterialsBuy}}, построить за {{TotalWork}} ISK и продать</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td align="center">Себестоимость</td><td align="center">Долгая продажа</td><td align="center">Быстрая продажа</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>{{TotalBuy.costPrice}}</td><td>{{TotalBuy.buyLong}}</td><td>{{TotalBuy.buyFast}}</td><td>{{TotalBuy.delta}}</td></tr>
            </tbody>
        </table>
    </div>`,
    data() {
        return {
            mobiledepot: {'sell': '???', 'buy': '???', 'delta': '???',},
            guidancesystems: {'sell': '???', 'buy': '???', 'delta': '???',},
            smartfabunits: {'sell': '???', 'buy': '???', 'delta': '???',},
            nuclearreactors: {'sell': '???', 'buy': '???', 'delta': '???',},
            hightechtransmitters: {'sell': '???', 'buy': '???', 'delta': '???',},
            zydrine: {'sell': '???', 'buy': '???', 'delta': '???',},
            pyerite: {'sell': '???', 'buy': '???', 'delta': '???',},
            tritanium: {'sell': '???', 'buy': '???', 'delta': '???',},
            TotalBuy: {'costPrice': '???', 'buyLong': '???', 'buyFast': '???', 'delta': '???',},
            TotalSell: {'costPrice': '???', 'sellLong': '???', 'sellFast': '???', 'delta': '???',},
            TotalWork: '???',
            AllMaterialsSell: '???',
            AllMaterialsBuy: '???',
    }},
    created: async function() {
            let mobiledepot_sell = await getPrice("sell",33474); 
            let mobiledepot_buy = await getPrice("buy",33474); 
            this.mobiledepot.sell = formatNumber(mobiledepot_sell);
            this.mobiledepot.buy = formatNumber(mobiledepot_buy);
            this.mobiledepot.delta = formatNumber(mobiledepot_sell - mobiledepot_buy);
            let guidancesystems_buy = await getPrice("buy",9834); 
            let guidancesystems_sell = await getPrice("sell",9834); 
            this.guidancesystems.sell = formatNumber(guidancesystems_sell);
            this.guidancesystems.buy = formatNumber(guidancesystems_buy);
            this.guidancesystems.delta = formatNumber(guidancesystems_sell - guidancesystems_buy);
            let smartfabunits_buy = await getPrice("buy",2351); 
            let smartfabunits_sell = await getPrice("sell",2351); 
            this.smartfabunits.sell = formatNumber(smartfabunits_sell);
            this.smartfabunits.buy = formatNumber(smartfabunits_buy);
            this.smartfabunits.delta = formatNumber(smartfabunits_sell - smartfabunits_buy);
            let nuclearreactors_buy = await getPrice("buy",2352); 
            let nuclearreactors_sell = await getPrice("sell",2352); 
            this.nuclearreactors.sell = formatNumber(nuclearreactors_sell);
            this.nuclearreactors.buy = formatNumber(nuclearreactors_buy);
            this.nuclearreactors.delta = formatNumber(nuclearreactors_sell - nuclearreactors_buy);
            let hightechtransmitters_sell = await getPrice("sell",17898); 
            let hightechtransmitters_buy = await getPrice("buy",17898); 
            this.hightechtransmitters.sell = formatNumber(hightechtransmitters_sell);
            this.hightechtransmitters.buy = formatNumber(hightechtransmitters_buy);
            this.hightechtransmitters.delta = formatNumber(hightechtransmitters_sell - hightechtransmitters_buy);
            let zydrine_sell = await getPrice("sell",39); 
            let zydrine_buy = await getPrice("buy",39); 
            this.zydrine.sell = formatNumber(zydrine_sell);
            this.zydrine.buy = formatNumber(zydrine_buy);
            this.zydrine.delta = formatNumber(zydrine_sell - zydrine_buy);
            let pyerite_sell = await getPrice("sell",35); 
            let pyerite_buy = await getPrice("buy",35); 
            this.pyerite.sell = formatNumber(pyerite_sell);
            this.pyerite.buy = formatNumber(pyerite_buy);
            this.pyerite.delta = formatNumber(pyerite_sell - pyerite_buy);
            let tritanium_sell = await getPrice("sell",34); 
            let tritanium_buy = await getPrice("buy",34); 
            this.tritanium.sell = formatNumber(tritanium_sell);
            this.tritanium.buy = formatNumber(tritanium_buy);
            this.tritanium.delta = formatNumber(tritanium_sell - tritanium_buy);

            let iskTotalWork = 88400; // стоимость постройки УТОЧНИТЬ !!!
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell = (3 * guidancesystems_sell) + (3 * smartfabunits_sell) + nuclearreactors_sell + hightechtransmitters_sell + (444 * zydrine_sell) + (222 * pyerite_sell) + (5556 * tritanium_sell)
            this.AllMaterialsSell = formatNumber(costAllMaterialsSell);
            let costAllMaterialsBuy = (3 * guidancesystems_buy) + (3 * smartfabunits_buy) + nuclearreactors_buy + hightechtransmitters_buy + (444 * zydrine_buy) + (222 * pyerite_buy) + (5556 * tritanium_buy)
            this.AllMaterialsBuy = formatNumber(costAllMaterialsBuy);

            let TotalSellLong = (mobiledepot_sell * commisionSellLong) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellLong = formatNumber(TotalSellLong);
            let TotalSellFast = (mobiledepot_sell * commisionSellFast) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellFast = formatNumber(TotalSellFast);
            this.TotalSell.delta = formatNumber(TotalSellLong - TotalSellFast);
            this.TotalSell.costPrice = formatNumber(costAllMaterialsSell + iskTotalWork)

            let TotalBuyLong = (mobiledepot_sell * commisionSellLong) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyLong = formatNumber(TotalBuyLong);
            let TotalBuyFast = (mobiledepot_sell * commisionSellFast) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyFast = formatNumber(TotalBuyFast);
            this.TotalBuy.delta = formatNumber(TotalBuyLong - TotalBuyFast);
            this.TotalBuy.costPrice = formatNumber(costAllMaterialsBuy + iskTotalWork)
    },
});