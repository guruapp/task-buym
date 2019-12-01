import Controller from '@ember/controller';

export default Controller.extend({

    isAddingItem: false,

    actions: {
        toggleAddingItem(){
            this.set('isAddingItem', !this.get('isAddingItem'));
        },
        addTaskItem(task){
            this.set('isAddingItem', false);
            let createdTask = this.store.createRecord('task', {name: task.name, done: task.done});
            createdTask.save();
        },
        addTaskCanceled(){
            this.set('isAddingItem', false);
        },
        deleteItem(id){
            this.store.findRecord('task', id, { backgroundReload: false }).then(
                task => {
                    task.destroyRecord();
                }
            )
        },
        editItem(item, name, done){
            this.store.findRecord('task', item.id).then(
                task => {
                    task.set('done', done);
                    task.set('name', name);
                    task.save();
                }
            )
        }
    }
});
