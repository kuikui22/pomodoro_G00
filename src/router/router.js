const Footer = () => import('@/components/footer.vue');
const CreateTask = () => import('@/pages/createTask.vue');
const SetTime = () => import('@/pages/setTime.vue');
const TaskChart = () => import('@/pages/taskChart.vue');
const TaskList = () => import('@/pages/taskList.vue');

export default [
    {
        path: '/',
        redirect: 'taskList',
        components: {
            'default': TaskList,
            'footer': Footer
        },
        children: [
            {
                path: 'createTask',
                component: CreateTask
            },
            {
                path: 'setTime',
                component: SetTime
            },
            {
                path: 'taskChart',
                component: TaskChart
            },
            {
                path: 'taskList',
                component: TaskList
            },
        ]
    }
];