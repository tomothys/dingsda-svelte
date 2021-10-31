<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let id: string;
    export let type: "button" | "submit" | "file-upload" = "button";
    export let style: "primary" | "secondary" = "primary";
    export let size: "m" | "s" = "m";
    export let disabled: boolean = false;

    const dispatch = createEventDispatcher<{
        fileUpload: { files: FileList };
    }>();

    let filename: string = "";

    function handleFileUpload({ target }) {
        dispatch("fileUpload", { files: target.files });

        const firstFile = target.files.length > 0 ? target.files[0] : undefined;
        filename = firstFile?.name || "";
    }
</script>

{#if ["submit", "button"].includes(type)}
    <button {id} {type} {disabled} class="button-component {style} size-{size}">
        <slot />
    </button>
{:else if type === "file-upload"}
    <input type="file" hidden {id} on:change={handleFileUpload} />

    <label class="button-component file-upload size-{size} {style}" for={id}>
        <slot />

        {#if filename}
            <div class="filename">{filename}</div>
        {/if}
    </label>
{/if}

<style lang="scss">
    @use "../scss/colors";
    @use "../scss/vars";

    .button-component {
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: vars.$border-radius;
        min-height: 40px;
        padding: 4px 12px;
        margin: 0;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        color: colors.$black;

        .filename {
            font-size: 9px;
            margin-top: 4px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

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
            min-height: unset;
            padding: 2px 4px;
            font-size: 12px;
        }
    }
</style>
