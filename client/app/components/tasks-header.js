import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    tagName: "header",
    classNames: ['menu'],

    STRINGS: null,
    constants: service(),

    willRender(){
        this.set('STRINGS', this.get('constants').STRINGS);
    },

    actions: {

        addItemClicked(){
            this.get('onAddItem')();
        }

    }

});
