<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let id: string;
    export let disabled: boolean = false;
    export let value: string = "";
    export let placeholder: string = "";
    export let type: "text" | "password" | "number" = "text";

    const dispatch = createEventDispatcher<{
        change: { value: string };
        input: { value: string };
    }>();

    function handleChange() {
        dispatch("change", { value });
    }

    function handleInput() {
        dispatch("input", { value });
    }

    function typeAction(node: HTMLInputElement) {
        node.type = type;
    }
</script>

<input
    class="input-component"
    use:typeAction
    bind:value
    {id}
    {disabled}
    on:change={handleChange}
    on:input={handleInput}
    {placeholder}
/>

<style lang="scss">
    @use "../scss/vars";
    @use "../scss/colors";
    @use "../scss/functions";

    .input-component {
        box-sizing: border-box;
        border-radius: vars.$border-radius;
        border: none;
        background-color: colors.$elevation-2;
        min-height: 40px;
        width: 100%;
        margin: 0;
        padding: 12px;
        font-size: 14px;
        color: colors.$white;
        display: block;

        &:hover,
        &:focus {
            background-color: functions.getHoverColor(colors.$primary);
        }

        &:focus {
            outline: none;
        }

        &:disabled {
            pointer-events: none;
            opacity: 0.4;
        }
    }
</style>
