
import type { FAQ } from '../types';
import { STOP_WORDS } from '../constants';

/**
 * Preprocesses text by tokenizing, lowercasing, removing punctuation, and filtering stop words.
 * @param text The input string.
 * @returns An array of processed tokens.
 */
const preprocessText = (text: string): string[] => {
    const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, '');
    const tokens = cleanedText.split(/\s+/);
    return tokens.filter(token => token && !STOP_WORDS.has(token));
};

/**
 * Calculates the dot product of two vectors.
 * @param vecA First vector.
 * @param vecB Second vector.
 * @returns The dot product.
 */
const dotProduct = (vecA: number[], vecB: number[]): number => {
    let product = 0;
    for (let i = 0; i < vecA.length; i++) {
        product += vecA[i] * vecB[i];
    }
    return product;
};

/**
 * Calculates the magnitude (length) of a vector.
 * @param vec The vector.
 * @returns The magnitude.
 */
const magnitude = (vec: number[]): number => {
    let sumOfSquares = 0;
    for (const val of vec) {
        sumOfSquares += val * val;
    }
    return Math.sqrt(sumOfSquares);
};

/**
 * Calculates the cosine similarity between two vectors.
 * @param vecA First vector.
 * @param vecB Second vector.
 * @returns The cosine similarity score (0 to 1).
 */
const calculateCosineSimilarity = (vecA: number[], vecB: number[]): number => {
    const magA = magnitude(vecA);
    const magB = magnitude(vecB);
    if (magA === 0 || magB === 0) {
        return 0;
    }
    return dotProduct(vecA, vecB) / (magA * magB);
};

/**
 * Finds the best matching FAQ for a user query.
 * @param query The user's question.
 * @param faqs The list of FAQs.
 * @returns The answer to the best matching question or a default message.
 */
export const findBestMatch = (query: string, faqs: FAQ[]): string => {
    const queryTokens = preprocessText(query);
    if (queryTokens.length === 0) {
        return "I'm not sure how to answer that. Could you please rephrase your question?";
    }

    const faqTokens = faqs.map(faq => preprocessText(faq.question));

    const vocabulary = new Set([...queryTokens, ...faqTokens.flat()]);
    const vocabArray = Array.from(vocabulary);

    const createVector = (tokens: string[]): number[] => {
        return vocabArray.map(word => tokens.filter(token => token === word).length);
    };

    const queryVector = createVector(queryTokens);
    const faqVectors = faqTokens.map(createVector);

    let bestMatchIndex = -1;
    let maxSimilarity = -1;

    faqVectors.forEach((faqVector, index) => {
        const similarity = calculateCosineSimilarity(queryVector, faqVector);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatchIndex = index;
        }
    });

    const SIMILARITY_THRESHOLD = 0.2;

    if (maxSimilarity > SIMILARITY_THRESHOLD && bestMatchIndex !== -1) {
        return faqs[bestMatchIndex].answer;
    }

    return "I'm sorry, I don't have an answer for that. Please try asking another question or contact our support team directly.";
};
