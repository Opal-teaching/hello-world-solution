
import angular from "angular";
import "onsenui/js/onsenui";
import "onsenui/css/onsen-css-components-blue-basic-theme.css";
import "onsenui/css/onsenui.css";


import {HelloWorldController} from "./controllers/helloWorldController";
export const app = angular
    .module('HelloWorld', ['onsen']);
app.controller("HelloWorldController", HelloWorldController);
