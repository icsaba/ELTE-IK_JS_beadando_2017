import { Persona } from "../Persona/persona";

export class MainController{
    constructor(){
        this.personas = [new Persona({email:'test@testing.com'})];
        this.selectedPersona = null;
    }

    savePersona(persona){
        const personaIndex = this.personas.indexOf(persona);
        if (personaIndex > -1){
            delete this.personas[personaIndex];
        }
        const p = new Persona(persona);
        this.personas.push(p);
    }

    selectPersona(persona){
        this.selectedPersona = persona;
    }

    cancel(){
        this.selectPersona(null);
    }
}
