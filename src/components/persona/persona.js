export class Persona{
    constructor(details){
        const fields = ['_id', 'firstName', 'lastName', 'email', 'gender'];
        angular.forEach(fields, (field) => {
            this[field] = details[field];
        });
    }
}
