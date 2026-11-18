Vue.component('page-lowgrade-rapture-alpha', {
    template: `
    <div>
        <h1>Low-grade Rapture Alpha</h1>
        <br>
        <p>Постройка Low-grade Rapture Alpha:</p>
        <br>
        <p>Цены в Jita:</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td>Товар</td><td align="center">Sell</td><td align="center">Buy</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>Low-grade Rapture Alpha</td><td align="right">{{lowgraderapturealpha.sell}}</td><td align="right">{{lowgraderapturealpha.buy}}</td><td align="right">{{lowgraderapturealpha.delta}}</td></tr>
                <tr><td>Crystalline Isogen-10</td><td align="right">{{crystallineisogen10.sell}}</td><td align="right">{{crystallineisogen10.buy}}</td><td align="right">{{crystallineisogen10.delta}}</td></tr>
                <tr><td>Synthetic Synapses</td><td align="right">{{syntheticsynapses.sell}}</td><td align="right">{{syntheticsynapses.buy}}</td><td align="right">{{syntheticsynapses.delta}}</td></tr>
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
            lowgraderapturealpha: {'sell': '???', 'buy': '???', 'delta': '???',},
            crystallineisogen10: {'sell': '???', 'buy': '???', 'delta': '???',},
            syntheticsynapses: {'sell': '???', 'buy': '???', 'delta': '???',},
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
            let lowgraderapturealpha_sell = await getPrice("sell",57110); 
            let lowgraderapturealpha_buy = await getPrice("buy",57110); 
            this.lowgraderapturealpha.sell = formatNumber(lowgraderapturealpha_sell);
            this.lowgraderapturealpha.buy = formatNumber(lowgraderapturealpha_buy);
            this.lowgraderapturealpha.delta = formatNumber(lowgraderapturealpha_sell - lowgraderapturealpha_buy);
            let crystallineisogen10_buy = await getPrice("buy",47975); 
            let crystallineisogen10_sell = await getPrice("sell",47975); 
            this.crystallineisogen10.sell = formatNumber(crystallineisogen10_sell);
            this.crystallineisogen10.buy = formatNumber(crystallineisogen10_buy);
            this.crystallineisogen10.delta = formatNumber(crystallineisogen10_sell - crystallineisogen10_buy);
            let syntheticsynapses_buy = await getPrice("buy",2346); 
            let syntheticsynapses_sell = await getPrice("sell",2346); 
            this.syntheticsynapses.sell = formatNumber(syntheticsynapses_sell);
            this.syntheticsynapses.buy = formatNumber(syntheticsynapses_buy);
            this.syntheticsynapses.delta = formatNumber(syntheticsynapses_sell - syntheticsynapses_buy);
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

            let iskTotalWork = 3000000; // стоимость постройки
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell = (80 * crystallineisogen10_sell) + (196 * syntheticsynapses_sell) + (214 * cryoprotectantsolution_sell) + (29 * morphite_sell) + nanofactory_sell
            this.AllMaterialsSell = formatNumber(costAllMaterialsSell);
            let costAllMaterialsBuy = (80 * crystallineisogen10_buy) + (196 * syntheticsynapses_buy) + (214 * cryoprotectantsolution_buy) + (29 * morphite_buy) + nanofactory_buy
            this.AllMaterialsBuy = formatNumber(costAllMaterialsBuy);

            let TotalSellLong = (lowgraderapturealpha_sell * commisionSellLong) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellLong = formatNumber(TotalSellLong);
            let TotalSellFast = (lowgraderapturealpha_sell * commisionSellFast) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellFast = formatNumber(TotalSellFast);
            this.TotalSell.delta = formatNumber(TotalSellLong - TotalSellFast);

            let TotalBuyLong = (lowgraderapturealpha_sell * commisionSellLong) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyLong = formatNumber(TotalBuyLong);
            let TotalBuyFast = (lowgraderapturealpha_sell * commisionSellFast) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyFast = formatNumber(TotalBuyFast);
            this.TotalBuy.delta = formatNumber(TotalBuyLong - TotalBuyFast);
    },
});