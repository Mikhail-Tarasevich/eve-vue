Vue.component('page-lp-24imperialcrusade', {
    template: `
    <div>
        <h1>LP Store 24th Imperial Crusade</h1>
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
            let TrueSanshaGoldTag = await getPrice("sell",17258); ; // True Sansha Gold Tag
            let TrueSanshaCrystalTag = await getPrice("sell",17255); ; // True Sansha Crystal Tag
            let RepublicFleetCommanderInsigniaI = await getPrice("sell",15632) // Republic Fleet Commander Insignia I
            let RepublicFleetCommanderInsigniaII = await getPrice("sell",15661) // Republic Fleet Commander Insignia II
            let RepublicFleetHighCaptainInsigniaI = await getPrice("sell",15631) // Republic Fleet High Captain Insignia I
            
            let materials = [];
            let objRow = null;
            // Magnate Navy Issue
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
            objRow = new AssetLP("Magnate Navy Issue Blueprint", await getPrice("sell",72907), 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Crucifier Navy Issue
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
          objRow = new AssetLP("Crucifier Navy Issue Blueprint", await getPrice("sell",37453), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Magnate Navy Issue вывод через True Sansha Gold Tag
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
            objRow = new AssetLP("Magnate Navy Issue Blueprint", await getPrice("sell",72907), 4000, TrueSanshaGoldTag, null, materials, 1, 77250, "вывод через True Sansha Gold Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Imperial Navy Slicer  
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
            objRow = new AssetLP("Imperial Navy Slicer Blueprint", await getPrice("sell",17703), 4000, 2000000, null, materials, 1, 77250, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Imperial Navy Slicer вывод через True Sansha Gold Tag
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
            objRow = new AssetLP("Imperial Navy Slicer Blueprint", await getPrice("sell",17703), 4000, TrueSanshaGoldTag, null, materials, 1, 77250, "вывод через True Sansha Gold Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Imperial Navy Slicer  вывод через Amarr MIY-1 Nexus Chip
            materials = [
                {name: "Tormentor", price: await getPrice("sell",591), count: 1}, 
                {name: "AmarrMIY1NexusChip", price: await getPrice("sell",17795), count: 1}, 
            ];
            objRow = new AssetLP("Imperial Navy Slicer", await getPrice("sell",17703), 10000, 0, null, materials, 1, 0, "вывод через Amarr MIY-1 Nexus Chip");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Coercer Navy Issue
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
            objRow = new AssetLP("Coercer Navy Issue Blueprint", await getPrice("sell",73789), 12000, 3500000, null, materials, 1, 134800, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Omen Navy Issue
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
            objRow = new AssetLP("Omen Navy Issue Blueprint", await getPrice("sell",17709), 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Omen Navy Issue вывод через True Sansha Crystal Tag
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
            objRow = new AssetLP("Omen Navy Issue Blueprint", await getPrice("sell",17709), 18000, TrueSanshaCrystalTag, null, materials, 1, 1316700, "вывод через True Sansha Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Augoror Navy Issue
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
            objRow = new AssetLP("Augoror Navy Issue Blueprint", await getPrice("sell",29337), 18000, 5000000, null, materials, 1, 1316700, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Augoror Navy Issue вывод через True Sansha Crystal Tag
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
            objRow = new AssetLP("Augoror Navy Issue Blueprint", await getPrice("sell",29337), 18000, TrueSanshaCrystalTag, null, materials, 1, 1316700, "вывод через True Sansha Crystal Tag");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Harbinger Navy Issue
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
            objRow = new AssetLP("Harbinger Navy Issue Blueprint", await getPrice("sell",33155), 40000, 10000000, null, materials, 1, 5951000, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Prophecy Navy Issue
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
          objRow = new AssetLP("Prophecy Navy Issue Blueprint", await getPrice("sell",72872), 40000, 10000000, null, materials, 1, 5951000, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Curator
          materials = [
            {name: "Curator I", price: await getPrice("sell",23525), count: 5}, 
          ];
          objRow = new AssetLP("Imperial Navy Curator", await getPrice("sell",31868), 6000, 6000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Praetor
          materials = [
            {name: "Praetor I", price: await getPrice("sell",2193), count: 5}, 
          ];
          objRow = new AssetLP("Imperial Navy Praetor", await getPrice("sell",31870), 5000, 5000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Infiltrator
          materials = [
            {name: "Infiltrator I", price: await getPrice("sell",2173), count: 5}, 
          ];
          objRow = new AssetLP("Imperial Navy Infiltrator", await getPrice("sell",31866), 4000, 4000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Acolyte
          materials = [
            {name: "Acolyte I", price: await getPrice("sell",2203), count: 5}, 
          ];
          objRow = new AssetLP("Imperial Navy Acolyte", await getPrice("sell",31864), 3000, 3000000, null, materials, 5, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          
          // Imperial Navy Multifrequency S
          materials = [
            {name: "Multifrequency S", price: await getPrice("sell",246), count: 10}, 
          ];
          objRow = new AssetLP("Imperial Navy Multifrequency S", await getPrice("sell",23071), 1350, 1350000, null, materials, 10, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Multifrequency M
          materials = [
            {name: "Multifrequency M", price: await getPrice("sell",254), count: 10}, 
          ];
          objRow = new AssetLP("Imperial Navy Multifrequency M", await getPrice("sell",23089), 2100, 2100000, null, materials, 10, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Multifrequency L
          materials = [
            {name: "Multifrequency L", price: await getPrice("sell",262), count: 10}, 
          ];
          objRow = new AssetLP("Imperial Navy Multifrequency L", await getPrice("sell",23105), 3750, 3750000, null, materials, 10, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Xray S
          materials = [
            {name: "Xray S", price: await getPrice("sell",244), count: 10}, 
          ];
          objRow = new AssetLP("Imperial Navy Xray S", await getPrice("sell",23075), 1350, 1350000, null, materials, 10, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Xray M
          materials = [
            {name: "Xray M", price: await getPrice("sell",252), count: 10}, 
          ];
          objRow = new AssetLP("Imperial Navy Xray M", await getPrice("sell",23093), 2100, 2100000, null, materials, 10, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Xray L
          materials = [
            {name: "Xray L", price: await getPrice("sell",260), count: 10}, 
          ];
          objRow = new AssetLP("Imperial Navy Xray L", await getPrice("sell",23109), 3750, 3750000, null, materials, 10, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy 100mm Steel Plates
          materials = [
            {name: "Republic Fleet Private Insignia V", price: await getPrice("sell",15998), count: 1}, 
            {name: "Republic Fleet High Captain Insignia I", price: RepublicFleetHighCaptainInsigniaI, count: 2}, 
            {name: "100mm Steel Plates I", price: await getPrice("sell",11293), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy 100mm Steel Plates", await getPrice("sell",31896), 1000, 500000, null, materials, 1, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy 200mm Steel Plates
          materials = [
            {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 1}, 
            {name: "200mm Steel Plates I", price: await getPrice("sell",11295), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy 200mm Steel Plates", await getPrice("sell",31904), 2000, 1000000, null, materials, 1, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy 400mm Steel Plates
          materials = [
            {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 2}, 
            {name: "400mm Steel Plates I", price: await getPrice("sell",11297), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy 400mm Steel Plates", await getPrice("sell",31908), 3000, 2000000, null, materials, 1, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy 800mm Steel Plates
          materials = [
            {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 1}, 
            {name: "Republic Fleet Commander Insignia II", price: RepublicFleetCommanderInsigniaII, count: 2}, 
            {name: "800mm Steel Plates I", price: await getPrice("sell",11299), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy 800mm Steel Plates", await getPrice("sell",31916), 5000, 3000000, null, materials, 1, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy 1600mm Steel Plates
          materials = [
            {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 2}, 
            {name: "Republic Fleet Commander Insignia II", price: RepublicFleetCommanderInsigniaII, count: 4}, 
            {name: "1600mm Steel Plates I", price: await getPrice("sell",11279), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy 1600mm Steel Plates", await getPrice("sell",31900), 10000, 4000000, null, materials, 1, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Drone Damage Amplifier
          materials = [
            {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 10}, 
            {name: "Republic Fleet Commander Insignia II", price: RepublicFleetCommanderInsigniaII, count: 17}, 
            {name: "Republic Fleet High Captain Insignia I", price: RepublicFleetHighCaptainInsigniaI, count: 2}, 
            {name: "Drone Damage Amplifier I", price: await getPrice("sell",4393), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy Drone Damage Amplifier", await getPrice("sell",33844), 30000, 12000000, null, materials, 1, 0, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

          // Imperial Navy Multispectrum Coating
          materials = [
            {name: "Republic Fleet Private Insignia III", price: await getPrice("sell",15660), count: 51}, 
            {name: "Republic Fleet Private Insignia I", price: await getPrice("sell",15628), count: 33},  
            {name: "Republic Fleet Private Insignia II", price: await getPrice("sell",15629), count: 42}, 
            {name: "Multispectrum Coating I", price: await getPrice("sell",4393), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy Multispectrum Coating", await getPrice("sell",15693), 6750, 2700000, null, materials, 1, 0, "");
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
            // Crucifier Navy Issue
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
          objRow = new AssetLP("Crucifier Navy Issue Blueprint", await getPrice("sell",37453, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Magnate Navy Issue
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
          objRow = new AssetLP("Magnate Navy Issue Blueprint", await getPrice("sell",72907, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Magnate Navy Issue вывод через True Sansha Gold Tag
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
          objRow = new AssetLP("Magnate Navy Issue Blueprint", await getPrice("sell",72907, regionID, locationID), 4000, TrueSanshaGoldTag, null, materials, 1, 77250, "вывод через True Sansha Gold Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Imperial Navy Slicer  
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
          objRow = new AssetLP("Imperial Navy Slicer Blueprint", await getPrice("sell",17703, regionID, locationID), 4000, 2000000, null, materials, 1, 77250, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Imperial Navy Slicer вывод через True Sansha Gold Tag
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
          objRow = new AssetLP("Imperial Navy Slicer Blueprint", await getPrice("sell",17703, regionID, locationID), 4000, TrueSanshaGoldTag, null, materials, 1, 77250, "вывод через True Sansha Gold Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Imperial Navy Slicer  вывод через Amarr MIY-1 Nexus Chip
          materials = [
              {name: "Tormentor", price: await getPrice("sell",591, regionID, locationID), count: 1}, 
              {name: "AmarrMIY1NexusChip", price: await getPrice("sell",17795, regionID, locationID), count: 1}, 
          ];
          objRow = new AssetLP("Imperial Navy Slicer", await getPrice("sell",17703, regionID, locationID), 10000, 0, null, materials, 1, 0, "вывод через Amarr MIY-1 Nexus Chip");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Coercer Navy Issue
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
          objRow = new AssetLP("Coercer Navy Issue Blueprint", await getPrice("sell",73789, regionID, locationID), 12000, 3500000, null, materials, 1, 134800, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Omen Navy Issue
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
          objRow = new AssetLP("Omen Navy Issue Blueprint", await getPrice("sell",17709, regionID, locationID), 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Omen Navy Issue вывод через True Sansha Crystal Tag
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
          objRow = new AssetLP("Omen Navy Issue Blueprint", await getPrice("sell",17709, regionID, locationID), 18000, TrueSanshaCrystalTag, null, materials, 1, 1316700, "вывод через True Sansha Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Augoror Navy Issue
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
          objRow = new AssetLP("Augoror Navy Issue Blueprint", await getPrice("sell",29337, regionID, locationID), 18000, 5000000, null, materials, 1, 1316700, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Augoror Navy Issue вывод через True Sansha Crystal Tag
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
          objRow = new AssetLP("Augoror Navy Issue Blueprint", await getPrice("sell",29337, regionID, locationID), 18000, TrueSanshaCrystalTag, null, materials, 1, 1316700, "вывод через True Sansha Crystal Tag");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Harbinger Navy Issue
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
          objRow = new AssetLP("Harbinger Navy Issue Blueprint", await getPrice("sell",33155, regionID, locationID), 40000, 10000000, null, materials, 1, 5951000, "");
          this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          // Prophecy Navy Issue
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
        objRow = new AssetLP("Prophecy Navy Issue Blueprint", await getPrice("sell",72872, regionID, locationID), 40000, 10000000, null, materials, 1, 5951000, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Curator
        materials = [
          {name: "Curator I", price: await getPrice("sell",23525, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Imperial Navy Curator", await getPrice("sell",31868, regionID, locationID), 6000, 6000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Praetor
        materials = [
          {name: "Praetor I", price: await getPrice("sell",2193, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Imperial Navy Praetor", await getPrice("sell",31870, regionID, locationID), 5000, 5000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Infiltrator
        materials = [
          {name: "Infiltrator I", price: await getPrice("sell",2173, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Imperial Navy Infiltrator", await getPrice("sell",31866, regionID, locationID), 4000, 4000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Acolyte
        materials = [
          {name: "Acolyte I", price: await getPrice("sell",2203, regionID, locationID), count: 5}, 
        ];
        objRow = new AssetLP("Imperial Navy Acolyte", await getPrice("sell",31864, regionID, locationID), 3000, 3000000, null, materials, 5, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
        
        // Imperial Navy Multifrequency S
        materials = [
          {name: "Multifrequency S", price: await getPrice("sell",246, regionID, locationID), count: 10}, 
        ];
        objRow = new AssetLP("Imperial Navy Multifrequency S", await getPrice("sell",23071, regionID, locationID), 1350, 1350000, null, materials, 10, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Multifrequency M
        materials = [
          {name: "Multifrequency M", price: await getPrice("sell",254, regionID, locationID), count: 10}, 
        ];
        objRow = new AssetLP("Imperial Navy Multifrequency M", await getPrice("sell",23089, regionID, locationID), 2100, 2100000, null, materials, 10, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Multifrequency L
        materials = [
          {name: "Multifrequency L", price: await getPrice("sell",262, regionID, locationID), count: 10}, 
        ];
        objRow = new AssetLP("Imperial Navy Multifrequency L", await getPrice("sell",23105, regionID, locationID), 3750, 3750000, null, materials, 10, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Xray S
        materials = [
          {name: "Xray S", price: await getPrice("sell",244, regionID, locationID), count: 10}, 
        ];
        objRow = new AssetLP("Imperial Navy Xray S", await getPrice("sell",23075, regionID, locationID), 1350, 1350000, null, materials, 10, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Xray M
        materials = [
          {name: "Xray M", price: await getPrice("sell",252, regionID, locationID), count: 10}, 
        ];
        objRow = new AssetLP("Imperial Navy Xray M", await getPrice("sell",23093, regionID, locationID), 2100, 2100000, null, materials, 10, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Xray L
        materials = [
          {name: "Xray L", price: await getPrice("sell",260, regionID, locationID), count: 10}, 
        ];
        objRow = new AssetLP("Imperial Navy Xray L", await getPrice("sell",23109, regionID, locationID), 3750, 3750000, null, materials, 10, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy 100mm Steel Plates
        materials = [
          {name: "Republic Fleet Private Insignia V", price: await getPrice("sell",15998, regionID, locationID), count: 1}, 
          {name: "Republic Fleet High Captain Insignia I", price: RepublicFleetHighCaptainInsigniaI, count: 2}, 
          {name: "100mm Steel Plates I", price: await getPrice("sell",11293, regionID, locationID), count: 1}, 
        ];
        objRow = new AssetLP("Imperial Navy 100mm Steel Plates", await getPrice("sell",31896, regionID, locationID), 1000, 500000, null, materials, 1, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy 200mm Steel Plates
        materials = [
          {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 1}, 
          {name: "200mm Steel Plates I", price: await getPrice("sell",11295, regionID, locationID), count: 1}, 
        ];
        objRow = new AssetLP("Imperial Navy 200mm Steel Plates", await getPrice("sell",31904, regionID, locationID), 2000, 1000000, null, materials, 1, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy 400mm Steel Plates
        materials = [
          {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 2}, 
          {name: "400mm Steel Plates I", price: await getPrice("sell",11297, regionID, locationID), count: 1}, 
        ];
        objRow = new AssetLP("Imperial Navy 400mm Steel Plates", await getPrice("sell",31908, regionID, locationID), 3000, 2000000, null, materials, 1, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy 800mm Steel Plates
        materials = [
          {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 1}, 
          {name: "Republic Fleet Commander Insignia II", price: RepublicFleetCommanderInsigniaII, count: 2}, 
          {name: "800mm Steel Plates I", price: await getPrice("sell",11299, regionID, locationID), count: 1}, 
        ];
        objRow = new AssetLP("Imperial Navy 800mm Steel Plates", await getPrice("sell",31916, regionID, locationID), 5000, 3000000, null, materials, 1, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy 1600mm Steel Plates
        materials = [
          {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 2}, 
          {name: "Republic Fleet Commander Insignia II", price: RepublicFleetCommanderInsigniaII, count: 4}, 
          {name: "1600mm Steel Plates I", price: await getPrice("sell",11279, regionID, locationID), count: 1}, 
        ];
        objRow = new AssetLP("Imperial Navy 1600mm Steel Plates", await getPrice("sell",31900, regionID, locationID), 10000, 4000000, null, materials, 1, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Drone Damage Amplifier
        materials = [
          {name: "Republic Fleet Commander Insignia I", price: RepublicFleetCommanderInsigniaI, count: 10}, 
          {name: "Republic Fleet Commander Insignia II", price: RepublicFleetCommanderInsigniaII, count: 17}, 
          {name: "Republic Fleet High Captain Insignia I", price: RepublicFleetHighCaptainInsigniaI, count: 2}, 
          {name: "Drone Damage Amplifier I", price: await getPrice("sell",4393, regionID, locationID), count: 1}, 
        ];
        objRow = new AssetLP("Imperial Navy Drone Damage Amplifier", await getPrice("sell",33844, regionID, locationID), 30000, 12000000, null, materials, 1, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        // Imperial Navy Multispectrum Coating
        materials = [
          {name: "Republic Fleet Private Insignia III", price: await getPrice("sell",15660), count: 51}, 
          {name: "Republic Fleet Private Insignia I", price: await getPrice("sell",15628), count: 33},  
          {name: "Republic Fleet Private Insignia II", price: await getPrice("sell",15629), count: 42}, 
          {name: "Multispectrum Coating I", price: await getPrice("sell",4393, regionID, locationID), count: 1}, 
        ];
        objRow = new AssetLP("Imperial Navy Multispectrum Coating", await getPrice("sell",15693, regionID, locationID), 6750, 2700000, null, materials, 1, 0, "");
        this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

        this.tableAmarr.sort(function( a, b ) {
          return b.lprate-a.lprate;
        });

        let plex = await getPrice(undefined,44992);
        this.tablePLEX = formatNumber(plex);
     },
});
