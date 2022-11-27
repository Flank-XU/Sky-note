import { defineComponent } from 'vue';
import style from "./First.module.scss";
import savepig from "../../assets/icons/note1.svg";
import { RouterLink } from 'vue-router';

export const Forth = defineComponent({
    setup: (props, context) => {
        return () => <>
            <div class={style.wrapper}>
                <div class={style.card}>
                    <img src={savepig} />
                    <h2>会挣钱<br/>还要会省钱</h2>
                </div>
                <div class={style.action}>
                    <RouterLink class={style.ffff} to="/start">跳过</RouterLink>
                    <RouterLink to="/start">完成</RouterLink>
                    <RouterLink class={style.ffff}  to="/start">跳过</RouterLink>
                    </div>
            </div>
        </>

    }
})