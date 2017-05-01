import { AddPersonaController } from './addPersona/add-persona';
import { MainController } from './personaApp/main-controller';
import { PersonaController } from './Persona/persona-controller';

angular.module('persona', [])
.component('personaApp',{
    templateUrl: 'personaApp/persona-app-view.html',
    controller: MainController
})
.component('addPersona', {
    templateUrl: 'addPersona/add-persona-view.html',
    controller: AddPersonaController,
    bindings: {
        save: '&',
        persona: '<',
        cancel: '&'
    }
})
.component('persona',{
    templateUrl: 'Persona/persona-view.html',
    controller: PersonaController,
    bindings: {
        details: '<',
        click: '&'
    }
});
