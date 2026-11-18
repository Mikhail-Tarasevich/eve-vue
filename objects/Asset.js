class Asset {
    constructor(name, id, materials, runcount) { 
        this.name = name; 
        this.id = id;
        this.materials = materials;
        if (runcount==null || runcount==undefined) {
            this.runcount = 1;
        } else {
            this.runcount = runcount; // количество предметов, получаемых при производстве 1 прогона
        }
    }

    async getPrice(priceType) {
        let price = 0;
        if (priceType.toLowerCase()=="sell") {
            if (this.priceSell==null) {
                this.priceSell = await getPrice("sell",this.id);
            }
            price = this.priceSell
        } else {
            if (this.priceBuy==null) {
                this.priceBuy = await getPrice("buy",this.id);
            }
            price = this.priceBuy
        }
        return price
    }

    async getPriceAllMaterials() {
        let price = 0;
        if (this.materials==null) {
            return price;
        } else {
            for (var i=0; i<this.materials.length; i++) {
                price = price + (await getPrice("sell",this.materials[i].id)) * this.materials[i].count;
            }
            price = price / this.runcount;
            return price;
        }
    }
}

class AssetLP {
    constructor(name, price, storeLP, storeISK=0, storeItems, materials, count=1, workprice=0, comment="") { 
        this.name = name;  // наименование выводимого предмета
        this.price = price;  // стоимость на рынке выводимого предмета
        this.materials = materials; // массив с ID и количеством используемых при производстве материалов
        this.storeLP = storeLP; // количество выводимых LP
        this.storeItems = storeItems;  // массив со стоимостью  и количеством необходимых для вывода предметов
        this.workprice = workprice; // стоимость происводства
        this.storeISK = storeISK; // количество ISK необходимых для вывода предметов
        this.count = count; // количество предметов, получаемых при производстве 1 прогона
        this.comment = comment; // комментарии к выводу LP
        // себестоимость без учета LP
        this.costs = workprice + storeISK;
        if (materials!=null && materials!=undefined) {
            if (this.costs!="-") {
                for (var i=0; i<this.materials.length; i++) {
                    this.costs = (this.costs=="-") ? "-" : ((this.materials[i].price == Number.MAX_SAFE_INTEGER) ? "-" : this.costs + this.materials[i].price * this.materials[i].count);
                };
            }
        }
        if (storeItems!=null && storeItems!=undefined) {
            if (this.costs!="-") {
                for (var i=0; i<this.storeItems.length; i++) {
                    this.costs = this.costs + this.storeItems[i].price * this.storeItems[i].count;
                }
            }
        }
        // профит
        this.profit = (this.costs=="-" || price==Number.MAX_SAFE_INTEGER) ? "-" : (price * commisionSellLong - (this.costs /  count));
        // курс LP
        this.lprate = (this.profit=="-") ? "-" : (this.profit / (storeLP / count));
    }
};

class AssetProduction {
    constructor(name, sell, buy, materials, count=1, workprice=0, comment="") { 
        this.name = name;  // наименование выводимого предмета
        this.sell = sell;  // цена покупки
        this.buy = buy;  // цена продажи
        this.materials = materials; // массив с ID и количеством используемых при производстве материалов
        this.workprice = workprice; // стоимость происводства
        this.count = count; // количество предметов, получаемых при производстве 1 прогона
        this.comment = comment; // комментарии к выводу LP
        
        this.costs = workprice;
        if (materials!=null && materials!=undefined) {
            for (var i=0; i<this.materials.length; i++) {
                this.costs = (this.costs=="-") ? "-" : ((this.materials[i].price == Number.MAX_SAFE_INTEGER) ? "-" : this.costs + this.materials[i].price * this.materials[i].count);
            };
        }

        // профит
        this.profit = (this.costs=="-") ? "-" : (this.sell * commisionSellLong - (this.costs /  count));
    }
}