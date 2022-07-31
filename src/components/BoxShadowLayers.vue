<template>
    <base-box title="Layers">
        <div :class="s.wrapper">
            <template v-for="i in maxLayers">
                <input
                    :class="s.input"
                    type="radio"
                    name="shadowLayersRadio"
                    :id="`shadowLayersRadio-${i}`"
                    :value="i"
                    :checked="shadowLayers == i"
                >
                <label
                    :for="`shadowLayersRadio-${i}`"
                    :class="s.tab"
                    @click="setShadowLayers"
                >
                    {{ i }}
                </label>
            </template>
            <span
                :class="s.glider"
                :style="{ width: `${100 / maxLayers}%`, left: `${(shadowLayers - 1) * (100 / maxLayers)}%` }"
            >
            </span>
        </div>
    </base-box>
</template>

<script>
import BaseBox from './BaseBox.vue';
import BaseInputRange from './BaseInputRange.vue';
import BaseInputNumber from './BaseInputNumber.vue';

export default {
    name: 'BoxShadowLayers',
    data() {
        return {
            maxLayers: this.$store.state.shadow.maxLayers,
            shadowLayers: this.$store.state.shadow.layers,
        };
    },
    methods: {
        setShadowLayers(e) {
            this.shadowLayers = +e.target.textContent;
            this.$store.commit('setShadowLayers', +e.target.textContent);
        },
    },
    components: {
        BaseBox,
    },
};
</script>

<style module="s" lang="scss">
.wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    border: 0.25rem solid #f5f5f9;
    border-radius: 0.25rem;
    background-color: #f5f5f9;
}

.input {
    appearance: none;
    display: none;
}

.input:checked+.tab {
    color: white;
}

.tab {
    z-index: 2;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2rem;
    transition: color .2s ease;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
}

.glider {
    z-index: 1;
    position: absolute;
    height: 100%;
    background-color: hsl(239deg 100% 71%);
    box-shadow: 0px 0px 4px hsl(239deg 100% 71% / 70%);
    border-radius: .25rem;
    transition: left .2s ease-out;
}
</style>