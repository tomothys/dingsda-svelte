<script lang="ts">
    import Button from "./components/Button.svelte";
    import Card from "./components/Card.svelte";
    import Toggle from "./components/Toggle.svelte";
    import Wrapper from "./components/Wrapper.svelte";
    import Select from "./components/Select.svelte";
    import type { SelectItem } from "./components/Select.interface";
    import Input from "./components/Input.svelte";

    let exampleSelectItems: SelectItem[] = [
        {
            value: "value-1",
            label: "Value 1",
        },
        {
            value: "value-2",
            label: "Value 2",
        },
        {
            value: "value-3",
            label: "Value 3",
        },
    ];
</script>

<div class="app-view">
    <Wrapper type="header">
        <h1>Dingsda Svelte</h1>
    </Wrapper>

    <Wrapper>
        <div style="margin-bottom: 1.5em;">
            <h2>Size m buttons</h2>

            <div style="display: flex; gap: 1em;">
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

                <Button id="example-upload-button" type="file-upload">Upload</Button>
            </div>
        </div>

        <div style="margin-bottom: 1.5em;">
            <h2>Size s buttons</h2>

            <div style="display: flex; gap: 1em;">
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
        </div>

        <div style="margin-bottom: 1.5em;">
            <h2>Cards and toggles</h2>

            <div style="margin-bottom: 1.5em; display: flex; gap: 1.5em;">
                <div style="display: flex; gap: 1em; align-items: center">
                    <Toggle id="example-card-toggle-1" checked />

                    <Card>
                        <p>Hi. This is an Card.</p>

                        <p>Just anothoer paragraph.</p>

                        <Button id="card-button-1" size="s">Card btn</Button>
                    </Card>
                </div>

                <div style="display: flex; gap: 1em; align-items: center">
                    <Toggle id="example-card-toggle-2" />

                    <Card>
                        <p>Hi. This is another Card.</p>
                        <p>Just anothoer paragraph.</p>
                        <Button id="card-button-2" size="s">Card btn</Button>
                    </Card>
                </div>
            </div>
        </div>

        <div style="margin-bottom: 1.5em;">
            <h2>Select</h2>

            <div style="margin-bottom: 1em;">
                <Select id="example-select" items={exampleSelectItems} />
            </div>

            <div>
                <Select id="example-select" disabled items={exampleSelectItems} />
            </div>
        </div>

        <div style="margin-bottom: 1.5em;">
            <h2>Input</h2>

            <div style="margin-bottom: 1em;">
                <Input id="example-input" />
            </div>

            <div>
                <Input id="example-input" disabled />
            </div>
        </div>
    </Wrapper>
</div>

<style lang="scss">
    @use "./scss/colors";

    :global {
        html {
            background-color: colors.$black;
            width: 100%;
            height: 100%;
            font-size: 1px;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            font-size: 16rem;
            margin: 0;
            padding: 0;
            width: 100%;
        }

        #app {
            width: 100%;
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
        color: colors.$white;
        width: 100%;
        height: 100%;
    }
</style>
