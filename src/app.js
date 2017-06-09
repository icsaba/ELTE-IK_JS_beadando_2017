import { AddPersonaController } from './components/add-persona/add-persona.component';
import { PersonaAppController } from './components/persona-app/app.component';
import { PersonaController } from './components/persona/persona.component';
import { PersonaService } from './services/persona.service';

angular.module('persona', [])
.component('personaApp',{
    templateUrl: 'components/persona-app/app.component.html',
    controller: PersonaAppController
})
.component('addPersona', {
    templateUrl: 'components/add-persona/add-persona.component.html',
    controller: AddPersonaController,
    bindings: {
        save: '&',
        persona: '<',
        cancel: '&'
    }
})
.component('persona',{
    templateUrl: 'components/persona/persona.component.html',
    controller: PersonaController,
    bindings: {
        details: '<',
        click: '&'
    }
})
.service('PersonaService', PersonaService);
