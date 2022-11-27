import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Four } from "../components/welcome/four";
import { Sec } from "../components/welcome/sec";
import { Thr } from "../components/welcome/thr";

import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
    { path: '/', component: First },
    { path: '/about', component: First }, 
    {
        path: '/welcome',
        component:Welcome,
        children: [
            { path: '1', component: First, },
            { path: '2', component: Sec, },
            { path: '3', component: Thr, },
            { path: '4', component: Four, }]
    },
]