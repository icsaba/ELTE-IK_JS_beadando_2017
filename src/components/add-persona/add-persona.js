import { Persona } from "../persona/persona";

export class AddPersonaController {
    constructor($scope){
        this.genderOptions = ['male', 'female', 'other'];
        this.fields = ['firstName', 'lastName', 'email', 'gender'];
        this.state = 'valid';

        $scope.$watch(() => this.persona, (newObj) => {
            this.editPersona = newObj instanceof Persona ? true : false;
        });

        $scope.$on('successfullyadded', (event, isSuccess) => {
            this.state = isSuccess ? 'success' : 'error';
            setTimeout(() => { this.state = 'valid'; }, 500);
        });
    }

    addPersona(){
        this.save({ $persona: this.persona});
        this.cancel();
    }

    selectNone(){
        this.state = 'valid';
        this.cancel();
    }
}
