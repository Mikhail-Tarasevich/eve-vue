Vue.component('page-components4ship', {
    template: `
    <div>
        <h1>Компоненты для постройки кораблей</h1>
        <br>
        <p>Все покупается по buy, строится на месте и продается по sell</p>
        <br>
        <p>Jita:</p>
        <el-table
        :data="tableJita"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="210"
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
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="sell"
          label="Продажа"
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="profit"
          label="Профит"
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        </el-table>
        <br>
        <p>Все покупается по buy, строится на месте и продается по sell</p>
        <br>
        <p>Amarr:</p>
        <el-table
        :data="tableAmarr"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="210"
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
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="sell"
          label="Продажа"
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="profit"
          label="Профит"
          width="150"
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
        let LifeSupportBackupUnit = {};
        LifeSupportBackupUnit.sell = await getPrice("sell",57486);
        LifeSupportBackupUnit.buy = await getPrice("buy",57486);
        LifeSupportBackupUnit.cost = await getProductionCost(57486, 6148, "buy");
        LifeSupportBackupUnit.profit = (LifeSupportBackupUnit.cost=="-" || LifeSupportBackupUnit.sell==Number.MAX_SAFE_INTEGER) ? "-" : (LifeSupportBackupUnit.sell * commisionSellLong - LifeSupportBackupUnit.cost);
            
        let AutoIntegrityPreservationSeal = {};
        AutoIntegrityPreservationSeal.sell = await getPrice("sell",57478);
        AutoIntegrityPreservationSeal.buy = await getPrice("buy",57478);
        AutoIntegrityPreservationSeal.cost = await getProductionCost(57478, 52889, "buy");
        AutoIntegrityPreservationSeal.profit = (AutoIntegrityPreservationSeal.cost=="-" || AutoIntegrityPreservationSeal.sell==Number.MAX_SAFE_INTEGER) ? "-" : (AutoIntegrityPreservationSeal.sell * commisionSellLong - AutoIntegrityPreservationSeal.cost);

        this.tableJita.push({goods: "Auto Integrity Preservation Seal", buy: formatNumber(AutoIntegrityPreservationSeal.buy),  sell: formatNumber(AutoIntegrityPreservationSeal.sell),  cost: formatNumber(AutoIntegrityPreservationSeal.cost),  profit: formatNumber(AutoIntegrityPreservationSeal.profit)});
        this.tableJita.push({goods: "Life Support BackupUnit", buy: formatNumber(LifeSupportBackupUnit.buy),  sell: formatNumber(LifeSupportBackupUnit.sell),  cost: formatNumber(LifeSupportBackupUnit.cost),  profit: formatNumber(LifeSupportBackupUnit.profit)});

          /*
      AMARR
      */
      let regionID = 10000043; // Domain
      let locationID = 60008494; // Amarr VIII (Oris) - Emperor Family Academy

        LifeSupportBackupUnit.sell = await getPrice("sell",57486, regionID, locationID);
        LifeSupportBackupUnit.buy = await getPrice("buy",57486, regionID, locationID);
        LifeSupportBackupUnit.cost = await getProductionCost(57486, 6148, "buy", regionID, locationID);
        LifeSupportBackupUnit.profit = (LifeSupportBackupUnit.cost=="-" || LifeSupportBackupUnit.sell==Number.MAX_SAFE_INTEGER) ? "-" : (LifeSupportBackupUnit.sell * commisionSellLong - LifeSupportBackupUnit.cost);
            
        AutoIntegrityPreservationSeal.sell = await getPrice("sell",57478, regionID, locationID);
        AutoIntegrityPreservationSeal.buy = await getPrice("buy",57478, regionID, locationID);
        AutoIntegrityPreservationSeal.cost = await getProductionCost(57478, 52889, "buy", regionID, locationID);
        AutoIntegrityPreservationSeal.profit = (AutoIntegrityPreservationSeal.cost=="-" || AutoIntegrityPreservationSeal.sell==Number.MAX_SAFE_INTEGER) ? "-" : (AutoIntegrityPreservationSeal.sell * commisionSellLong - AutoIntegrityPreservationSeal.cost);

        this.tableAmarr.push({goods: "Auto Integrity Preservation Seal", buy: formatNumber(AutoIntegrityPreservationSeal.buy),  sell: formatNumber(AutoIntegrityPreservationSeal.sell),  cost: formatNumber(AutoIntegrityPreservationSeal.cost),  profit: formatNumber(AutoIntegrityPreservationSeal.profit)});
        this.tableAmarr.push({goods: "Life Support BackupUnit", buy: formatNumber(LifeSupportBackupUnit.buy),  sell: formatNumber(LifeSupportBackupUnit.sell),  cost: formatNumber(LifeSupportBackupUnit.cost),  profit: formatNumber(LifeSupportBackupUnit.profit)});
    },
});