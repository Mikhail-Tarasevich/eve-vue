Vue.component('page-price-jita-nennamaila', {
    template: `
    <div>
        <h1>Сравнение цен между Jita и Nennamaila</h1>
        <br>
        <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="300">
        </el-table-column>
        <el-table-column
          prop="priceNennamaila"
          label="Nennamaila"
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="priceJita"
          label="Jita"
          width="150"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="profit"
          label="Разница Nennamaila-Jita"
          width="200"
          header-align="center"
          align="right">
        </el-table-column>
        <el-table-column
          prop="percent"
          label="%"
          width="100"
          header-align="center"
          align="right">
        </el-table-column>
      </el-table>
    </div>
    `,

    data() {
        return {
            tableData: [],
    }},

    created: async function() {
        let regionID = 10000069; // Black Rise
        let locationID = 60015126; // Nennamaila X - Wiyrkomi Peace Corps Assembly Plant

        let goodsID = 208;
        let price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Inferno Heavy Missile", price));

        goodsID = 207;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Mjolnir Heavy Missile", price));

        goodsID = 206;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Nova Heavy Missile", price));

        goodsID = 209;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Scourge Heavy Missile", price));

        goodsID = 27447;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Inferno Heavy Missile" , price));

        goodsID = 27435;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Mjolnir Heavy Missile" , price));

        goodsID = 27453;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Nova Heavy Missile" , price));

        goodsID = 27441;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Scourge Heavy Missile" , price));

        goodsID = 20308;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Inferno Heavy Assault Missile" , price));

        goodsID = 20306;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Mjolnir Heavy Assault Missile" , price));

        goodsID = 21867;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Nova Heavy Assault Missile" , price));

        goodsID = 20307;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Scourge Heavy Assault Missile" , price));

        goodsID = 27405;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Inferno Heavy Assault Missile" , price));

        goodsID = 27419;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Mjolnir Heavy Assault Missile" , price));

        goodsID = 27401;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Nova Heavy Assault Missile" , price));

        goodsID = 27413;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Scourge Assault Heavy Missile" , price));

        goodsID = 211;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Inferno Light Missile" , price));

        goodsID = 212;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Mjolnir Light Missile" , price));

        goodsID = 213;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Nova Light Missile" , price));

        goodsID = 210;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Scourge Light Missile" , price));

        goodsID = 27371;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Inferno Light Missile" , price));

        goodsID = 27387;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Mjolnir Light Missile" , price));

        goodsID = 27381;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Nova Light Missile" , price));

        goodsID = 27361;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Scourge Light Missile" , price));
        
        goodsID = 2514;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Inferno Rocket" , price));

        goodsID = 2512;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Mjolnir Rocket" , price));

        goodsID = 2516;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Nova Rocket" , price));

        goodsID = 266;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Scourge Rocket" , price));

        goodsID = 27315;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Inferno Rocket" , price));

        goodsID = 27321;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Mjolnir Rocket" , price));

        goodsID = 27327;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Nova Rocket" , price));

        goodsID = 27333;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caldari Navy Scourge Rocket" , price));

        goodsID = 17619;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Hookbill Navy Issue" , price));

        goodsID = 17634;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caracal Navy Issue" , price));

        goodsID = 29340;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Osprey Navy Issue" , price));

        goodsID = 602;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Kestrel" , price));

        goodsID = 603;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Merlin" , price));

        goodsID = 32876;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Corax" , price));

        goodsID = 16238;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cormorant" , price));

        goodsID = 593;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Tristan" , price));

        goodsID = 32872;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Algos" , price));

        goodsID = 16240;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Catalyst" , price));

        goodsID = 621;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Caracal" , price));

        goodsID = 24698;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Drake" , price));

        goodsID = 222;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Antimatter Charge S" , price));

        goodsID = 230;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Antimatter Charge M" , price));

        goodsID = 238;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Antimatter Charge L" , price));

        goodsID = 3554;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 100" , price));

        goodsID = 11283;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 150" , price));

        goodsID = 11285;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 200" , price));

        goodsID = 11287;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 400" , price));

        goodsID = 11289;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 800" , price));

        goodsID = 3552;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 75" , price));

        goodsID = 264;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 50" , price));

        goodsID = 263;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 25" , price));

        goodsID = 41489;
        price = {Jita: await getPrice("sell",goodsID), Nennamaila: await getPrice("sell",goodsID, regionID, locationID)};
        this.tableData.push(makeLine("Cap Booster 3200" , price));

        this.tableData.sort(compare);
    },
});

function compare( a, b ) {
  
    let aa = (a.profit=="!!!") ? Number.MAX_SAFE_INTEGER : Number(a.profit.replace(",",".").split(" ").join(""));
    let bb = (b.profit=="!!!") ? Number.MAX_SAFE_INTEGER : Number(b.profit.replace(",",".").split(" ").join(""));
    if ( aa < bb ){
      return 1;
    }
    if ( aa > bb ){
      return -1;
    }
    return 0;
};

function makeLine(goodsName, price) {
  let profit = (price.Nennamaila==Number.MAX_SAFE_INTEGER) ? "!!!" : formatNumber(price.Nennamaila-price.Jita);
  let percentJN = (price.Nennamaila==Number.MAX_SAFE_INTEGER) ? "!!!" : formatNumber(100 * price.Nennamaila / price.Jita);
  return {goods: goodsName, priceNennamaila: formatNumber(price.Nennamaila),  priceJita: formatNumber(price.Jita),  profit: profit,  percent: percentJN};
};