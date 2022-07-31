<template>
    <div :class="s.wrapper">
        <h3 :class="s.title">{{ title }}</h3>

        <slot
            name="titleAdditional"
            :class="s.titleAdditional"
        >
        </slot>

        <div
            :class="s.wrapperBody"
            v-if="!column"
        >
            <slot></slot>
        </div>

        <div
            :class="[s.wrapperBody, s.wrapperBodyColumn]"
            v-if="column"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseBox',
    props: {
        title: String,
        column: Boolean,
    },
};
</script>

<style module="s" lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    overflow: hidden;
}

.wrapperBody {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 1rem;
}

.title {
    flex: 1;
    font-size: 1.25rem;
}

.titleAdditional {
    background-color: red;
}
</style>
