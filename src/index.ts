import App from "./App.svelte";

const entryTarget = document.getElementById("app");
let app: App;

if (entryTarget !== null) {
    app = new App({
        target: entryTarget,
    });
}

export default app;
