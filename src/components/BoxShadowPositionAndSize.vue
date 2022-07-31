<template>
    <base-box title="Position & Size">
        <div :class="s.col">
            <div :class="s.item">
                <span :class="s.label">X:</span>
                <base-input-number
                    name="shadowX"
                    :value="this.$store.state.shadow.x"
                    unit="px"
                    @input="setShadowX"
                    :controls="true"
                />
            </div>

            <div :class="s.item">
                <span :class="s.label">Y:</span>
                <base-input-number
                    name="shadowY"
                    :value="this.$store.state.shadow.y"
                    unit="px"
                    @input="setShadowY"
                    :controls="true"
                />
            </div>
        </div>

        <div :class="s.col">
            <div :class="s.item">
                <span :class="s.label">Blur:</span>
                <base-input-number
                    name="shadowBlur"
                    :value="this.$store.state.shadow.blur"
                    unit="px"
                    @input="setShadowBlur"
                    :controls="true"
                />
            </div>

            <div :class="s.item">
                <span :class="s.label">Spread:</span>
                <base-input-number
                    name="shadowSpread"
                    :value="this.$store.state.shadow.spread"
                    unit="px"
                    @input="setShadowSpread"
                    :controls="true"
                />
            </div>
        </div>
    </base-box>
</template>

<script>
import BaseBox from './BaseBox.vue';
import BaseInputNumber from './BaseInputNumber.vue';

export default {
    name: 'BoxShadowPositionAndSize',
    methods: {
        setShadowX(value) {
            this.$store.commit('setShadowX', +value);
        },
        setShadowY(value) {
            this.$store.commit('setShadowY', +value);
        },
        setShadowBlur(value) {
            this.$store.commit('setShadowBlur', +value);
        },
        setShadowSpread(value) {
            this.$store.commit('setShadowSpread', +value);
        },
    },
    components: {
        BaseBox,
        BaseInputNumber,
    },
};
</script>

<style module="s" lang="scss">
.col {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

.item {
    display: flex;
    justify-content: flex-end;
}

.label {
    margin: 0 .5rem 0 0;
    align-self: center;
}
</style>
