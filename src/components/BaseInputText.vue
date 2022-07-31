<template>
    <input
        :class="s.input"
        type="text"
        :spellcheck="false"
        :autocorrect="false"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
    />
</template>

<script>
export default {
    name: 'BaseInputText',
    props: {
        name: String,
        placeholder: String,
        value: String,
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
        },
    },
};
</script>

<style module="s" lang="scss">
.input {
    appearance: none;
    background-color: #f5f5f9;
    border: 1px solid hsl(239deg 100% 71%);
    width: 100%;
    padding: .25rem .5rem;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: normal;
    border-radius: .25rem;

    &:focus {
        outline: 0;
        box-shadow: 0px 1px 3px hsl(239deg 100% 71% / 70%);
    }
}
</style>
