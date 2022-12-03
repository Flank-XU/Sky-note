import { defineComponent, PropType } from 'vue';
import s from './Tabs.module.scss';
export const Tabs = defineComponent({
	props: {
		selected: {
			type: String as PropType<string>,
			required: false,
		}
	},
	setup: (props, context) => {
		return () => {
			const tabs = context.slots.default?.()
			if (!tabs) return () => null
			for (let i = 0; i < tabs.length; i++) {
				if (tabs[i].type !== Tab) {
					throw new Error("<Tabs> only acceps <Tab> as children")
				}
			}
			return <div class={s.tabs}>
				<ol class={s.tabs_nav}>
					{tabs.map(item =>
						<li class={item.props?.name === props.selected ? s.selected : ''}
							onClick={() => context.emit('update:selected', item.props?.name)}
						// onClick={() => context.emit('updateSelected', item.props?.name)}
						>
							{item.props?.name}
						</li>)}
				</ol>
				<div>
					12355
					{tabs.find(item => console.log(item.props?.name === props.selected))}
					{tabs.find(item => item.props?.name === props.selected)}
				</div>
			</div>
		}
	}
})

export const Tab = defineComponent({
	props: {
		name: {
			type: String as PropType<string>
		}
	},
	setup: (props, context) => {
		return () => (
			<div>{context.slots.deault?.()}</div>
		)
	}
})