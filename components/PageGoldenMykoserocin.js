Vue.component('page-golden-mykoserocin', {
    template: `
    <div>
        <h1>Golden Mykoserocin</h1>

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
        <p>Просто продать 40 Golden Mykoserocin:</p>
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
        <p>Профит.<br>Купить недостающие материалы по sell, построить за {{TotalWork}} ISK и продать 20 Axosomatic Neurolink Enhancer</p>
        <el-table
        :data="tableAxosomaticNeurolinkEnhancerSell"
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
        <p>Профит.<br>Купить недостающие материалы по buy (Nitrogen Fuel Block по sell), построить за {{TotalWork}} ISK и продать 20 Axosomatic Neurolink Enhancer</p>
        <el-table
        :data="tableAxosomaticNeurolinkEnhancerBuy"
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
            tableAxosomaticNeurolinkEnhancerSell: [],
            tableAxosomaticNeurolinkEnhancerBuy: [],
            TotalWork: '???',
    }},
    created: async function() {
            let goldenmykoserocin_sell = await getPrice("sell",28697); 
            let goldenmykoserocin_buy = await getPrice("buy",28697); 
            let ambermykoserocin_buy = await getPrice("buy",28694); 
            let ambermykoserocin_sell = await getPrice("sell",28694); 

            this.tableJitaPrice.push({goods: "Golden Mykoserocin", sell: formatNumber(goldenmykoserocin_sell), buy: formatNumber(goldenmykoserocin_buy), delta: formatNumber(goldenmykoserocin_sell - goldenmykoserocin_buy)});
            this.tableJitaPrice.push({goods: "Amber Mykoserocin", sell: formatNumber(ambermykoserocin_sell), buy: formatNumber(ambermykoserocin_buy), delta: formatNumber(ambermykoserocin_sell - ambermykoserocin_buy)});

            let agcompositemolecularcondenser_buy = await getPrice("buy",57446); 
            let agcompositemolecularcondenser_sell = await getPrice("sell",57446); 
            this.tableJitaPrice.push({goods: "AG-Composite Molecular Condenser", sell: formatNumber(agcompositemolecularcondenser_sell), buy: formatNumber(agcompositemolecularcondenser_buy), delta: formatNumber(agcompositemolecularcondenser_sell - agcompositemolecularcondenser_buy)});

            let nitrogenfuelblock_buy = await getPrice("buy",4051); 
            let nitrogenfuelblock_sell = await getPrice("sell",4051); 
            this.tableJitaPrice.push({goods: "Nitrogen Fuel Block", sell: formatNumber(nitrogenfuelblock_sell), buy: formatNumber(nitrogenfuelblock_buy), delta: formatNumber(nitrogenfuelblock_sell - nitrogenfuelblock_buy)});

            let axosomaticneurolinkenhancer_sell = await getPrice("sell",57460); 
            let axosomaticneurolinkenhancer_buy = await getPrice("buy",57460); 
            this.tableJitaPrice.push({goods: "Axosomatic Neurolink Enhancer", sell: formatNumber(axosomaticneurolinkenhancer_sell), buy: formatNumber(axosomaticneurolinkenhancer_buy), delta: formatNumber(axosomaticneurolinkenhancer_sell - axosomaticneurolinkenhancer_buy)});

            this.tableData.push({sell: formatNumber(40 * goldenmykoserocin_sell * commisionSellLong), buy: formatNumber(40 * goldenmykoserocin_buy * commisionSellFast), delta: formatNumber(40 * ((goldenmykoserocin_sell * commisionSellLong) - (goldenmykoserocin_buy * commisionSellFast)))});

            let iskTotalWork = 88416; // стоимость постройки
            this.TotalWork = formatNumber(iskTotalWork);
            let costAllMaterialsSell1 = (40 * ambermykoserocin_sell) + (40 * ambermykoserocin_sell) + agcompositemolecularcondenser_sell + (nitrogenfuelblock_sell * 5)

            let Total1Sell = (20 * axosomaticneurolinkenhancer_sell * commisionSellLong) - costAllMaterialsSell1 - iskTotalWork;
            let Total1Buy = (20 * axosomaticneurolinkenhancer_buy * commisionSellFast) - costAllMaterialsSell1 - iskTotalWork;
            this.tableAxosomaticNeurolinkEnhancerSell.push({sell: formatNumber(Total1Sell), buy: formatNumber(Total1Buy), delta: formatNumber(Total1Sell - Total1Buy)});

            let costAllMaterialsSell2 = (40 * goldenmykoserocin_sell) + (40 * ambermykoserocin_buy * commisionBuyLong) + (agcompositemolecularcondenser_buy * commisionBuyLong) + (nitrogenfuelblock_sell * 5)
            let Total2Sell = (20 * axosomaticneurolinkenhancer_sell * commisionSellLong) - costAllMaterialsSell2 - iskTotalWork;
            let Total2Buy = (20 * axosomaticneurolinkenhancer_buy * commisionSellFast) - costAllMaterialsSell2 - iskTotalWork;
            this.tableAxosomaticNeurolinkEnhancerBuy.push({sell: formatNumber(Total2Sell), buy: formatNumber(Total2Buy), delta: formatNumber(Total2Sell - Total2Buy)});
    },
});