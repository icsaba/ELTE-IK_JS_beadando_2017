import { Persona } from "../persona/persona";

export class PersonaAppController{
    constructor($scope){
        this.personas = [new Persona({email:'test@testing.com'}),new Persona({email:'tes12t3213123@testing.com'})];
        this.selectedPersona = null;
        this.$scope = $scope;
    }

    savePersona(persona){
        const personaIndex = this.personas.indexOf(persona);
        if (personaIndex > -1){
            this.personas.splice(personaIndex,1);
        }
        const p = new Persona(persona);
        this.personas.push(p);

        this.$scope.$broadcast('successfullyadded', true);
    }

    selectPersona(persona){
        this.selectedPersona = persona;
    }

    cancel(){
        this.selectPersona(null);
    }
}
