const __VLS_emit = defineEmits();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
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
            __VLS_ctx.$emit('next');
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: "nextButton" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['nextButton']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
});
export default {};
