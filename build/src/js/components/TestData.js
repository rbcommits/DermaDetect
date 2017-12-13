import moment from 'moment';

export default {
    getEvents: () => {
        const now = moment();
        const dataFormat = 'YYYY-MM-DD';
        const description = 'Appointment';
        const eventMeta = [
            {
                start: 1,
                length: 1,
                title: "Jason"
            },
            {
                start: 5,
                length: 1,
                title: "Marcus"
            },
            {
                start: 5,
                length: 1,
                title: "Martha"
            },
            {
                start: 12,
                length: 1,
                title: "Spongebob"
            },
            {
                start: 15,
                length: 1,
                title: "Patrick"
            },
            {
                start: 18,
                length: 1,
                title: "Mr Crab"
            },
            {
                start: 21,
                length: 1,
                title: "Squidward"
            },
            {
                start: 24,
                length: 1,
                title: "Carlos"
            },
            {
                start: 25,
                length: 1,
                title: "Steve"
            },
        ]


        const events = eventMeta.map((data) => {
            const today = moment(now);

            return {
                 start: today.date(data.start).format(dataFormat),
                 end: today.add(2, 'hours').format(dataFormat),
                 eventClasses: 'custom-event-class',
                 title: (data.title || ''),
                 description: description
            }
        }) 

        return events;
    }
};
