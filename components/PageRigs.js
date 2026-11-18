Vue.component('page-rigs', {
    template: `
    <div>
        <h1>Риги</h1>
        <br>
        <p>Все покупается по sell, строится на месте и продается по sell</p>
        <br>
        <p>Jita:</p>
        <el-table
        :data="table1"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="300"
          header-align="center"
          align="left">
        </el-table-column>
        <el-table-column
          prop="costs"
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
            table1: [],
    }},

    created: async function() {
      let BurnedLogicCircuit = await getPrice("sell",25600);
      let WardConsole = await getPrice("sell",25606);
      let TrippedPowerCircuit = await getPrice("sell",25598);

      let materials = [];
      let objRow = null;
      // Large Core Defense Field Extender I*
      materials = [
          {name: "Burned Logic Circuit", price: BurnedLogicCircuit, count: 100}, 
          {name: "Ward Console", price: WardConsole, count: 40}, 
          {name: "Tripped Power Circuit", price: TrippedPowerCircuit, count: 100}, 
      ];
      objRow = new AssetProduction("Large Core Defense Field Extender I", await getPrice("sell",26088), await getPrice("buy",26088), materials, 1, 466266, "");
      this.table1.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.sell),  buy: formatNumber(objRow.buy),  profit: formatNumber(objRow.profit),  profitSum: objRow.profit});
      // Small Core Defense Field Purger I*
      materials = [
        {name: "Burned Logic Circuit", price: BurnedLogicCircuit, count: 4}, 
        {name: "Ward Console", price: WardConsole, count: 2}, 
        {name: "Tripped Power Circuit", price: TrippedPowerCircuit, count: 4}, 
      ];
      objRow = new AssetProduction("Small Core Defense Field Purger I", await getPrice("sell",31800), await getPrice("buy",31800), materials, 1, 18346, "");
      this.table1.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.sell),  buy: formatNumber(objRow.buy),  profit: formatNumber(objRow.profit),  profitSum: objRow.profit});
      // Small Core Defense Operational Solidifier I*
      materials = [
        {name: "Burned Logic Circuit", price: BurnedLogicCircuit, count: 4}, 
        {name: "Ward Console", price: WardConsole, count: 2}, 
        {name: "Tripped Power Circuit", price: TrippedPowerCircuit, count: 4}, 
      ];
      objRow = new AssetProduction("Small Core Defense Operational Solidifier I", await getPrice("sell",31816), await getPrice("buy",31816), materials, 1, 18346, "");
      this.table1.push({goods: objRow.name, costs: formatNumber(objRow.costs),  sell: formatNumber(objRow.sell),  buy: formatNumber(objRow.buy),  profit: formatNumber(objRow.profit),  profitSum: objRow.profit});

      this.table1.sort(function( a, b ) {
        return b.profitSum-a.profitSum;
      });
    },
});