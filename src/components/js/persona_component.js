function PersonaDetailController(){
  this.isEditing = false;
  this.showForm = function() {
    this.isEditing = true;
  };

  this.hideForm = function() {
    this.isEditing = false;
  };
}

angular.module('persona').component('personaDetail', {
  templateUrl: 'components/view/persona_component.html',
  controller: PersonaDetailController,
  bindings: {
    persona: '=',
    action: '&',
    isAdd: '='
  }
});
