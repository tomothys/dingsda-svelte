<script lang="ts">
    export let type: "header" | "content" = "content";
</script>

<div class="wrapper-component type-{type}">
    <div class="content">
        <slot />
    </div>
</div>

<style lang="scss">
    @use "../scss/colors";

    .wrapper-component {
        width: 100%;

        .content {
            box-sizing: border-box;
            width: 800rem;
            padding: 24rem;
            margin: 0 auto;
        }

        &.type-header {
            background-color: colors.$black-95;
        }
    }
</style>
