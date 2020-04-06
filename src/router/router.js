const Footer = () => import('@/components/footer.vue');
const Main = () => import('@/components/main.vue');
const CreateTask = () => import('@/pages/createTask.vue');
const SetTime = () => import('@/pages/setTime.vue');
const TaskChart = () => import('@/pages/taskChart.vue');
const TaskList = () => import('@/pages/taskList.vue');

export default [
    {
        path: '/',
        redirect: 'taskList',
        components: {
            'default': Main,
            'footer': Footer
        },
        children: [
            {
                path: '/createTask',
                component: CreateTask,
                name: 'createTask',
                meta: {title: 'Create Task'}
            },
            {
                path: '/setTime',
                component: SetTime,
                name: 'setTime',
                meta: {title: 'Set Time'}
            },
            {
                path: '/taskChart',
                component: TaskChart,
                name: 'taskChart',
                meta: {title: 'Task Chart'}
            },
            {
                path: '/taskList',
                component: TaskList,
                name: 'taskList',
                meta: {title: 'Task'}
            },
        ]
    },
    {
        path: '/setTime',
        component: SetTime
    },
];