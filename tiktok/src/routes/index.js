import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/following', component: Following },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
