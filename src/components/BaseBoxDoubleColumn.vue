<template>
    <div :class="s.wrapper">
        <div :class="s.column">
            <h3>{{ titleFirst }}</h3>

            <div :class="s.wrapperBody">
                <slot name="columnFirst"></slot>
            </div>
        </div>

        <div :class="s.column">
            <h3>{{ titleSecond }}</h3>

            <div :class="s.wrapperBody">
                <slot name="columnSecond"></slot>
            </div>
        </div>

        <slot name="additionalInfo"></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseBoxDoubleColumn',
    props: {
        titleFirst: String,
        titleSecond: String,
    },
};
</script>

<style module="s" lang="scss">
.wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.wrapperBody {
    display: flex;
    align-items: stretch;
    gap: 1rem;
}
</style>
