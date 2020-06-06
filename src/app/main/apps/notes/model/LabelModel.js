import {FuseUtils} from '@fuse';

function LabelModel(data)
{
    const item = data ? data : {};
    return {
        id  : item.id || FuseUtils.generateGUID(),
        name: item.name || '',
        get handle()
        {
            return FuseUtils.handleize(this.name)
        }
    }
}

export default LabelModel;
