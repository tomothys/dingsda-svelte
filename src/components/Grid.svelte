<script lang="ts">
    export let size: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 10;
    export let gap: string = undefined;
</script>

<div class="grid-component" style="grid-template-columns: repeat({size}, 1fr); gap: {gap};">
    <slot />
</div>

<style lang="scss">
    .grid-component {
        display: grid;
        max-width: 100%;
    }
</style>
