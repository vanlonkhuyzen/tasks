import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (q: Question): boolean => q.published,
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (q: Question): boolean =>
            !(q.options.length === 0 && q.body === "" && q.expected === ""),
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const givenID = questions.find((q: Question): boolean => q.id == id);
    if (givenID === undefined) return null;
    return givenID;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filteredID = questions.filter((q: Question): boolean => q.id != id);

    return filteredID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    const questionNames = (q: Question): string => q.name;
    const names = questions.map(questionNames);
    return names;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answerArray = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );

    return answerArray;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    const publishQuestions = questions.map(
        (q: Question): Question => ({
            ...q,
            published: true,
        }),
    );

    return publishQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const blankQuestion = makeBlankQuestion(id, name, type);

    return [...questions, blankQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return [];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return [];
}
