import savepig from "../../assets/icons/note1.svg";
import style from "./WelcomeLayout.module.scss";
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import { FunctionalComponent } from "vue";

export const Forth: FunctionalComponent = () => {
    return <WelcomeLayout>
        {
            {
                icon: () => <img src={savepig} />,
                title: () => <h2>会挣钱<br />还要会省钱</h2>,
                buttons: () => <>
                    <RouterLink class={style.ffff} to="/start">跳过</RouterLink>
                    <RouterLink to="/start">完成</RouterLink>
                    <RouterLink  class={style.ffff} to="/start">跳过</RouterLink>
                </>
            }
        }
    </WelcomeLayout>
}
Forth.displayName = 'Fotrh'


