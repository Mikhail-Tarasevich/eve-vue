Vue.component('page-T2Shield', {
    template: `
    <div>
        <h1>T2 Shield Moduls</h1>
        <br>
        <p>Получение Т2-чертежей и постройка модулей в системе Perimert на Sotyo</p>
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
        let TesseractCapacitorUnit = await getPrice("sell", 11554); 
        let NanoelectricalMicroprocessor = await getPrice("sell", 11539); 
        let RAMSEnergyTech = await getPrice("sell", 11482); 
        let RAMSArmorHullTech = await getPrice("sell", 11475);
        let Robotics = await getPrice("sell", 9848);
        let LinearShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + TungstenCarbide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Linear Shield Emitter
        let DeflectionShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + FerniteCarbide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Deflection Shield Emitter
        let PulseShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + CrystallineCarbonide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Pulse Shield Emitter
        let SustainedShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + TitaniumCarbide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Sustained Shield Emitter

        // Multispectrum Shield Hardener II
        ////// Т2 ивент
        let countT2 = 100; // количество модулей с постройки Т2-чертежа
        let countT2copy = 10; // Количество копий в одной BPC T2
        let percentT2 = 0.442; // Процент успеха модернизации в Т2
        let countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        let workT1Copy = 143; // Стоимость копии BPC Т1
        let workT1toT2 = 750; // Стоимость ивента Т1 в Т2
        let workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHydromagneticPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let MultispectrumShieldHardener = (Tritanium * 726390 + Pyerite * 673920 + Mexallon * 19710 + Isogen * 180 + 582500) / 100;  // где 582500 - стоимость постройки 100шт
        let materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 105}, 
          {name: "Superconductors", price: Superconductors, count: 143}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Multispectrum Shield Hardener I", price: MultispectrumShieldHardener, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 77},
          {name: "Linear Shield Emitter", price: LinearShieldEmitter, count: 77},
          {name: "Deflection Shield Emitter", price: DeflectionShieldEmitter, count: 77},
          {name: "Pulse Shield Emitter", price: PulseShieldEmitter, count: 77}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        let workT2modul = 1287200;  // стоимость работ постройки 10 модуля

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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Kinetic Shield Hardener I", price: KineticShieldHardenerI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 807910;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Thermal Shield Hardener I", price: ThermalShieldHardenerI, count: 10}, 
          {name: "Pulse Shield Emitter", price: PulseShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 807910;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Explosive Shield Hardener I", price: ExplosiveShieldHardenerI, count: 10}, 
          {name: "Deflection Shield Emitter", price: DeflectionShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 303300;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "EM Shield Hardener I", price: EMShieldHardenerI, count: 10}, 
          {name: "Linear Shield Emitter", price: LinearShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 368260;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 58}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 115}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Large Shield Extender I", price: LargeShieldExtenderI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 115}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 534930;  // стоимость работ постройки 10 модуля
        
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
        workT1toT2 = 324; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (3 * DatacoreHydromagneticPhysics) + (3 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let MediumShieldExtenderI = (Tritanium * 170100 + Pyerite * 41040 + Mexallon * 16110 + Isogen * 540 + 146000) / 100;  // где 146000 - стоимость постройки 100шт
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
        workT2modul = 40000;  // стоимость работ постройки 10 модуля
        
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
        workT1Copy = 176; // Стоимость копии BPC Т1
        workT1toT2 = 324; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (3 * DatacoreHydromagneticPhysics) + (3 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let SmallShieldExtenderI = (Tritanium * 82440 + Pyerite * 5760 + Mexallon * 2610 + Nocxium * 360 + 54500) / 100;  // где 54500 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 10}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 30}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Small Shield Extender I", price: SmallShieldExtenderI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 30}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 108000;  // стоимость работ постройки 10 модуля
        
        let SmallShieldExtenderII = {};
        SmallShieldExtenderII.sell = await getPrice("sell",380);
        SmallShieldExtenderII.buy = await getPrice("buy",380);
        SmallShieldExtenderII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        SmallShieldExtenderII.profit = (SmallShieldExtenderII.sell - SmallShieldExtenderII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Small Shield Extender II", buy: formatNumber(SmallShieldExtenderII.buy),  sell: formatNumber(SmallShieldExtenderII.sell),  cost: formatNumber(SmallShieldExtenderII.cost),  profit: formatNumber(SmallShieldExtenderII.profit), profitSort: SmallShieldExtenderII.profit});

        // Large Cap Battery II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.442; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        // Для invention Large Cap Battery II используются Datacore - High Energy Physics и Datacore - Quantum Physics
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHighEnergyPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        // Стоимость T1-модуля (Large Cap Battery I) берем с рынка по typeID 2020
        let LargeCapBatteryI = (Tritanium * 411700 + Pyerite * 156100 + Mexallon * 117700 + Zydrine * 400 + 54500) / 100;  // где 54500 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 6}, 
          {name: "Tesseract Capacitor Unit", price: TesseractCapacitorUnit, count: 12}, 
          {name: "Superconductors", price: Superconductors, count: 6},
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 6}, 
          {name: "Large Cap Battery I", price: LargeCapBatteryI, count: 1}, 
          {name: "R.A.M.- Energy Tech", price: RAMSEnergyTech, count: 1}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля 

        let LargeCapBatteryII = {};
        LargeCapBatteryII.sell = await getPrice("sell", 3504);
        LargeCapBatteryII.buy = await getPrice("buy", 3504);
        LargeCapBatteryII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        LargeCapBatteryII.profit = (LargeCapBatteryII.sell - LargeCapBatteryII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Large Cap Battery II", buy: formatNumber(LargeCapBatteryII.buy),  sell: formatNumber(LargeCapBatteryII.sell),  cost: formatNumber(LargeCapBatteryII.cost),  profit: formatNumber(LargeCapBatteryII.profit), profitSort: LargeCapBatteryII.profit});
        
        // Medium Cap Battery II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.422; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        // Для invention Medium Cap Battery II используются Datacore - High Energy Physics и Datacore - Quantum Physics
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHighEnergyPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        // Стоимость T1-модуля (Medium Cap Battery I) берем с рынка по typeID 2018
        let MediumCapBatteryI = (Tritanium * 120500 + Pyerite * 95300 + Mexallon * 44400 + Isogen * 200 + Nocxium * 100 + 54500) / 100;  // где 54500 - стоимость постройки 100шт

        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 5}, 
          {name: "Tesseract Capacitor Unit", price: TesseractCapacitorUnit, count: 6}, 
          {name: "Superconductors", price: Superconductors, count: 5},
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 5}, 
          {name: "Medium Cap Battery I", price: MediumCapBatteryI, count: 1}, 
          {name: "R.A.M.- Energy Tech", price: RAMSEnergyTech, count: 1}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля 
        
        let MediumCapBatteryII = {};
        MediumCapBatteryII.sell = await getPrice("sell", 3496);
        MediumCapBatteryII.buy = await getPrice("buy", 3496);
        MediumCapBatteryII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumCapBatteryII.profit = (MediumCapBatteryII.sell - MediumCapBatteryII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Medium Cap Battery II", buy: formatNumber(MediumCapBatteryII.buy),  sell: formatNumber(MediumCapBatteryII.sell),  cost: formatNumber(MediumCapBatteryII.cost),  profit: formatNumber(MediumCapBatteryII.profit), profitSort: MediumCapBatteryII.profit});

        // Small Cap Battery II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.422; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        // Для invention Small Cap Battery II используются Datacore - High Energy Physics и Datacore - Quantum Physics
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreHighEnergyPhysics) + (1 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        // Стоимость T1-модуля (Small Cap Battery I) берем с рынка по typeID
        let SmallCapBatteryI = (Tritanium * 61600 + Pyerite * 38500 + Mexallon * 13800 + Isogen * 200 + Nocxium * 200 + 54500) / 100;  // где 54500 - стоимость постройки 100шт

        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 5}, 
          {name: "Tesseract Capacitor Unit", price: TesseractCapacitorUnit, count: 6}, 
          {name: "Superconductors", price: Superconductors, count: 5},
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 5}, 
          {name: "Small Cap Battery I", price: SmallCapBatteryI, count: 1}, 
          {name: "R.A.M.- Energy Tech", price: RAMSEnergyTech, count: 1}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля 
        
        let SmallCapBatteryII = {};
        SmallCapBatteryII.sell = await getPrice("sell", 3488);
        SmallCapBatteryII.buy = await getPrice("buy", 3488);
        SmallCapBatteryII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        SmallCapBatteryII.profit = (SmallCapBatteryII.sell - SmallCapBatteryII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Small Cap Battery II", buy: formatNumber(SmallCapBatteryII.buy),  sell: formatNumber(SmallCapBatteryII.sell),  cost: formatNumber(SmallCapBatteryII.cost),  profit: formatNumber(SmallCapBatteryII.profit), profitSort: SmallCapBatteryII.profit});
        
        // Small Armor Repairer II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2 (для Small Armor Repairer II)
        percentT2 = 0.411; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1 
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2 
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreHydromagneticPhysics) + (1 * DatacoreNaniteEngineering)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        // Стоимость T1-модуля (Small Armor Repairer I) берем с рынка по typeID 523
        let SmallArmorRepairerI = (Tritanium * 77300 + Pyerite * 26000 + Megacyte * 400 + 54500) / 100;  // где 54500 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 1}, 
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 1}, 
          {name: "R.A.M.- Armor/Hull Tech", price: RAMSArmorHullTech, count: 1}, 
          {name: "Small Armor Repairer I", price: SmallArmorRepairerI, count: 1}, 
          {name: "Robotics", price: Robotics, count: 3}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля 
        
        let SmallArmorRepairerII = {};
        SmallArmorRepairerII.sell = await getPrice("sell", 1183);
        SmallArmorRepairerII.buy = await getPrice("buy", 1183);
        SmallArmorRepairerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        SmallArmorRepairerII.profit = (SmallArmorRepairerII.sell - SmallArmorRepairerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Small Armor Repairer II", buy: formatNumber(SmallArmorRepairerII.buy),  sell: formatNumber(SmallArmorRepairerII.sell),  cost: formatNumber(SmallArmorRepairerII.cost),  profit: formatNumber(SmallArmorRepairerII.profit), profitSort: SmallArmorRepairerII.profit});
        
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
        let RAMSArmorHullTech = await getPrice("sell",11475);
        let Robotics = await getPrice("sell",9848);
        materials = [
          {name: "Morphite", price: Morphite, count: 48}, 
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 29}, 
          {name: "R.A.M.- Armor/Hull Tech", price: RAMSArmorHullTech, count: 10}, 
          {name: "Medium Armor Repairer I", price: MediumArmorRepairerI, count: 10}, 
          {name: "Robotics", price: Robotics, count: 58}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля
        
        let MediumArmorRepairerII = {};
        MediumArmorRepairerII.sell = await getPrice("sell",3530);
        MediumArmorRepairerII.buy = await getPrice("buy",3530);
        MediumArmorRepairerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumArmorRepairerII.profit = (MediumArmorRepairerII.sell - MediumArmorRepairerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Medium Armor Repairer II", buy: formatNumber(MediumArmorRepairerII.buy),  sell: formatNumber(MediumArmorRepairerII.sell),  cost: formatNumber(MediumArmorRepairerII.cost),  profit: formatNumber(MediumArmorRepairerII.profit), profitSort: MediumArmorRepairerII.profit});

        // Large Armor Repairer II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.411; // Процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        workBPC_T2 = ((workT1Copy + workT1toT2 + (3 * DatacoreHydromagneticPhysics) + (3 * DatacoreNaniteEngineering)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let LargeArmorRepairerI = (Tritanium * 419580 + Pyerite * 167130 + Mexallon * 92430 + Isogen * 3960 + Nocxium * 4590 + 684000) / 100;  // где 582700 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 79}, 
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 59}, 
          {name: "R.A.M.- Armor/Hull Tech", price: RAMSArmorHullTech, count: 10}, 
          {name: "Large Armor Repairer I", price: LargeArmorRepairerI, count: 10}, 
          {name: "Robotics", price: Robotics, count: 118}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 554500;  // стоимость работ постройки 10 модуля
        
        let LargeArmorRepairerII = {};
        LargeArmorRepairerII.sell = await getPrice("sell",3540);
        LargeArmorRepairerII.buy = await getPrice("buy",3540);
        LargeArmorRepairerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        LargeArmorRepairerII.profit = (LargeArmorRepairerII.sell - LargeArmorRepairerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Large Armor Repairer II", buy: formatNumber(LargeArmorRepairerII.buy),  sell: formatNumber(LargeArmorRepairerII.sell),  cost: formatNumber(LargeArmorRepairerII.cost),  profit: formatNumber(LargeArmorRepairerII.profit), profitSort: LargeArmorRepairerII.profit});

        // Heavy Capacitor Booster II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2 (базовое значение для invention)
        percentT2 = 0.422; // Базовый процент успеха модернизации в Т2 
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        // Для invention Heavy Capacitor Booster II используются Datacore - High Energy Physics (3 шт.) и Datacore - Quantum Physics (3 шт.)
        workBPC_T2 = ((workT1Copy + workT1toT2 + (3 * DatacoreHighEnergyPhysics) + (3 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        // Стоимость T1-модуля (Heavy Capacitor Booster I) берем с рынка по typeID 3576
        let HeavyCapacitorBoosterI = (Tritanium * 151000 + Pyerite * 50500 + (Mexallon * 44000) + (Isogen * 36400) + (Nocxium * 600) + 54500) / 100;  // где 54500 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 6}, 
          {name: "Tesseract Capacitor Unit", price: TesseractCapacitorUnit, count: 12}, 
          {name: "Superconductors", price: Superconductors, count: 24},
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 6}, 
          {name: "Heavy Capacitor Booster I", price: HeavyCapacitorBoosterI, count: 1}, 
          {name: "R.A.M.- Energy Tech", price: RAMSEnergyTech, count: 1}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля (уточните для Heavy-версии, при необходимости)
        
        let HeavyCapacitorBoosterII = {};
        HeavyCapacitorBoosterII.sell = await getPrice("sell", 3578);
        HeavyCapacitorBoosterII.buy = await getPrice("buy", 3578);
        HeavyCapacitorBoosterII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        HeavyCapacitorBoosterII.profit = (HeavyCapacitorBoosterII.sell - HeavyCapacitorBoosterII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Heavy Capacitor Booster II", buy: formatNumber(HeavyCapacitorBoosterII.buy),  sell: formatNumber(HeavyCapacitorBoosterII.sell),  cost: formatNumber(HeavyCapacitorBoosterII.cost),  profit: formatNumber(HeavyCapacitorBoosterII.profit), profitSort: HeavyCapacitorBoosterII.profit});

        // Medium Capacitor Booster II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.422; // Базовый процент успеха модернизации в Т2
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        // Для invention Medium Capacitor Booster II используются Datacore - High Energy Physics и Datacore - Quantum Physics
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHighEnergyPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        // Стоимость T1-модуля (Medium Capacitor Booster I) берем с рынка по typeID 577
        let MediumCapacitorBoosterI = (Tritanium * 21800 + Pyerite * 13400 + (Mexallon * 51300) + (Zydrine * 200) + (Megacyte * 200) + 54500) / 100;  // где 54500 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 3}, 
          {name: "Tesseract Capacitor Unit", price: TesseractCapacitorUnit, count: 6}, 
          {name: "Superconductors", price: Superconductors, count: 12},
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 5}, 
          {name: "Medium Capacitor Booster I", price: MediumCapacitorBoosterI, count: 1}, 
          {name: "R.A.M.- Energy Tech", price: RAMSEnergyTech, count: 1}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля (уточните для Medium-версии, при необходимости)
        
        let MediumCapacitorBoosterII = {};
        MediumCapacitorBoosterII.sell = await getPrice("sell", 2024);
        MediumCapacitorBoosterII.buy = await getPrice("buy", 2024);
        MediumCapacitorBoosterII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumCapacitorBoosterII.profit = (MediumCapacitorBoosterII.sell - MediumCapacitorBoosterII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Medium Capacitor Booster II", buy: formatNumber(MediumCapacitorBoosterII.buy),  sell: formatNumber(MediumCapacitorBoosterII.sell),  cost: formatNumber(MediumCapacitorBoosterII.cost),  profit: formatNumber(MediumCapacitorBoosterII.profit), profitSort: MediumCapacitorBoosterII.profit});

        // Small Capacitor Booster II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.422; // Базовый процент успеха модернизации в Т2 (34%)
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        // Для invention Small Capacitor Booster II используются Datacore - High Energy Physics (1 шт.) и Datacore - Quantum Physics (1 шт.)
        workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * DatacoreHighEnergyPhysics) + (1 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        // Стоимость T1-модуля (Small Capacitor Booster I) берем с рынка по typeID 3566
        let SmallCapacitorBoosterI = (Tritanium * 25000 + (Nocxium * 600) + (Megacyte * 200) + 54500) / 100;  // где 54500 - стоимость постройки 100шт
        materialsprice = 0;
        materials = [
          {name: "Morphite", price: Morphite, count: 3}, 
          {name: "Tesseract Capacitor Unit", price: TesseractCapacitorUnit, count: 3}, 
          {name: "Superconductors", price: Superconductors, count: 6},
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 3}, 
          {name: "Small Capacitor Booster I", price: SmallCapacitorBoosterI, count: 1}, 
          {name: "R.A.M.- Energy Tech", price: RAMSEnergyTech, count: 1}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля (уточните для Small-версии, при необходимости)
        
        let SmallCapacitorBoosterII = {};
        SmallCapacitorBoosterII.sell = await getPrice("sell", 3568);
        SmallCapacitorBoosterII.buy = await getPrice("buy", 3568);
        SmallCapacitorBoosterII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        SmallCapacitorBoosterII.profit = (SmallCapacitorBoosterII.sell - SmallCapacitorBoosterII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Small Capacitor Booster II", buy: formatNumber(SmallCapacitorBoosterII.buy),  sell: formatNumber(SmallCapacitorBoosterII.sell),  cost: formatNumber(SmallCapacitorBoosterII.cost),  profit: formatNumber(SmallCapacitorBoosterII.profit), profitSort: SmallCapacitorBoosterII.profit});

        // Cap Recharger II
        ////// Т2 ивент
        countT2 = 100; // количество модулей с постройки Т2-чертежа (для расчета стоимости BPC на единицу)
        countT2copy = 10; // Количество копий в одной BPC T2
        percentT2 = 0.422; // Базовый процент успеха модернизации в Т2 (34%)
        countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        workT1Copy = 50; // Стоимость копии BPC Т1
        workT1toT2 = 1186; // Стоимость ивента Т1 в Т2
        // Для invention Cap Recharger II используются Datacore - High Energy Physics (2 шт.) и Datacore - Quantum Physics (2 шт.)
        workBPC_T2 = ((workT1Copy + workT1toT2 + (2 * DatacoreHighEnergyPhysics) + (2 * DatacoreQuantumPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let CapRechargerI = (Tritanium * 68700 + (Pyerite * 28900) + (Mexallon * 37100) + (Megacyte * 200) + 54500) / 100;  // где 54500 - стоимость постройки 100шт
        materialsprice = 0;
        // Материалы указаны на партию из 10 модулей (под workT2modul)
        materials = [
          {name: "Morphite", price: Morphite, count: 3}, 
          {name: "Tesseract Capacitor Unit", price: TesseractCapacitorUnit, count: 1}, 
          {name: "Superconductors", price: Superconductors, count: 5},
          {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 1}, 
          {name: "Cap Recharger I", price: CapRechargerI, count: 1}, 
          {name: "R.A.M.- Energy Tech", price: RAMSEnergyTech, count: 1}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 692027;  // стоимость работ постройки 10 модуля (уточните для Cap Recharger II)
        
        let CapRechargerII = {};
        CapRechargerII.sell = await getPrice("sell", 2032);
        CapRechargerII.buy = await getPrice("buy", 2032);
        CapRechargerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        CapRechargerII.profit = (CapRechargerII.sell - CapRechargerII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Cap Recharger II", buy: formatNumber(CapRechargerII.buy),  sell: formatNumber(CapRechargerII.sell),  cost: formatNumber(CapRechargerII.cost),  profit: formatNumber(CapRechargerII.profit), profitSort: CapRechargerII.profit});

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
        LinearShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + TungstenCarbide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Linear Shield Emitter
        DeflectionShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + FerniteCarbide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Deflection Shield Emitter
        PulseShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + CrystallineCarbonide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Pulse Shield Emitter
        SustainedShieldEmitter = (((Ferrogel * 1000 + SylramicFibers * 7859 + TitaniumCarbide * 19210) / 1000) + 2015);  // где 2015 - стоимость постройки Sustained Shield Emitter

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
          {name: "Superconductors", price: Superconductors, count: 143}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Multispectrum Shield Hardener I", price: MultispectrumShieldHardener, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 77},
          {name: "Linear Shield Emitter", price: LinearShieldEmitter, count: 77},
          {name: "Deflection Shield Emitter", price: DeflectionShieldEmitter, count: 77},
          {name: "Pulse Shield Emitter", price: PulseShieldEmitter, count: 77}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 1287200;  // стоимость работ постройки 10 модуля

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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Kinetic Shield Hardener I", price: KineticShieldHardenerI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 807910;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Thermal Shield Hardener I", price: ThermalShieldHardenerI, count: 10}, 
          {name: "Pulse Shield Emitter", price: PulseShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 807910;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Explosive Shield Hardener I", price: ExplosiveShieldHardenerI, count: 10}, 
          {name: "Deflection Shield Emitter", price: DeflectionShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 303300;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 77}, 
          {name: "Superconductors", price: Superconductors, count: 86}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "EM Shield Hardener I", price: EMShieldHardenerI, count: 10}, 
          {name: "Linear Shield Emitter", price: LinearShieldEmitter, count: 229}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 368260;  // стоимость работ постройки 10 модуля
        
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
          {name: "Morphite", price: Morphite, count: 58}, 
          {name: "Hydrogen Batteries", price: HydrogenBatteries, count: 115}, 
          {name: "R.A.M.- Shield Tech", price: RAMShieldTech, count: 10}, 
          {name: "Large Shield Extender I", price: LargeShieldExtenderI, count: 10}, 
          {name: "Sustained Shield Emitter", price: SustainedShieldEmitter, count: 115}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 534930;  // стоимость работ постройки 10 модуля
        
        LargeShieldExtenderII = {};
        LargeShieldExtenderII.sell = await getPrice("sell",3841, regionID, locationID);
        LargeShieldExtenderII.buy = await getPrice("buy",3841, regionID, locationID);
        LargeShieldExtenderII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        LargeShieldExtenderII.profit = (LargeShieldExtenderII.sell - LargeShieldExtenderII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Large Shield Extender II", buy: formatNumber(LargeShieldExtenderII.buy),  sell: formatNumber(LargeShieldExtenderII.sell),  cost: formatNumber(LargeShieldExtenderII.cost),  profit: formatNumber(LargeShieldExtenderII.profit), profitSort: LargeShieldExtenderII.profit});


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
            {name: "Morphite", price: Morphite, count: 48}, 
            {name: "Nanoelectrical Microprocessor", price: NanoelectricalMicroprocessor, count: 29}, 
            {name: "R.A.M.- Armor/Hull Tech", price: RAMSArmorHullTech, count: 10}, 
            {name: "Medium Armor Repairer I", price: MediumArmorRepairerI, count: 10}, 
            {name: "Robotics", price: Robotics, count: 58}
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 94000;  // стоимость работ постройки 10 модуля
        
        MediumArmorRepairerII = {};
        MediumArmorRepairerII.sell = await getPrice("sell",3530, regionID, locationID);
        MediumArmorRepairerII.buy = await getPrice("buy",3530, regionID, locationID);
        MediumArmorRepairerII.cost = (workBPC_T2 + materialsprice + workT2modul) / 10;
        MediumArmorRepairerII.profit = (MediumArmorRepairerII.sell - MediumArmorRepairerII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Medium Armor Repairer II", buy: formatNumber(MediumArmorRepairerII.buy),  sell: formatNumber(MediumArmorRepairerII.sell),  cost: formatNumber(MediumArmorRepairerII.cost),  profit: formatNumber(MediumArmorRepairerII.profit), profitSort: MediumArmorRepairerII.profit});

        this.tableAmarr.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });
    },
});