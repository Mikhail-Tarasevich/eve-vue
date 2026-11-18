Vue.component('page-lp-capbooster', {
    template: `
    <div>
        <h1>LP Store Cap Booster</h1>
        PLEX = {{tablePLEX}}
        <br>
        <br>
        <p>Все покупается на месте по sell и продается по sell</p>
        <h2>Jita:</h2>
        <el-table
        :data="tableJita"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="180">
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
      </el-table>
      <br>
      <h2>Amarr:</h2>
        <el-table
        :data="tableAmarr"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="180">
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
      </el-table>
      <br>
      <h2>Dodixie:</h2>
        <el-table
        :data="tableDodixie"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="180">
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
      </el-table>
      <br>
      <h2>Hek:</h2>
        <el-table
        :data="tableHek"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="180">
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
      </el-table>
      <br>
      <h2>Rens:</h2>
        <el-table
        :data="tableRens"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="180">
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
      </el-table>
      <br>
      <h2>Nennamaila:</h2>
        <el-table
        :data="tableNennamaila"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="goods"
          label="Товар"
          width="180">
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
      </el-table>
    </div>
    `,

    data() {
        return {
            tablePLEX: "???", 
            tableJita: [],
            tableAmarr: [],
            tableDodixie: [],
            tableRens: [],
            tableHek: [],
            tableNennamaila: [],
    }},

    methods: {
        lprate(row, column) {
          return Number(row.lprate.replace(",",".").split(" ").join(""));
        }
    },

    created: async function() {

      this.tableJita = await getLPCapBooster("10000002", ["60003760"]); // JITA 4-4
      this.tableAmarr = await getLPCapBooster("10000043", ["60008494"]); // Amarr VIII (Oris) - Emperor Family Academy
      this.tableDodixie = await getLPCapBooster("10000032", ["60011866"]); // Dodixie IX - Moon 20 - Federation Navy Assembly Plant
      this.tableHek = await getLPCapBooster("10000042", ["60005686"]); // Hek VIII - Moon 12 - Boundless Creation Factory
      this.tableRens = await getLPCapBooster("10000030", ["60004588"]); // Rens VI - Moon 8 - Brutor Tribe Treasury
      /*
      60015130  Rakapas V - Home Guard Assembly Plant
      60015126  Nennamaila X - Wiyrkomi Peace Corps Assembly Plant
      */
      this.tableNennamaila = await getLPCapBooster("10000069", ["60015126", "60015130"]); 
      
      let plex = await getPrice(undefined,44992);
      this.tablePLEX = formatNumber(plex);
    }
});
