<script lang="ts">
    export let id: string;
    export let type: "button" | "submit" | "file" = "button";
    export let style: "primary" | "secondary" = "primary";
    export let size: "m" | "s" = "m";
    export let disabled: boolean = false;
</script>

<button {id} {type} {disabled} class="button-component {style} size-{size}">
    <slot />
</button>

<style lang="scss">
    @use "../scss/colors";
    @use "../scss/vars";

    .button-component {
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: vars.$border-radius;
        padding: 12px;
        margin: 0;
        display: inline-flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }

        &:disabled {
            opacity: 0.4;
            pointer-events: none;
        }

        &.primary {
            background-color: colors.$yellow;

            &:hover {
                background-color: colors.$yellow-70;
            }
        }

        &.secondary {
            background-color: colors.$white-20;
            color: colors.$white;

            &:hover {
                background-color: colors.$white-30;
            }
        }

        &.size-s {
            padding: 2px 4px;
            font-size: 12px;
        }
    }
</style>
