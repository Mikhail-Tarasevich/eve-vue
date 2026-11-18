Vue.component('page-azure-mykoserocin', {
    template: `
    <div>
        <h1>Azure Mykoserocin</h1>

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
        <p>Просто продать 40 Azure Mykoserocin:</p>
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
        <p>Профит.<br>Купить недостающие материалы по sell, построить за {{TotalWork}} ISK и продать 20 Sense-Heuristic Neurolink Enhancer</p>
        <el-table
        :data="tableSenseHeuristicNeurolinkEnhancerSell"
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
        <p>Профит.<br>Купить недостающие материалы по buy (Hydrogen Fuel Block по sell), построить за {{TotalWork}} ISK и продать 20 Sense-Heuristic Neurolink Enhancer</p>
        <el-table
        :data="tableSenseHeuristicNeurolinkEnhancerBuy"
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
            tableSenseHeuristicNeurolinkEnhancerSell: [],
            tableSenseHeuristicNeurolinkEnhancerBuy: [],
            TotalWork: '???',
    }},
    created: async function() {
            let azuremykoserocin_sell = await getPrice("sell",28695); 
            let azuremykoserocin_buy = await getPrice("buy",28695); 
            let Vermillionmykoserocin_buy = await getPrice("buy",28700); 
            let Vermillionmykoserocin_sell = await getPrice("sell",28700); 

            this.tableJitaPrice.push({goods: "Azure Mykoserocin", sell: formatNumber(azuremykoserocin_sell), buy: formatNumber(azuremykoserocin_buy), delta: formatNumber(azuremykoserocin_sell - azuremykoserocin_buy)});
            this.tableJitaPrice.push({goods: "Vermillion Mykoserocin", sell: formatNumber(Vermillionmykoserocin_sell), buy: formatNumber(Vermillionmykoserocin_buy), delta: formatNumber(Vermillionmykoserocin_sell - Vermillionmykoserocin_buy)});

            let agcompositemolecularcondenser_buy = await getPrice("buy",57448); 
            let agcompositemolecularcondenser_sell = await getPrice("sell",57448); 
            this.tableJitaPrice.push({goods: "AV-Composite Molecular Condenser", sell: formatNumber(agcompositemolecularcondenser_sell), buy: formatNumber(agcompositemolecularcondenser_buy), delta: formatNumber(agcompositemolecularcondenser_sell - agcompositemolecularcondenser_buy)});

            let nitrogenfuelblock_buy = await getPrice("buy",4246); 
            let nitrogenfuelblock_sell = await getPrice("sell",4246); 
            this.tableJitaPrice.push({goods: "Hydrogen Fuel Block", sell: formatNumber(nitrogenfuelblock_sell), buy: formatNumber(nitrogenfuelblock_buy), delta: formatNumber(nitrogenfuelblock_sell - nitrogenfuelblock_buy)});

            let SenseHeuristicNeurolinkEnhancer_sell = await getPrice("sell",57462); 
            let SenseHeuristicNeurolinkEnhancer_buy = await getPrice("buy",57462); 
            this.tableJitaPrice.push({goods: "Sense-Heuristic Neurolink Enhancer", sell: formatNumber(SenseHeuristicNeurolinkEnhancer_sell), buy: formatNumber(SenseHeuristicNeurolinkEnhancer_buy), delta: formatNumber(SenseHeuristicNeurolinkEnhancer_sell - SenseHeuristicNeurolinkEnhancer_buy)});

            this.tableData.push({sell: formatNumber(40 * azuremykoserocin_sell * commisionSellLong), buy: formatNumber(40 * azuremykoserocin_buy * commisionSellFast), delta: formatNumber(40 * ((azuremykoserocin_sell * commisionSellLong) - (azuremykoserocin_buy * commisionSellFast)))});

            let iskTotalWork = 88416; // стоимость постройки
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell1 = (40 * Vermillionmykoserocin_sell) + (40 * Vermillionmykoserocin_sell) + agcompositemolecularcondenser_sell + (nitrogenfuelblock_sell * 5)

            let Total1Sell = (20 * SenseHeuristicNeurolinkEnhancer_sell * commisionSellLong) - costAllMaterialsSell1 - iskTotalWork;
            let Total1Buy = (20 * SenseHeuristicNeurolinkEnhancer_buy * commisionSellFast) - costAllMaterialsSell1 - iskTotalWork;
            this.tableSenseHeuristicNeurolinkEnhancerSell.push({sell: formatNumber(Total1Sell), buy: formatNumber(Total1Buy), delta: formatNumber(Total1Sell - Total1Buy)});

            let costAllMaterialsSell2 = (40 * azuremykoserocin_sell) + (40 * Vermillionmykoserocin_buy * commisionBuyLong) + (agcompositemolecularcondenser_buy * commisionBuyLong) + (nitrogenfuelblock_sell * 5)
            let Total2Sell = (20 * SenseHeuristicNeurolinkEnhancer_sell * commisionSellLong) - costAllMaterialsSell2 - iskTotalWork;
            let Total2Buy = (20 * SenseHeuristicNeurolinkEnhancer_buy * commisionSellFast) - costAllMaterialsSell2 - iskTotalWork;
            this.tableSenseHeuristicNeurolinkEnhancerBuy.push({sell: formatNumber(Total2Sell), buy: formatNumber(Total2Buy), delta: formatNumber(Total2Sell - Total2Buy)});
    },
});