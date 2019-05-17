<template>
  <button
    class="component-button"
    :class="['component-button--' + type, 'component-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
    @click="handleClick"
    :disabled="disabled">{{value}}</button>
</template>

<script>
export default {
    name: 'component-button',
    methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    value:String,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>

<style lang="css">
.component-button{
    border-radius: 8px;
    color: #fff;
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
}
.component-button--default{
    background-color:rgba(85, 92, 87, 0.877); 
}
.component-button--danger{
    background-color:#e4393c; 
}
.component-button--primary{
    background-color:#3fe439; 
}
.component-button--small{
    padding: 0 15px;
    height:28px;
    font-size: 12px;
}
.component-button--normal{
    padding: 0 20px;
    height:40px;
    font-size: 14px;
}
.component-button--large{
    padding: 0 25px;
    height:45px;
    font-size: 16px;
}
</style>