import { AddPersonaController } from './components/add-persona/add-persona';
import { PersonaAppController } from './components/persona-app/persona-app';
import { PersonaController } from './components/persona/persona-controller';

angular.module('persona', [])
.component('personaApp',{
    templateUrl: 'components/persona-app/persona-app.html',
    controller: PersonaAppController
})
.component('addPersona', {
    templateUrl: 'components/add-persona/add-persona.html',
    controller: AddPersonaController,
    bindings: {
        save: '&',
        persona: '<',
        cancel: '&'
    }
})
.component('persona',{
    templateUrl: 'components/persona/persona.html',
    controller: PersonaController,
    bindings: {
        details: '<',
        click: '&'
    }
});
