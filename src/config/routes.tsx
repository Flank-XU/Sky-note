import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Four } from "../components/welcome/four";
import { Sec } from "../components/welcome/Second";
import { Thr } from "../components/welcome/thr";

import { Welcome as welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome',
        component:welcome,
        children: [
            { path: '', redirect: 'welcome/1', },
            { path: '1', component: First, },
            { path: '2', component: Sec, },
            { path: '3', component: Thr, },
            { path: '4', component: Four, }]
    },
]