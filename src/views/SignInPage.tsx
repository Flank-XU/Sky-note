import { defineComponent, PropType, reactive } from 'vue';
import { MainLayout } from '../layout/MainLayout';
import { Button } from '../shared/Button';
import { Form, FormItem } from '../shared/Form';
import { Icon } from '../shared/Icon';
import { validate } from '../shared/validate';
import s from './SignInPage.module.scss';
export const SignInPage = defineComponent({

  setup: (props, context) => {
    const formData = reactive({
      email: '',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: []
    })
    const onSubmit = (e: Event) => {
      e.preventDefault()
      Object.assign(errors, {
        email: [],
        code: []
      })
      Object.assign(errors, validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.@.+/, message: '必填是邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
    }
    return () => (
      <MainLayout>{
        {
          title: () => '登录',
          icon: () => <Icon name='left' />,
          default: () => (
            <div class={s.wrapper}>
              <Form onSubmit={onSubmit}>
                <FormItem label='邮箱地址' type='text'
                  v-model={formData.email} error={errors.email?.[0]} />
                <FormItem label='验证码' type='validationCode'
                  v-model={formData.code} error={errors.code?.[0]} />
                <FormItem>
                  <Button>登录</Button>
                </FormItem>
              </Form>
            </div>

          )

        }}
      </MainLayout>
    )
  }
})