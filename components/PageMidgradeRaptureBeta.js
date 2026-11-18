Vue.component('page-midgrade-rapture-beta', {
    template: `
    <div>
        <h1>Mid-grade Rapture Beta</h1>
        <br>
        <p>Постройка Mid-grade Rapture Beta:</p>
        <br>
        <p>Цены в Jita:</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td>Товар</td><td align="center">Sell</td><td align="center">Buy</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>Mid-grade Rapture Beta</td><td align="right">{{midgraderapturebeta.sell}}</td><td align="right">{{midgraderapturebeta.buy}}</td><td align="right">{{midgraderapturebeta.delta}}</td></tr>
                <tr><td>Crystalline Isogen-10</td><td align="right">{{crystallineisogen10.sell}}</td><td align="right">{{crystallineisogen10.buy}}</td><td align="right">{{crystallineisogen10.delta}}</td></tr>
                <tr><td>Gel-Matrix Biopaste</td><td align="right">{{gelmatrixbiopaste.sell}}</td><td align="right">{{gelmatrixbiopaste.buy}}</td><td align="right">{{gelmatrixbiopaste.delta}}</td></tr>
                <tr><td>Cryoprotectant Solution</td><td align="right">{{cryoprotectantsolution.sell}}</td><td align="right">{{cryoprotectantsolution.buy}}</td><td align="right">{{cryoprotectantsolution.delta}}</td></tr>
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
            midgraderapturebeta: {'sell': '???', 'buy': '???', 'delta': '???',},
            crystallineisogen10: {'sell': '???', 'buy': '???', 'delta': '???',},
            gelmatrixbiopaste: {'sell': '???', 'buy': '???', 'delta': '???',},
            cryoprotectantsolution: {'sell': '???', 'buy': '???', 'delta': '???',},
            nanofactory: {'sell': '???', 'buy': '???', 'delta': '???',},
            morphite: {'sell': '???', 'buy': '???', 'delta': '???',},
            TotalBuy: {'buyLong': '???', 'buyFast': '???', 'delta': '???',},
            TotalSell: {'sellLong': '???', 'sellFast': '???', 'delta': '???',},
            TotalWork: '???',
            AllMaterialsSell: '???',
            AllMaterialsBuy: '???',
    }},
    created: async function() {
            let midgraderapturebeta_sell = await getPrice("sell",57118); 
            let midgraderapturebeta_buy = await getPrice("buy",57118); 
            this.midgraderapturebeta.sell = formatNumber(midgraderapturebeta_sell);
            this.midgraderapturebeta.buy = formatNumber(midgraderapturebeta_buy);
            this.midgraderapturebeta.delta = formatNumber(midgraderapturebeta_sell - midgraderapturebeta_buy);
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
            let cryoprotectantsolution_buy = await getPrice("buy",2367); 
            let cryoprotectantsolution_sell = await getPrice("sell",2367); 
            this.cryoprotectantsolution.sell = formatNumber(cryoprotectantsolution_sell);
            this.cryoprotectantsolution.buy = formatNumber(cryoprotectantsolution_buy);
            this.cryoprotectantsolution.delta = formatNumber(cryoprotectantsolution_sell - cryoprotectantsolution_buy);
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

            let iskTotalWork = 7298000; // стоимость постройки
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell = (200 * crystallineisogen10_sell) + (372 * gelmatrixbiopaste_sell) + (326 * cryoprotectantsolution_sell) + (69 * morphite_sell) + nanofactory_sell
            this.AllMaterialsSell = formatNumber(costAllMaterialsSell);
            let costAllMaterialsBuy = (200 * crystallineisogen10_buy) + (372 * gelmatrixbiopaste_buy) + (326 * cryoprotectantsolution_buy) + (69 * morphite_buy) + nanofactory_buy
            this.AllMaterialsBuy = formatNumber(costAllMaterialsBuy);

            let TotalSellLong = (midgraderapturebeta_sell * commisionSellLong) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellLong = formatNumber(TotalSellLong);
            let TotalSellFast = (midgraderapturebeta_sell * commisionSellFast) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellFast = formatNumber(TotalSellFast);
            this.TotalSell.delta = formatNumber(TotalSellLong - TotalSellFast);

            let TotalBuyLong = (midgraderapturebeta_sell * commisionSellLong) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyLong = formatNumber(TotalBuyLong);
            let TotalBuyFast = (midgraderapturebeta_sell * commisionSellFast) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyFast = formatNumber(TotalBuyFast);
            this.TotalBuy.delta = formatNumber(TotalBuyLong - TotalBuyFast);
    },
});