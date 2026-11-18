Vue.component('page-mobile-tractor-unit', {
    template: `
    <div>
        <h1>Mobile Tractor Unit</h1>
        <br>
        <p>Постройка Mobile Tractor Unit:</p>
        <br>
        <p>Цены в Jita:</p>
        <table border="1px">
            <thead bgcolor="#cccccc">
                <tr><td>Товар</td><td align="center">Sell</td><td align="center">Buy</td><td align="center">Delta</td></tr>
            </thead>
            <tbody>
                <tr><td>Mobile Tractor Unit</td><td align="right">{{MobileTractorUnit.sell}}</td><td align="right">{{MobileTractorUnit.buy}}</td><td align="right">{{MobileTractorUnit.delta}}</td></tr>
                <tr><td>Small Tractor Beam I</td><td align="right">{{SmallTractorBeamI.sell}}</td><td align="right">{{SmallTractorBeamI.buy}}</td><td align="right">{{SmallTractorBeamI.delta}}</td></tr>
                <tr><td>Wetware Mainframe</td><td align="right">{{WetwareMainframe.sell}}</td><td align="right">{{WetwareMainframe.buy}}</td><td align="right">{{WetwareMainframe.delta}}</td></tr>
                <tr><td>Ukomi Superconductors</td><td align="right">{{UkomiSuperconductors.sell}}</td><td align="right">{{UkomiSuperconductors.buy}}</td><td align="right">{{UkomiSuperconductors.delta}}</td></tr>
                <tr><td>Organic Mortar Applicators</td><td align="right">{{OrganicMortarApplicators.sell}}</td><td align="right">{{OrganicMortarApplicators.buy}}</td><td align="right">{{OrganicMortarApplicators.delta}}</td></tr>
                <tr><td>Zydrine</td><td align="right">{{zydrine.sell}}</td><td align="right">{{zydrine.buy}}</td><td align="right">{{zydrine.delta}}</td></tr>
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
            MobileTractorUnit: {'sell': '???', 'buy': '???', 'delta': '???',},
            SmallTractorBeamI: {'sell': '???', 'buy': '???', 'delta': '???',},
            WetwareMainframe: {'sell': '???', 'buy': '???', 'delta': '???',},
            UkomiSuperconductors: {'sell': '???', 'buy': '???', 'delta': '???',},
            OrganicMortarApplicators: {'sell': '???', 'buy': '???', 'delta': '???',},
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
            let MobileTractorUnit_sell = await getPrice("sell",33475); 
            let MobileTractorUnit_buy = await getPrice("buy",33475); 
            this.MobileTractorUnit.sell = formatNumber(MobileTractorUnit_sell);
            this.MobileTractorUnit.buy = formatNumber(MobileTractorUnit_buy);
            this.MobileTractorUnit.delta = formatNumber(MobileTractorUnit_sell - MobileTractorUnit_buy);
            let SmallTractorBeamI_buy = await getPrice("buy",24348); 
            let SmallTractorBeamI_sell = await getPrice("sell",24348); 
            this.SmallTractorBeamI.sell = formatNumber(SmallTractorBeamI_sell);
            this.SmallTractorBeamI.buy = formatNumber(SmallTractorBeamI_buy);
            this.SmallTractorBeamI.delta = formatNumber(SmallTractorBeamI_sell - SmallTractorBeamI_buy);
            let WetwareMainframe_buy = await getPrice("buy",2876); 
            let WetwareMainframe_sell = await getPrice("sell",2876); 
            this.WetwareMainframe.sell = formatNumber(WetwareMainframe_sell);
            this.WetwareMainframe.buy = formatNumber(WetwareMainframe_buy);
            this.WetwareMainframe.delta = formatNumber(WetwareMainframe_sell - WetwareMainframe_buy);
            let UkomiSuperconductors_buy = await getPrice("buy",17136); 
            let UkomiSuperconductors_sell = await getPrice("sell",17136); 
            this.UkomiSuperconductors.sell = formatNumber(UkomiSuperconductors_sell);
            this.UkomiSuperconductors.buy = formatNumber(UkomiSuperconductors_buy);
            this.UkomiSuperconductors.delta = formatNumber(UkomiSuperconductors_sell - UkomiSuperconductors_buy);
            let OrganicMortarApplicators_sell = await getPrice("sell",2870); 
            let OrganicMortarApplicators_buy = await getPrice("buy",2870); 
            this.OrganicMortarApplicators.sell = formatNumber(OrganicMortarApplicators_sell);
            this.OrganicMortarApplicators.buy = formatNumber(OrganicMortarApplicators_buy);
            this.OrganicMortarApplicators.delta = formatNumber(OrganicMortarApplicators_sell - OrganicMortarApplicators_buy);
            let zydrine_sell = await getPrice("sell",39); 
            let zydrine_buy = await getPrice("buy",39); 
            this.zydrine.sell = formatNumber(zydrine_sell);
            this.zydrine.buy = formatNumber(zydrine_buy);
            this.zydrine.delta = formatNumber(zydrine_sell - zydrine_buy);

            let iskTotalWork = 754300; // стоимость постройки УТОЧНИТЬ !!!
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell = (SmallTractorBeamI_sell) + (WetwareMainframe_sell) + (2 * UkomiSuperconductors_sell) + (2 * OrganicMortarApplicators_sell) + (948 * zydrine_sell)
            this.AllMaterialsSell = formatNumber(costAllMaterialsSell);
            let costAllMaterialsBuy = (SmallTractorBeamI_buy) + (WetwareMainframe_buy) + (2 * UkomiSuperconductors_buy) + (2 * OrganicMortarApplicators_buy) + (948 * zydrine_buy)
            this.AllMaterialsBuy = formatNumber(costAllMaterialsBuy);

            let TotalSellLong = (MobileTractorUnit_sell * commisionSellLong) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellLong = formatNumber(TotalSellLong);
            let TotalSellFast = (MobileTractorUnit_sell * commisionSellFast) - costAllMaterialsSell - iskTotalWork;
            this.TotalSell.sellFast = formatNumber(TotalSellFast);
            this.TotalSell.delta = formatNumber(TotalSellLong - TotalSellFast);
            this.TotalSell.costPrice = formatNumber(costAllMaterialsSell + iskTotalWork)

            let TotalBuyLong = (MobileTractorUnit_sell * commisionSellLong) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyLong = formatNumber(TotalBuyLong);
            let TotalBuyFast = (MobileTractorUnit_sell * commisionSellFast) - costAllMaterialsBuy - iskTotalWork;
            this.TotalBuy.buyFast = formatNumber(TotalBuyFast);
            this.TotalBuy.delta = formatNumber(TotalBuyLong - TotalBuyFast);
            this.TotalBuy.costPrice = formatNumber(costAllMaterialsBuy + iskTotalWork)
    },
});