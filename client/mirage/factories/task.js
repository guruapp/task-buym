import { Factory } from 'ember-cli-mirage';
import {faker}  from 'ember-cli-mirage';

export default Factory.extend({
    name(i){ return `משימה `},
    done: faker.random.boolean
});
