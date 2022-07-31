<template>
    <div
        :class="s.wrapper"
        :style="{
            backgroundColor: backgroundColorr,
        }"
    >
        <div
            :class="s.item"
            :style="{
                backgroundColor: boxColor,
                boxShadow: shadowLayers,
            }"
        >
        </div>
    </div>
</template>

<script>
export default {
    name: 'RenderWindow',
    computed: {
        boxColor() {
            return this.$store.state.boxColor;
        },
        backgroundColorr() {
            return this.$store.state.backgroundColor;
        },
        shadowLayers() {
            return this.$store.getters.getShadowLayersOutput;
        }
    },
};
</script>

<style module="s" lang="scss">
.wrapper {
    position: sticky;
    z-index: 999;
    overflow: hidden;
    top: 1rem;
    max-height: calc(100vh - 2rem);
    flex: 1;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 2px 6px #bebeca;
}

.item {
    width: 250px;
    height: 100px;
    border-radius: .5rem;
}

@media (max-width: 800px) {
    .wrapper {
        top: 0;
        padding: 5rem 1rem;
        border-radius: 0;
        margin: 0 -1rem;
    }
}
</style>
