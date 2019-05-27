// shared/routes.js
import Home from './Home';
import About from './About';
import Contact from './Contact';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    }, {
        path: '/about',
        exact: true,
        component: About
    }, {
        path: '/contact',
        exact: true,
        component: Contact
    }
];

export default routes;
