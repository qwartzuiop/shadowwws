<template>
    <div :class="s.wrapper">
        <box-background-color :class="s.inputBox" />

        <box-shadow-layers :class="s.inputBox" />

        <box-shadow-lightness :class="s.inputBox" />

        <box-shadow-alpha :class="s.inputBox" />

        <box-shadow-position-and-size :class="s.inputBox" />

        <box-output-css :class="s.inputBox" />
    </div>
</template>

<script>
import BoxBackgroundColor from './BoxBackgroundColor.vue';
import BoxShadowLightness from './BoxShadowLightness.vue';
import BoxShadowAlpha from './BoxShadowAlpha.vue';
import BoxShadowLayers from './BoxShadowLayers.vue';
import BoxShadowPositionAndSize from './BoxShadowPositionAndSize.vue';
import BoxOutputCss from './BoxOutputCss.vue';

export default {
    name: 'SettingsWindow',
    components: {
        BoxBackgroundColor,
        BoxShadowLightness,
        BoxShadowAlpha,
        BoxShadowLayers,
        BoxShadowPositionAndSize,
        BoxOutputCss,
    },
    methods: {
    },
};
</script>

<style lang="scss" module="s">
.wrapper {
    width: 430px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border-radius: 1rem;
}

.inputBox {
    padding: 1rem;
    border-radius: .5rem;
    background-color: white;
    box-shadow: 0px 2px 6px #bebeca;
}

@media (max-width: 800px) {
    .wrapper {
        width: 100%;
    }
}
</style>