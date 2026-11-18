Vue.component('page-FractionShip', {
    template: `
    <div>
        <h1>T2 Triglav Moduls</h1>
        <br>
        <p>Расчет без стоимости чертежей</p>
        <p>Поcтройка Т1-модулей и компонентов из планетарки самостоятельно</p>
        <p>Покупка минералов по sell-ордерам</p>
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

        <h4>Dodixie</h4>
        <el-table
        :data="tableDodixie"
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

        <h4>Hek</h4>
        <el-table
        :data="tableHek"
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

        <h4>Rens</h4>
        <el-table
        :data="tableRens"
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
            tableDodixie: [],
            tableHek: [],
            tableRens: [],
            tableAmarr: [],
    }},

    created: async function() {
        let Megacyte = await getPrice("sell",40);
        let Zydrine = await getPrice("sell",39);
        let Nocxium = await getPrice("sell",38);
        let Isogen = await getPrice("sell",37);
        let Mexallon = await getPrice("sell",36);
        let Pyerite = await getPrice("sell",35);
        let Tritanium = await getPrice("sell",34);
        let AutoIntegrityPreservationSeal = await getProductionCost(57478,6500,"sell");
        let LifeSupportBackupUnit = await getProductionCost(57486,8500,"sell");
        
        // Фригат
        let materialsprice = 0;
        materials = [
          {name: "Tritanium", price: Tritanium, count: 32000}, 
          {name: "Pyerite", price: Pyerite, count: 6000}, 
          {name: "Mexallon", price: Mexallon, count: 2500},
          {name: "Isogen", price: Isogen, count: 500},
          {name: "Nocxium", price: Nocxium, count: 30},
          {name: "Zydrine", price: Zydrine, count: 20},
          {name: "Megacyte", price: Megacyte, count: 10},
          {name: "Auto-Integrity Preservation Seal", price: AutoIntegrityPreservationSeal, count: 10},
          {name: "Life Support Backup Unit", price: LifeSupportBackupUnit, count: 5},
        ];
        for (var i=0; i<materials.length; i++) {
          materialsprice = materialsprice + (materials[i].price * materials[i].count);
        }
        let workprice = 45500;  // стоимость работ постройки 1 корабля
        let shipID = 0;
        let Frigat = {};
        shipID = 57478;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = AutoIntegrityPreservationSeal;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Auto-Integrity Preservation Seal", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 57486;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = LifeSupportBackupUnit;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Life Support Backup Unit", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17841;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Federation Navy Comet", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17619;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Caldari Navy Hookbill", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37453;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Crucifier Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37455;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Griffin Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72904;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Heron Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72913;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Imicus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17703;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Imperial Navy Slicer", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72907;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Magnate Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37456;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Maulus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72903;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Probe Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17812;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Republic Fleet Firetail", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37454;
        Frigat.sell = await getPrice("sell",shipID);
        Frigat.buy = await getPrice("buy",shipID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableJita.push({goods: "Vigil Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});

        this.tableJita.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });

        /*
      Dodixie
        */   
      let regionID = 10000032; // 
      let locationID = 60011866; // Dodixie IX - Moon 20 - Federation Navy Assembly Plant

      Megacyte = await getPrice("sell",40, regionID, locationID);
      Zydrine = await getPrice("sell",39, regionID, locationID);
      Nocxium = await getPrice("sell",38, regionID, locationID);
      Isogen = await getPrice("sell",37, regionID, locationID);
      Mexallon = await getPrice("sell",36, regionID, locationID);
      Pyerite = await getPrice("sell",35, regionID, locationID);
      Tritanium = await getPrice("sell",34, regionID, locationID);
      AutoIntegrityPreservationSeal = await getProductionCost(57478,6500,"sell",regionID,locationID);
      LifeSupportBackupUnit = await getProductionCost(57486,8500,"sell",regionID,locationID);

        shipID = 57478;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = AutoIntegrityPreservationSeal;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Auto-Integrity Preservation Seal", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 57486;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = LifeSupportBackupUnit;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Life Support Backup Unit", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17841;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Federation Navy Comet", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17619;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Caldari Navy Hookbill", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37453;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Crucifier Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37455;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Griffin Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72904;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Heron Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72913;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Imicus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17703;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Imperial Navy Slicer", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72907;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Magnate Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37456;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Maulus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72903;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Probe Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17812;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Republic Fleet Firetail", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37454;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableDodixie.push({goods: "Vigil Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});

        this.tableDodixie.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });


        /*
      HEK
        */   
      regionID = 10000042; // 
      locationID = 60005686; // Hek VIII - Moon 12 - Boundless Creation Factory

      Megacyte = await getPrice("sell",40, regionID, locationID);
      Zydrine = await getPrice("sell",39, regionID, locationID);
      Nocxium = await getPrice("sell",38, regionID, locationID);
      Isogen = await getPrice("sell",37, regionID, locationID);
      Mexallon = await getPrice("sell",36, regionID, locationID);
      Pyerite = await getPrice("sell",35, regionID, locationID);
      Tritanium = await getPrice("sell",34, regionID, locationID);
      AutoIntegrityPreservationSeal = await getProductionCost(57478,6500,"sell",regionID,locationID);
      LifeSupportBackupUnit = await getProductionCost(57486,8500,"sell",regionID,locationID);

        shipID = 57478;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = AutoIntegrityPreservationSeal;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Auto-Integrity Preservation Seal", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 57486;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = LifeSupportBackupUnit;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Life Support Backup Unit", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17841;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Federation Navy Comet", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17619;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Caldari Navy Hookbill", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37453;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Crucifier Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37455;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Griffin Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72904;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Heron Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72913;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Imicus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17703;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Imperial Navy Slicer", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72907;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Magnate Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37456;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Maulus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72903;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Probe Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17812;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Republic Fleet Firetail", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37454;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableHek.push({goods: "Vigil Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});

        this.tableHek.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });
   
        /*
      RENS
        */   
      regionID = 10000030; // 
      locationID = 60004588; // Rens VI - Moon 8 - Brutor Tribe Treasury

      Megacyte = await getPrice("sell",40, regionID, locationID);
      Zydrine = await getPrice("sell",39, regionID, locationID);
      Nocxium = await getPrice("sell",38, regionID, locationID);
      Isogen = await getPrice("sell",37, regionID, locationID);
      Mexallon = await getPrice("sell",36, regionID, locationID);
      Pyerite = await getPrice("sell",35, regionID, locationID);
      Tritanium = await getPrice("sell",34, regionID, locationID);
      AutoIntegrityPreservationSeal = await getProductionCost(57478,6500,"sell",regionID,locationID);
      LifeSupportBackupUnit = await getProductionCost(57486,8500,"sell",regionID,locationID);

        shipID = 57478;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = AutoIntegrityPreservationSeal;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Auto-Integrity Preservation Seal", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 57486;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = LifeSupportBackupUnit;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Life Support Backup Unit", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17841;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Federation Navy Comet", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17619;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Caldari Navy Hookbill", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37453;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Crucifier Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37455;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Griffin Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72904;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Heron Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72913;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Imicus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17703;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Imperial Navy Slicer", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72907;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Magnate Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37456;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Maulus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72903;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Probe Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17812;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Republic Fleet Firetail", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37454;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableRens.push({goods: "Vigil Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});

        this.tableRens.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });

        /*
      AMARR
        */   
      regionID = 10000043; // Domain
      locationID = 60008494; // Amarr VIII (Oris) - Emperor Family Academy

      Megacyte = await getPrice("sell",40, regionID, locationID);
      Zydrine = await getPrice("sell",39, regionID, locationID);
      Nocxium = await getPrice("sell",38, regionID, locationID);
      Isogen = await getPrice("sell",37, regionID, locationID);
      Mexallon = await getPrice("sell",36, regionID, locationID);
      Pyerite = await getPrice("sell",35, regionID, locationID);
      Tritanium = await getPrice("sell",34, regionID, locationID);
      AutoIntegrityPreservationSeal = await getProductionCost(57478,6500,"sell",regionID,locationID);
      LifeSupportBackupUnit = await getProductionCost(57486,8500,"sell",regionID,locationID);

        shipID = 57478;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = AutoIntegrityPreservationSeal;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Auto-Integrity Preservation Seal", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 57486;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = LifeSupportBackupUnit;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Life Support Backup Unit", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17841;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Federation Navy Comet", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17619;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Caldari Navy Hookbill", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37453;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Crucifier Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37455;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Griffin Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72904;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Heron Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72913;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Imicus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17703;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Imperial Navy Slicer", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72907;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Magnate Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37456;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Maulus Navy Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 72903;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Probe Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 17812;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Republic Fleet Firetail", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});
        shipID = 37454;
        Frigat.sell = await getPrice("sell",shipID, regionID, locationID);
        Frigat.buy = await getPrice("buy",shipID, regionID, locationID);
        Frigat.cost = materialsprice + workprice;
        Frigat.profit = (Frigat.sell - Frigat.cost) * commisionSellLong;
        this.tableAmarr.push({goods: "Vigil Fleet Issue", buy: formatNumber(Frigat.buy),  sell: formatNumber(Frigat.sell),  cost: formatNumber(Frigat.cost),  profit: formatNumber(Frigat.profit), profitSort: Frigat.profit});

        this.tableAmarr.sort(function( a, b ) {
          return b.profitSort-a.profitSort;
        });

    },
});