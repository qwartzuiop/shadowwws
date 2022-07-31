import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        boxColor: '#F5F5F9',
        backgroundColor: '#FFFFFF',

        shadow: {
            layers: 3,
            maxLayers: 5,
            lightness: 32,
            alpha: 16,
            x: 0,
            y: 12,
            blur: 8,
            spread: 0,
        },
    },
    getters: {
        getShadowLayersOutput: state => {
            let { layers, lightness, alpha, x, y, blur, spread } = state.shadow;
            let str = '';
            for (let i = 1; i <= layers; i++) {
                str += +(Math.round(x * i / layers + 'e+1') + 'e-1') + 'px ';
                str += +(Math.round(y * i / layers + 'e+1') + 'e-1') + 'px ';
                str += +(Math.round(blur * i / layers + 'e+1') + 'e-1') + 'px ';
                str += +(Math.round(spread * i / layers + 'e+1') + 'e-1') + 'px ';
                str += 'hsl(0deg 0% ' + lightness + '% ' + ' / ' + +(Math.round(alpha / 100 * i / layers + 'e+2') + 'e-2') + ')';
                str += i !== layers ? ',\n' : '';
            };
            return str;
        }
    },
    mutations: {
        setBackgroundColor(state, color) {
            state.backgroundColor = color;
        },
        setBoxColor(state, color) {
            state.boxColor = color;
        },
        setShadowLayers(state, number) {
            state.shadow.layers = number;
        },
        setShadowLightness(state, lightness) {
            state.shadow.lightness = lightness;
        },
        setShadowAlpha(state, alpha) {
            state.shadow.alpha = alpha;
        },
        setShadowX(state, offset) {
            state.shadow.x = offset;
        },
        setShadowY(state, offset) {
            state.shadow.y = offset;
        },
        setShadowBlur(state, blur) {
            state.shadow.blur = blur;
        },
        setShadowSpread(state, spread) {
            state.shadow.spread = spread;
        },
    },
});
