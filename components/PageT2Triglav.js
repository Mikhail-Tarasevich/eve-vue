Vue.component('page-T2Triglav', {
    template: `
    <div>
        <h1>T2 Triglav Moduls</h1>
        <br>
        <p>Получение Т2-чертежей и постройка модулей в системе Sobaseki</p>
        <p>Поcтройка Т1-модулей самостоятельно</p>
        <p>Покупка по buy-ордерам: Datacore, Decryptor</p>
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
        let InterstellarNavigationLogs = await getPrice("buy",56708);
        let ModularSystemsHologram = await getPrice("buy",56714);
        let DatacoreHighEnergyPhysics = await getPrice("buy",20411);
        let DatacoreLaserPhysics = await getPrice("buy",20413);
        let ParityDecryptor = await getPrice("buy",34204);
        let Morphite = await getPrice("sell",11399);
        let RAMWeaponTech = await getPrice("sell",11486);
        let LaserFocusingCrystals = await getPrice("sell",11689);
        let Robotics = await getPrice("sell",9848);
        //let Megacyte = await getPrice("sell",40);
        //let Zydrine = await getPrice("sell",39);
        //let Nocxium = await getPrice("sell",38);
        let Isogen = await getPrice("sell",37);
        let Mexallon = await getPrice("sell",36);
        let Pyerite = await getPrice("sell",35);
        let Tritanium = await getPrice("sell",34);
        let CrystallineIsogen10 = await getPrice("sell",47975);
        let ZeroPointCondensate = await getPrice("sell",48112);

        // Light Entropic Disintegrator II
        ////// Т2 ивент
        let countT2 = 100; // количество модулей с постройки Т2-чертежа
        let countT2copy = 13; // Количество копий в одной BPC T2
        let percentT2 = 0.663; // Процент успеха модернизации в Т2
        let countT2event = Math.round(countT2 / countT2copy / percentT2); // количество ивентов, необходимых для получение чертежей Т2 для производства countT2
        let workT1Copy = 120 * InterstellarNavigationLogs; // Стоимость копии BPC Т1
        let workT1toT2 = 888; // Стоимость ивента Т1 в Т2
        let workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * ParityDecryptor) + (1 * DatacoreHighEnergyPhysics) + (1 * DatacoreLaserPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
        ////// Т2 производство
        let LightEntropicDisintegrator = (Tritanium * 3556 + Pyerite * 3158 + Mexallon * 9 + Isogen * 20) + (CrystallineIsogen10 * 15 + ZeroPointCondensate * 450) + 4411;
        let materialsprice = 0;
        materials = [
          {name: "R.A.M.- Weapon Tech", price: RAMWeaponTech, count: 1}, 
          {name: "Light Entropic Disintegrator I", price: LightEntropicDisintegrator, count: 1}, 
          {name: "Laser Focusing Crystals", price: LaserFocusingCrystals, count: 9},
          {name: "Robotics", price: Robotics, count: 1},
          {name: "Morphite", price: Morphite, count: 6},

        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        let workT2modul = 30000;  // стоимость работ постройки 1 модуля

        let LightEntropicDisintegratorII = {};
        LightEntropicDisintegratorII.sell = await getPrice("sell",47914);
        LightEntropicDisintegratorII.buy = await getPrice("buy",47914);
        LightEntropicDisintegratorII.cost = workBPC_T2 + materialsprice + workT2modul;
        LightEntropicDisintegratorII.profit = (LightEntropicDisintegratorII.sell - LightEntropicDisintegratorII.cost) * commisionSellLong;

        this.tableJita.push({goods: "Light Entropic Disintegrator II", buy: formatNumber(LightEntropicDisintegratorII.buy),  sell: formatNumber(LightEntropicDisintegratorII.sell),  cost: formatNumber(LightEntropicDisintegratorII.cost),  profit: formatNumber(LightEntropicDisintegratorII.profit), profitSort: LightEntropicDisintegratorII.profit});

        // Veles Light Entropic Disintegrator
        materialsprice = 0;
        let BPCVelesLightEntropicDisintegrator = 10000000 + (2000 * InterstellarNavigationLogs) + (10 * ModularSystemsHologram);
        materials = [
          {name: "Light Entropic Disintegrator II", price: LightEntropicDisintegratorII.cost, count: 1}, 
          {name: "BPC", price: BPCVelesLightEntropicDisintegrator, count: 1}, 
          {name: "Crystalline Isogen-10", price: CrystallineIsogen10, count: 8},
          {name: "Zero-Point Condensate", price: ZeroPointCondensate, count: 28},

        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 30000;  // стоимость работ постройки 1 модуля

        let VelesLightEntropicDisintegrator = {};
        VelesLightEntropicDisintegrator.sell = await getPrice("sell",47915);
        VelesLightEntropicDisintegrator.buy = await getPrice("buy",47915);
        VelesLightEntropicDisintegrator.cost = workBPC_T2 + materialsprice + workT2modul;
        VelesLightEntropicDisintegrator.profit = (VelesLightEntropicDisintegrator.sell - VelesLightEntropicDisintegrator.cost) * commisionSellLong;

        this.tableJita.push({goods: "Veles Light Entropic Disintegrator", buy: formatNumber(VelesLightEntropicDisintegrator.buy),  sell: formatNumber(VelesLightEntropicDisintegrator.sell),  cost: formatNumber(VelesLightEntropicDisintegrator.cost),  profit: formatNumber(VelesLightEntropicDisintegrator.profit), profitSort: VelesLightEntropicDisintegrator.profit});

        this.tableJita.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });

        /*
      AMARR
      */
      let regionID = 10000043; // Domain
      let locationID = 60008494; // Amarr VIII (Oris) - Emperor Family Academy

      DatacoreHighEnergyPhysics = await getPrice("buy",20411, regionID, locationID);
      DatacoreLaserPhysics = await getPrice("buy",20413, regionID, locationID);
      ParityDecryptor = await getPrice("buy",34204, regionID, locationID);
      Morphite = await getPrice("sell",11399, regionID, locationID);
      RAMWeaponTech = await getPrice("sell",11486, regionID, locationID);
      LaserFocusingCrystals = await getPrice("sell",11689, regionID, locationID);
      Robotics = await getPrice("sell",9848, regionID, locationID);
      Isogen = await getPrice("sell",37, regionID, locationID);
      Mexallon = await getPrice("sell",36, regionID, locationID);
      Pyerite = await getPrice("sell",35, regionID, locationID);
      Tritanium = await getPrice("sell",34, regionID, locationID);
      CrystallineIsogen10 = await getPrice("sell",47975, regionID, locationID);
      ZeroPointCondensate = await getPrice("sell",48112, regionID, locationID);

      // Light Entropic Disintegrator II
      workBPC_T2 = ((workT1Copy + workT1toT2 + (1 * ParityDecryptor) + (1 * DatacoreHighEnergyPhysics) + (1 * DatacoreLaserPhysics)) * countT2event) / countT2;  // Итоговая Стоимость модернизации BPC в Т2
      ////// Т2 производство
      LightEntropicDisintegrator = (Tritanium * 3556 + Pyerite * 3158 + Mexallon * 9 + Isogen * 20) + (CrystallineIsogen10 * 15 + ZeroPointCondensate * 450) + 4411;
      materialsprice = 0;
      materials = [
          {name: "R.A.M.- Weapon Tech", price: RAMWeaponTech, count: 1}, 
          {name: "Light Entropic Disintegrator I", price: LightEntropicDisintegrator, count: 1}, 
          {name: "Laser Focusing Crystals", price: LaserFocusingCrystals, count: 9},
          {name: "Robotics", price: Robotics, count: 1},
          {name: "Morphite", price: Morphite, count: 6},

        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 30000;  // стоимость работ постройки 1 модуля

        LightEntropicDisintegratorII = {};
        LightEntropicDisintegratorII.sell = await getPrice("sell",47914, regionID, locationID);
        LightEntropicDisintegratorII.buy = await getPrice("buy",47914, regionID, locationID);
        LightEntropicDisintegratorII.cost = workBPC_T2 + materialsprice + workT2modul;
        LightEntropicDisintegratorII.profit = (LightEntropicDisintegratorII.sell - LightEntropicDisintegratorII.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Light Entropic Disintegrator II", buy: formatNumber(LightEntropicDisintegratorII.buy),  sell: formatNumber(LightEntropicDisintegratorII.sell),  cost: formatNumber(LightEntropicDisintegratorII.cost),  profit: formatNumber(LightEntropicDisintegratorII.profit), profitSort: LightEntropicDisintegratorII.profit});

        // Veles Light Entropic Disintegrator
        materialsprice = 0;
        materials = [
          {name: "Light Entropic Disintegrator II", price: LightEntropicDisintegratorII.cost, count: 1}, 
          {name: "BPC", price: BPCVelesLightEntropicDisintegrator, count: 1}, 
          {name: "Crystalline Isogen-10", price: CrystallineIsogen10, count: 8},
          {name: "Zero-Point Condensate", price: ZeroPointCondensate, count: 28},

        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        workT2modul = 30000;  // стоимость работ постройки 1 модуля

        VelesLightEntropicDisintegrator = {};
        VelesLightEntropicDisintegrator.sell = await getPrice("sell",47915, regionID, locationID);
        VelesLightEntropicDisintegrator.buy = await getPrice("buy",47915, regionID, locationID);
        VelesLightEntropicDisintegrator.cost = workBPC_T2 + materialsprice + workT2modul;
        VelesLightEntropicDisintegrator.profit = (VelesLightEntropicDisintegrator.sell - VelesLightEntropicDisintegrator.cost) * commisionSellLong;

        this.tableAmarr.push({goods: "Veles Light Entropic Disintegrator", buy: formatNumber(VelesLightEntropicDisintegrator.buy),  sell: formatNumber(VelesLightEntropicDisintegrator.sell),  cost: formatNumber(VelesLightEntropicDisintegrator.cost),  profit: formatNumber(VelesLightEntropicDisintegrator.profit), profitSort: VelesLightEntropicDisintegrator.profit});

        this.tableAmarr.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });
    },
});