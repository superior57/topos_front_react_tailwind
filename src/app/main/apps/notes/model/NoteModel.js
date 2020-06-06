import {FuseUtils} from '@fuse';

function NoteModel(data)
{
    const item = data ? data : {};
    return {
        id         : item.id || FuseUtils.generateGUID(),
        title      : item.title || '',
        description: item.description || '',
        archive    : item.archive || false,
        image      : item.image || '',
        time       : item.time || null,
        reminder   : item.reminder || null,
        checklist  : item.checklist || [],
        labels     : item.labels || []
    }
}

export default NoteModel;
