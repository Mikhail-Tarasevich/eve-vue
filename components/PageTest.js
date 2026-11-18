Vue.component('page-test', {
    template: `
    <div>
    version 1
        <table border="1px">
            <tbody>
                <tr><td>{{name}}</td><td>{{sell}}</td><td>{{buy}}</td><td>{{priceAllMaterials}}</td></tr>
            </tbody>
        </table>
    </div>`,
    data() {
        return {
        name: '???',
        sell: '???',
        buy: '???',
        priceAllMaterials: '???',
    }},
    created: async function() {
        let location = ["60015126", "60015130"];

        this.name = await getPriceML("sell", "2203", "10000069", location);
    },
});