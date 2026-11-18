Vue.component('page-celadon-mykoserocin', {
    template: `
    <div>
        <h1>Celadon Mykoserocin</h1>

        <br>
        <p>Цены в Jita:</p>
        <el-table
        :data="tableJitaPrice"
        border
        stripe
        style="width: 100%">
        <el-table-column
        prop="goods"
        label="Товар"
        width="250">
      </el-table-column>
        <el-table-column
          prop="sell"
          label="Sell"
          width="100">
        </el-table-column>
        <el-table-column
          prop="buy"
          label="Buy"
          width="100">
        </el-table-column>
        <el-table-column
          prop="delta"
          label="Delta"
          width="100">
        </el-table-column>
        </el-table>

        <br>
        <p>Просто продать 40 Celadon Mykoserocin:</p>
        <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="sell"
          label="Sell"
          width="100">
        </el-table-column>
        <el-table-column
          prop="buy"
          label="Buy"
          width="100">
        </el-table-column>
        <el-table-column
          prop="delta"
          label="Delta"
          width="100">
        </el-table-column>
        </el-table>

        <br>
        <p>Профит.<br>Купить недостающие материалы по sell, построить за {{TotalWork}} ISK и продать 20 Cogni-Emotive Neurolink Enhancer</p>
        <el-table
        :data="tableCogniEmotiveNeurolinkEnhancerSell"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="sell"
          label="Профит (sell)"
          width="120">
        </el-table-column>
        <el-table-column
          prop="buy"
          label="Профит (buy)"
          width="120">
        </el-table-column>
        <el-table-column
          prop="delta"
          label="Delta"
          width="100">
        </el-table-column>
        </el-table>

        <br>
        <p>Профит.<br>Купить недостающие материалы по buy (Oxygen Fuel Block по sell), построить за {{TotalWork}} ISK и продать 20 Cogni-Emotive Neurolink Enhancer</p>
        <el-table
        :data="tableCogniEmotiveNeurolinkEnhancerBuy"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="sell"
          label="Профит (sell)"
          width="120">
        </el-table-column>
        <el-table-column
          prop="buy"
          label="Профит (buy)"
          width="120">
        </el-table-column>
        <el-table-column
          prop="delta"
          label="Delta"
          width="100">
        </el-table-column>
        </el-table>

    </div>`,
    data() {
        return {
            tableData: [],
            tableJitaPrice: [],
            tableCogniEmotiveNeurolinkEnhancerSell: [],
            tableCogniEmotiveNeurolinkEnhancerBuy: [],
            TotalWork: '???',
    }},
    created: async function() {
            let Celadonmykoserocin_sell = await getPrice("sell",28696); 
            let Celadonmykoserocin_buy = await getPrice("buy",28696); 
            let Viridianmykoserocin_buy = await getPrice("buy",28701); 
            let Viridianmykoserocin_sell = await getPrice("sell",28701); 

            this.tableJitaPrice.push({goods: "Celadon Mykoserocin", sell: formatNumber(Celadonmykoserocin_sell), buy: formatNumber(Celadonmykoserocin_buy), delta: formatNumber(Celadonmykoserocin_sell - Celadonmykoserocin_buy)});
            this.tableJitaPrice.push({goods: "Viridian Mykoserocin", sell: formatNumber(Viridianmykoserocin_sell), buy: formatNumber(Viridianmykoserocin_buy), delta: formatNumber(Viridianmykoserocin_sell - Viridianmykoserocin_buy)});

            let agcompositemolecularcondenser_buy = await getPrice("buy",57447); 
            let agcompositemolecularcondenser_sell = await getPrice("sell",57447); 
            this.tableJitaPrice.push({goods: "CV-Composite Molecular Condenser", sell: formatNumber(agcompositemolecularcondenser_sell), buy: formatNumber(agcompositemolecularcondenser_buy), delta: formatNumber(agcompositemolecularcondenser_sell - agcompositemolecularcondenser_buy)});

            let nitrogenfuelblock_buy = await getPrice("buy",4312); 
            let nitrogenfuelblock_sell = await getPrice("sell",4312); 
            this.tableJitaPrice.push({goods: "Oxygen Fuel Block", sell: formatNumber(nitrogenfuelblock_sell), buy: formatNumber(nitrogenfuelblock_buy), delta: formatNumber(nitrogenfuelblock_sell - nitrogenfuelblock_buy)});

            let CogniEmotiveNeurolinkEnhancer_sell = await getPrice("sell",57461); 
            let CogniEmotiveNeurolinkEnhancer_buy = await getPrice("buy",57461); 
            this.tableJitaPrice.push({goods: "Cogni-Emotive Neurolink Enhancer", sell: formatNumber(CogniEmotiveNeurolinkEnhancer_sell), buy: formatNumber(CogniEmotiveNeurolinkEnhancer_buy), delta: formatNumber(CogniEmotiveNeurolinkEnhancer_sell - CogniEmotiveNeurolinkEnhancer_buy)});

            this.tableData.push({sell: formatNumber(40 * Celadonmykoserocin_sell * commisionSellLong), buy: formatNumber(40 * Celadonmykoserocin_buy * commisionSellFast), delta: formatNumber(40 * ((Celadonmykoserocin_sell * commisionSellLong) - (Celadonmykoserocin_buy * commisionSellFast)))});

            let iskTotalWork = 88416; // стоимость постройки
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell1 = (40 * Viridianmykoserocin_sell) + (40 * Viridianmykoserocin_sell) + agcompositemolecularcondenser_sell + (nitrogenfuelblock_sell * 5)

            let Total1Sell = (20 * CogniEmotiveNeurolinkEnhancer_sell * commisionSellLong) - costAllMaterialsSell1 - iskTotalWork;
            let Total1Buy = (20 * CogniEmotiveNeurolinkEnhancer_buy * commisionSellFast) - costAllMaterialsSell1 - iskTotalWork;
            this.tableCogniEmotiveNeurolinkEnhancerSell.push({sell: formatNumber(Total1Sell), buy: formatNumber(Total1Buy), delta: formatNumber(Total1Sell - Total1Buy)});

            let costAllMaterialsSell2 = (40 * Celadonmykoserocin_sell) + (40 * Viridianmykoserocin_buy * commisionBuyLong) + (agcompositemolecularcondenser_buy * commisionBuyLong) + (nitrogenfuelblock_sell * 5)
            let Total2Sell = (20 * CogniEmotiveNeurolinkEnhancer_sell * commisionSellLong) - costAllMaterialsSell2 - iskTotalWork;
            let Total2Buy = (20 * CogniEmotiveNeurolinkEnhancer_buy * commisionSellFast) - costAllMaterialsSell2 - iskTotalWork;
            this.tableCogniEmotiveNeurolinkEnhancerBuy.push({sell: formatNumber(Total2Sell), buy: formatNumber(Total2Buy), delta: formatNumber(Total2Sell - Total2Buy)});
    },
});