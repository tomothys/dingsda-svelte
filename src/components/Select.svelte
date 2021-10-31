<script lang="ts" context="module">
    export interface SelectItem {
        value: string;
        label: string;
    }
</script>

<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let id: string;
    export let value: string = "";
    export let items: Array<SelectItem> = [];
    export let disabled: boolean = false;

    const dispatch = createEventDispatcher<{
        change: {
            item: SelectItem;
        };
    }>();

    let currentValue = value || items[0].value;
    $: selectedItem = items.find((item) => item.value === currentValue) || items[0];
    $: dispatch("change", { item: selectedItem });
</script>

<div class="select-component">
    <select {id} bind:value={currentValue} {disabled}>
        {#each items as item}
            <option value={item.value} selected={item.value === value}>
                {item.label}
            </option>
        {/each}
    </select>

    <div class="custom-select-style">
        <span>{selectedItem.label}</span>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
        >
            <path
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
        </svg>
    </div>
</div>

<style lang="scss">
    @use "../scss/vars";
    @use "../scss/colors";
    @use "../scss/functions";

    .select-component {
        display: inline-flex;
        position: relative;

        select {
            width: 100%;
            height: 100%;
            -webkit-appearance: none;
            position: absolute;
            top: 0;
            opacity: 0;

            &:hover {
                cursor: pointer;
            }

            &:focus {
                outline: none;
            }

            &:disabled {
                pointer-events: none;
            }
        }

        select + .custom-select-style {
            box-sizing: border-box;
            border-radius: vars.$border-radius;
            background-color: colors.$elevation-2;
            height: 100%;
            min-height: 40px;
            width: 100%;
            padding: 12px;
            color: colors.$white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            pointer-events: none;

            svg {
                path {
                    fill: colors.$white;
                }
            }
        }

        select:hover + .custom-select-style {
            background-color: functions.getHoverColor(colors.$primary);
        }

        select:disabled + .custom-select-style {
            opacity: 0.4;
            pointer-events: none;
        }
    }
</style>
