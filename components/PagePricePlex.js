Vue.component('page-price-plex', {
    template: `
    <div>
        <table>
            <tbody>
                <tr><td align="right">500 PLEX =</td><td align="left">{{price_500plex}} ISK</td></tr>
                <tr><td align="right">1 PLEX =</td><td align="left">{{price_plex}} ISK</td></tr>
            </tbody>
        </table>
    </div>`,
    data() {
        return {
        price_500plex: '???',
        price_plex: '???',
    }},
    created: async function() {
            let plex = await getPrice(undefined,44992); 
            let plex500 = plex * 500;
            this.price_500plex = plex500.toLocaleString('ru-RU');
            this.price_plex = plex.toLocaleString('ru-RU');
    },
});