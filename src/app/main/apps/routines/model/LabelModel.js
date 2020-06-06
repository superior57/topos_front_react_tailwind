import {FuseUtils} from '@fuse';

class LabelModel {
    constructor(data)
    {
        const label = data ? data : {};

        this.id = label.id || FuseUtils.generateGUID();
        this.name = label.name || '';
        this.class = label.class || 'bg-blue text-white';
    }
}

export default LabelModel;
