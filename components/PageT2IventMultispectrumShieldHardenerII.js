Vue.component('page-event-MultispectrumShieldHardenerII', {
    template: `
    <div>
        <h1>Multispectrum Shield Hardener II</h1>
        <br>
        <p>Покупка по buy-ордерам: Datacore - Hydromagnetic Physics, Datacore - Quantum Physics</p>
        <br>

        <h4>Jita</h4>
        <el-table
        :data="tableJita"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Decryptor Type"
          width="250"
          header-align="center"
          align="left">
        </el-table-column>
        <el-table-column
          prop="cost"
          label="Стоимость исследования"
          width="170"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="costDecryptor"
          label="Стоимость декриптора"
          width="170"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="countRuns"
          label="Количество прогонов"
          width="70"
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
            tableJita: [],
    }},

    created: async function() {
        let DatacoreHydromagneticPhysics = await getPrice("buy",20171);
        let DatacoreQuantumPhysics = await getPrice("buy",20414);
        let Morphite = await getPrice("sell",11399);
        let RAMShieldTech = await getPrice("sell",11484);
        let Isogen = await getPrice("sell",37);
        let Mexallon = await getPrice("sell",36);
        let Pyerite = await getPrice("sell",35);
        let Tritanium = await getPrice("sell",34);
        let Ferrogel = await getPrice("sell",16683);
        let SylramicFibers = await getPrice("sell",16678);
        let TungstenCarbide = await getPrice("buy",16672);
        let FerniteCarbide = await getPrice("buy",16673);
        let CrystallineCarbonide = await getPrice("buy",16670);
        let TitaniumCarbide = await getPrice("sell",16671);
        let Superconductors = await getPrice("buy",9838);
        let LinearShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + TungstenCarbide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Linear Shield Emitter
        let DeflectionShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + FerniteCarbide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Deflection Shield Emitter
        let PulseShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + CrystallineCarbonide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Pulse Shield Emitter
        let SustainedShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + TitaniumCarbide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Sustained Shield Emitter

        // Multispectrum Shield Hardener II
        ////// Т2 ивент 
        let countT2 = 100; // количество модулей с постройки Т2-чертежа
        let countT2copy = 10; // Количество копий в одной BPC T2
        let percentT2 = 0.442; // Процент успеха модернизации в Т2
        let countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        let workT1Copy = 176; // Стоимость копии BPC Т1
        let workT1toT2 = 750; // Стоимость ивента Т1 в Т2
        let workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let MultispectrumShieldHardener = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582500) / 100;  // где 582500 - стоимость постройки 100шт
        let materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 108}, 
          {name: "Superconductors", price: Superconductors, count: 147}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Multispectrum Shield Hardener I", price: MultispectrumShieldHardener, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 79},
          {name: "Linear Shield Emitter", price: LinearShieldEmitter, count: 79},
          {name: "Deflection Shield Emitter", price: DeflectionShieldEmitter, count: 79},
          {name: "Pulse Shield Emitter", price: PulseShieldEmitter, count: 79}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        let workT2modul = 520000;  // стоимость работ постройки 1 модуля

        let MultispectrumShieldHardenerII = {};
        MultispectrumShieldHardenerII.sell = await getPrice("sell",2281);
        MultispectrumShieldHardenerII.buy = await getPrice("buy",2281);
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;

        this.tableJita.push({countRuns: countT2copy, costDecryptor: 0, goods: "без декрипторов", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let AccelerantDecryptor = await getPrice("buy",34201);
        countT2copy = 11; // Количество копий в одной BPC T2
        percentT2 = 0.53; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((AccelerantDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(AccelerantDecryptor), goods: "Accelerant Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let AttainmentDecryptor = await getPrice("buy",34202);
        countT2copy = 14; // Количество копий в одной BPC T2
        percentT2 = 0.796; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((AttainmentDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(AttainmentDecryptor), goods: "Attainment Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let AugmentationDecryptor = await getPrice("buy",34203);
        countT2copy = 19; // Количество копий в одной BPC T2
        percentT2 = 0.265; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((AugmentationDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(AugmentationDecryptor), goods: "Augmentation Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let OptimizedAttainmentDecryptor = await getPrice("buy",34207);
        countT2copy = 12; // Количество копий в одной BPC T2
        percentT2 = 0.84; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((OptimizedAttainmentDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(OptimizedAttainmentDecryptor), goods: "Optimized Attainment Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let OptimizedAugmentationDecryptor = await getPrice("buy",34208);
        countT2copy = 17; // Количество копий в одной BPC T2
        percentT2 = 0.398; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((OptimizedAugmentationDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(OptimizedAugmentationDecryptor), goods: "Optimized Augmentation Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let ParityDecryptor = await getPrice("buy",34204);
        countT2copy = 13; // Количество копий в одной BPC T2
        percentT2 = 0.663; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((ParityDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(ParityDecryptor), goods: "Parity Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let ProcessDecryptor = await getPrice("buy",34205);
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.486; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((ProcessDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(ProcessDecryptor), goods: "Process Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        let SymmetryDecryptor = await getPrice("buy",34206);
        countT2copy = 12; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workBPC_T2 = ((SymmetryDecryptor + workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;
        this.tableJita.push({countRuns: countT2copy, costDecryptor: formatNumber(SymmetryDecryptor), goods: "Symmetry Decryptor", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        this.tableJita.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });

    },
});