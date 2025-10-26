import { useGameStore } from '@/store/gameStore';
import ScoreItem from '@/components/Score/ScoreItem.vue';
const props = defineProps();
const __VLS_emit = defineEmits();
const game = useGameStore();
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
if (__VLS_ctx.boardResults && __VLS_ctx.boardResults.length > 0) {
    // @ts-ignore
    [boardResults, boardResults,];
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        ...{ class: "boardPage" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
        ...{ class: "boardTitle" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "scoresWrapper" },
    });
    for (const [row] of __VLS_getVForSourceType((__VLS_ctx.boardResults))) {
        // @ts-ignore
        [boardResults,];
        /** @type {[typeof ScoreItem, ]} */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(ScoreItem, new ScoreItem({
            key: (row._id),
            score: (row),
        }));
        const __VLS_1 = __VLS_0({
            key: (row._id),
            score: (row),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.boardResults && __VLS_ctx.boardResults.length > 0))
                    return;
                __VLS_ctx.$emit('resetGame');
                // @ts-ignore
                [$emit,];
            } },
        ...{ class: "resetButton" },
    });
}
/** @type {__VLS_StyleScopedClasses['boardPage']} */ ;
/** @type {__VLS_StyleScopedClasses['boardTitle']} */ ;
/** @type {__VLS_StyleScopedClasses['scoresWrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['resetButton']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
