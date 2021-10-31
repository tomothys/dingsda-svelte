<script lang="ts">
    import Button from "./components/Button.svelte";
import Card from "./components/Card.svelte";
    import Wrapper from "./components/Wrapper.svelte";
</script>

<div class="app-view">
    <Wrapper type="header">
        <h1>Dingsda Svelte</h1>
    </Wrapper>

    <Wrapper>
        <div style="margin-bottom: 1.5em;">
            <h2>Size m buttons</h2>
            <Button id="example-button-primary">Primary</Button>
            <Button id="example-button-primary-disabled" disabled>
                Disabled
            </Button>

            <Button id="example-button-secondary" style="secondary">
                Secondary
            </Button>
            <Button
                id="example-button-secondary-disabled"
                style="secondary"
                disabled
            >
                Disabled
            </Button>
        </div>

        <div style="margin-bottom: 1.5em;">
            <h2>Size s buttons</h2>
            <Button id="example-button-primary-small" size="s">Primary</Button>
            <Button
                id="example-button-primary-small-disabled"
                size="s"
                disabled
            >
                Disabled
            </Button>

            <Button
                id="example-button-secondary-small"
                size="s"
                style="secondary"
            >
                Secondary
            </Button>
            <Button
                id="example-button-secondary-small-disabled"
                size="s"
                style="secondary"
                disabled
            >
                Disabled
            </Button>
        </div>

        <div style="margin-bottom: 1.5em;">
            <h2>Cards</h2>

            <div style="display: flex; gap: 1em;">
                <Card>
                    <p>Hi. This is an Card.</p>
                    <p>Just anothoer paragraph.</p>
                    <Button id="card-button-1" size="s">Card btn</Button>
                </Card>

                <Card>
                    <p>Hi. This is another Card.</p>
                    <p>Just anothoer paragraph.</p>
                    <Button id="card-button-2" size="s">Card btn</Button>
                </Card>
            </div>
        </div>
    </Wrapper>
</div>

<style lang="scss">
    @use "./scss/colors";

    :global {
        html {
            font-size: 1px;
            font-family: Arial, Helvetica, sans-serif;
            width: 100%;
            height: 100%;
        }

        body {
            font-size: 16rem;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }

        #app {
            width: 100%;
            height: 100%;
        }

        h1,
        h2,
        h3,
        p {
            margin-top: 0;
        }
    }

    h1 {
        margin: 0;
    }

    .app-view {
        background-color: colors.$black;
        color: colors.$white;
        width: 100%;
        height: 100%;
    }
</style>
