<script lang="ts">
    export let disabled: boolean = false;
    export let highlight: boolean = false;
</script>

<div class="card-component" class:highlight class:disabled>
    <slot />
</div>

<style lang="scss">
    @use "../scss/colors";
    @use "../scss/vars";
    @use "../scss/functions";

    .card-component {
        box-sizing: border-box;
        border-radius: vars.$border-radius;
        border: 1px solid transparent;
        background-color: colors.$elevation-2;
        padding: 20px;
        font-size: 14px;

        &.highlight,
        &:hover {
            background-color: functions.getHoverColor(colors.$primary);
        }

        &.disabled {
            pointer-events: none;
            opacity: 0.4;
        }
    }
</style>
