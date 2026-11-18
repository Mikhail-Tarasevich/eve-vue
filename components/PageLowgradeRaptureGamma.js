Vue.component('page-lowgrade-rapture-gamma', {
    template: `
    <div>
        <h1>Low-grade Rapture Gamma</h1>
        <br>
        <p>Постройка Low-grade Rapture Gamma:</p>
        <br>
        <p>Цены в Jita:</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td>Товар</td><td align="center">Sell</td><td align="center">Buy</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>Low-grade Rapture Gamma</td><td align="right">{{lowgraderapturegamma.sell}}</td><td align="right">{{lowgraderapturegamma.buy}}</td><td align="right">{{lowgraderapturegamma.delta}}</td></tr>
                <tr><td>Crystalline Isogen-10</td><td align="right">{{crystallineisogen10.sell}}</td><td align="right">{{crystallineisogen10.buy}}</td><td align="right">{{crystallineisogen10.delta}}</td></tr>
                <tr><td>Transcranial Microcontrollers</td><td align="right">{{transcranialmicrocontrollers.sell}}</td><td align="right">{{transcranialmicrocontrollers.buy}}</td><td align="right">{{transcranialmicrocontrollers.delta}}</td></tr>
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
            lowgraderapturegamma: {'sell': '???', 'buy': '???', 'delta': '???',},
            crystallineisogen10: {'sell': '???', 'buy': '???', 'delta': '???',},
            transcranialmicrocontrollers: {'sell': '???', 'buy': '???', 'delta': '???',},
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
            let lowgraderapturegamma_sell = await getPrice("sell",57112); 
            let lowgraderapturegamma_buy = await getPrice("buy",57112); 
            this.lowgraderapturegamma.sell = formatNumber(lowgraderapturegamma_sell);
            this.lowgraderapturegamma.buy = formatNumber(lowgraderapturegamma_buy);
            this.lowgraderapturegamma.delta = formatNumber(lowgraderapturegamma_sell - lowgraderapturegamma_buy);
            let crystallineisogen10_buy = await getPrice("buy",47975); 
            let crystallineisogen10_sell = await getPrice("sell",47975); 
            this.crystallineisogen10.sell = formatNumber(crystallineisogen10_sell);
            this.crystallineisogen10.buy = formatNumber(crystallineisogen10_buy);
            this.crystallineisogen10.delta = formatNumber(crystallineisogen10_sell - crystallineisogen10_buy);
            let transcranialmicrocontrollers_buy = await getPrice("buy",12836); 
            let transcranialmicrocontrollers_sell = await getPrice("sell",12836); 
            this.transcranialmicrocontrollers.sell = formatNumber(transcranialmicrocontrollers_sell);
            this.transcranialmicrocontrollers.buy = formatNumber(transcranialmicrocontrollers_buy);
            this.transcranialmicrocontrollers.delta = formatNumber(transcranialmicrocontrollers_sell - transcranialmicrocontrollers_buy);
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

            let iskTotalWork = 6287000; // стоимость постройки УТОЧНИТЬ !!!
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell = (100 * crystallineisogen10_sell) + (319 * gelmatrixbiopaste_sell) + (248 * transcranialmicrocontrollers_sell) + (53 * morphite_sell) + nanofactory_sell
            this.AllMaterialsSell = formatNumber(costAllMaterialsSell);
            let costAllMaterialsBuy = (100 * crystallineisogen10_buy) + (319 * gelmatrixbiopaste_buy) + (248 * transcranialmicrocontrollers_buy) + (53 * morphite_buy) + nanofactory_buy
            this.AllMaterialsBuy = formatNumber(costAllMaterialsBuy);

            let TotalSellLong = (lowgraderapturegamma_sell * commisionSellLong) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellLong = formatNumber(TotalSellLong);
            let TotalSellFast = (lowgraderapturegamma_sell * commisionSellFast) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellFast = formatNumber(TotalSellFast);
            this.TotalSell.delta = formatNumber(TotalSellLong - TotalSellFast);

            let TotalBuyLong = (lowgraderapturegamma_sell * commisionSellLong) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyLong = formatNumber(TotalBuyLong);
            let TotalBuyFast = (lowgraderapturegamma_sell * commisionSellFast) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyFast = formatNumber(TotalBuyFast);
            this.TotalBuy.delta = formatNumber(TotalBuyLong - TotalBuyFast);
    },
});