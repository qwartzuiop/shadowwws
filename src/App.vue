<template>
    <div
        id="app"
        :class="s.app"
    >
        <render-window />
        <settings-window />
    </div>
</template>

<script>
import RenderWindow from './components/RenderWindow.vue';
import SettingsWindow from './components/SettingsWindow.vue';

export default {
    name: 'App',
    components: {
        RenderWindow,
        SettingsWindow,
    },
};
</script>

<style lang="scss" module="s">
@import 'styles/reset.scss';

body {
    color: hsl(0deg, 0%, 16%);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f5f5f9;
}

.app {
    min-height: 100vh;
    display: flex;
    gap: 1rem;
    padding: 1rem;
}

@media (max-width: 800px) {
    .app {
        flex-direction: column;
        padding-top: 0;
    }
}
</style>
