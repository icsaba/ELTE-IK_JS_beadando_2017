import { Persona } from "../persona/persona";

export class AddPersonaController {
    constructor($scope){
        this.genderOptions = ['male', 'female', 'other'];
        this.fields = ['firstName', 'lastName', 'email', 'gender'];
        this.state = 'valid';
        this.$scope = $scope;
    }
    
    $onInit(){
        this.$scope.$watch(() => this.persona, (newObj) => {
            this.editPersona = newObj instanceof Persona;
        });

        this.$scope.$on('successfullyadded', (event, isSuccess) => {
            this.state = isSuccess ? 'success' : 'error';
            setTimeout(() => { this.state = 'valid'; }, 500);
        });
    }

    addPersona(){
        this.save({ $persona: this.persona});
        this.persona = null;
    }

    selectNone(){
        this.state = 'valid';
        this.cancel();
    }
}
