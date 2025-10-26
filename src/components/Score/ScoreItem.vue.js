const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.article, __VLS_elements.article)({
    ...{ class: "scoreItem" },
    'aria-label': (`score of ${__VLS_ctx.score.name}`),
});
// @ts-ignore
[score,];
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "scoreName" },
});
(__VLS_ctx.score.isMe ? `${__VLS_ctx.score.name} (me)` : __VLS_ctx.score.name);
// @ts-ignore
[score, score, score,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "scoreValue" },
    'aria-label': "score value",
});
(__VLS_ctx.score.score);
// @ts-ignore
[score,];
/** @type {__VLS_StyleScopedClasses['scoreItem']} */ ;
/** @type {__VLS_StyleScopedClasses['scoreName']} */ ;
/** @type {__VLS_StyleScopedClasses['scoreValue']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
