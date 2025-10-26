import { computed, ref, watchEffect } from 'vue';
const props = defineProps();
const beginning = computed(() => {
    const parts = props.body.split(' ');
    return parts.slice(0, -2).join(' ');
});
const ending = computed(() => {
    const parts = props.body.split(' ');
    return parts.slice(-2).join(' ');
});
const shouldScale = ref(false);
watchEffect(() => {
    shouldScale.value = false;
});
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
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "promptWrapper" },
    ...{ class: ({ isQuestionBodyScaledUp: __VLS_ctx.shouldScale }) },
});
// @ts-ignore
[shouldScale,];
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "promptText" },
});
(__VLS_ctx.beginning);
// @ts-ignore
[beginning,];
__VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({
    ...{ class: "promptStrong" },
});
(__VLS_ctx.ending);
// @ts-ignore
[ending,];
/** @type {__VLS_StyleScopedClasses['promptWrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['isQuestionBodyScaledUp']} */ ;
/** @type {__VLS_StyleScopedClasses['promptText']} */ ;
/** @type {__VLS_StyleScopedClasses['promptStrong']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
