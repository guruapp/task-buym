import DS from 'ember-data';

import * as taskModel from '../models/task';

export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload) {

        let serializedObject = {
            data: Array.isArray(payload) ? 
                taskModel.toJSONArrayFormat(payload) : 
                taskModel.toJSONObjectFormat(payload)
        }
    
        return serializedObject;
    },
    serialize() {
        let json = this._super(...arguments);
    
        return taskModel.fromJSONObjectFormat(json);
    },
});
