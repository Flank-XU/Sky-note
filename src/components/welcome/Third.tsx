
import savepig from "../../assets/icons/cloud.svg";
import style from "./WelcomeLayout.module.scss";
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import { FunctionalComponent } from "vue";

export const Third: FunctionalComponent = () => {
    return <WelcomeLayout>
        {
            {
                icon: () => <img src={savepig} />,

                title: () => <h2>会挣钱<br />还要会省钱</h2>,
                buttons: () => <>
                    <RouterLink class={style.ffff} to="/start">跳过</RouterLink>
                    <RouterLink to="/Welcome/4">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </>
            }
        }
    </WelcomeLayout>
}
Third.displayName = 'Third'


