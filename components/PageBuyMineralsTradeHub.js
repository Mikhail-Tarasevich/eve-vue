Vue.component('page-buy-minerals-tradehub', {
    template: `
    <div>
        <h1>Закупка минералов в торговых хабах</h1>
        <br>
        <p>Все покупается по sell</p>
        <br>
        <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="100">
        </el-table-column>
        <el-table-column
          prop="jita"
          label="Jita"
          width="100">
        </el-table-column>
        <el-table-column
          prop="hek"
          label="Hek"
          width="100">
        </el-table-column>
        <el-table-column
          prop="rens"
          label="Rens"
          width="100">
        </el-table-column>
        <el-table-column
          prop="amarr"
          label="Amarr"
          width="100">
        </el-table-column>
        <el-table-column
          prop="dodixie"
          label="Dodixie"
          width="100">
        </el-table-column>
      </el-table>
    </div>
    `,

    data() {
        return {
            tableData: [],
    }},
    
    created: async function() {
            for (var mineral in minerals) {
                let line = await getMinPrice4TradeHub(mineral, minerals[mineral]);
                this.tableData.push(line);
              }
     },
});

async function getMinPrice4TradeHub(name, id) {
    prices = new Array();
    let awaitvalueJ = await getPrice("sell",id); // цена в Jita

    prices = new Array();
    let awaitvalue = await getPrice("sell",id,"10000032","60011866"); // цена в Dodixie IX - Moon 20 - Federation Navy Assembly Plant
    if (awaitvalue<Number.MAX_SAFE_INTEGER) {prices.push(awaitvalue)};
    let awaitvalueD = (prices.length==0) ? "-" : formatNumber(Math.min.apply(null, prices)) // цена в Dodixie

    prices = new Array();
    awaitvalue = await getPrice("sell",id,"10000043","60008494"); // цена в Amarr VIII (Oris) - Emperor Family Academy
    if (awaitvalue<Number.MAX_SAFE_INTEGER) {prices.push(awaitvalue)};
    let awaitvalueA = (prices.length==0) ? "-" : formatNumber(Math.min.apply(null, prices)) // цена в Amarr

    prices = new Array();
    awaitvalue = await getPrice("sell",id,"10000030","60004588"); // цена в Rens VI - Moon 8 - Brutor Tribe Treasury
    if (awaitvalue<Number.MAX_SAFE_INTEGER) {prices.push(awaitvalue)};
    let awaitvalueR = (prices.length==0) ? "-" : formatNumber(Math.min.apply(null, prices)) // цена в Rens

    prices = new Array();
    awaitvalue = await getPrice("sell",id,"10000042","60005686"); // цена в Hek VIII - Moon 12 - Boundless Creation Factory
    if (awaitvalue<Number.MAX_SAFE_INTEGER) {prices.push(awaitvalue)};
    let awaitvalueH = (prices.length==0) ? "-" : formatNumber(Math.min.apply(null, prices)) // цена в Hek

    return {goods: name, jita: formatNumber(awaitvalueJ), dodixie: awaitvalueD, amarr: awaitvalueA, rens: awaitvalueR, hek: awaitvalueH};
};