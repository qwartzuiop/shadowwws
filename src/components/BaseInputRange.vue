<template>
    <input
        :class="s.slider"
        type="range"
        :name="name"
        min="0"
        max="100"
        :value="value"
        @input="$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
    name: 'BaseInputRange',
    props: {
        name: String,
        value: Number,
    },
};
</script>

<style module="s" lang="scss">
.slider {
    appearance: none;
    flex: 1;
    border: 1px solid hsl(239deg 100% 71%);
    border-radius: 4px;

    &:focus {
        outline: 0;
        box-shadow: 0px 1px 3px hsl(239deg 100% 71% / 70%);
    }

    &::-webkit-slider-thumb {
        appearance: none;
        position: relative;
        height: 2rem;
        margin-top: -.25rem;
        width: .75rem;
        // background-color: white;
        background-color: hsl(239deg 100% 71%);
        border-radius: .1rem;
        // box-shadow: 0px 2px 6px hsl(0deg 0% 50%);
        box-shadow: 0px 2px 6px hsl(239deg 100% 71% / 70%);

        &:hover {
            cursor: ew-resize;
        }
    }

    &::-webkit-slider-runnable-track {
        appearance: none;
        height: 1.5rem;
        background: transparent;
    }
}
</style>
