
import "@babel/polyfill";
import App from './App.svelte';
const app = new App({
target: document.body,
    props:{
            reasonLetter: [["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"], ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]],
            reasonList: [["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", ""]]

    }
});

window.app = app;

export default app;

