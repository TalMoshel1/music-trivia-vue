import { ref, computed } from 'vue';
import { useFetch } from '@/helpers/useFetch';
import { useGameStore } from '@/store/gameStore';
import QuizView from './QuizView.vue';
const game = useGameStore();
const started = ref(false);
const playerName = ref('');
const { data } = useFetch('https://music-trivia.onrender.com/api/question');
const questions = computed(() => data.value || []);
const ready = computed(() => questions.value.length > 0);
function startGame() {
    if (playerName.value.trim())
        started.value = true;
}
function handleQuizComplete(payload) {
    game.setBoardResult(payload.answers);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['btnPrimary']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "game-container" },
});
if (!__VLS_ctx.started) {
    // @ts-ignore
    [started,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "start-screen" },
    });
    __VLS_asFunctionalElement(__VLS_elements.input)({
        placeholder: "Enter your name",
        ...{ class: "player-input" },
    });
    (__VLS_ctx.playerName);
    // @ts-ignore
    [playerName,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.startGame) },
        ...{ class: "btnPrimary" },
    });
    // @ts-ignore
    [startGame,];
}
else if (__VLS_ctx.started && __VLS_ctx.ready) {
    // @ts-ignore
    [started, ready,];
    /** @type {[typeof QuizView, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(QuizView, new QuizView({
        ...{ 'onQuizComplete': {} },
        questions: (__VLS_ctx.questions),
        playerName: (__VLS_ctx.playerName),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onQuizComplete': {} },
        questions: (__VLS_ctx.questions),
        playerName: (__VLS_ctx.playerName),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = ({ quizComplete: {} },
        { onQuizComplete: (__VLS_ctx.handleQuizComplete) });
    // @ts-ignore
    [playerName, questions, handleQuizComplete,];
    var __VLS_2;
}
/** @type {__VLS_StyleScopedClasses['game-container']} */ ;
/** @type {__VLS_StyleScopedClasses['start-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['player-input']} */ ;
/** @type {__VLS_StyleScopedClasses['btnPrimary']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
