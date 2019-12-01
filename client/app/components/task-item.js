import Component from '@ember/component';
import { 
    REGEX_INPUT_TEXT,
    TOAST_OPTIONS
} from '../constants/global';
import {
    NOTIFICATIONS
} from '../constants/strings';

export default Component.extend({

    tagName: "li",
    classNameBindings: ['task.done:done'],
    classNames: ['task-item'],

    validationRegex: REGEX_INPUT_TEXT,

    isEditing: false,

    willRender(){
        if(!this.get('task')){
            this.set('task', {});
            this.set('isEditing', true);
        }
    },

    actions:{
        toggleDoneProperty(){
            this.toggleProperty("task.done");
            this.emitItemUpdated();
        },
        toggleEditProperty(){
            this.toggleEdit();
        },
        deleteItemClicked(id){
            if(this.get('isEditing'))
                this.send('cancelEdit');
            else
                this.onDeleteItem(id);
        },
        onEditEnter(){
            if(!this.validateName()){
                this.toast.warning(NOTIFICATIONS.INVALID_INPUT, '', TOAST_OPTIONS);
                return;
            }
            this.toggleEdit();
            this.emitItemUpdated();
        },
        cancelEdit(){
            if(this.get("editCanceled")) this.editCanceled();
            this.toggleEdit();
        }
    },

    toggleEdit(){
        this.set('isEditing', !this.get('isEditing'));
    },

    emitItemUpdated(){
        this.onItemUpdated(this.get('task'), this.get('task.name'), this.get('task.done'));
    },

    validateName(){
        return this.$('#item-name')[0].checkValidity();
    }

});
