export const SET_SELECTED_ITEM_ID = '[FILE MANAGER APP] SET SELECTED ITEM';

export function setSelectedItem(id)
{
    return {
        type   : SET_SELECTED_ITEM_ID,
        payload: id
    }
}
