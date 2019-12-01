import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    done: DS.attr('boolean')
});

var fromJSONObjectFormat = (model) => {
    return {
        name: model.data.attributes.name,
        done: model.data.attributes.done
    }
}

var toJSONObjectFormat = item => {
    return {
        type: 'task',
        id: item.id,
        attributes: {
            name: item.name,
            done: item.done == 'true' || item.done == 1
        }
    }
}

var toJSONArrayFormat = payload => {
    return payload.map(
        item => toJSONObjectFormat(item)
    )
}

export {
    fromJSONObjectFormat,
    toJSONObjectFormat,
    toJSONArrayFormat
}