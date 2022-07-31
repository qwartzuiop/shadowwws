<template>
    <base-box-double-column
        titleFirst="Box Color"
        titleSecond="Background Color"
    >
        <template v-slot:columnFirst>
            <base-input-text
                name="boxColor"
                placeholder="Enter color code..."
                :value="boxColor"
                @input="setBoxColor"
            />
        </template>

        <template v-slot:columnSecond>
            <base-input-text
                name="backgroundColor"
                placeholder="Enter color code..."
                :value="backgroundColor"
                @input="setBackgroundColor"
            />
        </template>

        <template v-slot:additionalInfo>
            <div :class="s.infoWrapper">
                <svg
                    :class="s.infoImage"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V11.5C11.25 11.0858 11.5858 10.75 12 10.75Z" />
                    <path d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z"
                    />
                </svg>
                <span :class="s.infoText">Use HEX, RGB/RGBA, HSL/HSLA.</span>
            </div>
        </template>
    </base-box-double-column>
</template>

<script>
import BaseBoxDoubleColumn from './BaseBoxDoubleColumn.vue';
import BaseInputText from './BaseInputText.vue';

export default {
    name: 'BoxBackgroundColor',
    data() {
        return {
            boxColor: this.$store.state.boxColor,
            backgroundColor: this.$store.state.backgroundColor,
        }
    },
    methods: {
        setBoxColor(value) {
            this.$store.commit('setBoxColor', value);
        },
        setBackgroundColor(value) {
            this.$store.commit('setBackgroundColor', value);
        },
    },
    components: {
        BaseBoxDoubleColumn,
        BaseInputText,
    },
};
</script>

<style module="s" lang="scss">
.wrapperOutput {
    display: flex;
}

.pre {
    font-size: .75rem;
    overflow: auto;
}

.button {
    appearance: none;
    border: 1px solid hsl(239deg 100% 71%);
    display: flex;
    align-items: center;
    align-self: flex-end;
    background-color: #f5f5f9;
    padding: .25rem;
    border-radius: .25rem;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
}

.infoWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: .25rem;
}

.infoImage {
    height: 1.25rem;

    path {
        fill: #aaa;
    }
}

.infoText {
    color: #aaa;
    font-size: .75rem;
    font-weight: 500;
}
</style>
