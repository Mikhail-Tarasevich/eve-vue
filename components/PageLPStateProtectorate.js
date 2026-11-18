Vue.component('page-lp-stateprotectorate', {
    template: `
    <div>
        <h1>LP Store State Protectorate</h1>
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
            let CoreTemperatureRegulator = await getPrice("sell",57479);
            let LifeSupportBackupUnit = await getProductionCost(57486, 38600, "sell");
            let AutoIntegrityPreservationSeal = await getProductionCost(57478, 22700, "sell");
            let DreadGuristasCrystalTag = await getPrice("sell",17244); // Dread Guristas Crystal Tag
            let EstamelTharchonTag = await getPrice("sell",17295); // Estamel Tharchon's Tag
            let RavenNavyIssue = await getPrice("sell",17636);
            let CaracalNavyIssue = await getPrice("sell",17634);
            let OspreyNavyIssue = await getPrice("sell",29340);
            let HookbillNavyIssue = await getPrice("sell",17619);
            let FeroxNavyIssue = await getPrice("sell",72812);
            let DrakeNavyIssue = await getPrice("sell",33153);
            let ScorpionNavyIssue = await getPrice("sell",32309);
            let CaldariAZ1NexusChip = await getPrice("sell",17643);
            let CaldariCU1NexusChip = await getPrice("sell",17646);
            let FederationNavyFleetColonelInsigniaI = await getPrice("sell",15594);

            let materials = [];
            let objRow = null;
            // Griffin Navy Issue
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
          objRow = new AssetLP("Griffin Navy Issue Blueprint", await getPrice("sell",37455), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Heron Navy Issue
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
            objRow = new AssetLP("Heron Navy Issue Blueprint", await getPrice("sell",72904), 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Hookbill Navy Issue  
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
            objRow = new AssetLP("Hookbill Navy Issue Blueprint", HookbillNavyIssue, 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Hookbill Navy Issue  вывод через BY-1 Nexus Chip
            materials = [
                {name: "Kestrel", price: await getPrice("sell",602), count: 1}, 
                {name: "NexusChipBY1", price: await getPrice("sell",17647), count: 1}, 
            ];
            objRow = new AssetLP("Hookbill Navy Issue", HookbillNavyIssue, 10000, 0, null, materials, 1, 0, "вывод через BY-1 Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Cormorant Navy Issue
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
            objRow = new AssetLP("Cormorant Navy Issue Blueprint", await getPrice("sell",73795), 12000, 3500000, null, materials, 1, 134800, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Osprey Navy Issue
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
            objRow = new AssetLP("Osprey Navy Issue Blueprint", OspreyNavyIssue, 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Osprey Navy Issue вывод через Dread Guristas Crystal Tag
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
            objRow = new AssetLP("Osprey Navy Issue Blueprint", OspreyNavyIssue, 18000, DreadGuristasCrystalTag, null, materials, 1, 1316700, "вывод через Dread Guristas Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Caracal Navy Issue
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
            objRow = new AssetLP("Caracal Navy Issue Blueprint", CaracalNavyIssue, 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Caracal Navy Issue вывод через Dread Guristas Crystal Tag
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
            objRow = new AssetLP("Caracal Navy Issue Blueprint", CaracalNavyIssue, 18000, DreadGuristasCrystalTag, null, materials, 1, 1316700, "вывод через Dread Guristas Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Ferox Navy Issue Blueprint
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
            objRow = new AssetLP("Ferox Navy Issue Blueprint", FeroxNavyIssue, 40000, 10000000, null, materials, 1, 5951000, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Ferox Navy Issue вывод через Caldari CU-1 Nexus Chip
            materials = [
              {name: "Ferox", price: await getPrice("sell",16227), count: 1}, 
              {name: "CaldariCU1NexusChip", price: CaldariCU1NexusChip, count: 1}, 
            ];
            objRow = new AssetLP("Ferox Navy Issue", FeroxNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari CU-1 Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Drake Navy Issue Blueprint
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
            objRow = new AssetLP("Drake Navy Issue Blueprint", DrakeNavyIssue, 40000, 10000000, null, materials, 1, 5951000, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Drake Navy Issue вывод через Caldari CU-1 Nexus Chip
            materials = [
            {name: "Drake", price: await getPrice("sell",16227), count: 1}, 
            {name: "CaldariCU1NexusChip", price: CaldariCU1NexusChip, count: 1}, 
            ];
            objRow = new AssetLP("Drake Navy Issue", DrakeNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari CU-1 Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Raven Navy Issue Blueprint
            materials = [
              {name: "Megacyte", price: Megacyte, count: 4000}, 
              {name: "Zydrine", price: Zydrine, count: 8000}, 
              {name: "Nocxium", price: Nocxium, count: 30000}, 
              {name: "Isogen", price: Isogen, count: 400000}, 
              {name: "Mexallon", price: Mexallon, count: 600000}, 
              {name: "Pyerite", price: Pyerite, count: 4000000}, 
              {name: "Tritanium", price: Tritanium, count: 8000000}, 
              {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
            ];
            objRow = new AssetLP("Raven Navy Issue Blueprint", RavenNavyIssue, 100000, 20000000, null, materials, 1, 25508000, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Raven Navy Issue Blueprint вывод через Estamel Tharchon's Tag
            materials = [
              {name: "Megacyte", price: Megacyte, count: 4000}, 
              {name: "Zydrine", price: Zydrine, count: 8000}, 
              {name: "Nocxium", price: Nocxium, count: 30000}, 
              {name: "Isogen", price: Isogen, count: 400000}, 
              {name: "Mexallon", price: Mexallon, count: 600000}, 
              {name: "Pyerite", price: Pyerite, count: 4000000}, 
              {name: "Tritanium", price: Tritanium, count: 8000000}, 
              {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
            ];
            objRow = new AssetLP("Raven Navy Issue Blueprint", RavenNavyIssue, 100000, EstamelTharchonTag, null, materials, 1, 25508000, "вывод через Estamel Tharchon's Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Raven Navy Issue вывод через Caldari AZ-1 Nexus Chip
            materials = [
              {name: "Raven", price: await getPrice("sell",638), count: 1}, 
              {name: "CaldariAZ1NexusChip", price: CaldariAZ1NexusChip, count: 1}, 
            ];
            objRow = new AssetLP("Raven Navy Issue", RavenNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari AZ-1 Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Scorpion Navy Issue Blueprint
            materials = [
              {name: "Megacyte", price: Megacyte, count: 4000}, 
              {name: "Zydrine", price: Zydrine, count: 8000}, 
              {name: "Nocxium", price: Nocxium, count: 30000}, 
              {name: "Isogen", price: Isogen, count: 400000}, 
              {name: "Mexallon", price: Mexallon, count: 600000}, 
              {name: "Pyerite", price: Pyerite, count: 4000000}, 
              {name: "Tritanium", price: Tritanium, count: 8000000}, 
              {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
            ];
            objRow = new AssetLP("Scorpion Navy Issue Blueprint", ScorpionNavyIssue, 100000, 20000000, null, materials, 1, 25508000, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Scorpion Navy Issue Blueprint вывод через Estamel Tharchon's Tag
            materials = [
              {name: "Megacyte", price: Megacyte, count: 4000}, 
              {name: "Zydrine", price: Zydrine, count: 8000}, 
              {name: "Nocxium", price: Nocxium, count: 30000}, 
              {name: "Isogen", price: Isogen, count: 400000}, 
              {name: "Mexallon", price: Mexallon, count: 600000}, 
              {name: "Pyerite", price: Pyerite, count: 4000000}, 
              {name: "Tritanium", price: Tritanium, count: 8000000}, 
              {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
            ];
            objRow = new AssetLP("Scorpion Navy Issue Blueprint", ScorpionNavyIssue, 100000, EstamelTharchonTag, null, materials, 1, 25508000, "вывод через Estamel Tharchon's Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Scorpion Navy Issue вывод через Caldari AZ-1 Nexus Chip
            materials = [
              {name: "Scorpion", price: await getPrice("sell",640), count: 1}, 
              {name: "CaldariAZ1NexusChip", price: CaldariAZ1NexusChip, count: 1}, 
            ];
            objRow = new AssetLP("Scorpion Navy Issue", ScorpionNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari AZ-1 Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Caldari Navy Large Shield Extender
            materials = [
              {name: "Federation Navy Fleet Colonel Insignia I", price: FederationNavyFleetColonelInsigniaI, count: 2}, 
              {name: "Federation Navy Fleet Colonel Insignia II", price: await getPrice("sell",15673), count: 4}, 
              {name: "Large Shield Extender I", price: await getPrice("sell",3839), count: 1}, 
            ];
            objRow = new AssetLP("Caldari Navy Large Shield Extender", await getPrice("sell",31930), 10000, 4000000, null, materials, 1, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Caldari Navy Medium Shield Extender
            materials = [
              {name: "Federation Navy Fleet Colonel Insignia I", price: FederationNavyFleetColonelInsigniaI, count: 2}, 
              {name: "Medium Shield Extender I", price: await getPrice("sell",3829), count: 1}, 
            ];
            objRow = new AssetLP("Caldari Navy Medium Shield Extender", await getPrice("sell",31926), 3000, 2000000, null, materials, 1, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Caldari Navy Small Shield Extender
            materials = [
              {name: "Federation Navy Command Sergeant Major Insignia I", price: await getPrice("sell",15646), count: 2}, 
              {name: "Federation Navy Fleet Major Insignia I", price: await getPrice("sell",15593), count: 4}, 
              {name: "Small Shield Extender I", price: await getPrice("sell",377), count: 1}, 
            ];
            objRow = new AssetLP("Caldari Navy Small Shield Extender", await getPrice("sell",31922), 1000, 500000, null, materials, 1, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Caldari Navy Warden
            materials = [
              {name: "Warden I", price: await getPrice("sell",23559), count: 5}, 
            ];
            objRow = new AssetLP("Caldari Navy Warden", await getPrice("sell",31878), 6000, 6000000, null, materials, 5, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Caldari Navy Wasp
            materials = [
              {name: "Wasp I", price: await getPrice("sell",1201), count: 5}, 
            ];
            objRow = new AssetLP("Caldari Navy Wasp", await getPrice("sell",31876), 5000, 5000000, null, materials, 5, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Caldari Navy Vespa
            materials = [
              {name: "Vespa I", price: await getPrice("sell",15508), count: 5}, 
            ];
            objRow = new AssetLP("Caldari Navy Vespa", await getPrice("sell",31874), 4000, 4000000, null, materials, 5, 0, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

            // Caldari Navy Hornet
            materials = [
              {name: "Hornet I", price: await getPrice("sell",2464), count: 5}, 
            ];
            objRow = new AssetLP("Caldari Navy Hornet", await getPrice("sell",31872), 3000, 3000000, null, materials, 5, 0, "");
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
            RavenNavyIssue = await getPrice("sell",17636, regionID, locationID);
            CaracalNavyIssue = await getPrice("sell",17634, regionID, locationID);
            OspreyNavyIssue = await getPrice("sell",29340, regionID, locationID);
            HookbillNavyIssue = await getPrice("sell",17619, regionID, locationID);
            FeroxNavyIssue = await getPrice("sell",72812, regionID, locationID);
            DrakeNavyIssue = await getPrice("sell",33153, regionID, locationID);
            ScorpionNavyIssue = await getPrice("sell",32309, regionID, locationID);
            // Griffin Navy Issue
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
          objRow = new AssetLP("Griffin Navy Issue Blueprint", await getPrice("sell",37455, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Heron Navy Issue
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
          objRow = new AssetLP("Heron Navy Issue Blueprint", await getPrice("sell",72904, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Hookbill Navy Issue  
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
          objRow = new AssetLP("Hookbill Navy Issue Blueprint", HookbillNavyIssue, 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Hookbill Navy Issue  вывод через BY-1 Nexus Chip
          materials = [
              {name: "Kestrel", price: await getPrice("sell",602, regionID, locationID), count: 1}, 
              {name: "NexusChipBY1", price: await getPrice("sell",17647, regionID, locationID), count: 1}, 
          ];
          objRow = new AssetLP("Hookbill Navy Issue", HookbillNavyIssue, 10000, 0, null, materials, 1, 0, "вывод через BY-1 Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Cormorant Navy Issue
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
          objRow = new AssetLP("Cormorant Navy Issue Blueprint", await getPrice("sell",73795, regionID, locationID), 12000, 3500000, null, materials, 1, 134800, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Osprey Navy Issue
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
          objRow = new AssetLP("Osprey Navy Issue Blueprint", OspreyNavyIssue, 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Osprey Navy Issue вывод через Dread Guristas Crystal Tag
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
          objRow = new AssetLP("Osprey Navy Issue Blueprint", OspreyNavyIssue, 18000, DreadGuristasCrystalTag, null, materials, 1, 1316700, "вывод через Dread Guristas Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Caracal Navy Issue
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
          objRow = new AssetLP("Caracal Navy Issue Blueprint", CaracalNavyIssue, 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Caracal Navy Issue вывод через Dread Guristas Crystal Tag
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
          objRow = new AssetLP("Caracal Navy Issue Blueprint", CaracalNavyIssue, 18000, DreadGuristasCrystalTag, null, materials, 1, 1316700, "вывод через Dread Guristas Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Ferox Navy Issue Blueprint
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
          objRow = new AssetLP("Ferox Navy Issue Blueprint", FeroxNavyIssue, 40000, 10000000, null, materials, 1, 5951000, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Ferox Navy Issue вывод через Caldari CU-1 Nexus Chip
          materials = [
            {name: "Ferox", price: await getPrice("sell",16227, regionID, locationID), count: 1}, 
            {name: "CaldariCU1NexusChip", price: CaldariCU1NexusChip, count: 1}, 
          ];
          objRow = new AssetLP("Ferox Navy Issue", FeroxNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari CU-1 Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Drake Navy Issue Blueprint
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
          objRow = new AssetLP("Drake Navy Issue Blueprint", DrakeNavyIssue, 40000, 10000000, null, materials, 1, 5951000, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Drake Navy Issue вывод через Caldari CU-1 Nexus Chip
          materials = [
          {name: "Drake", price: await getPrice("sell",16227, regionID, locationID), count: 1}, 
          {name: "CaldariCU1NexusChip", price: CaldariCU1NexusChip, count: 1}, 
          ];
          objRow = new AssetLP("Drake Navy Issue", DrakeNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari CU-1 Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Raven Navy Issue Blueprint
          materials = [
            {name: "Megacyte", price: Megacyte, count: 4000}, 
            {name: "Zydrine", price: Zydrine, count: 8000}, 
            {name: "Nocxium", price: Nocxium, count: 30000}, 
            {name: "Isogen", price: Isogen, count: 400000}, 
            {name: "Mexallon", price: Mexallon, count: 600000}, 
            {name: "Pyerite", price: Pyerite, count: 4000000}, 
            {name: "Tritanium", price: Tritanium, count: 8000000}, 
            {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
            {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
            {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
          ];
          objRow = new AssetLP("Raven Navy Issue Blueprint", RavenNavyIssue, 100000, 20000000, null, materials, 1, 25508000, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Raven Navy Issue Blueprint вывод через Estamel Tharchon's Tag
          materials = [
            {name: "Megacyte", price: Megacyte, count: 4000}, 
            {name: "Zydrine", price: Zydrine, count: 8000}, 
            {name: "Nocxium", price: Nocxium, count: 30000}, 
            {name: "Isogen", price: Isogen, count: 400000}, 
            {name: "Mexallon", price: Mexallon, count: 600000}, 
            {name: "Pyerite", price: Pyerite, count: 4000000}, 
            {name: "Tritanium", price: Tritanium, count: 8000000}, 
            {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
            {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
            {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
          ];
          objRow = new AssetLP("Raven Navy Issue Blueprint", RavenNavyIssue, 100000, EstamelTharchonTag, null, materials, 1, 25508000, "вывод через Estamel Tharchon's Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Raven Navy Issue вывод через Caldari AZ-1 Nexus Chip
          materials = [
            {name: "Raven", price: await getPrice("sell",638, regionID, locationID), count: 1}, 
            {name: "CaldariAZ1NexusChip", price: CaldariAZ1NexusChip, count: 1}, 
          ];
          objRow = new AssetLP("Raven Navy Issue", RavenNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari AZ-1 Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Scorpion Navy Issue Blueprint
          materials = [
            {name: "Megacyte", price: Megacyte, count: 4000}, 
            {name: "Zydrine", price: Zydrine, count: 8000}, 
            {name: "Nocxium", price: Nocxium, count: 30000}, 
            {name: "Isogen", price: Isogen, count: 400000}, 
            {name: "Mexallon", price: Mexallon, count: 600000}, 
            {name: "Pyerite", price: Pyerite, count: 4000000}, 
            {name: "Tritanium", price: Tritanium, count: 8000000}, 
            {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
            {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
            {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
          ];
          objRow = new AssetLP("Scorpion Navy Issue Blueprint", ScorpionNavyIssue, 100000, 20000000, null, materials, 1, 25508000, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Scorpion Navy Issue Blueprint вывод через Estamel Tharchon's Tag
          materials = [
            {name: "Megacyte", price: Megacyte, count: 4000}, 
            {name: "Zydrine", price: Zydrine, count: 8000}, 
            {name: "Nocxium", price: Nocxium, count: 30000}, 
            {name: "Isogen", price: Isogen, count: 400000}, 
            {name: "Mexallon", price: Mexallon, count: 600000}, 
            {name: "Pyerite", price: Pyerite, count: 4000000}, 
            {name: "Tritanium", price: Tritanium, count: 8000000}, 
            {name: "CoreTemperatureRegulator", price: CoreTemperatureRegulator, count: 1}, 
            {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 100}, 
            {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 200}
          ];
          objRow = new AssetLP("Scorpion Navy Issue Blueprint", ScorpionNavyIssue, 100000, EstamelTharchonTag, null, materials, 1, 25508000, "вывод через Estamel Tharchon's Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Scorpion Navy Issue вывод через Caldari AZ-1 Nexus Chip
          materials = [
            {name: "Scorpion", price: await getPrice("sell",640, regionID, locationID), count: 1}, 
            {name: "CaldariAZ1NexusChip", price: CaldariAZ1NexusChip, count: 1}, 
          ];
          objRow = new AssetLP("Scorpion Navy Issue", ScorpionNavyIssue, 250000, 0, null, materials, 1, 0, "вывод через Caldari AZ-1 Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Caldari Navy Large Shield Extender
          materials = [
            {name: "Federation Navy Fleet Colonel Insignia I", price: FederationNavyFleetColonelInsigniaI, count: 2}, 
            {name: "Federation Navy Fleet Colonel Insignia II", price: await getPrice("sell",15673, regionID, locationID), count: 4}, 
            {name: "Large Shield Extender I", price: await getPrice("sell",3839, regionID, locationID), count: 1}, 
          ];
          objRow = new AssetLP("Caldari Navy Large Shield Extender", await getPrice("sell",31930, regionID, locationID), 10000, 4000000, null, materials, 1, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Caldari Navy Medium Shield Extender
          materials = [
            {name: "Federation Navy Fleet Colonel Insignia I", price: FederationNavyFleetColonelInsigniaI, count: 2}, 
            {name: "Medium Shield Extender I", price: await getPrice("sell",3829, regionID, locationID), count: 1}, 
          ];
          objRow = new AssetLP("Caldari Navy Medium Shield Extender", await getPrice("sell",31926), 3000, 2000000, null, materials, 1, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Caldari Navy Small Shield Extender
          materials = [
            {name: "Federation Navy Command Sergeant Major Insignia I", price: await getPrice("sell",15646, regionID, locationID), count: 2}, 
            {name: "Federation Navy Fleet Major Insignia I", price: await getPrice("sell",15593, regionID, locationID), count: 4}, 
            {name: "Small Shield Extender I", price: await getPrice("sell",377, regionID, locationID), count: 1}, 
          ];
          objRow = new AssetLP("Caldari Navy Small Shield Extender", await getPrice("sell",31922, regionID, locationID), 1000, 500000, null, materials, 1, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Caldari Navy Warden
          materials = [
            {name: "Warden I", price: await getPrice("sell",23559, regionID, locationID), count: 5}, 
          ];
          objRow = new AssetLP("Caldari Navy Warden", await getPrice("sell",31878, regionID, locationID), 6000, 6000000, null, materials, 5, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Caldari Navy Wasp
          materials = [
            {name: "Wasp I", price: await getPrice("sell",1201, regionID, locationID), count: 5}, 
          ];
          objRow = new AssetLP("Caldari Navy Wasp", await getPrice("sell",31876, regionID, locationID), 5000, 5000000, null, materials, 5, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Caldari Navy Vespa
          materials = [
            {name: "Vespa I", price: await getPrice("sell",15508, regionID, locationID), count: 5}, 
          ];
          objRow = new AssetLP("Caldari Navy Vespa", await getPrice("sell",31874, regionID, locationID), 4000, 4000000, null, materials, 5, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Caldari Navy Hornet
          materials = [
            {name: "Hornet I", price: await getPrice("sell",2464, regionID, locationID), count: 5}, 
          ];
          objRow = new AssetLP("Caldari Navy Hornet", await getPrice("sell",31872, regionID, locationID), 3000, 3000000, null, materials, 5, 0, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          this.tableAmarr.sort(function( a, b ) {
            return b.lprate-a.lprate;
          });

          let plex = await getPrice(undefined,44992);
          this.tablePLEX = formatNumber(plex);
     },
});
