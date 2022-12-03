import { ref } from "vue";

export default {
  setup() {
    const currentDate = ref(["2021", "01"]);
    const columnsType = ["year", "month"];
    const filter = (type, options) => {
      if (type === "month") {
        return options.filter((option) => Number(option.value) % 6 === 0);
      }
      return options;
    };

    return {
      filter,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentTime,
      columnsType,
    };
  },
};
