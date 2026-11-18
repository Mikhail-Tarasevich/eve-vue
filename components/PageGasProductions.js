Vue.component('page-gas-productions', {
    template: `
    <div>
        <h1>Производство компонентов из газа</h1>

        <br>
        <p>Все покупаем в Jita по sell-ордерам, отвозим в лоу-сек для постройки, привозим построенные компоненты в Jita и сразу же продаем по buy-ордерам</p>
        <br>
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
            prop="cost"
            label="Себестоимость"
            width="150">
            </el-table-column>
            <el-table-column
            prop="sell"
            label="Покупка"
            width="150">
            </el-table-column>
            <el-table-column
            prop="buy"
            label="Продажа"
            width="150">
            </el-table-column>
            <el-table-column
            prop="profit"
            label="Профит"
            width="150">
            </el-table-column>
        </el-table>
        <br>
        <el-table
        :data="tableGasJitaPrice"
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
            label="Покупка"
            width="150">
            </el-table-column>
            <el-table-column
            prop="buy"
            label="Продажа"
            width="150">
            </el-table-column>
            <el-table-column
            prop="notes"
            label="Примечания"
            width="300">
            </el-table-column>
        </el-table>
        <br>
        <el-table
        :data="tableCMCJitaPrice"
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
            label="Покупка"
            width="150">
            </el-table-column>
            <el-table-column
            prop="buy"
            label="Продажа"
            width="150">
            </el-table-column>
            <el-table-column
            prop="notes"
            label="Примечания"
            width="300">
            </el-table-column>
        </el-table>
    </div>`,
    data() {
        return {
            tableJitaPrice: [],
            tableGasJitaPrice: [],
            tableCMCJitaPrice: [],
    }},
    created: async function() {
        let GoldenMykoserocin_sell = await getPrice("sell",28697);
        let AmberMykoserocin_sell = await getPrice("sell",28694); 
        let AzureMykoserocin_sell = await getPrice("sell",28695);
        let VermillionMykoserocin_sell = await getPrice("sell",28700); 
        let CeladonMykoserocin_sell = await getPrice("sell",28696);
        let ViridianMykoserocin_sell = await getPrice("sell",28701); 
        let LimeMykoserocin_sell = await getPrice("sell",28698);
        let MalachiteMykoserocin_sell = await getPrice("sell",28699); 

        let GoldenMykoserocin_buy = await getPrice("buy",28697);
        let AmberMykoserocin_buy = await getPrice("buy",28694); 
        let AzureMykoserocin_buy = await getPrice("buy",28695);
        let VermillionMykoserocin_buy = await getPrice("buy",28700); 
        let CeladonMykoserocin_buy = await getPrice("buy",28696);
        let ViridianMykoserocin_buy = await getPrice("buy",28701); 
        let LimeMykoserocin_buy = await getPrice("buy",28698);
        let MalachiteMykoserocin_buy = await getPrice("buy",28699); 

        let NitrogenFuelBlock_sell = await getPrice("sell",4051);
        let HydrogenFuelBlock_sell = await getPrice("sell",4246);
        let OxygenFuelBlock_sell = await getPrice("sell",4312);
        let HeliumFuelBlock_sell = await getPrice("sell",4247);

        let AGCompositeMolecularCondenser_sell = await getPrice("sell",57446); 
        let AVCompositeMolecularCondenser_sell = await getPrice("sell",57448); 
        let CVCompositeMolecularCondenser_sell = await getPrice("sell",57447); 
        let LMCompositeMolecularCondenser_sell = await getPrice("sell",57445); 

        let AGCompositeMolecularCondenser_buy = await getPrice("buy",57446); 
        let AVCompositeMolecularCondenser_buy = await getPrice("buy",57448); 
        let CVCompositeMolecularCondenser_buy = await getPrice("buy",57447); 
        let LMCompositeMolecularCondenser_buy = await getPrice("buy",57445); 

        let AxosomaticNeurolinkEnhancer_buy = await getPrice("buy",57460); 
        let AxosomaticNeurolinkEnhancer_sell = await getPrice("sell",57460); 
        let SenseHeuristicNeurolinkEnhancer_buy = await getPrice("buy",57462); 
        let SenseHeuristicNeurolinkEnhancer_sell = await getPrice("sell",57462); 
        let CogniEmotiveNeurolinkEnhancer_buy = await getPrice("buy",57461); 
        let CogniEmotiveNeurolinkEnhancer_sell = await getPrice("sell",57461); 
        let HypnagogicNeurolinkEnhancer_buy = await getPrice("buy",57459); 
        let HypnagogicNeurolinkEnhancer_sell = await getPrice("sell",57459); 

        let AxosomaticNeurolinkEnhancer_work = 175600; 
        let CogniEmotiveNeurolinkEnhancer_work = 834800; 
        let HypnagogicNeurolinkEnhancer_work = 226600; 
        let SenseHeuristicNeurolinkEnhancer_work = 151100; 

        let cost = GoldenMykoserocin_sell * 40 + AmberMykoserocin_sell * 40 + NitrogenFuelBlock_sell * 5 + AGCompositeMolecularCondenser_sell + AxosomaticNeurolinkEnhancer_work;
        this.tableJitaPrice.push({goods: "Axosomatic Neurolink Enhancer", cost: formatNumber(cost), sell: formatNumber(AxosomaticNeurolinkEnhancer_sell), buy: formatNumber(AxosomaticNeurolinkEnhancer_buy), profit: formatNumber((cost / 20) - AxosomaticNeurolinkEnhancer_buy), profitNum: ((cost / 20) - AxosomaticNeurolinkEnhancer_buy)});
        cost = AzureMykoserocin_sell * 40 + VermillionMykoserocin_sell * 40 + HydrogenFuelBlock_sell * 5 + AVCompositeMolecularCondenser_sell + SenseHeuristicNeurolinkEnhancer_work;
        this.tableJitaPrice.push({goods: "Sense-Heuristic Neurolink Enhancer", cost: formatNumber(cost), sell: formatNumber(SenseHeuristicNeurolinkEnhancer_sell), buy: formatNumber(SenseHeuristicNeurolinkEnhancer_buy), profit: formatNumber((cost / 20) - SenseHeuristicNeurolinkEnhancer_buy), profitNum: ((cost / 20) - SenseHeuristicNeurolinkEnhancer_buy)});        
        cost = ViridianMykoserocin_sell * 40 + CeladonMykoserocin_sell * 40 + OxygenFuelBlock_sell * 5 + CVCompositeMolecularCondenser_sell + CogniEmotiveNeurolinkEnhancer_work;
        this.tableJitaPrice.push({goods: "Cogni-Emotive Neurolink Enhancer", cost: formatNumber(cost), sell: formatNumber(CogniEmotiveNeurolinkEnhancer_sell), buy: formatNumber(CogniEmotiveNeurolinkEnhancer_buy), profit: formatNumber((cost / 20) - CogniEmotiveNeurolinkEnhancer_buy), profitNum: ((cost / 20) - CogniEmotiveNeurolinkEnhancer_buy)});        
        cost = MalachiteMykoserocin_sell * 40 + LimeMykoserocin_sell * 40 + HeliumFuelBlock_sell * 5 + LMCompositeMolecularCondenser_sell + HypnagogicNeurolinkEnhancer_work;
        this.tableJitaPrice.push({goods: "Hypnagogic Neurolink Enhancer", cost: formatNumber(cost), sell: formatNumber(HypnagogicNeurolinkEnhancer_sell), buy: formatNumber(HypnagogicNeurolinkEnhancer_buy), profit: formatNumber((cost / 20) - HypnagogicNeurolinkEnhancer_buy), profitNum: ((cost / 20) - HypnagogicNeurolinkEnhancer_buy)});        
        this.tableJitaPrice.sort(function( a, b ) {
            return b.profitNum-a.profitNum;
        });

        this.tableGasJitaPrice.push(getTableLineGSBN("Golden Mykoserocin", GoldenMykoserocin_sell, GoldenMykoserocin_buy));
        this.tableGasJitaPrice.push(getTableLineGSBN("Amber Mykoserocin", AmberMykoserocin_sell, AmberMykoserocin_buy));
        this.tableGasJitaPrice.push(getTableLineGSBN("Azure Mykoserocin", AzureMykoserocin_sell, AzureMykoserocin_buy));
        this.tableGasJitaPrice.push(getTableLineGSBN("Vermillion Mykoserocin", VermillionMykoserocin_sell, VermillionMykoserocin_buy));
        this.tableGasJitaPrice.push(getTableLineGSBN("Celadon Mykoserocin", CeladonMykoserocin_sell, CeladonMykoserocin_buy));
        this.tableGasJitaPrice.push(getTableLineGSBN("Viridian Mykoserocin", ViridianMykoserocin_sell, ViridianMykoserocin_buy));
        this.tableGasJitaPrice.push(getTableLineGSBN("Lime Mykoserocin", LimeMykoserocin_sell, LimeMykoserocin_buy));
        this.tableGasJitaPrice.push(getTableLineGSBN("Malachite Mykoserocin", MalachiteMykoserocin_sell, MalachiteMykoserocin_buy));
        this.tableGasJitaPrice.sort(function( a, b ) {
            if (b.goods>a.goods) {
                return -1;
            }
            if (b.goods<a.goods) {
                return 0;
            }
            return 0;
        });

        this.tableCMCJitaPrice.push(getTableLineGSBN("AG-Composite Molecular Condenser", AGCompositeMolecularCondenser_sell, AGCompositeMolecularCondenser_buy));
        this.tableCMCJitaPrice.push(getTableLineGSBN("AV-Composite Molecular Condenser", AVCompositeMolecularCondenser_sell, AVCompositeMolecularCondenser_buy));
        this.tableCMCJitaPrice.push(getTableLineGSBN("CV-Composite Molecular Condenser", CVCompositeMolecularCondenser_sell, CVCompositeMolecularCondenser_buy));
        this.tableCMCJitaPrice.push(getTableLineGSBN("LM-Composite Molecular Condenser", LMCompositeMolecularCondenser_sell, LMCompositeMolecularCondenser_buy));
        this.tableCMCJitaPrice.sort(function( a, b ) {
            if (b.goods>a.goods) {
                return -1;
            }
            if (b.goods<a.goods) {
                return 0;
            }
            return 0;
        });
    },
});