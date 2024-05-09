const app = Vue.createApp({
    data() {
        return {
            taskToAdd: '',
            tasks: ['Task 1', 'Task 2'],
            showList: true,
        };
    },
    computed: {
        listToggleButtonText() {
            if (this.showList) {
                return 'Hide';
            }else{
                return 'Show';
            }
        },
    },
    methods: {
        addTask(){
            this.tasks.push(this.taskToAdd);
            this.taskToAdd = '';
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');