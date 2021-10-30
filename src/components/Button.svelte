<script lang="ts">
    export let id: string;
    export let type: "button" | "submit" | "file" = "button";
    export let style: "primary" | "secondary" = "primary";
</script>

<button {id} {type} class="button-component {style}">
    <slot />
</button>

<style lang="scss">
    @use "../scss/colors";

    .button-component {
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: 2px;
        padding: 12px;
        margin: 0;
        display: inline-flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;

        &:hover {
            cursor: pointer;
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
    }
</style>
