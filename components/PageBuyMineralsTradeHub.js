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
        :cell-style="cellStyle"
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="100">
        </el-table-column>
        <el-table-column
          prop="jita"
          label="Jita"
          width="100"
          :formatter="formatCell">
        </el-table-column>
        <el-table-column
          prop="hek"
          label="Hek"
          width="100"
          :formatter="formatCell">
        </el-table-column>
        <el-table-column
          prop="rens"
          label="Rens"
          width="100"
          :formatter="formatCell">
        </el-table-column>
        <el-table-column
          prop="amarr"
          label="Amarr"
          width="100"
          :formatter="formatCell">
        </el-table-column>
        <el-table-column
          prop="dodixie"
          label="Dodixie"
          width="100"
          :formatter="formatCell">
        </el-table-column>
      </el-table>
    </div>
    `,

    data() {
        return {
            tableData: [],
        }
    },

    methods: {
        // Форматируем число для отображения, null показываем как "-"
        formatCell(row, column, cellValue) {
            if (cellValue === null || cellValue === undefined) return "-";
            return formatNumber(cellValue);
        },

        // Подсветка минимальной цены в строке
        cellStyle({ row, column }) {
            const hubProps = ['jita', 'hek', 'rens', 'amarr', 'dodixie'];
            if (!hubProps.includes(column.property)) return '';

            const values = hubProps
                .map(p => row[p])
                .filter(v => v !== null && v !== undefined && !isNaN(v));

            if (values.length === 0) return '';

            const min = Math.min(...values);
            if (Number(row[column.property]) === min) {
                return { background: '#c6efce' }; // зелёный фон
            }
            return '';
        }
    },

    created: async function() {
        for (var mineral in minerals) {
            let line = await getMinPrice4TradeHub(mineral, minerals[mineral]);
            this.tableData.push(line);
        }
    },
});

async function getMinPrice4TradeHub(name, id) {
    let prices = [];
    let awaitvalueJ = await getPrice("sell", id); // цена в Jita
    let jita = (Number(awaitvalueJ) < Number.MAX_SAFE_INTEGER) ? Number(awaitvalueJ) : null;

    prices = [];
    let awaitvalue = await getPrice("sell", id, "10000032", "60011866"); // Dodixie
    if (Number(awaitvalue) < Number.MAX_SAFE_INTEGER) { prices.push(Number(awaitvalue)); }
    let dodixie = (prices.length === 0) ? null : Math.min.apply(null, prices);

    prices = [];
    awaitvalue = await getPrice("sell", id, "10000043", "60008494"); // Amarr
    if (Number(awaitvalue) < Number.MAX_SAFE_INTEGER) { prices.push(Number(awaitvalue)); }
    let amarr = (prices.length === 0) ? null : Math.min.apply(null, prices);

    prices = [];
    awaitvalue = await getPrice("sell", id, "10000030", "60004588"); // Rens
    if (Number(awaitvalue) < Number.MAX_SAFE_INTEGER) { prices.push(Number(awaitvalue)); }
    let rens = (prices.length === 0) ? null : Math.min.apply(null, prices);

    prices = [];
    awaitvalue = await getPrice("sell", id, "10000042", "60005686"); // Hek
    if (Number(awaitvalue) < Number.MAX_SAFE_INTEGER) { prices.push(Number(awaitvalue)); }
    let hek = (prices.length === 0) ? null : Math.min.apply(null, prices);

    return {
        goods: name,
        jita: jita,
        hek: hek,
        rens: rens,
        amarr: amarr,
        dodixie: dodixie
    };
}