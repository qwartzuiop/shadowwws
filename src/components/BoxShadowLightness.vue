<template>
    <base-box title="Lightness">
        <base-input-range
            :class="s.slider"
            name="shadowAlpha"
            :value="this.$store.state.shadow.lightness"
            unit="%"
            @input="setShadowLightness"
        />

        <base-input-number
            name="shadowLightness"
            :value="this.$store.state.shadow.lightness"
            unit="%"
            @input="setShadowLightness"
        />
    </base-box>
</template>

<script>
import BaseBox from './BaseBox.vue';
import BaseInputRange from './BaseInputRange.vue';
import BaseInputNumber from './BaseInputNumber.vue';

export default {
    name: 'BoxShadowLightness',
    methods: {
        setShadowLightness(value) {
            this.$store.commit('setShadowLightness', +value);
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
    background: linear-gradient(to right, black 0%, white 100%);
}
</style>
