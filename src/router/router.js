// const Footer = () => import('@/components/footer.vue');
import Footer from '@/components/footer.vue';
// const Footer = r => require.ensure([], () => r(require('_components/footer.vue')), 'footer');

export default [
    {
        path: '/',
        component: Footer
    }
];