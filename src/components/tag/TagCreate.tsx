import { defineComponent, PropType, reactive } from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Icon } from "../../shared/Icon";
import { Rules, validate } from "../../shared/validate";
import s from "./Tag.module.scss";
import { TagForm } from "./TagForm";
export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})

    //
    const onSubmit = (e: Event) => {
      const rules: Rules<typeof formData> = [
        { key: 'name', type: 'required', message: '必填' },
        { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
        { key: 'sign', type: 'required', message: '必填' },
      ]
      //每次检验前充值错误信息
      Object.assign(errors, {
        name: undefined,
        sign: undefined
      })
      // 把新的错误信息覆盖之前的
      Object.assign(errors, validate(formData, rules))
      e.preventDefault()
    }
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="left" onClick={() => { }} />,
        default: () => (
          <TagForm />
        )
      }}</MainLayout>
    )
  },
});
