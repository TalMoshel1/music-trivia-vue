import { ref, watch } from 'vue';
import { useGameStore } from '@/store/gameStore';
const emit = defineEmits();
const props = defineProps();
const store = useGameStore();
const activeId = ref(null);
watch(() => props.currentQuestionId, () => {
    activeId.value = null;
});
function pick(ans) {
    activeId.value = ans.answerId;
    const audioUrl = `https://music-trivia.s3.eu-central-1.amazonaws.com/${ans.body.replaceAll(' ', '+')}.aac`;
    emit('selectAnswer', ans);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: () => { } },
    ...{ class: "answersForm" },
});
for (const [ans, idx] of __VLS_getVForSourceType((__VLS_ctx.answers))) {
    // @ts-ignore
    [answers,];
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.pick(ans);
                // @ts-ignore
                [pick,];
            } },
        ...{ onKeydown: (...[$event]) => {
                __VLS_ctx.pick(ans);
                // @ts-ignore
                [pick,];
            } },
        ...{ onKeydown: (...[$event]) => {
                __VLS_ctx.pick(ans);
                // @ts-ignore
                [pick,];
            } },
        key: (ans.answerId + '-' + __VLS_ctx.currentQuestionId),
        ...{ class: "answerOption" },
        ...{ class: ({ answerActive: ans.answerId === __VLS_ctx.activeId }) },
        tabindex: "0",
    });
    // @ts-ignore
    [currentQuestionId, activeId,];
    (ans.body);
}
/** @type {__VLS_StyleScopedClasses['answersForm']} */ ;
/** @type {__VLS_StyleScopedClasses['answerOption']} */ ;
/** @type {__VLS_StyleScopedClasses['answerActive']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
