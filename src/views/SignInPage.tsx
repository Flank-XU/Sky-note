import axios from 'axios';
import { defineComponent, PropType, reactive, ref } from 'vue';
import { MainLayout } from '../layout/MainLayout';
import { Button } from '../shared/Button';
import { Form, FormItem } from '../shared/Form';
import { http } from '../shared/Http';
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
    const refValidationCode = ref<any>()
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
    const onError = (error: any) => {
      if (error.response.status === 422) {
        Object.assign(errors, error.response.data.errors)
      }
      throw error
    }
    const onClickSendValidationCode = async () => {
      const response = await http
        .post('/validation_codes', { email: formData.email })
        .catch(onError)
      refValidationCode.value.startCount()
    }
    return () => (
      <MainLayout>{
        {
          title: () => '登录',
          icon: () => <Icon name='left' />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <Icon name='icon' class={s.icon} />
                <h1 class={s.appname}> 比录记账本</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem label='邮箱地址' type='text'
                  placeholder="请输入邮箱"
                  v-model={formData.email} error={errors.email?.[0]} />
                <FormItem ref={refValidationCode} label='验证码' type='validationCode'
                  placeholder='请输入六位数字'
                  countFrom={60}
                  onClick={onClickSendValidationCode}
                  v-model={formData.code} error={errors.code?.[0]} />
                <FormItem style={{ paddingTop: '8vh' }}>
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