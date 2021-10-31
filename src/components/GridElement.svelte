<script lang="ts">
    export let size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 1;
</script>

<div
    class="grid-element-component"
    style="grid-column-start: unset; grid-column-end: span {size}"
>
    <slot />
</div>
