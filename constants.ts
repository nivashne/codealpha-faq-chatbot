
import type { FAQ } from './types';

export const FAQS: FAQ[] = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase for a full refund or exchange. The item must be unused and in its original packaging. Please visit our returns page for more details."
    },
    {
        question: "How do I track my order?",
        answer: "Once your order has shipped, you will receive an email with a tracking number. You can use this number on the carrier's website to track your package's progress."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Please check our shipping information page for more details."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), as well as PayPal, Apple Pay, and Google Pay."
    },
    {
        question: "How can I contact customer support?",
        answer: "Our customer support team is available 24/7. You can reach us via email at support@example.com, by phone at 1-800-555-1234, or through our live chat feature on the website."
    },
    {
        question: "Can I change or cancel my order?",
        answer: "If you need to change or cancel your order, please contact us as soon as possible. We can make changes if the order has not yet been processed for shipping. Once it's shipped, it cannot be canceled but you can return it."
    },
    {
        question: "Do you offer gift wrapping?",
        answer: "Yes, we offer complimentary gift wrapping for all orders. You can select this option during checkout and even add a personalized message."
    },
    {
        question: "Where are you located?",
        answer: "Our company headquarters is in San Francisco, CA, but we have warehouses across the country to ensure fast shipping to all our customers."
    },
];

export const STOP_WORDS: Set<string> = new Set([
    'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves',
    'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their',
    'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are',
    'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an',
    'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about',
    'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up',

    'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when',
    'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no',
    'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don',
    'should', 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', 'couldn', 'didn', 'doesn', 'hadn',
    'hasn', 'haven', 'isn', 'ma', 'mightn', 'mustn', 'needn', 'shan', 'shouldn', 'wasn', 'weren', 'won', 'wouldn', '?'
]);
