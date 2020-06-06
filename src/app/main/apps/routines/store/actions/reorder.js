import _ from '@lodash';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result.map((object, index) => {
        object.order = index
        return object;
    })
};

export default reorder;

export const reorderQuoteMap =
    (
        lists,
        source,
        destination
    ) => {
        const current = _.find(lists, {id: source.droppableId});
        const next = _.find(lists, {id: destination.droppableId});
        let target = current.actions[source.index];

        // moving to same list
        if ( source.droppableId === destination.droppableId )
        {
            const reordered = reorder(
                current.actions,
                source.index,
                destination.index
            );
            return lists.map((list) => {
                if ( list.id === source.droppableId )
                {
                    list.actions = reordered;
                }
                return list;
            });
        }

        // moving to different list
        
        // registrando nova tListId na action que mudou de lista
        target.tListId = next.id;
        // remove from original
        current.actions.splice(source.index, 1);
        // insert into next
        next.actions.splice(destination.index, 0, target);

        return lists.map((list) => {
            if ( list.id === source.droppableId )
            {
                current.actions.map((action, index) => {
                    action.order = index;
                });
                return current;
            }
            if ( list.id === destination.droppableId )
            {
                next.actions.map((action, index) => {
                    action.order = index;
                });
                return next;
            }
            return list;
        });
    };
