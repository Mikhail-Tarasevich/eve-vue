Vue.component('page-buy-minerals-onnamon', {
    template: `
    <div>
        <h1>Закупка минералов в Onnamon</h1>
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
          prop="onnamon"
          label="Onnamon"
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
                let line = await getMinPrice4Onnamon(mineral, minerals[mineral]);
                this.tableData.push(line);
              }
     },
});

async function getMinPrice4Onnamon(name, id) {
    let awaitvalueJ = await getPrice("sell",id); // цена в Jita
    let awaitvalue = await getPrice("sell",id,"10000069","60015070"); // цена в Station - Onnamon IV - State Protectorate Logistic Support
    prices = new Array();
    if (awaitvalue<Number.MAX_SAFE_INTEGER) {prices.push(awaitvalue)};
    awaitvalue = await getPrice("sell",id,"10000069","60015131"); // цена в Station - Onnamon I - State War Academy
    if (awaitvalue<Number.MAX_SAFE_INTEGER) {prices.push(awaitvalue)};
    let awaitvalueO = (prices.length==0) ? "-" : formatNumber(Math.min.apply(null, prices)) // цена в Onnamon
    return {goods: name, jita: formatNumber(awaitvalueJ), onnamon: awaitvalueO};
};