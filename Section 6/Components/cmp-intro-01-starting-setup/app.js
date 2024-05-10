const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '555-555-5555',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '555-555-5555',
                    email: 'julie@localhost.com',
                },
            ],
        }
    },
    methods: {

    },

});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '555-555-5555',
                email: 'manuel@localhost.com',
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');