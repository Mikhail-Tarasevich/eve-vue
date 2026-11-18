Vue.component('page-lp-gurista', {
    template: `
    <div>
        <h1>LP Store Gurista</h1>
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
            let LifeSupportBackupUnit = await getProductionCost(57486, 38600, "sell");
            let AutoIntegrityPreservationSeal = await getProductionCost(57478, 22700, "sell");
            let ROTrigger = await getPrice(undefined,57471); //R-O Trigger Neurolink Conduit
            let SRTrigger = await getPrice(undefined,57472); //S-R Trigger Neurolink Conduit
            let CoreTemperatureRegulator = await getPrice(undefined,57479); //Core Temperature Regulator

            let materials = [];
            let objRow = null;

            // Worm Blueprint
            materials = [
                {name: "Megacyte", price: Megacyte, count: 12}, 
                {name: "Zydrine", price: Zydrine, count: 24}, 
                {name: "Nocxium", price: Nocxium, count: 36}, 
                {name: "Isogen", price: Isogen, count: 600}, 
                {name: "Mexallon", price: Mexallon, count: 3000}, 
                {name: "Pyerite", price: Pyerite, count: 7200}, 
                {name: "Tritanium", price: Tritanium, count: 38400}, 
                {name: "R-O Trigger Neurolink Conduit", price: ROTrigger, count: 1}, 
                {name: "S-R Trigger Neurolink Conduit", price: SRTrigger, count: 1},
                {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 6}, 
                {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 12},
            ];
            objRow = new AssetLP("Worm Blueprint", await getPrice("sell",17930), 20000, 10000000, null, materials, 1, 248640, "");
            this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
            // Gila Blueprint
            materials = [
              {name: "Megacyte", price: Megacyte, count: 600}, 
              {name: "Zydrine", price: Zydrine, count: 1200}, 
              {name: "Nocxium", price: Nocxium, count: 1800}, 
              {name: "Isogen", price: Isogen, count: 12000}, 
              {name: "Mexallon", price: Mexallon, count: 43200}, 
              {name: "Pyerite", price: Pyerite, count: 216000}, 
              {name: "Tritanium", price: Tritanium, count: 648000}, 
              {name: "R-O Trigger Neurolink Conduit", price: ROTrigger, count: 4}, 
              {name: "S-R Trigger Neurolink Conduit", price: SRTrigger, count: 4},
              {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 30}, 
              {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 60},
          ];
          objRow = new AssetLP("Gila Blueprint", await getPrice("sell",17715), 80000, 20000000, null, materials, 1, 2192000, "");
          this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
          
          // Rattlesnake Blueprint
          materials = [
            {name: "Megacyte", price: Megacyte, count: 4800}, 
            {name: "Zydrine", price: Zydrine, count: 9600}, 
            {name: "Nocxium", price: Nocxium, count: 36000}, 
            {name: "Isogen", price: Isogen, count: 480000}, 
            {name: "Mexallon", price: Mexallon, count: 720000}, 
            {name: "Pyerite", price: Pyerite, count: 4800000}, 
            {name: "Tritanium", price: Tritanium, count: 9600000}, 
            {name: "R-O Trigger Neurolink Conduit", price: ROTrigger, count: 16}, 
            {name: "S-R Trigger Neurolink Conduit", price: SRTrigger, count: 16},
            {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 120}, 
            {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 240},
            {name: "Core Temperature Regulator", price: CoreTemperatureRegulator, count: 1},
        ];
        objRow = new AssetLP("Rattlesnake Blueprint", await getPrice("sell",17918), 400000, 100000000, null, materials, 1, 29222700, "");
        this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

      // Guristas Scourge Heavy Missile
      materials = [
          {name: "Tritanium", price: Tritanium, count: 41000}, 
          {name: "Nocxium", price: Nocxium, count: 100}, 
      ];
      objRow = new AssetLP("Guristas Scourge Heavy Missile", await getPrice("sell",27439), 2100, 2100000, null, materials, 5000, 690, "");
      this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

      // Guristas Mjolnir Heavy Missile
      materials = [
        {name: "Tritanium", price: Tritanium, count: 24800}, 
        {name: "Pyerite", price: Pyerite, count: 11000}, 
        {name: "Nocxium", price: Nocxium, count: 100}, 
      ];
      objRow = new AssetLP("Guristas Mjolnir Heavy Missile", await getPrice("sell",27433), 2100, 2100000, null, materials, 5000, 780, "");
      this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

      // Guristas Nova Heavy Missile
      materials = [
        {name: "Tritanium", price: Tritanium, count: 17550}, 
        {name: "Pyerite", price: Pyerite, count: 5950}, 
        {name: "Nocxium", price: Nocxium, count: 50}, 
      ];
      objRow = new AssetLP("Guristas Nova Heavy Missile", await getPrice("sell",27451), 2100, 2100000, null, materials, 5000, 463, "");
      this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

      // Guristas Inferno Heavy Missile
      materials = [
        {name: "Tritanium", price: Tritanium, count: 35800}, 
        {name: "Pyerite", price: Pyerite, count: 100}, 
        {name: "Mexallon", price: Mexallon, count: 300}, 
        {name: "Nocxium", price: Nocxium, count: 150}, 
      ];
      objRow = new AssetLP("Guristas Inferno Heavy Missile", await getPrice("sell",27445), 2100, 2100000, null, materials, 5000, 768, "");
      this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Scourge Light Missile
    materials = [
        {name: "Tritanium", price: Tritanium, count: 3105}, 
        {name: "Pyerite", price: Pyerite, count: 1935}, 
        {name: "Mexallon", price: Mexallon, count: 90}, 
    ];
    objRow = new AssetLP("Guristas Scourge Light Missile", await getPrice("sell",27353), 1680, 1680000, null, materials, 5000, 110, "");
    this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Mjolnir Light Missile
    materials = [
      {name: "Tritanium", price: Tritanium, count: 7500}, 
      {name: "Pyerite", price: Pyerite, count: 900}, 
      {name: "Nocxium", price: Nocxium, count: 600}, 
    ];
    objRow = new AssetLP("Guristas Mjolnir Light Missile", await getPrice("sell",27383), 1680, 1680000, null, materials, 5000, 190, "");
    this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Nova Light Missile
    materials = [
      {name: "Tritanium", price: Tritanium, count: 2700}, 
      {name: "Pyerite", price: Pyerite, count: 800}, 
      {name: "Nocxium", price: Nocxium, count: 300}, 
    ];
    objRow = new AssetLP("Guristas Nova Light Missile", await getPrice("sell",27379), 1680, 1680000, null, materials, 5000, 91, "");
    this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Inferno Light Missile
    materials = [
      {name: "Tritanium", price: Tritanium, count: 2610}, 
      {name: "Pyerite", price: Pyerite, count: 3240}, 
    ];
    objRow = new AssetLP("Guristas Inferno Light Missile", await getPrice("sell",27367), 1680, 1680000, null, materials, 5000, 128, "");
    this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Antimatter Charge M
    materials = [
      {name: "Tritanium", price: Tritanium, count: 20205}, 
      {name: "Pyerite", price: Pyerite, count: 18765}, 
      {name: "Mexallon", price: Mexallon, count: 315}, 
    ];
    objRow = new AssetLP("Guristas Antimatter Charge M", await getPrice("sell",21350), 1200, 1200000, null, materials, 5000, 853, "");
    this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Antimatter Charge S
    materials = [
      {name: "Tritanium", price: Tritanium, count: 9180}, 
      {name: "Pyerite", price: Pyerite, count: 765}, 
      {name: "Mexallon", price: Mexallon, count: 50}, 
    ];
    objRow = new AssetLP("Guristas Antimatter Charge S", await getPrice("sell",21334), 900, 900000, null, materials, 5000, 243, "");
    this.tableJita.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Antimatter Charge L
    materials = [
      {name: "Tritanium", price: Tritanium, count: 88900}, 
      {name: "Pyerite", price: Pyerite, count: 6350}, 
      {name: "Mexallon", price: Mexallon, count: 4450}, 
      {name: "Isogen", price: Isogen, count: 1450}, 
    ];
    objRow = new AssetLP("Guristas Antimatter Charge L", await getPrice("sell",21366), 1800, 1800000, null, materials, 5000, 2231, "");
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
      ROTrigger = await getPrice(undefined,57471, regionID, locationID); //R-O Trigger Neurolink Conduit
      SRTrigger = await getPrice(undefined,57472, regionID, locationID); //S-R Trigger Neurolink Conduit
      CoreTemperatureRegulator = await getPrice(undefined,57479, regionID, locationID); //Core Temperature Regulator

      materials = [];
      objRow = null;

      // Worm Blueprint
      materials = [
          {name: "Megacyte", price: Megacyte, count: 12}, 
          {name: "Zydrine", price: Zydrine, count: 24}, 
          {name: "Nocxium", price: Nocxium, count: 36}, 
          {name: "Isogen", price: Isogen, count: 600}, 
          {name: "Mexallon", price: Mexallon, count: 3000}, 
          {name: "Pyerite", price: Pyerite, count: 7200}, 
          {name: "Tritanium", price: Tritanium, count: 38400}, 
          {name: "R-O Trigger Neurolink Conduit", price: ROTrigger, count: 1}, 
          {name: "S-R Trigger Neurolink Conduit", price: SRTrigger, count: 1},
          {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 6}, 
          {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 12},
      ];
      objRow = new AssetLP("Worm Blueprint", await getPrice("sell",17930, regionID, locationID), 20000, 10000000, null, materials, 1, 248640, "");
      this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
      // Gila Blueprint
      materials = [
        {name: "Megacyte", price: Megacyte, count: 600}, 
        {name: "Zydrine", price: Zydrine, count: 1200}, 
        {name: "Nocxium", price: Nocxium, count: 1800}, 
        {name: "Isogen", price: Isogen, count: 12000}, 
        {name: "Mexallon", price: Mexallon, count: 43200}, 
        {name: "Pyerite", price: Pyerite, count: 216000}, 
        {name: "Tritanium", price: Tritanium, count: 648000}, 
        {name: "R-O Trigger Neurolink Conduit", price: ROTrigger, count: 4}, 
        {name: "S-R Trigger Neurolink Conduit", price: SRTrigger, count: 4},
        {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 30}, 
        {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 60},
    ];
    objRow = new AssetLP("Gila Blueprint", await getPrice("sell",17715, regionID, locationID), 80000, 20000000, null, materials, 1, 2192000, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    
    // Rattlesnake Blueprint
    materials = [
      {name: "Megacyte", price: Megacyte, count: 4800}, 
      {name: "Zydrine", price: Zydrine, count: 9600}, 
      {name: "Nocxium", price: Nocxium, count: 36000}, 
      {name: "Isogen", price: Isogen, count: 480000}, 
      {name: "Mexallon", price: Mexallon, count: 720000}, 
      {name: "Pyerite", price: Pyerite, count: 4800000}, 
      {name: "Tritanium", price: Tritanium, count: 9600000}, 
      {name: "R-O Trigger Neurolink Conduit", price: ROTrigger, count: 16}, 
      {name: "S-R Trigger Neurolink Conduit", price: SRTrigger, count: 16},
      {name: "LifeSupportBackupUnit", price: LifeSupportBackupUnit, count: 120}, 
      {name: "AutoIntegrityPreservationSeal", price: AutoIntegrityPreservationSeal, count: 240},
      {name: "Core Temperature Regulator", price: CoreTemperatureRegulator, count: 1},
    ];
    objRow = new AssetLP("Rattlesnake Blueprint", await getPrice("sell",17918, regionID, locationID), 400000, 100000000, null, materials, 1, 29222700, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Scourge Heavy Missile
    materials = [
        {name: "Tritanium", price: Tritanium, count: 41000}, 
        {name: "Nocxium", price: Nocxium, count: 100}, 
    ];
    objRow = new AssetLP("Guristas Scourge Heavy Missile", await getPrice("sell",27439, regionID, locationID), 2100, 2100000, null, materials, 5000, 690, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Mjolnir Heavy Missile
    materials = [
      {name: "Tritanium", price: Tritanium, count: 24800}, 
      {name: "Pyerite", price: Pyerite, count: 11000}, 
      {name: "Nocxium", price: Nocxium, count: 100}, 
    ];
    objRow = new AssetLP("Guristas Mjolnir Heavy Missile", await getPrice("sell",27433, regionID, locationID), 2100, 2100000, null, materials, 5000, 780, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Nova Heavy Missile
    materials = [
      {name: "Tritanium", price: Tritanium, count: 17550}, 
      {name: "Pyerite", price: Pyerite, count: 5950}, 
      {name: "Nocxium", price: Nocxium, count: 50}, 
    ];
    objRow = new AssetLP("Guristas Nova Heavy Missile", await getPrice("sell",27451, regionID, locationID), 2100, 2100000, null, materials, 5000, 463, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Inferno Heavy Missile
    materials = [
      {name: "Tritanium", price: Tritanium, count: 35800}, 
      {name: "Pyerite", price: Pyerite, count: 100}, 
      {name: "Mexallon", price: Mexallon, count: 300}, 
      {name: "Nocxium", price: Nocxium, count: 150}, 
    ];
    objRow = new AssetLP("Guristas Inferno Heavy Missile", await getPrice("sell",27445, regionID, locationID), 2100, 2100000, null, materials, 5000, 768, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Scourge Light Missile
    materials = [
      {name: "Tritanium", price: Tritanium, count: 3105}, 
      {name: "Pyerite", price: Pyerite, count: 1935}, 
      {name: "Mexallon", price: Mexallon, count: 90}, 
    ];
    objRow = new AssetLP("Guristas Scourge Light Missile", await getPrice("sell",27353, regionID, locationID), 1680, 1680000, null, materials, 5000, 110, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Mjolnir Light Missile
    materials = [
    {name: "Tritanium", price: Tritanium, count: 7500}, 
    {name: "Pyerite", price: Pyerite, count: 900}, 
    {name: "Nocxium", price: Nocxium, count: 600}, 
    ];
    objRow = new AssetLP("Guristas Mjolnir Light Missile", await getPrice("sell",27383, regionID, locationID), 1680, 1680000, null, materials, 5000, 190, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Nova Light Missile
    materials = [
    {name: "Tritanium", price: Tritanium, count: 2700}, 
    {name: "Pyerite", price: Pyerite, count: 800}, 
    {name: "Nocxium", price: Nocxium, count: 300}, 
    ];
    objRow = new AssetLP("Guristas Nova Light Missile", await getPrice("sell",27379, regionID, locationID), 1680, 1680000, null, materials, 5000, 91, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Inferno Light Missile
    materials = [
    {name: "Tritanium", price: Tritanium, count: 2610}, 
    {name: "Pyerite", price: Pyerite, count: 3240}, 
    ];
    objRow = new AssetLP("Guristas Inferno Light Missile", await getPrice("sell",27367, regionID, locationID), 1680, 1680000, null, materials, 5000, 128, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Antimatter Charge M
    materials = [
    {name: "Tritanium", price: Tritanium, count: 20205}, 
    {name: "Pyerite", price: Pyerite, count: 18765}, 
    {name: "Mexallon", price: Mexallon, count: 315}, 
    ];
    objRow = new AssetLP("Guristas Antimatter Charge M", await getPrice("sell",21350, regionID, locationID), 1200, 1200000, null, materials, 5000, 853, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Antimatter Charge S
    materials = [
    {name: "Tritanium", price: Tritanium, count: 9180}, 
    {name: "Pyerite", price: Pyerite, count: 765}, 
    {name: "Mexallon", price: Mexallon, count: 50}, 
    ];
    objRow = new AssetLP("Guristas Antimatter Charge S", await getPrice("sell",21334, regionID, locationID), 900, 900000, null, materials, 5000, 243, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    // Guristas Antimatter Charge L
    materials = [
    {name: "Tritanium", price: Tritanium, count: 88900}, 
    {name: "Pyerite", price: Pyerite, count: 6350}, 
    {name: "Mexallon", price: Mexallon, count: 4450}, 
    {name: "Isogen", price: Isogen, count: 1450}, 
    ];
    objRow = new AssetLP("Guristas Antimatter Charge L", await getPrice("sell",21366, regionID, locationID), 1800, 1800000, null, materials, 5000, 2231, "");
    this.tableAmarr.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    this.tableAmarr.sort(function( a, b ) {
    return b.lprate-a.lprate;

    });

    let plex = await getPrice(undefined,44992);
    this.tablePLEX = formatNumber(plex);
  },
});
