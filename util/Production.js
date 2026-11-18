/* возвращает стоимость производства T1

materials = список материалов {name, count, id}
*/
async function getProductionCostT1(materials, work=0, ordertype="sell", region="10000002", location=60003760) {
/*
    let costTotal = work;
    for (var item in materials) {
        let cost = await getPrice(ordertype,materials[item].id,region,location);
        costTotal = costTotal + cost * materials[item].count
    }
    return costTotal
*/
    return new Promise(async function(resolve, reject) {

        let costTotal = work;
        for (var item in materials) {
            let cost = await getPrice(ordertype,materials[item].id,region,location);
            costTotal = costTotal + cost * materials[item].count
        }
        resolve(costTotal);
        if (costTotal==0) reject(costTotal);
    });
}

/* парсит сведения о комплектующих

пример str:
Минералы				
Item	Required	Available	Est. Unit price	typeID
<localized hint="Morphite">Morphite*</localized>	50	0	42671.39	11399
Комплектующие				
Item	Required	Available	Est. Unit price	typeID
<localized hint="Medium Shield Extender I">Medium Shield Extender I*</localized>	10	0	31699.15	3829
<localized hint="R.A.M.- Shield Tech">R.A.M.- Shield Tech*</localized>	10	0	1026.57	11484
<localized hint="Hydrogen Batteries">Hydrogen Batteries*</localized>	60	0	524.55	3685
Компоненты				
Item	Required	Available	Est. Unit price	typeID
<localized hint="Sustained Shield Emitter">Sustained Shield Emitter*</localized>	60	0	48263.7	11558
*/
function parserComponentsInfo(str) {
    let materials = {};
    let arrLine = str.split("\n");
    for(const arrline of arrLine) {
        if (arrline.substring(0,1)=="<") {
            let res = {};
            let arr = arrline.split("\t");
            res.name = arr[0].substring(arr[0].indexOf('">')+2,arr[0].indexOf('*</'));
            res.count = Number(arr[1]);
            res.id = arr[4];
            materials[res.id] = res
        }
      }
    return materials;
}

// возвращает стоимость производства
async function getProductionCost(productID, productWork=0, ordertype="sell", region="10000002", location=60003760) {
    if (productID==null || productID==undefined) {
        return Number.MAX_SAFE_INTEGER;
    }

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p6 = 0;

    switch (productID) {
        case 57478: 
        case "Auto-Integrity Preservation Seal":
            p1 = await getPrice(ordertype, "2312", region, location); // Supertensile Plastics
            if (p1==Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
            p2 = await getPrice(ordertype, "2463", region, location); // Nanites
            if (p2==Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
            p3 = await getPrice(ordertype, "57457", region, location); // ReinforcedCarbonFiber
            if (p3==Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
            return ((p1*4 + p2*4 + p3*9) + productWork) / 3;
        case 57486: 
        case "Life Support Backup Unit":
            p1 = await getPrice(ordertype, "2319", region, location); // Test Cultures
            if (p1==Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
            p2 = await getPrice(ordertype, "3775", region, location); // Viral Agent
            if (p2==Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
            p3 = await getPrice(ordertype, "57457", region, location);
            if (p3==Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER; // ReinforcedCarbonFiber
            return ((p1*8 + p2*8 + p3*9) + productWork) / 3;
        default:
            console.log("default");
            return Number.MAX_SAFE_INTEGER;
      }
}

// возвращает массив вывода LP для Cap Booster
async function getLPCapBooster(region="10000002", location=[60003760]) {
    let table = [];
    let materials = [];
    let objRow = null;
    // Navy Cap Booster 100
    materials = [
        {name: "Cap Booster 100", price: await getPriceML("sell",3554, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 100", await getPriceML("sell",31982, region, location), 250, 250000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 150
    materials = [
        {name: "Cap Booster 150", price: await getPriceML("sell",11283, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 150", await getPriceML("sell",31990, region, location), 375, 375000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 200
    materials = [
        {name: "Cap Booster 200", price: await getPriceML("sell",11285, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 200", await getPriceML("sell",31998, region, location), 500, 500000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 400
    materials = [
        {name: "Cap Booster 400", price: await getPriceML("sell",11287, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 400", await getPriceML("sell",32006, region, location), 1000, 1000000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 800
    materials = [
        {name: "Cap Booster 800", price: await getPriceML("sell",11289, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 800", await getPriceML("sell",32014, region, location), 1000, 1000000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 75
    materials = [
        {name: "Cap Booster 75", price: await getPriceML("sell",3552, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 75", await getPriceML("sell",33334, region, location), 185, 185000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 50
    materials = [
        {name: "Cap Booster 50", price: await getPriceML("sell",264, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 50", await getPriceML("sell",33332, region, location), 125, 125000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 25
    materials = [
        {name: "Cap Booster 25", price: await getPriceML("sell",263, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 25", await getPriceML("sell",33330, region, location), 60, 60000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});
    // Navy Cap Booster 3200
    materials = [
        {name: "Cap Booster 3200", price: await getPriceML("sell",41489, region, location), count: 20}, 
    ];
    objRow = new AssetLP("Navy Cap Booster 3200", await getPriceML("sell",41490, region, location), 8000, 8000000, null, materials, 20, 0, "");
    table.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.price),  profit: formatNumber(objRow.profit),  lprate: objRow.lprate,  formatlprate: formatNumber(objRow.lprate),  comment: objRow.comment});

    table.sort(function( a, b ) {
        return b.lprate-a.lprate;
    });

    return table
}

// возвращает данные для таблицы цен
function getTableLineGSBN(goods="", sell=0, buy=0) {
    return {goods: goods, sell: formatNumber(sell), buy: formatNumber(buy), notes: ((((sell/buy)-1)<0.001) ? "Что-то не так с ценой" : "")}
}