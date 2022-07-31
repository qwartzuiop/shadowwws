<template>
    <div
        :class="s.wrapper"
        @click="focusOnClick"
    >
        <input
            :class="s.input"
            type="number"
            inputmode="numeric"
            :name="name"
            :placeholder="placeholder"
            :value="value"
            @input="onInput"
            ref="input"
        />

        <span :class="s.unit">{{ unit }}</span>

        <div
            :class="s.wrapperControls"
            v-if="controls"
        >
            <button
                :class="s.button"
                @click="increase"
            >
                <img
                    src="../assets/ArrowUp.svg"
                    alt="+"
                >
            </button>

            <button
                :class="s.button"
                @click="decrease"
            >
                <img
                    src="../assets/ArrowDown.svg"
                    alt="-"
                >
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseInputNumber',
    props: {
        unit: String,
        name: String,
        placeholder: String,
        value: Number,
        controls: Boolean,
    },
    methods: {
        focusOnClick() {
            this.$refs.input.focus();
        },
        onInput(e) {
            if (this.$props.unit === '%') {
                let input = +e.target.value;
                if (input < 0) e.target.value = 100;
                if (input > 100) e.target.value = 0;
            };

            this.$emit('input', e.target.value);
        },
        increase() {
            this.$refs.input.value++;
            this.$emit('input', this.$refs.input.value);
        },
        decrease() {
            this.$refs.input.value--;
            this.$emit('input', this.$refs.input.value);
        },
    },
};
</script>

<style module="s" lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #f5f5f9;
    border: 1px solid hsl(239deg 100% 71%);
    border-radius: 4px;
    cursor: text;
    overflow: hidden;

    &:focus-within {
        outline: 0;
        box-shadow: 0px 1px 3px hsl(239deg 100% 71% / 70%);
    }
}

.input {
    appearance: none;
    background-color: transparent;
    border: 0;
    width: 2.5rem;
    padding: 0 .25rem;
    font-size: inherit;
    line-height: inherit;
    text-align: end;

    &:focus {
        outline: 0;
    }
}

.unit {
    margin: 0 .25rem 0 0;
}

.wrapperControls {
    display: flex;
    flex-direction: column;
    max-width: 1rem;
    background-color: #f5f5f9;
    border-left: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
}

.button {
    appearance: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: background-color .16s ease-out;

    &:hover {
        background-color: #ddd;
    }

    &:focus {
        outline: 0;
    }

    &:focus-visible {
        outline: 0;
        background-color: #ddd;
    }
}
</style>
