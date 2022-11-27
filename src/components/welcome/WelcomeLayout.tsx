import { defineComponent, FunctionalComponent } from "vue";
import s from "./WelcomeLayout.module.scss"
export const WelcomeLayout: FunctionalComponent = (props, ctx) => {
    const { slots: { icon, title, buttons } } = ctx
    return (
        <div class={s.wrapper}>
            <div class={s.card}>
                {icon?.()}
                {title?.()}
            </div>
            <div class={s.action}>
                {buttons?.()}
            </div>
        </div>

    )
}
WelcomeLayout.displayName = "WelcomeLayout"
