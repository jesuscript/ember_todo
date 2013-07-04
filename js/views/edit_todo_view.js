Todos.EditTodoView = Ember.TextField.extend({
    classNames: ['edit'],
    insertNewline: function () {
        this.get('controller').acceptChanges();
    },

    focusOut: function () {
        setTimeout(function(){
            this.get("controller") && this.get('controller').acceptChanges();
        }.bind(this),0);
    },

    didInsertElement: function () {
        this.$().focus();
    }
});
