Vue.component('page-midgrade-rapture-gamma', {
    template: `
    <div>
        <h1>Mid-grade Rapture Gamma</h1>
        <br>
        <p>Постройка Mid-grade Rapture Gamma:</p>
        <br>
        <p>Цены в Jita:</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td>Товар</td><td align="center">Sell</td><td align="center">Buy</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>Mid-grade Rapture Gamma</td><td align="right">{{midgraderapturegamma.sell}}</td><td align="right">{{midgraderapturegamma.buy}}</td><td align="right">{{midgraderapturegamma.delta}}</td></tr>
                <tr><td>Crystalline Isogen-10</td><td align="right">{{crystallineisogen10.sell}}</td><td align="right">{{crystallineisogen10.buy}}</td><td align="right">{{crystallineisogen10.delta}}</td></tr>
                <tr><td>Gel-Matrix Biopaste</td><td align="right">{{gelmatrixbiopaste.sell}}</td><td align="right">{{gelmatrixbiopaste.buy}}</td><td align="right">{{gelmatrixbiopaste.delta}}</td></tr>
                <tr><td>Transcranial Microcontrollers</td><td align="right">{{transcranialmicrocontrollers.sell}}</td><td align="right">{{transcranialmicrocontrollers.buy}}</td><td align="right">{{transcranialmicrocontrollers.delta}}</td></tr>
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
            midgraderapturegamma: {'sell': '???', 'buy': '???', 'delta': '???',},
            crystallineisogen10: {'sell': '???', 'buy': '???', 'delta': '???',},
            gelmatrixbiopaste: {'sell': '???', 'buy': '???', 'delta': '???',},
            transcranialmicrocontrollers: {'sell': '???', 'buy': '???', 'delta': '???',},
            nanofactory: {'sell': '???', 'buy': '???', 'delta': '???',},
            morphite: {'sell': '???', 'buy': '???', 'delta': '???',},
            TotalBuy: {'buyLong': '???', 'buyFast': '???', 'delta': '???',},
            TotalSell: {'sellLong': '???', 'sellFast': '???', 'delta': '???',},
            TotalWork: '???',
            AllMaterialsSell: '???',
            AllMaterialsBuy: '???',
    }},
    created: async function() {
            let midgraderapturegamma_sell = await getPrice("sell",57118); 
            let midgraderapturegamma_buy = await getPrice("buy",57118); 
            this.midgraderapturegamma.sell = formatNumber(midgraderapturegamma_sell);
            this.midgraderapturegamma.buy = formatNumber(midgraderapturegamma_buy);
            this.midgraderapturegamma.delta = formatNumber(midgraderapturegamma_sell - midgraderapturegamma_buy);
            let crystallineisogen10_buy = await getPrice("buy",47975); 
            let crystallineisogen10_sell = await getPrice("sell",47975); 
            this.crystallineisogen10.sell = formatNumber(crystallineisogen10_sell);
            this.crystallineisogen10.buy = formatNumber(crystallineisogen10_buy);
            this.crystallineisogen10.delta = formatNumber(crystallineisogen10_sell - crystallineisogen10_buy);
            let gelmatrixbiopaste_buy = await getPrice("buy",2348); 
            let gelmatrixbiopaste_sell = await getPrice("sell",2348); 
            this.gelmatrixbiopaste.sell = formatNumber(gelmatrixbiopaste_sell);
            this.gelmatrixbiopaste.buy = formatNumber(gelmatrixbiopaste_buy);
            this.gelmatrixbiopaste.delta = formatNumber(gelmatrixbiopaste_sell - gelmatrixbiopaste_buy);
            let transcranialmicrocontrollers_buy = await getPrice("buy",12836); 
            let transcranialmicrocontrollers_sell = await getPrice("sell",12836); 
            this.transcranialmicrocontrollers.sell = formatNumber(transcranialmicrocontrollers_sell);
            this.transcranialmicrocontrollers.buy = formatNumber(transcranialmicrocontrollers_buy);
            this.transcranialmicrocontrollers.delta = formatNumber(transcranialmicrocontrollers_sell - transcranialmicrocontrollers_buy);
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

            let iskTotalWork = 10432000; // стоимость постройки
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell = (225 * crystallineisogen10_sell) + (532 * gelmatrixbiopaste_sell) + (414 * transcranialmicrocontrollers_sell) + (88 * morphite_sell) + nanofactory_sell
            this.AllMaterialsSell = formatNumber(costAllMaterialsSell);
            let costAllMaterialsBuy = (225 * crystallineisogen10_buy) + (532 * gelmatrixbiopaste_buy) + (414 * transcranialmicrocontrollers_buy) + (88 * morphite_buy) + nanofactory_buy
            this.AllMaterialsBuy = formatNumber(costAllMaterialsBuy);

            let TotalSellLong = (midgraderapturegamma_sell * commisionSellLong) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellLong = formatNumber(TotalSellLong);
            let TotalSellFast = (midgraderapturegamma_sell * commisionSellFast) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellFast = formatNumber(TotalSellFast);
            this.TotalSell.delta = formatNumber(TotalSellLong - TotalSellFast);

            let TotalBuyLong = (midgraderapturegamma_sell * commisionSellLong) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyLong = formatNumber(TotalBuyLong);
            let TotalBuyFast = (midgraderapturegamma_sell * commisionSellFast) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyFast = formatNumber(TotalBuyFast);
            this.TotalBuy.delta = formatNumber(TotalBuyLong - TotalBuyFast);
    },
});