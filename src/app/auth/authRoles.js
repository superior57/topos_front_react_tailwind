/**
 * Authorization Roles
 */

const accountRoles = {
    admin       : ['admin'],
    user        : ['admin','user'],
    noAccount   : ['no-account'],
    all         : ['admin','user', 'no-account'],
    onlyGuest   : []
};

const teamRoles = {
    organizer      : ['organizer','basic','consultant'],
    basic          : ['basic','consultant'],
    consultant     : ['consultant'],
};

export default accountRoles;
