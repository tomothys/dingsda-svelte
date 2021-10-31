<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let id: string;
    export let checked: boolean = false;

    const dispatch = createEventDispatcher<{
        click: { checked: boolean };
    }>();

    function handleClick() {
        dispatch("click", { checked: !checked });
    }
</script>

<div
    class="toggle-component"
    class:checked
    {id}
    on:click={handleClick}
    on:mouseenter
    on:mouseleave
>
    <div class="nubsi" />
</div>

<style lang="scss">
    @use "sass:math";
    @use "../scss/colors";
    @use "../scss/functions";

    .toggle-component {
        box-sizing: border-box;
        border-radius: math.div(25px, 2);
        background-color: colors.$elevation-3;
        width: 40px;
        height: 25px;
        padding: 4px;
        display: inline-flex;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: functions.getHoverColor(colors.$primary);
            cursor: pointer;
        }

        .nubsi {
            border-radius: 50%;
            width: calc(25px - 8px);
            height: calc(25px - 8px);
            background-color: colors.$white-30;
            pointer-events: none;
            position: relative;
            left: 0;
            transform: translateX(0);
            transition-property: left, transform, background-color;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
        }

        &.checked {
            .nubsi {
                background-color: colors.$primary;
                left: 100%;
                transform: translateX(-100%);
            }
        }
    }
</style>
