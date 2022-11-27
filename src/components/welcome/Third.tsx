import { defineComponent } from 'vue';
import style from "./First.module.scss";
import savepig from "../../assets/icons/cloud.svg";
import { RouterLink } from 'vue-router';

export const Third = defineComponent({
    setup: (props, context) => {
        return () => <>
            <div class={style.wrapper}>
                <div class={style.card}>
                    <img src={savepig} />
                    <h2>学会记账<br/>还要会省钱</h2>
                </div>
                <div class={style.action}>
                    <RouterLink class={style.ffff} to="/start">跳过</RouterLink>
                    <RouterLink to="/Welcome/4">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                    </div>
            </div>
        </>

    }
})