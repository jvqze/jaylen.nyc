import Head from "next/head";
import { useState } from "react";
import Confetti from "react-confetti";

const questions = [
    "What's your favorite memory with me?",
    "If we could go anywhere right now, where would it be?",
    "What's something that always makes you smile?",
    "What’s a song that reminds you of us?",
    "Describe me in three words!",
    "What’s your favorite inside joke we share?",
    "If we could have any superpower as a couple, what would it be?",
    "What was your first impression of me?",
    "What’s the most romantic thing I’ve ever done for you?",
    "If you could relive one day with me, which day would it be?",
    "What’s your favorite thing about our relationship?",
    "What’s one thing you’ve always wanted to do with me but haven’t yet?",
    "What’s a place you’d like to visit together someday?",
    "What’s your favorite way to spend time with me?",
    "How do I make you feel loved?",
    "What’s something I do that always makes you laugh?",
    "What’s a quirky habit of mine that you find endearing?",
    "What’s a future goal you have for us as a couple?",
    "If we had a pet together, what would it be and what would we name it?",
    "What’s your favorite photo of us and why?",
    "If we were a famous duo, who would we be?",
    "What’s something about me that you find irresistible?",
    "What’s the best gift I’ve ever given you?",
    "If we could go on a road trip anywhere, where would we go?",
    "What’s a movie or show that reminds you of us?",
    "If we had our own signature drink, what would it be called?",
    "What’s your favorite thing to do together on a lazy day?",
    "What’s a dream vacation you’d want to take with me?",
    "What’s one way we can grow together as a couple?",
    "What’s something small I do that makes your day better?",
    "If we could live in any city or country together, where would it be?",
    "What’s your favorite date night we’ve had so far?",
    "What’s a new hobby or activity you’d like to try with me?",
    "What’s a special nickname you have for me?",
    "What’s the most surprising thing you’ve learned about me?",
    "If you could give our relationship a title, what would it be?",
    "What’s something you look forward to in our future together?",
    "What’s your favorite thing about waking up next to me?",
    "If we could time travel together, where and when would we go?",
    "What’s one of your favorite traditions we’ve started?",
    "What’s a song that describes our relationship?",
    "If we wrote a book about our love story, what would the first chapter be called?",
    "What’s your favorite meal we’ve cooked or had together?",
    "What’s a silly thing we’ve done that always makes you smile?",
    "What’s one adventure you’d love to go on with me?",
    "What’s your favorite thing about our conversations?",
    "If we could have a super romantic date anywhere, where would it be?",
    "What’s something you want to create or build together?",
    "What’s a dream you have for us that you haven’t shared yet?"
];

export default function Home(): JSX.Element {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleNextQuestion = () => {
        setShowNext(true);
        setTimeout(() => {
            if (questionIndex + 1 === questions.length) {
                setCompleted(true);
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 6000);
            } else {
                setQuestionIndex((prevIndex) => prevIndex + 1);
                setShowNext(false);
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 6000);
            }
        }, 500);
    };

    return (
        <div>
            <Head>
                <title>Hey Christopher, answer these in person with me!</title>
            </Head>

            {showConfetti && <Confetti />}

            <main className="flex items-center justify-center h-screen">
                <div className="mx-auto max-w-6xl text-center md:py-24 space-y-12">
                    {!completed ? (
                        <>
                            <h1 className="text-4xl font-bold text-pink-600">Hey Christopher!</h1>
                            <div className="text-xl md:text-2xl mt-8">
                                <div
                                    className={`transition-opacity duration-500 ${
                                        showNext ? "opacity-0" : "opacity-100"
                                    }`}
                                >
                                    {questions[questionIndex]}
                                </div>
                            </div>
                            <div className="text-lg text-gray-600">
                                {questionIndex + 1}/{questions.length} answered
                            </div>
                            <button
                                onClick={handleNextQuestion}
                                className="mt-12 px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
                            >
                                Answer & See Next
                            </button>
                        </>
                    ) : (
                        <p className="text-5xl font-bold text-gray-500">i love you.</p>
                    )}
                </div>
            </main>
        </div>
    );
}