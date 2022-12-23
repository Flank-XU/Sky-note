import { defineComponent, PropType } from "vue";
export const Money = defineComponent({
  props: {
    value: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup: (props, context) => {
    const addZero = (n: number) => {
      const dotIndex = n.toString().indexOf(".");
      if (dotIndex < 0) {
        return n + ".00";
      } else if (n.toString().substring(dotIndex).length === 2) {
        return n.toString() + "0";
      } else {
        return n.toString();
      }
    };

    return () => <span> {addZero(props.value / 100)}</span>;
  },
});
