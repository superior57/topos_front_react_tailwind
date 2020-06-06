import {FuseUtils} from '@fuse';

class ListModel {
    constructor(data)
    {
        const list = data ? data : {};

        this.id = list.id || '';
        this.name = list.name || '';
        this.actions = [];
    }
}

export default ListModel;
