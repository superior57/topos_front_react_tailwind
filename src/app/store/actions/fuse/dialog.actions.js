export const OPEN_DIALOG = '[DIALOG] OPEN';
export const CLOSE_DIALOG = '[DIALOG] CLOSE';


export function closeDialog()
{
    return {
        type: CLOSE_DIALOG
    }
}

export function openDialog(options)
{
    return {
        type: OPEN_DIALOG,
        options
    }
}

