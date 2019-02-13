"use strict";

const lightSwitch = {
    bindings: { 
        onFlip: "&"
    },

    template: `<button class="button" ng-click="$ctrl.onFlip()">SWITCH</button>`,

}

angular.module("LightApp").component("lightSwitch", lightSwitch);
