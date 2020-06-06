export const OPEN_CONTACT_SIDEBAR = '[CHAT APP] OPEN CONTACT SIDEBAR';
export const CLOSE_CONTACT_SIDEBAR = '[CHAT APP] CLOSE CONTACT SIDEBAR';
export const OPEN_USER_SIDEBAR = '[CHAT APP] OPEN USER SIDEBAR';
export const CLOSE_USER_SIDEBAR = '[CHAT APP] CLOSE USER SIDEBAR';
export const OPEN_MOBILE_CHATS_SIDEBAR = '[CHAT APP] OPEN MOBILE CHATS SIDEBAR';
export const CLOSE_MOBILE_CHATS_SIDEBAR = '[CHAT APP] CLOSE MOBILE CHATS SIDEBAR';

export function openMobileChatsSidebar()
{
    return {
        type: OPEN_MOBILE_CHATS_SIDEBAR
    }
}

export function closeMobileChatsSidebar()
{
    return {
        type: CLOSE_MOBILE_CHATS_SIDEBAR
    }
}

export function openUserSidebar()
{
    return {
        type: OPEN_USER_SIDEBAR
    }
}

export function closeUserSidebar()
{
    return {
        type: CLOSE_USER_SIDEBAR
    }
}

export function openContactSidebar()
{
    return {
        type: OPEN_CONTACT_SIDEBAR
    }
}

export function closeContactSidebar()
{
    return {
        type: CLOSE_CONTACT_SIDEBAR
    }
}
