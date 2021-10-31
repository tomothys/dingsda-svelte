<div class="card-component">
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

        &:hover {
            background-color: functions.getHoverColor(colors.$primary);
        }
    }
</style>
