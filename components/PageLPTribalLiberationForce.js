Vue.component('page-lp-triballiberationforce', {
    template: `
    <div>
        <h1>LP Store Tribal Liberation Force</h1>
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
            let DominationGoldTag = await getPrice("sell",17226); ; // Domination Gold Tag
            let DominationCrystalTag = await getPrice("sell",17223); ; // Domination Crystal Tag
            let RepublicFleetCommanderInsigniaI = await getPrice("sell",15632) // Republic Fleet Commander Insignia I
            let RepublicFleetCommanderInsigniaII = await getPrice("sell",15661) // Republic Fleet Commander Insignia II
            let RepublicFleetHighCaptainInsigniaI = await getPrice("sell",15631) // Republic Fleet High Captain Insignia I
            
            let materials = [];
            let objRow = null;
            // Probe Fleet Issue
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
            objRow = new AssetLP("Probe Fleet Issue Blueprint", await getPrice("sell",72903), 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Republic Fleet Firetail
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
          objRow = new AssetLP("Republic Fleet Firetail Blueprint", await getPrice("sell",17812), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Probe Fleet Issue вывод через Domination Gold Tag
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
            objRow = new AssetLP("Probe Fleet Issue Blueprint", await getPrice("sell",72903), 4000, DominationGoldTag, null, materials, 1, 77250, "вывод через Domination Gold Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Vigil Fleet Issue  
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
            objRow = new AssetLP("Vigil Fleet Issue Blueprint", await getPrice("sell",37454), 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Vigil Fleet Issue вывод через Domination Gold Tag
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
            objRow = new AssetLP("Vigil Fleet Issue Blueprint", await getPrice("sell",37454), 4000, DominationGoldTag, null, materials, 1, 77250, "вывод через Domination Gold Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Vigil Fleet Issue  вывод через Minmatar UUA Nexus Chip
            materials = [
                {name: "Vigil", price: await getPrice("sell",3766), count: 1}, 
                {name: "MinmatarUUANexusChip", price: await getPrice("sell",17795), count: 1}, 
            ];
            objRow = new AssetLP("Vigil Fleet Issue", await getPrice("sell",37454), 10000, 0, null, materials, 1, 0, "вывод через Minmatar UUA Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Thrasher Fleet Issue
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
            objRow = new AssetLP("Thrasher Fleet Issue Blueprint", await getPrice("sell",73794), 12000, 3500000, null, materials, 1, 134800, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Scythe Fleet Issue
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
            objRow = new AssetLP("Scythe Fleet Issue Blueprint", await getPrice("sell",29336), 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Scythe Fleet Issue вывод через Domination Crystal Tag
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
            objRow = new AssetLP("Scythe Fleet Issue Blueprint", await getPrice("sell",29336), 18000, DominationCrystalTag, null, materials, 1, 1316700, "вывод через Domination Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Stabber Fleet Issue
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
            objRow = new AssetLP("Stabber Fleet Issue Blueprint", await getPrice("sell",17713), 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Stabber Fleet Issue вывод через Domination Crystal Tag
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
            objRow = new AssetLP("Stabber Fleet Issue Blueprint", await getPrice("sell",17713), 18000, DominationCrystalTag, null, materials, 1, 1316700, "вывод через Domination Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Hurricane Fleet Issue
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
            objRow = new AssetLP("Hurricane Fleet Issue Blueprint", await getPrice("sell",33157), 40000, 10000000, null, materials, 1, 5951000, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Cyclone Fleet Issue
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
          objRow = new AssetLP("Cyclone Fleet Issue Blueprint", await getPrice("sell",72811), 40000, 10000000, null, materials, 1, 5951000, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Bouncer
          materials = [
            {name: "Curator I", price: await getPrice("sell",31894), count: 5}, 
          ];
          objRow = new AssetLP("Republic Fleet Bouncer", await getPrice("sell",31868), 6000, 6000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Berserker
          materials = [
            {name: "Praetor I", price: await getPrice("sell",31892), count: 5}, 
          ];
          objRow = new AssetLP("Republic Fleet Berserker", await getPrice("sell",31870), 5000, 5000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Valkyrie
          materials = [
            {name: "Infiltrator I", price: await getPrice("sell",31890), count: 5}, 
          ];
          objRow = new AssetLP("Republic Fleet Valkyrie", await getPrice("sell",31866), 4000, 4000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Warrior
          materials = [
            {name: "Acolyte I", price: await getPrice("sell",31888), count: 5}, 
          ];
          objRow = new AssetLP("Republic Fleet Warrior", await getPrice("sell",31864), 3000, 3000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          
          // Republic Fleet Carbonized Lead S
          materials = [
            {name: "Carbonized Lead S", price: await getPrice("sell",178), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Carbonized Lead S", await getPrice("sell",28328), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Carbonized Lead M
          materials = [
            {name: "Carbonized Lead M", price: await getPrice("sell",186), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Carbonized Lead M", await getPrice("sell",28326), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Carbonized Lead L
          materials = [
            {name: "Carbonized Lead L", price: await getPrice("sell",194), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Carbonized Lead L", await getPrice("sell",28324), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Depleted Uranium S
          materials = [
            {name: "Depleted Uranium S", price: await getPrice("sell",181), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Depleted Uranium S", await getPrice("sell",28336), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Depleted Uranium M
          materials = [
            {name: "Depleted Uranium M", price: await getPrice("sell",189), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Depleted Uranium M", await getPrice("sell",28334), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Depleted Uranium L
          materials = [
            {name: "Depleted Uranium L", price: await getPrice("sell",197), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Depleted Uranium L", await getPrice("sell",28332), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet EMP S
          materials = [
            {name: "EMP S", price: await getPrice("sell",185), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet EMP S", await getPrice("sell",21898), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet EMP M
          materials = [
            {name: "EMP M", price: await getPrice("sell",193), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet EMP M", await getPrice("sell",21896), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet EMP L
          materials = [
            {name: "EMP L", price: await getPrice("sell",201), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet EMP L", await getPrice("sell",21894), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Fusion S
          materials = [
            {name: "Fusion S", price: await getPrice("sell",183), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Fusion S", await getPrice("sell",21906), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Fusion M
          materials = [
            {name: "Fusion M", price: await getPrice("sell",191), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Fusion M", await getPrice("sell",21904), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Fusion L
          materials = [
            {name: "Fusion L", price: await getPrice("sell",199), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Fusion L", await getPrice("sell",21902), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Nuclear S
          materials = [
            {name: "Nuclear S", price: await getPrice("sell",179), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Nuclear S", await getPrice("sell",21914), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Nuclear M
          materials = [
            {name: "Nuclear M", price: await getPrice("sell",187), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Nuclear M", await getPrice("sell",21912), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Nuclear L
          materials = [
            {name: "Nuclear L", price: await getPrice("sell",195), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Nuclear L", await getPrice("sell",21910), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Phased Plasma S
          materials = [
            {name: "Phased Plasma S", price: await getPrice("sell",184), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Phased Plasma S", await getPrice("sell",21924), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Phased Plasma M
          materials = [
            {name: "Phased Plasma M", price: await getPrice("sell",192), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Phased Plasma M", await getPrice("sell",21922), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Phased Plasma L
          materials = [
            {name: "Phased Plasma L", price: await getPrice("sell",200), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Phased Plasma L", await getPrice("sell",21918), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Proton S
          materials = [
            {name: "Proton S", price: await getPrice("sell",180), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Proton S", await getPrice("sell",21931), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Proton M
          materials = [
            {name: "Proton M", price: await getPrice("sell",188), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Proton M", await getPrice("sell",21928), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Proton L
          materials = [
            {name: "Proton L", price: await getPrice("sell",196), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Proton L", await getPrice("sell",21926), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Titanium Sabot S
          materials = [
            {name: "Titanium Sabot S", price: await getPrice("sell",182), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Titanium Sabot S", await getPrice("sell",21939), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Titanium Sabot M
          materials = [
            {name: "Titanium Sabot M", price: await getPrice("sell",190), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Titanium Sabot M", await getPrice("sell",21937), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Titanium Sabot L
          materials = [
            {name: "Titanium Sabot L", price: await getPrice("sell",198), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Titanium Sabot L", await getPrice("sell",21935), 2400, 2400000, null, materials, 5000, 0, "");
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
            // Republic Fleet Firetail
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
          objRow = new AssetLP("Republic Fleet Firetail Blueprint", await getPrice("sell",17812, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Probe Fleet Issue
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
          objRow = new AssetLP("Probe Fleet Issue Blueprint", await getPrice("sell",72903, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Probe Fleet Issue вывод через Domination Gold Tag
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
          objRow = new AssetLP("Probe Fleet Issue Blueprint", await getPrice("sell",72903, regionID, locationID), 4000, DominationGoldTag, null, materials, 1, 77250, "вывод через Domination Gold Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Vigil Fleet Issue  
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
          objRow = new AssetLP("Vigil Fleet Issue Blueprint", await getPrice("sell",37454, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Vigil Fleet Issue вывод через Domination Gold Tag
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
          objRow = new AssetLP("Vigil Fleet Issue Blueprint", await getPrice("sell",37454, regionID, locationID), 4000, DominationGoldTag, null, materials, 1, 77250, "вывод через Domination Gold Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Vigil Fleet Issue  вывод через Minmatar UUA Nexus Chip
          materials = [
              {name: "Vigil", price: await getPrice("sell",3766, regionID, locationID), count: 1}, 
              {name: "MinmatarUUANexusChip", price: await getPrice("sell",17795, regionID, locationID), count: 1}, 
          ];
          objRow = new AssetLP("Vigil Fleet Issue", await getPrice("sell",37454, regionID, locationID), 10000, 0, null, materials, 1, 0, "вывод через Minmatar UUA Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Thrasher Fleet Issue
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
          objRow = new AssetLP("Thrasher Fleet Issue Blueprint", await getPrice("sell",73794, regionID, locationID), 12000, 3500000, null, materials, 1, 134800, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Scythe Fleet Issue
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
          objRow = new AssetLP("Scythe Fleet Issue Blueprint", await getPrice("sell",29336, regionID, locationID), 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Scythe Fleet Issue вывод через Domination Crystal Tag
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
          objRow = new AssetLP("Scythe Fleet Issue Blueprint", await getPrice("sell",29336, regionID, locationID), 18000, DominationCrystalTag, null, materials, 1, 1316700, "вывод через Domination Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Stabber Fleet Issue
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
          objRow = new AssetLP("Stabber Fleet Issue Blueprint", await getPrice("sell",17713, regionID, locationID), 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Stabber Fleet Issue вывод через Domination Crystal Tag
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
          objRow = new AssetLP("Stabber Fleet Issue Blueprint", await getPrice("sell",17713, regionID, locationID), 18000, DominationCrystalTag, null, materials, 1, 1316700, "вывод через Domination Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Hurricane Fleet Issue
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
          objRow = new AssetLP("Hurricane Fleet Issue Blueprint", await getPrice("sell",33157, regionID, locationID), 40000, 10000000, null, materials, 1, 5951000, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Cyclone Fleet Issue
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
        objRow = new AssetLP("Cyclone Fleet Issue Blueprint", await getPrice("sell",72811, regionID, locationID), 40000, 10000000, null, materials, 1, 5951000, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Bouncer
        materials = [
          {name: "Curator I", price: await getPrice("sell",31894, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Republic Fleet Bouncer", await getPrice("sell",31868, regionID, locationID), 6000, 6000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Berserker
        materials = [
          {name: "Praetor I", price: await getPrice("sell",31892, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Republic Fleet Berserker", await getPrice("sell",31870, regionID, locationID), 5000, 5000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Valkyrie
        materials = [
          {name: "Infiltrator I", price: await getPrice("sell",31890, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Republic Fleet Valkyrie", await getPrice("sell",31866, regionID, locationID), 4000, 4000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Warrior
        materials = [
          {name: "Acolyte I", price: await getPrice("sell",31888, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Republic Fleet Warrior", await getPrice("sell",31864, regionID, locationID), 3000, 3000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
        
        // Republic Fleet Carbonized Lead S
        materials = [
          {name: "Carbonized Lead S", price: await getPrice("sell",178, regionID, locationID), count: 5000}, 
        ];
        objRow = new AssetLP("Republic Fleet Carbonized Lead S", await getPrice("sell",28328, regionID, locationID), 1200, 1200000, null, materials, 5000, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Carbonized Lead M
        materials = [
          {name: "Carbonized Lead M", price: await getPrice("sell",186, regionID, locationID), count: 5000}, 
        ];
        objRow = new AssetLP("Republic Fleet Carbonized Lead M", await getPrice("sell",28326, regionID, locationID), 1600, 1600000, null, materials, 5000, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Carbonized Lead L
        materials = [
          {name: "Carbonized Lead L", price: await getPrice("sell",194, regionID, locationID), count: 5000}, 
        ];
        objRow = new AssetLP("Republic Fleet Carbonized Lead L", await getPrice("sell",28324, regionID, locationID), 2400, 2400000, null, materials, 5000, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Depleted Uranium S
        materials = [
          {name: "Depleted Uranium S", price: await getPrice("sell",181, regionID, locationID), count: 5000}, 
        ];
        objRow = new AssetLP("Republic Fleet Depleted Uranium S", await getPrice("sell",28336, regionID, locationID), 1200, 1200000, null, materials, 5000, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Depleted Uranium M
        materials = [
          {name: "Depleted Uranium M", price: await getPrice("sell",189, regionID, locationID), count: 5000}, 
        ];
        objRow = new AssetLP("Republic Fleet Depleted Uranium M", await getPrice("sell",28334, regionID, locationID), 1600, 1600000, null, materials, 5000, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet Depleted Uranium L
        materials = [
          {name: "Depleted Uranium L", price: await getPrice("sell",197, regionID, locationID), count: 5000}, 
        ];
        objRow = new AssetLP("Republic Fleet Depleted Uranium L", await getPrice("sell",28332, regionID, locationID), 2400, 2400000, null, materials, 5000, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Republic Fleet EMP S
          materials = [
            {name: "EMP S", price: await getPrice("sell",185), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet EMP S", await getPrice("sell",21898), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet EMP M
          materials = [
            {name: "EMP M", price: await getPrice("sell",193), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet EMP M", await getPrice("sell",21896), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet EMP L
          materials = [
            {name: "EMP L", price: await getPrice("sell",201), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet EMP L", await getPrice("sell",21894), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Fusion S
          materials = [
            {name: "Fusion S", price: await getPrice("sell",183), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Fusion S", await getPrice("sell",21906), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Fusion M
          materials = [
            {name: "Fusion M", price: await getPrice("sell",191), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Fusion M", await getPrice("sell",21904), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Fusion L
          materials = [
            {name: "Fusion L", price: await getPrice("sell",199), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Fusion L", await getPrice("sell",21902), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Nuclear S
          materials = [
            {name: "Nuclear S", price: await getPrice("sell",179), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Nuclear S", await getPrice("sell",21914), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Nuclear M
          materials = [
            {name: "Nuclear M", price: await getPrice("sell",187), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Nuclear M", await getPrice("sell",21912), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Nuclear L
          materials = [
            {name: "Nuclear L", price: await getPrice("sell",195), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Nuclear L", await getPrice("sell",21910), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Phased Plasma S
          materials = [
            {name: "Phased Plasma S", price: await getPrice("sell",184), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Phased Plasma S", await getPrice("sell",21924), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Phased Plasma M
          materials = [
            {name: "Phased Plasma M", price: await getPrice("sell",192), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Phased Plasma M", await getPrice("sell",21922), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Phased Plasma L
          materials = [
            {name: "Phased Plasma L", price: await getPrice("sell",200), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Phased Plasma L", await getPrice("sell",21918), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Proton S
          materials = [
            {name: "Proton S", price: await getPrice("sell",180), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Proton S", await getPrice("sell",21931), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Proton M
          materials = [
            {name: "Proton M", price: await getPrice("sell",188), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Proton M", await getPrice("sell",21928), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Proton L
          materials = [
            {name: "Proton L", price: await getPrice("sell",196), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Proton L", await getPrice("sell",21926), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Titanium Sabot S
          materials = [
            {name: "Titanium Sabot S", price: await getPrice("sell",182), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Titanium Sabot S", await getPrice("sell",21939), 1200, 1200000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Titanium Sabot M
          materials = [
            {name: "Titanium Sabot M", price: await getPrice("sell",190), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Titanium Sabot M", await getPrice("sell",21937), 1600, 1600000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Republic Fleet Titanium Sabot L
          materials = [
            {name: "Titanium Sabot L", price: await getPrice("sell",198), count: 5000}, 
          ];
          objRow = new AssetLP("Republic Fleet Titanium Sabot L", await getPrice("sell",21935), 2400, 2400000, null, materials, 5000, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          this.tableAmarr.sort(function( a, b ) {
            return b.lprate-a.lprate;
          });

        let plex = await getPrice(undefined,44992);
        this.tablePLEX = formatNumber(plex);
     },
});
