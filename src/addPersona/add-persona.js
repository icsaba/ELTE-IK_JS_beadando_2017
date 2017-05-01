import { Persona } from "../Persona/persona";

export class AddPersonaController {
    constructor($scope){
        this.genderOptions = ['male', 'female', 'other'];
        this.fields = ['firstName', 'lastName', 'email', 'gender'];
        this.state = 'valid';

        $scope.$watch(() => this.persona, (newObj) => {
            this.state = 'valid';
            this.editPersona = newObj instanceof Persona ? true : false;
        });
    }

    addPersona(){
        this.save({ $persona: this.persona});
        this.cancel();
        this.state = 'success';
    }

    selectNone(){
        this.cancel();
    }
}
