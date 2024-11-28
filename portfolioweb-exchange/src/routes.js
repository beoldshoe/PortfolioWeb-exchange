import DetailProjectPage from './pages/DetailProjectPage';
import IntroducePage from './pages/IntroducePage';
import ProjectPage from './pages/ProjectPage';

const routes = [
    {
        path: '/',
        component: IntroducePage
    },
    {
        path: '/Project',
        component: ProjectPage
    },
    {
        path: '/Project/:id',
        component: DetailProjectPage
    }


]

export default routes;