export class PersonaService { 
    constructor($http){
        this.$http = $http;
        this.url = "/api/persona";
    }

    getPersonas(){
        return this.$http.get(this.url);
    }

    savePersona(persona){
        this.$http.post(this.url, persona);
    }

    updatePersona(persona){
        this.$http.put(this.url + "/" + persona._id, persona);
    }
}