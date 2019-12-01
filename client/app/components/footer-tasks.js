import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

import {
    LANGUAGE_DIRECTION
} from '../constants/global';

export default Component.extend({

    tagName: "footer",
    classNames: [LANGUAGE_DIRECTION, 'footer-tasks'],

    STRINGS: null,
    constants: service(),

    willRender(){
        this.set('STRINGS', this.get('constants').STRINGS);
    },

    tasksFinished: computed('tasksList.@each.done', function(){
        return this.tasksList.filterBy( 'done', true).length;
    }),
    tasksUnfinished: computed('tasksList.@each.done', function(){
        return this.tasksList.filterBy( 'done', false).length;
    }),

});
