Vue.component('page-lp-federaldefenceunion', {
    template: `
    <div>
        <h1>LP Store Federalde Fenceunion</h1>
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
          width="220">
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

    methods: {
        lprate(row, column) {
          return Number(row.lprate.replace(",",".").split(" ").join(""));
        }
    },

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
            let ShadowSerpentisCrystalTag = await getPrice("sell",17266); ; // Shadow Serpentis Crystal Tag

            let materials = [];
            let objRow = null;
            // Maulus Navy Issue
            materials = [
                {name: "Megacyte", price: Megacyte, count: 10}, 
                {name: "Zydrine", price: Zydrine, count: 20}, 
                {name: "Nocxium", price: Nocxium, count: 30}, 
                {name: "Isogen", price: Isogen, count: 500}, 
                {name: "Mexallon", price: Mexallon, count: 2500}, 
                {name: "Pyerite", price: Pyerite, count: 6000}, 
                {name: "Tritanium", price: Tritanium, count: 32000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
            ];
            objRow = new AssetLP("Maulus Navy Issue Blueprint", await getPrice("sell",37456), 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Imicus Navy Issue
            materials = [
              {name: "Megacyte", price: Megacyte, count: 10}, 
              {name: "Zydrine", price: Zydrine, count: 20}, 
              {name: "Nocxium", price: Nocxium, count: 30}, 
              {name: "Isogen", price: Isogen, count: 500}, 
              {name: "Mexallon", price: Mexallon, count: 2500}, 
              {name: "Pyerite", price: Pyerite, count: 6000}, 
              {name: "Tritanium", price: Tritanium, count: 32000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
          ];
          objRow = new AssetLP("Imicus Navy Issue Blueprint", await getPrice("sell",72913), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Federation Navy Comet  
            materials = [
                {name: "Megacyte", price: Megacyte, count: 10}, 
                {name: "Zydrine", price: Zydrine, count: 20}, 
                {name: "Nocxium", price: Nocxium, count: 30}, 
                {name: "Isogen", price: Isogen, count: 500}, 
                {name: "Mexallon", price: Mexallon, count: 2500}, 
                {name: "Pyerite", price: Pyerite, count: 6000}, 
                {name: "Tritanium", price: Tritanium, count: 32000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
            ];
            objRow = new AssetLP("Federation Navy Comet Blueprint", await getPrice("sell",17841), 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Federation Navy Comet  вывод через Gallente Gamma Nexus Chip
            materials = [
                {name: "Incursus", price: await getPrice("sell",594), count: 1}, 
                {name: "GallenteGammaNexusChip", price: await getPrice("sell",17848), count: 1}, 
            ];
            objRow = new AssetLP("Federation Navy Comet", await getPrice("sell",17841), 10000, 0, null, materials, 1, 0, "вывод через Gallente Gamma Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Catalyst Navy Issue
            materials = [
                {name: "Megacyte", price: Megacyte, count: 10}, 
                {name: "Zydrine", price: Zydrine, count: 20}, 
                {name: "Nocxium", price: Nocxium, count: 30}, 
                {name: "Isogen", price: Isogen, count: 1000}, 
                {name: "Mexallon", price: Mexallon, count: 5000}, 
                {name: "Pyerite", price: Pyerite, count: 15000}, 
                {name: "Tritanium", price: Tritanium, count: 80000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
            ];
            objRow = new AssetLP("Catalyst Navy Issue Blueprint", await getPrice("sell",73796), 12000, 3500000, null, materials, 1, 134800, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Vexor Navy Issue
            materials = [
                {name: "Megacyte", price: Megacyte, count: 500}, 
                {name: "Zydrine", price: Zydrine, count: 1000}, 
                {name: "Nocxium", price: Nocxium, count: 1500}, 
                {name: "Isogen", price: Isogen, count: 10000}, 
                {name: "Mexallon", price: Mexallon, count: 36000}, 
                {name: "Pyerite", price: Pyerite, count: 180000}, 
                {name: "Tritanium", price: Tritanium, count: 540000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
            ];
            objRow = new AssetLP("Vexor Navy Issue Blueprint", await getPrice("sell",17843), 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Vexor Navy Issue вывод через Shadow Serpentis Crystal Tag
            materials = [
                {name: "Megacyte", price: Megacyte, count: 500}, 
                {name: "Zydrine", price: Zydrine, count: 1000}, 
                {name: "Nocxium", price: Nocxium, count: 1500}, 
                {name: "Isogen", price: Isogen, count: 10000}, 
                {name: "Mexallon", price: Mexallon, count: 36000}, 
                {name: "Pyerite", price: Pyerite, count: 180000}, 
                {name: "Tritanium", price: Tritanium, count: 540000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
            ];
            objRow = new AssetLP("Vexor Navy Issue Blueprint", await getPrice("sell",17843), 18000, ShadowSerpentisCrystalTag, null, materials, 1, 1316700, "вывод через Shadow Serpentis Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Exequror Navy Issue
            materials = [
                {name: "Megacyte", price: Megacyte, count: 500}, 
                {name: "Zydrine", price: Zydrine, count: 1000}, 
                {name: "Nocxium", price: Nocxium, count: 1500}, 
                {name: "Isogen", price: Isogen, count: 10000}, 
                {name: "Mexallon", price: Mexallon, count: 36000}, 
                {name: "Pyerite", price: Pyerite, count: 180000}, 
                {name: "Tritanium", price: Tritanium, count: 540000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
            ];
            objRow = new AssetLP("Exequror Navy Issue Blueprint", await getPrice("sell",29344), 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Exequror Navy Issue вывод через Shadow Serpentis Crystal Tag
            materials = [
                {name: "Megacyte", price: Megacyte, count: 500}, 
                {name: "Zydrine", price: Zydrine, count: 1000}, 
                {name: "Nocxium", price: Nocxium, count: 1500}, 
                {name: "Isogen", price: Isogen, count: 10000}, 
                {name: "Mexallon", price: Mexallon, count: 36000}, 
                {name: "Pyerite", price: Pyerite, count: 180000}, 
                {name: "Tritanium", price: Tritanium, count: 540000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
            ];
            objRow = new AssetLP("Exequror Navy Issue Blueprint", await getPrice("sell",29344), 18000, ShadowSerpentisCrystalTag, null, materials, 1, 1316700, "вывод через Shadow Serpentis Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Myrmidon Navy Issue
            materials = [
                {name: "Megacyte", price: Megacyte, count: 2000}, 
                {name: "Zydrine", price: Zydrine, count: 4000}, 
                {name: "Nocxium", price: Nocxium, count: 10000}, 
                {name: "Isogen", price: Isogen, count: 20000}, 
                {name: "Mexallon", price: Mexallon, count: 180000}, 
                {name: "Pyerite", price: Pyerite, count: 1000000}, 
                {name: "Tritanium", price: Tritanium, count: 2800000}, 
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 50}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 100}
            ];
            objRow = new AssetLP("Myrmidon Navy Issue Blueprint", await getPrice("sell",72869), 40000, 10000000, null, materials, 1, 5951000, "");
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
            // Maulus Navy Issue
            materials = [
              {name: "Megacyte", price: Megacyte, count: 10}, 
              {name: "Zydrine", price: Zydrine, count: 20}, 
              {name: "Nocxium", price: Nocxium, count: 30}, 
              {name: "Isogen", price: Isogen, count: 500}, 
              {name: "Mexallon", price: Mexallon, count: 2500}, 
              {name: "Pyerite", price: Pyerite, count: 6000}, 
              {name: "Tritanium", price: Tritanium, count: 32000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
          ];
          objRow = new AssetLP("Maulus Navy Issue Blueprint", await getPrice("sell",37456, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Imicus Navy Issue
            materials = [
              {name: "Megacyte", price: Megacyte, count: 10}, 
              {name: "Zydrine", price: Zydrine, count: 20}, 
              {name: "Nocxium", price: Nocxium, count: 30}, 
              {name: "Isogen", price: Isogen, count: 500}, 
              {name: "Mexallon", price: Mexallon, count: 2500}, 
              {name: "Pyerite", price: Pyerite, count: 6000}, 
              {name: "Tritanium", price: Tritanium, count: 32000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
          ];
          objRow = new AssetLP("Imicus Navy Issue Blueprint", await getPrice("sell",72913, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Federation Navy Comet  
          materials = [
              {name: "Megacyte", price: Megacyte, count: 10}, 
              {name: "Zydrine", price: Zydrine, count: 20}, 
              {name: "Nocxium", price: Nocxium, count: 30}, 
              {name: "Isogen", price: Isogen, count: 500}, 
              {name: "Mexallon", price: Mexallon, count: 2500}, 
              {name: "Pyerite", price: Pyerite, count: 6000}, 
              {name: "Tritanium", price: Tritanium, count: 32000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
          ];
          objRow = new AssetLP("Federation Navy Comet Blueprint", await getPrice("sell",17841, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Federation Navy Comet  вывод через Gallente Gamma Nexus Chip
          materials = [
              {name: "Incursus", price: await getPrice("sell",594, regionID, locationID), count: 1}, 
              {name: "GallenteGammaNexusChip", price: await getPrice("sell",17848, regionID, locationID), count: 1}, 
          ];
          objRow = new AssetLP("Federation Navy Comet", await getPrice("sell",17841, regionID, locationID), 10000, 0, null, materials, 1, 0, "вывод через Gallente Gamma Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Catalyst Navy Issue
          materials = [
              {name: "Megacyte", price: Megacyte, count: 10}, 
              {name: "Zydrine", price: Zydrine, count: 20}, 
              {name: "Nocxium", price: Nocxium, count: 30}, 
              {name: "Isogen", price: Isogen, count: 1000}, 
              {name: "Mexallon", price: Mexallon, count: 5000}, 
              {name: "Pyerite", price: Pyerite, count: 15000}, 
              {name: "Tritanium", price: Tritanium, count: 80000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 5}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 10}
          ];
          objRow = new AssetLP("Catalyst Navy Issue Blueprint", await getPrice("sell",73796, regionID, locationID), 12000, 3500000, null, materials, 1, 134800, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Vexor Navy Issue
          materials = [
              {name: "Megacyte", price: Megacyte, count: 500}, 
              {name: "Zydrine", price: Zydrine, count: 1000}, 
              {name: "Nocxium", price: Nocxium, count: 1500}, 
              {name: "Isogen", price: Isogen, count: 10000}, 
              {name: "Mexallon", price: Mexallon, count: 36000}, 
              {name: "Pyerite", price: Pyerite, count: 180000}, 
              {name: "Tritanium", price: Tritanium, count: 540000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
          ];
          objRow = new AssetLP("Vexor Navy Issue Blueprint", await getPrice("sell",17843, regionID, locationID), 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Vexor Navy Issue вывод через Shadow Serpentis Crystal Tag
          materials = [
              {name: "Megacyte", price: Megacyte, count: 500}, 
              {name: "Zydrine", price: Zydrine, count: 1000}, 
              {name: "Nocxium", price: Nocxium, count: 1500}, 
              {name: "Isogen", price: Isogen, count: 10000}, 
              {name: "Mexallon", price: Mexallon, count: 36000}, 
              {name: "Pyerite", price: Pyerite, count: 180000}, 
              {name: "Tritanium", price: Tritanium, count: 540000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
          ];
          objRow = new AssetLP("Vexor Navy Issue Blueprint", await getPrice("sell",17843, regionID, locationID), 18000, ShadowSerpentisCrystalTag, null, materials, 1, 1316700, "вывод через Shadow Serpentis Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Exequror Navy Issue
          materials = [
              {name: "Megacyte", price: Megacyte, count: 500}, 
              {name: "Zydrine", price: Zydrine, count: 1000}, 
              {name: "Nocxium", price: Nocxium, count: 1500}, 
              {name: "Isogen", price: Isogen, count: 10000}, 
              {name: "Mexallon", price: Mexallon, count: 36000}, 
              {name: "Pyerite", price: Pyerite, count: 180000}, 
              {name: "Tritanium", price: Tritanium, count: 540000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
          ];
          objRow = new AssetLP("Exequror Navy Issue Blueprint", await getPrice("sell",29344, regionID, locationID), 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Exequror Navy Issue вывод через Shadow Serpentis Crystal Tag
          materials = [
              {name: "Megacyte", price: Megacyte, count: 500}, 
              {name: "Zydrine", price: Zydrine, count: 1000}, 
              {name: "Nocxium", price: Nocxium, count: 1500}, 
              {name: "Isogen", price: Isogen, count: 10000}, 
              {name: "Mexallon", price: Mexallon, count: 36000}, 
              {name: "Pyerite", price: Pyerite, count: 180000}, 
              {name: "Tritanium", price: Tritanium, count: 540000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 25}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 50}
          ];
          objRow = new AssetLP("Exequror Navy Issue Blueprint", await getPrice("sell",29344, regionID, locationID), 18000, ShadowSerpentisCrystalTag, null, materials, 1, 1316700, "вывод через Shadow Serpentis Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Myrmidon Navy Issue
          materials = [
              {name: "Megacyte", price: Megacyte, count: 2000}, 
              {name: "Zydrine", price: Zydrine, count: 4000}, 
              {name: "Nocxium", price: Nocxium, count: 10000}, 
              {name: "Isogen", price: Isogen, count: 20000}, 
              {name: "Mexallon", price: Mexallon, count: 180000}, 
              {name: "Pyerite", price: Pyerite, count: 1000000}, 
              {name: "Tritanium", price: Tritanium, count: 2800000}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 50}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 100}
          ];
          objRow = new AssetLP("Myrmidon Navy Issue Blueprint", await getPrice("sell",72869, regionID, locationID), 40000, 10000000, null, materials, 1, 5951000, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          this.tableAmarr.sort(function( a, b ) {
            return b.lprate-a.lprate;
          });

          let plex = await getPrice(undefined,44992);
          this.tablePLEX = formatNumber(plex);
     },
});
