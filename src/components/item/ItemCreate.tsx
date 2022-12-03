import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layout/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
	props: {
		name: {
			type: String as PropType<string>
		}
	},
	setup: (props, context) => {
		const refKind = ref('支出')
		const onUpdateSelected = (name: string) => refKind.value = name
		return () => (
			<MainLayout>{{
				title: () => '记帐',
				icon: () => <Icon name="chart" class={s.navIcon} />,
				default: () => <>
					{/* <Tabs selected={refKind.value} onUpdateSelected={onUpdateSelected}> */}
					<Tabs v-model:selected={refKind.value}>
						<Tab name="支出">
							列表111111
						</Tab>
						<Tab name="收入">
							列表222222
						</Tab>
					</Tabs>
					<div class={s.inputPad_wrapper}>
						<InputPad />
					</div>
				</>
			}}</MainLayout>
		)
	}
})