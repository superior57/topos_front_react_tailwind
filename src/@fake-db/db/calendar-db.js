import mock from './../mock';
import {FuseUtils} from '@fuse';

const calendarDB = {
    events: [
        {
            id    : 0,
            title : 'All Day Event very long title',
            allDay: true,
            start : new Date(2018, 3, 0),
            end   : new Date(2018, 3, 1)
        },
        {
            id    : 1,
            title : 'Long Event',
            allDay: false,
            start : new Date(2018, 3, 7),
            end   : new Date(2018, 3, 10)
        },
        {
            id    : 2,
            title : 'DTS STARTS',
            allDay: false,
            start : new Date(2019, 2, 13, 0, 0, 0),
            end   : new Date(2019, 2, 20, 0, 0, 0)
        },
        {
            id    : 3,
            title : 'DTS ENDS',
            allDay: false,
            start : new Date(2019, 10, 6, 0, 0, 0),
            end   : new Date(2019, 10, 13, 0, 0, 0)
        },
        {
            id    : 4,
            title : 'Some Event',
            allDay: false,
            start : new Date(2018, 3, 9, 0, 0, 0),
            end   : new Date(2018, 3, 9, 0, 0, 0)
        },
        {
            id    : 5,
            title : 'Conference',
            allDay: false,
            start : new Date(2018, 3, 11),
            end   : new Date(2018, 3, 13),
            desc  : 'Big conference for important people'
        },
        {
            id    : 6,
            title : 'Meeting',
            allDay: false,
            start : new Date(2018, 3, 12, 10, 30, 0, 0),
            end   : new Date(2018, 3, 12, 12, 30, 0, 0),
            desc  : 'Pre-meeting meeting, to prepare for the meeting'
        },
        {
            id    : 7,
            title : 'Lunch',
            allDay: false,
            start : new Date(2018, 3, 12, 12, 0, 0, 0),
            end   : new Date(2018, 3, 12, 13, 0, 0, 0),
            desc  : 'Power lunch'
        },
        {
            id    : 8,
            title : 'Meeting',
            allDay: false,
            start : new Date(2018, 3, 12, 14, 0, 0, 0),
            end   : new Date(2018, 3, 12, 15, 0, 0, 0)
        },
        {
            id    : 9,
            title : 'Happy Hour',
            allDay: false,
            start : new Date(2018, 3, 12, 17, 0, 0, 0),
            end   : new Date(2018, 3, 12, 17, 30, 0, 0),
            desc  : 'Most important meal of the day'
        },
        {
            id    : 10,
            title : 'Dinner',
            allDay: false,
            start : new Date(2018, 3, 12, 20, 0, 0, 0),
            end   : new Date(2018, 3, 12, 21, 0, 0, 0)
        },
        {
            id    : 11,
            title : 'Birthday Party',
            allDay: false,
            start : new Date(2018, 3, 13, 7, 0, 0),
            end   : new Date(2018, 3, 13, 10, 30, 0)
        },
        {
            id    : 12,
            title : 'Late Night Event',
            allDay: false,
            start : new Date(2018, 3, 17, 19, 30, 0),
            end   : new Date(2018, 3, 18, 2, 0, 0)
        },
        {
            id    : 13,
            title : 'Multi-day Event',
            allDay: false,
            start : new Date(2018, 3, 20, 19, 30, 0),
            end   : new Date(2018, 3, 22, 2, 0, 0)
        }
    ]
};

mock.onGet('/api/calendar-app/events').reply((config) => {
    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/add-event').reply((request) => {
    const data = JSON.parse(request.data);
    calendarDB.events = [
        ...calendarDB.events, {
            ...data.newEvent,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/update-event').reply((request) => {
    const data = JSON.parse(request.data);

    calendarDB.events = calendarDB.events.map((event) => {
        if ( data.event.id === event.id )
        {
            return data.event
        }
        return event
    });

    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/remove-event').reply((request) => {
    const data = JSON.parse(request.data);

    calendarDB.events = calendarDB.events.filter((event) => data.eventId !== event.id);

    return [200, calendarDB.events];
});
