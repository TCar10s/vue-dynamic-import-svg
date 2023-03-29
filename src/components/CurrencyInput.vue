<template>
  <el-input ref="inputRef" v-model="formattedValue" />
</template>

<script>
import { useCurrencyInput } from "vue-currency-input";
import { watch } from "vue";

export default {
  name: "CurrencyInput",
  props: {
    modelValue: Number,
    options: Object,
  },
  setup(props) {
    const { inputRef, formattedValue, setValue, setOptions } = useCurrencyInput(
      props.options
    );

    watch(
      () => props.modelValue, // Vue 2: props.value
      (value) => {
        setValue(value);
      }
    );

    watch(
      () => props.options,
      (options) => {
        setOptions(options);
      }
    );

    return { inputRef, formattedValue };
  },
};
</script>
