import { defineComponent, PropType, ref } from 'vue';
import { Icon } from '../../shared/Icon';
import s from './InputPad.module.scss';
import { DatePicker, Popup } from 'vant';

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const now = new Date()
    const refDate = ref<Date>(now)
    const buttons = [
      { text: '1', onClick: () => { } },
      { text: '2', onClick: () => { } },
      { text: '3', onClick: () => { } },
      { text: '4', onClick: () => { } },
      { text: '5', onClick: () => { } },
      { text: '6', onClick: () => { } },
      { text: '7', onClick: () => { } },
      { text: '8', onClick: () => { } },
      { text: '9', onClick: () => { } },
      { text: '.', onClick: () => { } },
      { text: '0', onClick: () => { } },
      { text: '清空', onClick: () => { } },
      { text: '提交', onClick: () => { } },
    ]
    const refDatePickerVisible = ref(false)
    const showDatePicker = () => refDatePickerVisible.value = true
    const hideDatePicker = () => refDatePickerVisible.value = false
    const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
    const refAmount = ref('0')
    return () => <>
      <div class={s.dateAndAmount}>
        <span class={s.date}>
          <Icon name="menu" class={s.icon} />
          <span>
            <span onClick={showDatePicker}>

              1023
            </span>
            <Popup position="bottom" v-model:show={refDatePickerVisible.value}>
              <DatePicker
                title="选择年月"
                onConfirm={setDate} onCancel={hideDatePicker}
              />
            </Popup>
          </span>
        </span>
        <span class={s.amount}>{refAmount.value}</span>
      </div>
      <div class={s.buttons}>
        {buttons.map(button =>
          <button onClick={button.onClick}>{button.text}</button>
        )}
      </div>
    </>
  }
})