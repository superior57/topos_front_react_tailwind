import mock from './../mock';
import _ from '@lodash';
import {FuseUtils} from '@fuse';

const accountDB = {
    
    accounts: [
        {
            'id'           : '1',
            'name'            : 'Atlas Governance',
            'taxId'           : '15456854000180',
            'type'            : 'head office',
            'adresses'        : [
                {
                    'address'       : 'Rua Curupace',
                    'number'        : '573',
                    'zipCode'       : '03120015',
                    'town'          : 'São Paulo',
                    'state'         : 'SP',
                    'country'       : 'Brazil',
                    'categories'    : [
                        'billing',
                        'mailing'
                    ]},
            ],
            'admins'    : [],
            'groups'    : [],
            'users'     : [],
            'avatar'  : 'assets/images/avatars/atlasgov/eduardo-carone.jpg',
            'images'    : 
                {
                    'id'  : 0,
                    'url' : 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
                    'type': 'image'
                },
            'active'      : 'yes'
        }
    ],
    
    teams: [
        {
            'id'      : '1',
            'name'    : 'IT',
            'description': 'Developers, QAs and all time from IT team',
            'avatar'  : 'assets/images/avatars/atlasgov/eduardo-carone.jpg',
            'company' : 'Atlas Governance',
            'dateCreated': '20190803',
            'isArchived': 'no',
            'isPrivate' : 'no',
            'members' : [],
            'admins' : []
        }
    ],

    users: [
        {
            'id'      : '5725a680b3249760ea21de52',
            'name'    : 'Eduardo',
            'lastName': 'Carone',
            'avatar'  : 'assets/images/avatars/atlasgov/eduardo-carone.jpg',
            'company' : 'Atlas Governance',
            'jobTitle': 'CEO',
            'email'   : 'eduardo@atlasgov.com',
            'phone'   : '+5511999999999',
            'address' : 'Rua Pais de Araújo, 29 - 14o andar',
            'birthday': undefined,
            'isBloqued': false
        },
        {
            'id'      : '5725a680606588342058356d',
            'name'    : 'Leonardo',
            'lastName': 'Baggio',
            'avatar'  : 'assets/images/avatars/atlasgov/leonardo-baggio.jpg',
            'company' : 'Atlas Governance',
            'jobTitle': 'CTO',
            'email'   : 'leonardo@atlasgov.com',
            'phone'   : '+5511999999999',
            'address' : 'Rua Pais de Araújo, 29 - 14o andar',
            'birthday': undefined
        },
        {
            'id'      : '5725a68009e20d0a9e9acf2a',
            'name'    : 'Fernando',
            'lastName': 'Vilalba',
            'avatar'  : 'assets/images/avatars/atlasgov/fernando-vilalba.jpg',
            'company' : 'Atlas Governance',
            'jobTitle': 'Comercial Director',
            'email'   : 'fernando.vilalba@atlasgov.com',
            'phone'   : '+5511999999999',
            'address' : 'Rua Pais de Araújo, 29 - 14o andar',
            'birthday': undefined
        }        
    ]
};

//#region account
mock.onGet('/api/account/list').reply(() => {
    return [200, accountDB.accounts];
});

mock.onGet('/api/account').reply((request) => {
    const {accountId} = request.params;
    const response = _.find(accountDB.accounts, {accountId: accountId});
    return [200, response];
});

mock.onPost('/api/account/save').reply((request) => {
    const data = JSON.parse(request.data);
    let account = null;

    accountDB.products = accountDB.accounts.map(_account => {
        if ( _account.id === data.id )
        {
            account = data;
            return account
        }
        return _account;
    });

    if ( !account )
    {
        account = data;
        accountDB.accounts = [
            ...accountDB.accounts,
            account
        ]
    }

    return [200, account];
});
//#endregion

//#region users
mock.onGet('/api/account/users').reply((config) => {
    const id = config.params.id;
    let response = [];
    switch ( id )
    {
        case 'frequent':
        {
            response = accountDB.users.filter(user =>
                accountDB.user[0].frequentUsers.includes(user.id)
            );
            break;
        }
        case 'starred':
        {
            response = accountDB.users.filter(user =>
                accountDB.user[0].starred.includes(user.id)
            );
            break;
        }
        default:
        {
            response = accountDB.users;
        }
    }
    return [200, response];
});


mock.onGet('/api/account/user').reply((config) => {
    return [200, accountDB.user[0]];
});

mock.onPost('/api/account/add-user').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.users = [
        ...accountDB.users, {
            ...data.newUser,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, accountDB.users];
});

mock.onPost('/api/account/update-user').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.users = accountDB.users.map((user) => {
        if ( data.user.id === user.id )
        {
            return data.user
        }
        return user
    });

    return [200, accountDB.users];
});

mock.onPost('/api/account/remove-user').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.users = accountDB.users.filter((user) => data.userId !== user.id);

    return [200, accountDB.users];
});

mock.onPost('/api/account/remove-users').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.users = accountDB.users.filter((user) => !data.userIds.includes(user.id));
    return [200, accountDB.users];
});


mock.onPost('/api/account/toggle-starred-user').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.user[0].starred = _.xor(accountDB.user[0].starred, [data.userId]);
    return [200, accountDB.user[0]];
});

mock.onPost('/api/account/toggle-starred-users').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.user[0].starred = _.xor(accountDB.user[0].starred, data.userIds);
    return [200, accountDB.user[0]];
});

mock.onPost('/api/account/set-users-starred').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.user[0].starred = [
        ...accountDB.user[0].starred,
        ...data.userIds
    ];

    return [200, accountDB.user[0]];
});

mock.onPost('/api/account/set-users-unstarred').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.user[0].starred = accountDB.user[0].starred.filter(userId => !data.userIds.includes(userId));

    return [200, accountDB.user[0]];
});
//#endregion

//#region teams
mock.onGet('/api/account/teams').reply((config) => {
    const id = config.params.id;
    let response = [];
    switch ( id )
    {
        case 'frequent':
        {
            response = accountDB.teams.filter(team =>
                accountDB.team[0].frequentTeams.includes(team.id)
            );
            break;
        }
        case 'starred':
        {
            response = accountDB.teams.filter(team =>
                accountDB.team[0].starred.includes(team.id)
            );
            break;
        }
        default:
        {
            response = accountDB.teams;
        }
    }
    return [200, response];
});


mock.onGet('/api/account/team').reply((config) => {
    return [200, accountDB.team[0]];
});

mock.onPost('/api/account/add-team').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.teams = [
        ...accountDB.teams, {
            ...data.newTeam,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, accountDB.teams];
});

mock.onPost('/api/account/update-team').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.teams = accountDB.teams.map((team) => {
        if ( data.team.id === team.id )
        {
            return data.team
        }
        return team
    });

    return [200, accountDB.teams];
});

mock.onPost('/api/account/remove-team').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.teams = accountDB.teams.filter((team) => data.teamId !== team.id);

    return [200, accountDB.teams];
});

mock.onPost('/api/account/remove-teams').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.teams = accountDB.teams.filter((team) => !data.teamIds.includes(team.id));
    return [200, accountDB.teams];
});


mock.onPost('/api/account/toggle-starred-team').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.team[0].starred = _.xor(accountDB.team[0].starred, [data.teamId]);
    return [200, accountDB.team[0]];
});

mock.onPost('/api/account/toggle-starred-teams').reply((request) => {
    const data = JSON.parse(request.data);
    accountDB.team[0].starred = _.xor(accountDB.team[0].starred, data.teamIds);
    return [200, accountDB.team[0]];
});

mock.onPost('/api/account/set-teams-starred').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.team[0].starred = [
        ...accountDB.team[0].starred,
        ...data.teamIds
    ];

    return [200, accountDB.team[0]];
});

mock.onPost('/api/account/set-teams-unstarred').reply((request) => {
    const data = JSON.parse(request.data);

    accountDB.team[0].starred = accountDB.team[0].starred.filter(teamId => !data.teamIds.includes(teamId));

    return [200, accountDB.team[0]];
});
//#endregion