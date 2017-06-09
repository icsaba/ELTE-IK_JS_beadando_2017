import { Persona } from "../persona/persona";

export class PersonaAppController {
    constructor($scope, $http, PersonaService){
        this.personas = [];
        this.personaServ = PersonaService;
        this.selectedPersona = null;
        this.$scope = $scope;
    }

    $onInit(){
        this.loadPersonas();
    }

    loadPersonas(){
        this.personaServ.getPersonas()
            .then(response => {
                response.data.forEach( persona => {
                    const isExist = this.personas.filter( x => x._id === persona._id );
                    if (isExist.length === 0){
                        this.personas.push(new Persona(persona)); 
                    }
                });
            });
    }

    savePersona(persona){
        const personaIndex = this.personas.indexOf(persona);
        if (personaIndex > -1){
            this.personaServ.updatePersona(persona);
        } else {
            this.personaServ.savePersona(persona);
        }
        this.loadPersonas();
        this.$scope.$broadcast('successfullyadded', true);
    }

    selectPersona(persona){
        this.selectedPersona = persona;
    }

    cancel(){
        this.selectPersona(null);
    }
}
