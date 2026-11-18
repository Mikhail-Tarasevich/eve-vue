Vue.component('page-T2Shield', {
    template: `
    <div>
        <h1>T2 Shield Moduls</h1>
        <br>
        <p>Получение Т2-чертежей и постройка модулей в системе Niyabainen</p>
        <p>Поcтройка Т1-модулей и Sustained Shield Emitter самостоятельно</p>
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
          label="Товар"
          width="220"
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

        <br>

        <h4>Amarr</h4>
        <el-table
        :data="tableAmarr"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="220"
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
            tableJita: [],
            tableAmarr: [],
    }},

    created: async function() {
        let DatacoreHydromagneticPhysics = await getPrice("buy",20171);
        let DatacoreQuantumPhysics = await getPrice("buy",20414);
        let DatacoreNaniteEngineering = await getPrice("buy",20416);
        let Morphite = await getPrice("sell",11399);
        let HydrogenBatteries = await getPrice("sell",3685,"10000002","60000364");
        let RAMShieldTech = await getPrice("sell",11484);
        //let Megacyte = await getPrice("sell",40);
        //let Zydrine = await getPrice("sell",39);
        let Nocxium = await getPrice("sell",38);
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

        this.tableJita.push({goods: "Multispectrum Shield Hardener II", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        // Kinetic Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let KineticShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Kinetic Shield Hardener I", price: KineticShieldHardenerI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 417000;  // стоимость работ постройки 1 модуля
        
        let KineticShieldHardenerII = {};
        KineticShieldHardenerII.sell = await getPrice("sell",2299);
        KineticShieldHardenerII.buy = await getPrice("buy",2299);
        KineticShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        KineticShieldHardenerII.profit = (KineticShieldHardenerII.sell - KineticShieldHardenerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Kinetic Shield Hardener II", buy: formatNumber(KineticShieldHardenerII.buy),  sell: formatNumber(KineticShieldHardenerII.sell),  cost: formatNumber(KineticShieldHardenerII.cost),  profit: formatNumber(KineticShieldHardenerII.profit), profitSort: KineticShieldHardenerII.profit});

        // Thermal Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let ThermalShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Thermal Shield Hardener I", price: ThermalShieldHardenerI, count: 10}, 
          {name: "Pulse Shield Emitter", price: PulseShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 417000;  // стоимость работ постройки 1 модуля
        
        let ThermalShieldHardenerII = {};
        ThermalShieldHardenerII.sell = await getPrice("sell",2303);
        ThermalShieldHardenerII.buy = await getPrice("buy",2303);
        ThermalShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        ThermalShieldHardenerII.profit = (ThermalShieldHardenerII.sell - ThermalShieldHardenerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Thermal Shield Hardener II", buy: formatNumber(ThermalShieldHardenerII.buy),  sell: formatNumber(ThermalShieldHardenerII.sell),  cost: formatNumber(ThermalShieldHardenerII.cost),  profit: formatNumber(ThermalShieldHardenerII.profit), profitSort: ThermalShieldHardenerII.profit});

        // Explosive Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let ExplosiveShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Explosive Shield Hardener I", price: ExplosiveShieldHardenerI, count: 10}, 
          {name: "Deflection Shield Emitter", price: DeflectionShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 303300;  // стоимость работ постройки 1 модуля
        
        let ExplosiveShieldHardenerII = {};
        ExplosiveShieldHardenerII.sell = await getPrice("sell",2297);
        ExplosiveShieldHardenerII.buy = await getPrice("buy",2297);
        ExplosiveShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        ExplosiveShieldHardenerII.profit = (ExplosiveShieldHardenerII.sell - ExplosiveShieldHardenerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Explosive Shield Hardener II", buy: formatNumber(ExplosiveShieldHardenerII.buy),  sell: formatNumber(ExplosiveShieldHardenerII.sell),  cost: formatNumber(ExplosiveShieldHardenerII.cost),  profit: formatNumber(ExplosiveShieldHardenerII.profit), profitSort: ExplosiveShieldHardenerII.profit});

        // EM Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let EMShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "EM Shield Hardener I", price: EMShieldHardenerI, count: 10}, 
          {name: "Linear Shield Emitter", price: LinearShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 368260;  // стоимость работ постройки 1 модуля
        
        let EMShieldHardenerII = {};
        EMShieldHardenerII.sell = await getPrice("sell",2301);
        EMShieldHardenerII.buy = await getPrice("buy",2301);
        EMShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        EMShieldHardenerII.profit = (EMShieldHardenerII.sell - EMShieldHardenerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "EM Shield Hardener II", buy: formatNumber(EMShieldHardenerII.buy),  sell: formatNumber(EMShieldHardenerII.sell),  cost: formatNumber(EMShieldHardenerII.cost),  profit: formatNumber(EMShieldHardenerII.profit), profitSort: EMShieldHardenerII.profit});

        // Large Shield Extender II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 176; // Стоимость копии BPC Т1
        workT1toT2 = 324; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (3 * DatacoreHydromagneticPhysics) + (3 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let LargeShieldExtenderI = (Tritanium * 304470 + Pyerite * 249210 + Mexallon * 16290 + 247655) / 100;  // где 247655 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 59}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 118}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Large Shield Extender I", price: LargeShieldExtenderI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 118}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 223780;  // стоимость работ постройки 1 модуля
        
        let LargeShieldExtenderII = {};
        LargeShieldExtenderII.sell = await getPrice("sell",3841);
        LargeShieldExtenderII.buy = await getPrice("buy",3841);
        LargeShieldExtenderII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        LargeShieldExtenderII.profit = (LargeShieldExtenderII.sell - LargeShieldExtenderII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Large Shield Extender II", buy: formatNumber(LargeShieldExtenderII.buy),  sell: formatNumber(LargeShieldExtenderII.sell),  cost: formatNumber(LargeShieldExtenderII.cost),  profit: formatNumber(LargeShieldExtenderII.profit), profitSort: LargeShieldExtenderII.profit});

        // Medium Shield Extender II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 176; // Стоимость копии BPC Т1
        workT1toT2 = 185; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let MediumShieldExtenderI = (Tritanium * 170100 + Pyerite * 41040 + Mexallon * 16110 + Isogen * 540 + 107000) / 100;  // где 107000 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 49}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 59}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Medium Shield Extender I", price: MediumShieldExtenderI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 59}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 127000;  // стоимость работ постройки 1 модуля
        
        let MediumShieldExtenderII = {};
        MediumShieldExtenderII.sell = await getPrice("sell",3831);
        MediumShieldExtenderII.buy = await getPrice("buy",3831);
        MediumShieldExtenderII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumShieldExtenderII.profit = (MediumShieldExtenderII.sell - MediumShieldExtenderII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Medium Shield Extender II", buy: formatNumber(MediumShieldExtenderII.buy),  sell: formatNumber(MediumShieldExtenderII.sell),  cost: formatNumber(MediumShieldExtenderII.cost),  profit: formatNumber(MediumShieldExtenderII.profit), profitSort: MediumShieldExtenderII.profit});

        // Small Shield Extender II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 75; // Стоимость копии BPC Т1
        workT1toT2 = 75; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreHydromagneticPhysics) + (1 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let SmallShieldExtenderI = (Tritanium * 82440 + Pyerite * 5760 + Mexallon * 2610 + Nocxium * 360 + 41800) / 100;  // где 41800 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 1}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 3}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 1}, 
          {name: "Small Shield Extender I", price: SmallShieldExtenderI, count: 1}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 3}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 5220;  // стоимость работ постройки 1 модуля
        
        let SmallShieldExtenderII = {};
        SmallShieldExtenderII.sell = await getPrice("sell",380);
        SmallShieldExtenderII.buy = await getPrice("buy",380);
        SmallShieldExtenderII.cost = workBPC_T2 + materialsprice + workT2modul;
        SmallShieldExtenderII.profit = (SmallShieldExtenderII.sell - SmallShieldExtenderII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Small Shield Extender II", buy: formatNumber(SmallShieldExtenderII.buy),  sell: formatNumber(SmallShieldExtenderII.sell),  cost: formatNumber(SmallShieldExtenderII.cost),  profit: formatNumber(SmallShieldExtenderII.profit), profitSort: SmallShieldExtenderII.profit});

        // Medium Armor Repairer II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.411; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreNaniteEngineering)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let MediumArmorRepairerI = (Tritanium * 204390 + Pyerite * 95670 + Mexallon * 81540 + Isogen * 100 + Nocxium * 360 + 1068000) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        let NanoelectricalMicroprocessor = await getPrice("sell",11539);
        let RAMSArmorHullTech = await getPrice("sell",11475);
        let Robotics = await getPrice("sell",9848);
        materials = [
          {name: "Morphite", price: Morphite, count: 45}, 
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 27}, 
          {name: "R.A.M.- Armor/Hull Tech", price: RAMSArmorHullTech, count: 10}, 
          {name: "Medium Armor Repairer I", price: MediumArmorRepairerI, count: 10}, 
          {name: "Robotics", price: Robotics, count: 54}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 940000;  // стоимость работ постройки 1 модуля
        
        let MediumArmorRepairerII = {};
        MediumArmorRepairerII.sell = await getPrice("sell",3530);
        MediumArmorRepairerII.buy = await getPrice("buy",3530);
        MediumArmorRepairerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumArmorRepairerII.profit = (MediumArmorRepairerII.sell - MediumArmorRepairerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Medium Armor Repairer II", buy: formatNumber(MediumArmorRepairerII.buy),  sell: formatNumber(MediumArmorRepairerII.sell),  cost: formatNumber(MediumArmorRepairerII.cost),  profit: formatNumber(MediumArmorRepairerII.profit), profitSort: MediumArmorRepairerII.profit});

        // Nova Fury Cruise Missile
        ////// Т2 ивент
        countT2 = 50000; // количество модулей с постройки Т2-чертежа
        countT2copy = 5000; // Количество копий в одной BPC T2
        percentT2 = 0.431; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 3200; // Стоимость ивента Т1 в Т2
        let DatacoreElectronicEngineering = await getPrice("sell",20418);
        let DatacoreRocketScience = await getPrice("sell",20420);
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreElectronicEngineering) + (1 * DatacoreRocketScience)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        materialsprice = 0;
        let PhenolicComposites = await getPrice("sell",16680);
        let NuclearPulseGenerator = await getPrice("sell",11692);
        let RAMAmmunitionTech = await getPrice("sell",11476);
        let RocketFuel = await getPrice("sell",9830);
        materials = [
          {name: "Morphite", price: Morphite, count: 15}, 
          {name: "Phenolic Composites", price: PhenolicComposites, count: 58}, 
          {name: "Nuclear Pulse Generator", price: NuclearPulseGenerator, count: 14}, 
          {name: "R.A.M.- Ammunition Tech", price: RAMAmmunitionTech, count: 1}, 
          {name: "Rocket Fuel", price: RocketFuel, count: 127}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 148263;  // стоимость работ постройки 1 модуля
        
        let NovaFuryCruiseMissile = {};
        NovaFuryCruiseMissile.sell = await getPrice("sell",24531);
        NovaFuryCruiseMissile.buy = await getPrice("buy",24531);
        NovaFuryCruiseMissile.cost = (workBPC_T2 + materialsprice + workT2modul) / 5000;
        NovaFuryCruiseMissile.profit = (NovaFuryCruiseMissile.sell - NovaFuryCruiseMissile.cost) * commisionSellLong;

        this.tableJita.push({goods: "Nova Fury Cruise Missile", buy: formatNumber(NovaFuryCruiseMissile.buy),  sell: formatNumber(NovaFuryCruiseMissile.sell),  cost: formatNumber(NovaFuryCruiseMissile.cost),  profit: formatNumber(NovaFuryCruiseMissile.profit), profitSort: NovaFuryCruiseMissile.profit});

        // Mjolnir Fury Heavy Missile
        ////// Т2 ивент
        countT2 = 50000; // количество модулей с постройки Т2-чертежа
        countT2copy = 5000; // Количество копий в одной BPC T2
        percentT2 = 0.431; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 3200; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreElectronicEngineering) + (1 * DatacoreRocketScience)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство

        materialsprice = 0;
        let EMPulseGenerator = await getPrice("sell",11694);
        materials = [
          {name: "Morphite", price: Morphite, count: 8}, 
          {name: "Phenolic Composites", price: PhenolicComposites, count: 18}, 
          {name: "EM Pulse Generator", price: EMPulseGenerator, count: 14}, 
          {name: "R.A.M.- Ammunition Tech", price: RAMAmmunitionTech, count: 1}, 
          {name: "Rocket Fuel", price: RocketFuel, count: 124}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 124336;  // стоимость работ постройки 1 модуля
        
        let MjolnirFuryHeavyMissile = {};
        MjolnirFuryHeavyMissile.sell = await getPrice("sell",24509);
        MjolnirFuryHeavyMissile.buy = await getPrice("buy",24509);
        MjolnirFuryHeavyMissile.cost = (workBPC_T2 + materialsprice + workT2modul) / 5000;
        MjolnirFuryHeavyMissile.profit = (MjolnirFuryHeavyMissile.sell - MjolnirFuryHeavyMissile.cost) * commisionSellLong;

        this.tableJita.push({goods: "Mjolnir Fury Heavy Missile", buy: formatNumber(MjolnirFuryHeavyMissile.buy),  sell: formatNumber(MjolnirFuryHeavyMissile.sell),  cost: formatNumber(MjolnirFuryHeavyMissile.cost),  profit: formatNumber(MjolnirFuryHeavyMissile.profit), profitSort: MjolnirFuryHeavyMissile.profit});

        this.tableJita.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });

        /*
      AMARR
      */
      let regionID = 10000043; // Domain
      let locationID = 60008494; // Amarr VIII (Oris) - Emperor Family Academy

      DatacoreHydromagneticPhysics = await getPrice("buy",20171, regionID, locationID);
        DatacoreQuantumPhysics = await getPrice("buy",20414, regionID, locationID);
        Morphite = await getPrice("sell",11399, regionID, locationID);
        HydrogenBatteries = await getPrice("sell",3685,"10000002","60000364", regionID, locationID);
        RAMShieldTech = await getPrice("sell",11484, regionID, locationID);
        //let Megacyte = await getPrice("sell",40, regionID, locationID);
        //let Zydrine = await getPrice("sell",39, regionID, locationID);
        Nocxium = await getPrice("sell",38, regionID, locationID);
        Isogen = await getPrice("sell",37, regionID, locationID);
        Mexallon = await getPrice("sell",36, regionID, locationID);
        Pyerite = await getPrice("sell",35, regionID, locationID);
        Tritanium = await getPrice("sell",34, regionID, locationID);
        Ferrogel = await getPrice("sell",16683, regionID, locationID);
        SylramicFibers = await getPrice("sell",16678, regionID, locationID);
        TungstenCarbide = await getPrice("buy",16672, regionID, locationID);
        FerniteCarbide = await getPrice("buy",16673, regionID, locationID);
        CrystallineCarbonide = await getPrice("buy",16670, regionID, locationID);
        TitaniumCarbide = await getPrice("sell",16671, regionID, locationID);
        Superconductors = await getPrice("buy",9838, regionID, locationID);
        LinearShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + TungstenCarbide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Linear Shield Emitter
        DeflectionShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + FerniteCarbide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Deflection Shield Emitter
        PulseShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + CrystallineCarbonide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Pulse Shield Emitter
        SustainedShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 8100 + TitaniumCarbide * 19800) / 1000) + 700);  // где 700 - стоимость постройки Sustained Shield Emitter

        // Multispectrum Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 176; // Стоимость копии BPC Т1
        workT1toT2 = 750; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        MultispectrumShieldHardener = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582500) / 100;  // где 582500 - стоимость постройки 100шт
        materialsprice = 0;
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
        workT2modul = 520000;  // стоимость работ постройки 1 модуля

        MultispectrumShieldHardenerII = {};
        MultispectrumShieldHardenerII.sell = await getPrice("sell",2281, regionID, locationID);
        MultispectrumShieldHardenerII.buy = await getPrice("buy",2281, regionID, locationID);
        MultispectrumShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MultispectrumShieldHardenerII.profit = (MultispectrumShieldHardenerII.sell - MultispectrumShieldHardenerII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Multispectrum Shield Hardener II", buy: formatNumber(MultispectrumShieldHardenerII.buy),  sell: formatNumber(MultispectrumShieldHardenerII.sell),  cost: formatNumber(MultispectrumShieldHardenerII.cost),  profit: formatNumber(MultispectrumShieldHardenerII.profit), profitSort: MultispectrumShieldHardenerII.profit});

        // Kinetic Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        KineticShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Kinetic Shield Hardener I", price: KineticShieldHardenerI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 417000;  // стоимость работ постройки 1 модуля
        
        KineticShieldHardenerII = {};
        KineticShieldHardenerII.sell = await getPrice("sell",2299, regionID, locationID);
        KineticShieldHardenerII.buy = await getPrice("buy",2299, regionID, locationID);
        KineticShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        KineticShieldHardenerII.profit = (KineticShieldHardenerII.sell - KineticShieldHardenerII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Kinetic Shield Hardener II", buy: formatNumber(KineticShieldHardenerII.buy),  sell: formatNumber(KineticShieldHardenerII.sell),  cost: formatNumber(KineticShieldHardenerII.cost),  profit: formatNumber(KineticShieldHardenerII.profit), profitSort: KineticShieldHardenerII.profit});

        // Thermal Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        ThermalShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Thermal Shield Hardener I", price: ThermalShieldHardenerI, count: 10}, 
          {name: "Pulse Shield Emitter", price: PulseShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 417000;  // стоимость работ постройки 1 модуля
        
        ThermalShieldHardenerII = {};
        ThermalShieldHardenerII.sell = await getPrice("sell",2303, regionID, locationID);
        ThermalShieldHardenerII.buy = await getPrice("buy",2303, regionID, locationID);
        ThermalShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        ThermalShieldHardenerII.profit = (ThermalShieldHardenerII.sell - ThermalShieldHardenerII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Thermal Shield Hardener II", buy: formatNumber(ThermalShieldHardenerII.buy),  sell: formatNumber(ThermalShieldHardenerII.sell),  cost: formatNumber(ThermalShieldHardenerII.cost),  profit: formatNumber(ThermalShieldHardenerII.profit), profitSort: ThermalShieldHardenerII.profit});

        // Explosive Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        ExplosiveShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Explosive Shield Hardener I", price: ExplosiveShieldHardenerI, count: 10}, 
          {name: "Deflection Shield Emitter", price: DeflectionShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 303300;  // стоимость работ постройки 1 модуля
        
        ExplosiveShieldHardenerII = {};
        ExplosiveShieldHardenerII.sell = await getPrice("sell",2297, regionID, locationID);
        ExplosiveShieldHardenerII.buy = await getPrice("buy",2297, regionID, locationID);
        ExplosiveShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        ExplosiveShieldHardenerII.profit = (ExplosiveShieldHardenerII.sell - ExplosiveShieldHardenerII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Explosive Shield Hardener II", buy: formatNumber(ExplosiveShieldHardenerII.buy),  sell: formatNumber(ExplosiveShieldHardenerII.sell),  cost: formatNumber(ExplosiveShieldHardenerII.cost),  profit: formatNumber(ExplosiveShieldHardenerII.profit), profitSort: ExplosiveShieldHardenerII.profit});

        // EM Shield Hardener II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 600; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        EMShieldHardenerI = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582700) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Superconductors", price: Superconductors, count: 89}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "EM Shield Hardener I", price: EMShieldHardenerI, count: 10}, 
          {name: "Linear Shield Emitter", price: LinearShieldEmitter, count: 236}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 368260;  // стоимость работ постройки 1 модуля
        
        EMShieldHardenerII = {};
        EMShieldHardenerII.sell = await getPrice("sell",2301, regionID, locationID);
        EMShieldHardenerII.buy = await getPrice("buy",2301, regionID, locationID);
        EMShieldHardenerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        EMShieldHardenerII.profit = (EMShieldHardenerII.sell - EMShieldHardenerII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "EM Shield Hardener II", buy: formatNumber(EMShieldHardenerII.buy),  sell: formatNumber(EMShieldHardenerII.sell),  cost: formatNumber(EMShieldHardenerII.cost),  profit: formatNumber(EMShieldHardenerII.profit), profitSort: EMShieldHardenerII.profit});

        // Large Shield Extender II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 176; // Стоимость копии BPC Т1
        workT1toT2 = 324; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (3 * DatacoreHydromagneticPhysics) + (3 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        LargeShieldExtenderI = (Tritanium * 304470 + Pyerite * 249210 + Mexallon * 16290 + 247655) / 100;  // где 247655 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 59}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 119}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Large Shield Extender I", price: LargeShieldExtenderI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 119}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 223780;  // стоимость работ постройки 1 модуля
        
        LargeShieldExtenderII = {};
        LargeShieldExtenderII.sell = await getPrice("sell",3841, regionID, locationID);
        LargeShieldExtenderII.buy = await getPrice("buy",3841, regionID, locationID);
        LargeShieldExtenderII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        LargeShieldExtenderII.profit = (LargeShieldExtenderII.sell - LargeShieldExtenderII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Large Shield Extender II", buy: formatNumber(LargeShieldExtenderII.buy),  sell: formatNumber(LargeShieldExtenderII.sell),  cost: formatNumber(LargeShieldExtenderII.cost),  profit: formatNumber(LargeShieldExtenderII.profit), profitSort: LargeShieldExtenderII.profit});

        // Medium Shield Extender II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 176; // Стоимость копии BPC Т1
        workT1toT2 = 185; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        MediumShieldExtenderI = (Tritanium * 170100 + Pyerite * 41040 + Mexallon * 16110 + Isogen * 540 + 107000) / 100;  // где 107000 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 49}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 59}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Medium Shield Extender I", price: MediumShieldExtenderI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 59}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 127000;  // стоимость работ постройки 1 модуля
        
        MediumShieldExtenderII = {};
        MediumShieldExtenderII.sell = await getPrice("sell",3831, regionID, locationID);
        MediumShieldExtenderII.buy = await getPrice("buy",3831, regionID, locationID);
        MediumShieldExtenderII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumShieldExtenderII.profit = (MediumShieldExtenderII.sell - MediumShieldExtenderII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Medium Shield Extender II", buy: formatNumber(MediumShieldExtenderII.buy),  sell: formatNumber(MediumShieldExtenderII.sell),  cost: formatNumber(MediumShieldExtenderII.cost),  profit: formatNumber(MediumShieldExtenderII.profit), profitSort: MediumShieldExtenderII.profit});

        // Small Shield Extender II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 75; // Стоимость копии BPC Т1
        workT1toT2 = 75; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreHydromagneticPhysics) + (1 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        SmallShieldExtenderI = (Tritanium * 82440 + Pyerite * 5760 + Mexallon * 2610 + Nocxium * 360 + 41800) / 100;  // где 41800 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 1}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 3}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 1}, 
          {name: "Small Shield Extender I", price: SmallShieldExtenderI, count: 1}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 3}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 5220;  // стоимость работ постройки 1 модуля
        
        SmallShieldExtenderII = {};
        SmallShieldExtenderII.sell = await getPrice("sell",380, regionID, locationID);
        SmallShieldExtenderII.buy = await getPrice("buy",380, regionID, locationID);
        SmallShieldExtenderII.cost = workBPC_T2 + materialsprice + workT2modul;
        SmallShieldExtenderII.profit = (SmallShieldExtenderII.sell - SmallShieldExtenderII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Small Shield Extender II", buy: formatNumber(SmallShieldExtenderII.buy),  sell: formatNumber(SmallShieldExtenderII.sell),  cost: formatNumber(SmallShieldExtenderII.cost),  profit: formatNumber(SmallShieldExtenderII.profit), profitSort: SmallShieldExtenderII.profit});

        // Medium Armor Repairer II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.411; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreNaniteEngineering)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        MediumArmorRepairerI = (Tritanium * 204390 + Pyerite * 95670 + Mexallon * 81540 + Isogen * 100 + Nocxium * 360 + 1068000) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        NanoelectricalMicroprocessor = await getPrice("sell",11539, regionID, locationID);
        RAMSArmorHullTech = await getPrice("sell",11475, regionID, locationID);
        Robotics = await getPrice("sell",9848, regionID, locationID);
        materials = [
            {name: "Morphite", price: Morphite, count: 45}, 
            {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 27}, 
            {name: "R.A.M.- Armor/Hull Tech", price: RAMSArmorHullTech, count: 10}, 
            {name: "Medium Armor Repairer I", price: MediumArmorRepairerI, count: 10}, 
            {name: "Robotics", price: Robotics, count: 54}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 94000;  // стоимость работ постройки 1 модуля
        
        MediumArmorRepairerII = {};
        MediumArmorRepairerII.sell = await getPrice("sell",3530, regionID, locationID);
        MediumArmorRepairerII.buy = await getPrice("buy",3530, regionID, locationID);
        MediumArmorRepairerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumArmorRepairerII.profit = (MediumArmorRepairerII.sell - MediumArmorRepairerII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Medium Armor Repairer II", buy: formatNumber(MediumArmorRepairerII.buy),  sell: formatNumber(MediumArmorRepairerII.sell),  cost: formatNumber(MediumArmorRepairerII.cost),  profit: formatNumber(MediumArmorRepairerII.profit), profitSort: MediumArmorRepairerII.profit});

        // Mjolnir Fury Heavy Missile
        ////// Т2 ивент
        countT2 = 50000; // количество модулей с постройки Т2-чертежа
        countT2copy = 5000; // Количество копий в одной BPC T2
        percentT2 = 0.431; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 3200; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreElectronicEngineering) + (1 * DatacoreRocketScience)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство

        materialsprice = 0;
        EMPulseGenerator = await getPrice("sell",11694, regionID, locationID);
        materials = [
          {name: "Morphite", price: Morphite, count: 8}, 
          {name: "Phenolic Composites", price: PhenolicComposites, count: 18}, 
          {name: "EM Pulse Generator", price: EMPulseGenerator, count: 14}, 
          {name: "R.A.M.- Ammunition Tech", price: RAMAmmunitionTech, count: 1}, 
          {name: "Rocket Fuel", price: RocketFuel, count: 124}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 124336;  // стоимость работ постройки 1 модуля
        
        MjolnirFuryHeavyMissile = {};
        MjolnirFuryHeavyMissile.sell = await getPrice("sell",24509, regionID, locationID);
        MjolnirFuryHeavyMissile.buy = await getPrice("buy",24509, regionID, locationID);
        MjolnirFuryHeavyMissile.cost = (workBPC_T2 + materialsprice + workT2modul) / 5000;
        MjolnirFuryHeavyMissile.profit = (MjolnirFuryHeavyMissile.sell - MjolnirFuryHeavyMissile.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Mjolnir Fury Heavy Missile", buy: formatNumber(MjolnirFuryHeavyMissile.buy),  sell: formatNumber(MjolnirFuryHeavyMissile.sell),  cost: formatNumber(MjolnirFuryHeavyMissile.cost),  profit: formatNumber(MjolnirFuryHeavyMissile.profit), profitSort: MjolnirFuryHeavyMissile.profit});

        this.tableAmarr.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });
    },
});