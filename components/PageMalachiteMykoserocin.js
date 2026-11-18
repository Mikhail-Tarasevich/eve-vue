Vue.component('page-malachite-mykoserocin', {
    template: `
    <div>
        <h1>Malachite Mykoserocin</h1>

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
        <p>Просто продать 40 Malachite Mykoserocin:</p>
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
        <p>Профит.<br>Купить недостающие материалы по sell, построить за {{TotalWork1}} ISK и продать 20 Hypnagogic Neurolink Enhancer</p>
        <el-table
        :data="tablehypnagogicneurolinkenhancerSell"
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
        <p>Профит.<br>Купить недостающие материалы по buy (Helium Fuel Block по sell), построить за {{TotalWork1}} ISK и продать 20 Hypnagogic Neurolink Enhancer</p>
        <el-table
        :data="tablehypnagogicneurolinkenhancerBuy"
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
        <p>Профит.<br>Купить недостающие материалы по sell, построить за {{TotalWork2}} ISK и продать 10 Ultradian-Cycling Neurolink Stabilizer</p>
        <el-table
        :data="tableUltradianCyclingNeurolinkStabilizerSell"
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
        <p>Профит.<br>Купить недостающие материалы по buy (Helium Fuel Block по sell), построить за {{TotalWork2}} ISK и продать 10 Ultradian-Cycling Neurolink Stabilizer</p>
        <el-table
        :data="tableUltradianCyclingNeurolinkStabilizerBuy"
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
            tablehypnagogicneurolinkenhancerSell: [],
            tablehypnagogicneurolinkenhancerBuy: [],
            tableUltradianCyclingNeurolinkStabilizerSell: [],
            tableUltradianCyclingNeurolinkStabilizerBuy: [],
            TotalWork1: '???',
            TotalWork2: '???',
    }},
    created: async function() {
            let malachitemykoserocin_sell = await getPrice("sell",28699); 
            let malachitemykoserocin_buy = await getPrice("buy",28699); 
            let limemykoserocin_buy = await getPrice("buy",28698); 
            let limemykoserocin_sell = await getPrice("sell",28698); 

            this.tableJitaPrice.push({goods: "Malachite Mykoserocin", sell: formatNumber(malachitemykoserocin_sell), buy: formatNumber(malachitemykoserocin_buy), delta: formatNumber(malachitemykoserocin_sell - malachitemykoserocin_buy)});
            this.tableJitaPrice.push({goods: "Lime Mykoserocin", sell: formatNumber(limemykoserocin_sell), buy: formatNumber(limemykoserocin_buy), delta: formatNumber(limemykoserocin_sell - limemykoserocin_buy)});

            let lmcompositemolecularcondenser_buy = await getPrice("buy",57446); 
            let lmcompositemolecularcondenser_sell = await getPrice("sell",57446); 
            this.tableJitaPrice.push({goods: "LM-Composite Molecular Condenser", sell: formatNumber(lmcompositemolecularcondenser_sell), buy: formatNumber(lmcompositemolecularcondenser_buy), delta: formatNumber(lmcompositemolecularcondenser_sell - lmcompositemolecularcondenser_buy)});

            let heliumfuelblock_buy = await getPrice("buy",4051); 
            let heliumfuelblock_sell = await getPrice("sell",4051); 
            this.tableJitaPrice.push({goods: "Helium Fuel Block", sell: formatNumber(heliumfuelblock_sell), buy: formatNumber(heliumfuelblock_buy), delta: formatNumber(heliumfuelblock_sell - heliumfuelblock_buy)});

            let hypnagogicneurolinkenhancer_sell = await getPrice("sell",57459); 
            let hypnagogicneurolinkenhancer_buy = await getPrice("buy",57459); 
            this.tableJitaPrice.push({goods: "Hypnagogic Neurolink Enhancer", sell: formatNumber(hypnagogicneurolinkenhancer_sell), buy: formatNumber(hypnagogicneurolinkenhancer_buy), delta: formatNumber(hypnagogicneurolinkenhancer_sell - hypnagogicneurolinkenhancer_buy)});

            let ultradiancyclingneurolinkstabilizer_sell = await getPrice("sell",57460); 
            let ultradiancyclingneurolinkstabilizer_buy = await getPrice("buy",57460); 
            this.tableJitaPrice.push({goods: "Ultradian-Cycling Neurolink Stabilizer", sell: formatNumber(ultradiancyclingneurolinkstabilizer_sell), buy: formatNumber(ultradiancyclingneurolinkstabilizer_buy), delta: formatNumber(ultradiancyclingneurolinkstabilizer_sell - ultradiancyclingneurolinkstabilizer_buy)});

            this.tableData.push({sell: formatNumber(40 * malachitemykoserocin_sell * commisionSellLong), buy: formatNumber(40 * malachitemykoserocin_buy * commisionSellFast), delta: formatNumber(40 * ((malachitemykoserocin_sell * commisionSellLong) - (malachitemykoserocin_buy * commisionSellFast)))});

            let iskTotalWork1 = 215416; // стоимость постройки
            this.TotalWork1 = formatNumber(iskTotalWork1);
            let iskTotalWork2 = 155500; // стоимость постройки
            this.TotalWork2 = formatNumber(iskTotalWork2);

            let costAllMaterialsSell1_1 = (40 * malachitemykoserocin_sell) + (40 * limemykoserocin_sell) + lmcompositemolecularcondenser_sell + (heliumfuelblock_sell * 5)
            let Total1Sell1 = (20 * hypnagogicneurolinkenhancer_sell * commisionSellLong) - costAllMaterialsSell1_1 - iskTotalWork1;
            let Total1Buy1 = (20 * hypnagogicneurolinkenhancer_buy * commisionSellFast) - costAllMaterialsSell1_1 - iskTotalWork1;
            this.tablehypnagogicneurolinkenhancerSell.push({sell: formatNumber(Total1Sell1), buy: formatNumber(Total1Buy1), delta: formatNumber(Total1Sell1 - Total1Buy1)});

            let costAllMaterialsSell1_2 = (40 * malachitemykoserocin_sell) + (40 * limemykoserocin_buy * commisionBuyLong) + (lmcompositemolecularcondenser_buy * commisionBuyLong) + (heliumfuelblock_sell * 5)
            let Total2Sell1 = (20 * hypnagogicneurolinkenhancer_sell * commisionSellLong) - costAllMaterialsSell1_2 - iskTotalWork1;
            let Total2Buy1 = (20 * hypnagogicneurolinkenhancer_buy * commisionSellFast) - costAllMaterialsSell1_2 - iskTotalWork1;
            this.tablehypnagogicneurolinkenhancerBuy.push({sell: formatNumber(Total2Sell1), buy: formatNumber(Total2Buy1), delta: formatNumber(Total2Sell1 - Total2Buy1)});

            let costAllMaterialsSell2_1 = (10 * malachitemykoserocin_sell) + (10 * limemykoserocin_sell) + (lmcompositemolecularcondenser_sell) + (heliumfuelblock_sell * 5)
            let Total1Sell2 = (10 * ultradiancyclingneurolinkstabilizer_sell * commisionSellLong) - costAllMaterialsSell2_1 - iskTotalWork2;
            let Total1Buy2 = (10 * ultradiancyclingneurolinkstabilizer_buy * commisionSellFast) - costAllMaterialsSell2_1 - iskTotalWork2;
            this.tableUltradianCyclingNeurolinkStabilizerSell.push({sell: formatNumber(Total1Sell2), buy: formatNumber(Total1Buy2), delta: formatNumber(Total1Sell2 - Total1Buy2)});

            let costAllMaterialsBuy2_2 = (10 * malachitemykoserocin_sell) + (10 * limemykoserocin_buy * commisionBuyLong) + (lmcompositemolecularcondenser_buy * commisionBuyLong) + (heliumfuelblock_sell * 5)
            let Total2Sell2 = (10 * ultradiancyclingneurolinkstabilizer_sell * commisionSellLong) - costAllMaterialsBuy2_2 - iskTotalWork2;
            let Total2Buy2 = (10 * ultradiancyclingneurolinkstabilizer_buy * commisionSellFast) - costAllMaterialsBuy2_2 - iskTotalWork2;
            this.tableUltradianCyclingNeurolinkStabilizerBuy.push({sell: formatNumber(Total2Sell2), buy: formatNumber(Total2Buy2), delta: formatNumber(Total2Sell2 - Total2Buy2)});
    },
});
