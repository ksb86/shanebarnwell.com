// shared/routes.js
import Home from './Home';
import About from './About';
import MiniProjects from './MiniProjects';
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
        path: '/mini-projects',
        exact: true,
        component: MiniProjects
    }, {
        path: '/contact',
        exact: true,
        component: Contact
    }
];

export default routes;
