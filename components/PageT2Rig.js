Vue.component('page-T2Rig', {
    template: `
    <div>
        <h1>T2 Rig</h1>
        <br>
        <p>Получение Т2-чертежей и постройка модулей в системе Muvolailen</p>
        <p>Покупка Datacore по buy-ордерам</p>
        <br>

        <el-table
        :data="table1"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="270"
          header-align="center"
          align="left">
        </el-table-column>
        <el-table-column
          prop="cost"
          label="Стоимость постройки"
          width="170"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="buy"
          label="Покупка"
          width="120"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="sell"
          label="Продажа"
          width="120"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="profit"
          label="Профит"
          width="120"
          header-align="center"
          align="right">
        </el-table-column>
        </el-table>
    </div>`,

    data() {
        return {
            table1: [],
    }},

    created: async function() {
      console.log("3");
        let DatacoreHydromagneticPhysics = await getPrice("buy",20171);
        let DatacoreQuantumPhysics = await getPrice("buy",20414);
        let Morphite = await getPrice("sell",11399);
        let RAMShieldTech = await getPrice("sell",11484);

        // Medium Core Defense Field Extender II
        ////// Т2 ивент
        let countT2 = 100; // количество модулей с постройки Т2-чертежа
        let countT2copy = 1; // Количество копий в одной BPC T2
        let percentT2 = 0.442; // Процент успеха модернизации в Т2
        let countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        let workT1Copy = 176; // Стоимость копии BPC Т1
        let workT1toT2 = 750; // Стоимость ивента Т1 в Т2
        let workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let BurnedLogicCircuit = await getPrice("sell", 25600);
        let WardConsole = await getPrice("sell", 25606);
        let TrippedPowerCircuit = await getPrice("sell", 25598);
        let MediumCoreDefenseFieldExtenderI = (BurnedLogicCircuit * 1961 + WardConsole * 802 + TrippedPowerCircuit * 1961 + 4000000) / 100;  // где 4000000 - стоимость постройки 100шт
        let materialsprice = 0;
        let PowerCircuit = await getPrice("sell", 25617);
        let LogicCircuit = await getPrice("sell", 25619);
        let EnhancedWardConsole = await getPrice("sell", 25625);
        materials = [
          {name: "Power Circuit", price: PowerCircuit, count: 6}, 
          {name: "Logic Circuit", price: LogicCircuit, count: 6}, 
          {name: "Enhanced WardConsole", price: EnhancedWardConsole, count: 3}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 1}, 
          {name: "Medium Core Defense Field Extender I", price: MediumCoreDefenseFieldExtenderI, count: 1}, 
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        let workT2modul = 1320000;  // стоимость работ постройки 1 модуля

        let MediumCoreDefenseFieldExtenderII = {};
        MediumCoreDefenseFieldExtenderII.sell = await getPrice("sell",31796);
        MediumCoreDefenseFieldExtenderII.buy = await getPrice("buy",31796);
        MediumCoreDefenseFieldExtenderII.cost = workBPC_T2 + materialsprice + workT2modul;
        MediumCoreDefenseFieldExtenderII.profit = (MediumCoreDefenseFieldExtenderII.sell - MediumCoreDefenseFieldExtenderII.cost) * commisionSellLong;

        this.table1.push({goods: "Medium Core Defense Field Extender II", buy: formatNumber(MediumCoreDefenseFieldExtenderII.buy),  sell: formatNumber(MediumCoreDefenseFieldExtenderII.sell),  cost: formatNumber(MediumCoreDefenseFieldExtenderII.cost),  profit: formatNumber(MediumCoreDefenseFieldExtenderII.profit), profitSort: MediumCoreDefenseFieldExtenderII.profit});

        console.log("4");
        this.table1.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });
    },
});