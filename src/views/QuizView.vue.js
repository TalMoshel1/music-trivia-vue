import { ref, computed, watch } from "vue";
import QuestionRoot from "@/components/Question/QuestionRoot.vue";
import QuestionPrompt from "@/components/Question/QuestionPrompt.vue";
import QuestionAnswers from "@/components/Question/QuestionAnswers.vue";
import QuestionNext from "@/components/Question/QuestionNext.vue";
const props = defineProps();
const emit = defineEmits();
const TOTAL_QUESTIONS = 9;
const questionIndex = ref(0);
const answersSoFar = ref([]);
const selectedAnswerForCurrent = ref(null);
const currentQuestion = computed(() => props.questions[questionIndex.value]);
function handleAnswerSelect(answer) {
    selectedAnswerForCurrent.value = answer;
}
function handleNext() {
    const q = currentQuestion.value;
    const chosen = selectedAnswerForCurrent.value;
    if (!q || !chosen) {
        return;
    }
    answersSoFar.value.push({
        questionId: q._id,
        answerId: chosen.answerId,
    });
    selectedAnswerForCurrent.value = null;
    const nextIndex = questionIndex.value + 1;
    const hasMoreQuestions = nextIndex < TOTAL_QUESTIONS && nextIndex < props.questions.length;
    if (hasMoreQuestions) {
        questionIndex.value = nextIndex;
    }
    else {
        emit("quizComplete", {
            answers: answersSoFar.value,
        });
    }
}
watch(() => props.questions, () => {
    questionIndex.value = 0;
    answersSoFar.value = [];
    selectedAnswerForCurrent.value = null;
});
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
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "quizPage" },
});
if (__VLS_ctx.currentQuestion) {
    // @ts-ignore
    [currentQuestion,];
    /** @type {[typeof QuestionRoot, typeof QuestionRoot, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(QuestionRoot, new QuestionRoot({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    const { default: __VLS_3 } = __VLS_2.slots;
    /** @type {[typeof QuestionPrompt, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(QuestionPrompt, new QuestionPrompt({
        body: (__VLS_ctx.currentQuestion.body),
    }));
    const __VLS_5 = __VLS_4({
        body: (__VLS_ctx.currentQuestion.body),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    // @ts-ignore
    [currentQuestion,];
    /** @type {[typeof QuestionAnswers, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(QuestionAnswers, new QuestionAnswers({
        ...{ 'onSelectAnswer': {} },
        answers: (__VLS_ctx.currentQuestion.answers),
        currentQuestionId: (__VLS_ctx.currentQuestion._id),
    }));
    const __VLS_9 = __VLS_8({
        ...{ 'onSelectAnswer': {} },
        answers: (__VLS_ctx.currentQuestion.answers),
        currentQuestionId: (__VLS_ctx.currentQuestion._id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = ({ selectAnswer: {} },
        { onSelectAnswer: (__VLS_ctx.handleAnswerSelect) });
    // @ts-ignore
    [currentQuestion, currentQuestion, handleAnswerSelect,];
    var __VLS_10;
    /** @type {[typeof QuestionNext, ]} */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(QuestionNext, new QuestionNext({
        ...{ 'onNext': {} },
    }));
    const __VLS_16 = __VLS_15({
        ...{ 'onNext': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_18;
    let __VLS_19;
    const __VLS_20 = ({ next: {} },
        { onNext: (__VLS_ctx.handleNext) });
    // @ts-ignore
    [handleNext,];
    var __VLS_17;
    var __VLS_2;
}
/** @type {__VLS_StyleScopedClasses['quizPage']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
