import { computed } from 'vue';
const props = withDefaults(defineProps(), {
    variant: 'primary',
    disabled: false,
    type: 'button'
});
const variantClass = computed(() => props.variant === 'primary'
    ? 'baseButtonPrimary'
    : 'baseButtonNeutral');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_defaults = {
    variant: 'primary',
    disabled: false,
    type: 'button'
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('click');
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: "baseButton" },
    ...{ class: (__VLS_ctx.variantClass) },
    disabled: (__VLS_ctx.disabled),
    type: (__VLS_ctx.type),
});
// @ts-ignore
[variantClass, disabled, type,];
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['baseButton']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
