export const OPEN_FOLDED_NAVBAR = '[NAVBAR] OPEN FOLDED';
export const CLOSE_FOLDED_NAVBAR = '[NAVBAR] CLOSE FOLDED';
export const TOGGLE_FOLDED_NAVBAR = '[NAVBAR] TOGGLE FOLDED';
export const TOGGLE_MOBILE_NAVBAR = '[NAVBAR] TOGGLE MOBILE';
export const OPEN_MOBILE_NAVBAR = '[NAVBAR] OPEN MOBILE';
export const CLOSE_MOBILE_NAVBAR = '[NAVBAR] CLOSE MOBILE';

export function navbarToggleFolded()
{
    return {
        type: TOGGLE_FOLDED_NAVBAR
    }
}

export function navbarOpenFolded()
{
    return {
        type: OPEN_FOLDED_NAVBAR
    }
}

export function navbarCloseFolded()
{
    return {
        type: CLOSE_FOLDED_NAVBAR
    }
}

export function navbarToggleMobile()
{
    return {
        type: TOGGLE_MOBILE_NAVBAR
    }
}

export function navbarOpenMobile()
{
    return {
        type: OPEN_MOBILE_NAVBAR
    }
}

export function navbarCloseMobile()
{
    return {
        type: CLOSE_MOBILE_NAVBAR
    }
}

