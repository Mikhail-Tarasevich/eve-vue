Vue.component('page-right', {
    props: ['parametrs'],
    data: function () {
        return {
            styleRightPage: {
                display: 'flex',
            },
        }
    },
    template: `<div id="rightPage"  v-bind:style="styleRightPage">
        <component v-bind:is="rightComponent"></component>
    </div>`,
    computed: {
        rightComponent: function() {
            return this.$data.rightcomponentname;
        }
    }
});