function getPrice(ordertype="sell", product="34", region="10000002", location="60003760") {
    return fetch('https://esi.evetech.net/latest/markets/'+region+'/orders/?datasource=tranquility&order_type='+ordertype+'&type_id='+product)
    .then(response => response.json())
    .then(commits => {
                        let commisionStation = .84;
                        let minprice = 0;
                        if (ordertype=="buy") {
                            minprice = 0;
                            for (let i=0; i <commits.length; i++) {
                            if (minprice<commits[i].price && commits[i].location_id==location) {
                                minprice = commits[i].price;
                            }
                            }
                            minprice = minprice * (1+commisionStation/100)
                        } else { // sell
                            minprice = Number.MAX_SAFE_INTEGER;
                            for (let i=0; i <commits.length; i++) {
                            if (minprice>commits[i].price && commits[i].location_id==location) {
                                minprice = commits[i].price;
                            }
                            }
                        }
                        return minprice;
                    });
};

function getPriceML(ordertype="sell", product="34", region="10000002", location=["60003760"]) {
    return fetch('https://esi.evetech.net/latest/markets/'+region+'/orders/?datasource=tranquility&order_type='+ordertype+'&type_id='+product)
    .then(response => response.json())
    .then(commits => {
                        let commisionStation = .84;
                        let minprice = 0;
                        if (ordertype=="buy") {
                            minprice = 0;
                            for (let i=0; i <commits.length; i++) {
                                if (minprice<commits[i].price && location.includes(""+commits[i].location_id)) {
                                    minprice = commits[i].price;
                                }
                            }
                            minprice = minprice * (1+commisionStation/100)
                        } else { // sell
                            minprice = Number.MAX_SAFE_INTEGER;
                            for (let i=0; i <commits.length; i++) {
                                if (minprice>commits[i].price && location.includes(""+commits[i].location_id)) {
                                    minprice = commits[i].price;
                                }
                            }
                        }
                        return minprice;
                    });
}