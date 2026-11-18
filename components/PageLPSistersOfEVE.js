Vue.component('page-lp-sistersofeve', {
    template: `
    <div>
        <h1>LP Store Sisters of EVE</h1>
        PLEX = {{tablePLEX}}
        <br>
        <h2>Jita:</h2>
        <p>Все покупается по sell, строится на месте и продается по sell</p>
        <p>Life Support BackupUnit и Auto Integrity Preservation Seal строятся самостоятельно</p>
        <br>
        <el-table
        :data="tableJita"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="250">
        </el-table-column>
        <el-table-column
          prop="costs"
          label="Расходы"
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
          label="Доходы"
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="formatlprate"
          label="Курс LP"
          width="100"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="comment"
          label="Примечания"
          width="400">
        </el-table-column>
      </el-table>
      <br>
      <h2>Amarr:</h2>
        <p>Все покупается по sell, строится на месте и продается по sell</p>
        <p>Life Support BackupUnit и Auto Integrity Preservation Seal строятся самостоятельно по ценам Jita</p>
        <br>
        <el-table
        :data="tableAmarr"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="250">
        </el-table-column>
        <el-table-column
          prop="costs"
          label="Расходы"
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
          label="Доходы"
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="formatlprate"
          label="Курс LP"
          width="100"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="comment"
          label="Примечания"
          width="400">
        </el-table-column>
      </el-table>
    </div>
    `,

    data() {
        return {
            tablePLEX: "???", 
            tableJita: [],
            tableAmarr: [],
    }},

    created: async function() {
      /*
      JITA
      */
            // материалы
            let Megacyte = await getPrice("sell",40);
            let Zydrine = await getPrice("sell",39);
            let Nocxium = await getPrice("sell",38);
            let Isogen = await getPrice("sell",37);
            let Mexallon = await getPrice("sell",36);
            let Pyerite = await getPrice("sell",35);
            let Tritanium = await getPrice("sell",34);
            let LifeSupportBackupUnit = await getProductionCost(57486, 38600, "sell");
            let AutoIntegrityPreservationSeal = await getProductionCost(57478, 22700, "sell");
            
            let materials = [];
            let objRow = null;
            // Sisters Core Probe Launcher
            materials = [
                {name: "Core Probe Launcher I", price: await getPrice("sell",17938), count: 1}, 
            ];
            objRow = new AssetLP("Sisters Core Probe Launcher", await getPrice("sell",28758), 14400, 9600000, null, materials, 1, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Sisters Expanded Probe Launcher
            materials = [
              {name: "Expanded Probe Launcher I", price: await getPrice("sell",18639), count: 1}, 
            ];
            objRow = new AssetLP("Sisters Expanded Probe Launcher", await getPrice("sell",28756), 14400, 9600000, null, materials, 1, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Nestor
            materials = [];
            objRow = new AssetLP("Nestor", await getPrice("sell",33472), 1000000, 100000000, null, materials, 1, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Astero
            materials = [];
            objRow = new AssetLP("Astero", await getPrice("sell",33468), 100000, 10000000, null, materials, 1, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Sisters Combat Scanner Probe
            materials = [
              {name: "Combat Scanner Probe I", price: await getPrice("sell",30028), count: 10}, 
            ];
            objRow = new AssetLP("Sisters Combat Scanner Probe", await getPrice("sell",30486), 1800, 1200000, null, materials, 10, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          this.tableJita.sort(function( a, b ) {
            return b.lprate-a.lprate;
          });

          /*
      AMARR
      */
      let regionID = 10000043; // Domain
      let locationID = 60008494; // Amarr VIII (Oris) - Emperor Family Academy
            // материалы
            Megacyte = await getPrice("sell",40, regionID, locationID);
            Zydrine = await getPrice("sell",39, regionID, locationID);
            Nocxium = await getPrice("sell",38, regionID, locationID);
            Isogen = await getPrice("sell",37, regionID, locationID);
            Mexallon = await getPrice("sell",36, regionID, locationID);
            Pyerite = await getPrice("sell",35, regionID, locationID);
            Tritanium = await getPrice("sell",34, regionID, locationID);

          this.tableAmarr.sort(function( a, b ) {
            return b.lprate-a.lprate;
          });

        let plex = await getPrice(undefined,44992);
        this.tablePLEX = formatNumber(plex);
     },
});
