
import savepig from "../../assets/icons/chart.svg";
import style from "./WelcomeLayout.module.scss";

import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import { FunctionalComponent } from "vue";

export const Second: FunctionalComponent = () => {
    return <WelcomeLayout>
        {
            {
                icon: () => <img src={savepig} />,

                title: () => <h2>会挣钱<br />还要会省钱</h2>,
                buttons: () => <>
                    <RouterLink class={style.ffff} to="/start">跳过</RouterLink>
                    <RouterLink to="/Welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </>
            }
        }
    </WelcomeLayout>
}
Second.displayName = 'Second'


