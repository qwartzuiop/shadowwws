<template>
    <base-box title="Alpha">
        <base-input-range
            :class="s.slider"
            name="shadowAlpha"
            :value="this.$store.state.shadow.alpha"
            unit="%"
            @input="setShadowAlpha"
        />

        <base-input-number
            name="shadowLightness"
            :value="this.$store.state.shadow.alpha"
            unit="%"
            @input="setShadowAlpha"
        />
    </base-box>
</template>

<script>
import BaseBox from './BaseBox.vue';
import BaseInputRange from './BaseInputRange.vue';
import BaseInputNumber from './BaseInputNumber.vue';

export default {
    name: 'BoxShadowAlpha',
    methods: {
        setShadowAlpha(value) {
            this.$store.commit('setShadowAlpha', +value);
        },
    },
    components: {
        BaseBox,
        BaseInputRange,
        BaseInputNumber,
    },
};
</script>

<style module="s" lang="scss">
.slider {
    background: linear-gradient(to left, black 0%, white 100%);
}
</style>
