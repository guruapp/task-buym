import Component from '@ember/component';

import {
    TASKS_EMPTY_LIST
} from '../constants/strings';

export default Component.extend({

    tagName: "ul",
    classNames: ['tasks-list'],

    emptyListMessage: TASKS_EMPTY_LIST,

    actions: {
        deleteItem(id){
            this.onDeleteItem(id);
        },
        updateItem(task, name, done){
            this.onUpdateItem(task, name, done);
        },
        addItem(task){
            this.onAddItem(task);
        },
        addItemCanceled(){
            this.onAddItemCanceled();
        }
    }

});
