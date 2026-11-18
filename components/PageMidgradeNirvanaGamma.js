Vue.component('page-midgrade-nirvana-gamma', {
    template: `
    <div>
        <h1>Mid-grade Nirvana Gamma</h1>
        <br>
        <p>Постройка Mid-grade Nirvana Gamma:</p>
        <br>
        <p>Цены в Jita:</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td>Товар</td><td align="center">Sell</td><td align="center">Buy</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>Mid-grade Nirvana Gamma</td><td align="right">{{midgradenirvanagamma.sell}}</td><td align="right">{{midgradenirvanagamma.buy}}</td><td align="right">{{midgradenirvanagamma.delta}}</td></tr>
                <tr><td>Transcranial Microcontrollers</td><td align="right">{{transcranialmicrocontrollers.sell}}</td><td align="right">{{transcranialmicrocontrollers.buy}}</td><td align="right">{{transcranialmicrocontrollers.delta}}</td></tr>
                <tr><td>Ukomi Superconductors</td><td align="right">{{ukomisuperconductors.sell}}</td><td align="right">{{ukomisuperconductors.buy}}</td><td align="right">{{ukomisuperconductors.delta}}</td></tr>
                <tr><td>Gel-Matrix Biopaste</td><td align="right">{{gelmatrixbiopaste.sell}}</td><td align="right">{{gelmatrixbiopaste.buy}}</td><td align="right">{{gelmatrixbiopaste.delta}}</td></tr>
                <tr><td>Nano-Factory</td><td align="right">{{nanofactory.sell}}</td><td align="right">{{nanofactory.buy}}</td><td align="right">{{nanofactory.delta}}</td></tr>
                <tr><td>Morphite</td><td align="right">{{morphite.sell}}</td><td align="right">{{morphite.buy}}</td><td align="right">{{morphite.delta}}</td></tr>
            </tbody>
        </table>
        <br>
        <p>Профит.<br>Купить недостающие материалы по sell за {{AllMaterialsSell}}, построить за {{TotalWork}} ISK и продать</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td align="center">Долгая продажа</td><td align="center">Быстрая продажа</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>{{TotalSell.sellLong}}</td><td>{{TotalSell.sellFast}}</td><td>{{TotalSell.delta}}</td></tr>
            </tbody>
        </table>
        <br>
        <p>Профит.<br>Купить недостающие материалы по buy за {{AllMaterialsBuy}}, построить за {{TotalWork}} ISK и продать</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td align="center">Долгая продажа</td><td align="center">Быстрая продажа</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>{{TotalBuy.buyLong}}</td><td>{{TotalBuy.buyFast}}</td><td>{{TotalBuy.delta}}</td></tr>
            </tbody>
        </table>
    </div>`,
    data() {
        return {
            midgradenirvanagamma: {'sell': '???', 'buy': '???', 'delta': '???',},
            transcranialmicrocontrollers: {'sell': '???', 'buy': '???', 'delta': '???',},
            ukomisuperconductors: {'sell': '???', 'buy': '???', 'delta': '???',},
            gelmatrixbiopaste: {'sell': '???', 'buy': '???', 'delta': '???',},
            nanofactory: {'sell': '???', 'buy': '???', 'delta': '???',},
            morphite: {'sell': '???', 'buy': '???', 'delta': '???',},
            TotalBuy: {'buyLong': '???', 'buyFast': '???', 'delta': '???',},
            TotalSell: {'sellLong': '???', 'sellFast': '???', 'delta': '???',},
            TotalWork: '???',
            AllMaterialsSell: '???',
            AllMaterialsBuy: '???',
    }},
    created: async function() {
            let midgradenirvanagamma_sell = await getPrice("sell",53708); 
            let midgradenirvanagamma_buy = await getPrice("buy",53708); 
            this.midgradenirvanagamma.sell = formatNumber(midgradenirvanagamma_sell);
            this.midgradenirvanagamma.buy = formatNumber(midgradenirvanagamma_buy);
            this.midgradenirvanagamma.delta = formatNumber(midgradenirvanagamma_sell - midgradenirvanagamma_buy);
            let transcranialmicrocontrollers_buy = await getPrice("buy",12836); 
            let transcranialmicrocontrollers_sell = await getPrice("sell",12836); 
            this.transcranialmicrocontrollers.sell = formatNumber(transcranialmicrocontrollers_sell);
            this.transcranialmicrocontrollers.buy = formatNumber(transcranialmicrocontrollers_buy);
            this.transcranialmicrocontrollers.delta = formatNumber(transcranialmicrocontrollers_sell - transcranialmicrocontrollers_buy);
            let ukomisuperconductors_buy = await getPrice("buy",17136); 
            let ukomisuperconductors_sell = await getPrice("sell",17136); 
            this.ukomisuperconductors.sell = formatNumber(ukomisuperconductors_sell);
            this.ukomisuperconductors.buy = formatNumber(ukomisuperconductors_buy);
            this.ukomisuperconductors.delta = formatNumber(ukomisuperconductors_sell - ukomisuperconductors_buy);
            let gelmatrixbiopaste_buy = await getPrice("buy",2348); 
            let gelmatrixbiopaste_sell = await getPrice("sell",2348); 
            this.gelmatrixbiopaste.sell = formatNumber(gelmatrixbiopaste_sell);
            this.gelmatrixbiopaste.buy = formatNumber(gelmatrixbiopaste_buy);
            this.gelmatrixbiopaste.delta = formatNumber(gelmatrixbiopaste_sell - gelmatrixbiopaste_buy);
            let nanofactory_sell = await getPrice("sell",2869); 
            let nanofactory_buy = await getPrice("buy",2869); 
            this.nanofactory.sell = formatNumber(nanofactory_sell);
            this.nanofactory.buy = formatNumber(nanofactory_buy);
            this.nanofactory.delta = formatNumber(nanofactory_sell - nanofactory_buy);
            let morphite_sell = await getPrice("sell",11399); 
            let morphite_buy = await getPrice("buy",11399); 
            this.morphite.sell = formatNumber(morphite_sell);
            this.morphite.buy = formatNumber(morphite_buy);
            this.morphite.delta = formatNumber(morphite_sell - morphite_buy);

            let iskTotalWork = 11932000; // стоимость постройки УТОЧНИТЬ !!!
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell = (414 * transcranialmicrocontrollers_sell) + (532 * gelmatrixbiopaste_sell) + (261 * ukomisuperconductors_sell) + (88 * morphite_sell) + nanofactory_sell
            this.AllMaterialsSell = formatNumber(costAllMaterialsSell);
            let costAllMaterialsBuy = (414 * transcranialmicrocontrollers_buy) + (532 * gelmatrixbiopaste_buy) + (261 * ukomisuperconductors_buy) + (88 * morphite_buy) + nanofactory_buy
            this.AllMaterialsBuy = formatNumber(costAllMaterialsBuy);

            let TotalSellLong = (midgradenirvanagamma_sell * commisionSellLong) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellLong = formatNumber(TotalSellLong);
            let TotalSellFast = (midgradenirvanagamma_sell * commisionSellFast) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellFast = formatNumber(TotalSellFast);
            this.TotalSell.delta = formatNumber(TotalSellLong - TotalSellFast);

            let TotalBuyLong = (midgradenirvanagamma_sell * commisionSellLong) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyLong = formatNumber(TotalBuyLong);
            let TotalBuyFast = (midgradenirvanagamma_sell * commisionSellFast) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyFast = formatNumber(TotalBuyFast);
            this.TotalBuy.delta = formatNumber(TotalBuyLong - TotalBuyFast);
    },
});