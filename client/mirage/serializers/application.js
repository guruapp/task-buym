import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
    serialize(object) {
        return object.models;
    },
    normalize(json, id){
        return {
            data: {
                id: id,
                type: 'tasks',
                attributes: json
            }
        }
    }
});
