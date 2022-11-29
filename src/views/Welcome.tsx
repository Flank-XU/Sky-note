import { defineComponent, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import style from './Welcome.module.scss';
import logo from '../assets/icons/icon.svg'
export const Welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class={style.wrapper}>
            <header><svg>
                <use xlinkHref='#icon'></use>
            </svg>
                <h1>比鲁记账本</h1></header>
            <main class={style.main}>
                <RouterView name="main">
                    {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
                        <Transition
                            enterFromClass={style.slide_fade_enter_from}
                            enterActiveClass={style.slide_fade_enter_active}
                            leaveToClass={style.slide_fade_leave_to}
                            leaveActiveClass={style.slide_fade_leave_active}>
                            {X}
                        </Transition>
                    }
                </RouterView>
            </main>
            <footer>
                <RouterView name="footer" />
            </footer>
        </div>
    }
})