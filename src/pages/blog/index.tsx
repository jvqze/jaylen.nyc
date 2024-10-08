import AOS from "aos";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect } from "react";

import { getSortedPostsData, PostData } from "../../lib/posts";

import "aos/dist/aos.css";

type BlogIndexProps = {
    allPostsData: PostData[];
};

export default function BlogIndex({ allPostsData }: BlogIndexProps) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mx-auto mt-8 max-w-4xl px-4">
            <h1 className="mb-6 text-center text-4xl font-bold">Blogs 📰</h1>
            <ul className="space-y-6">
                {allPostsData.map(({ id, title, date }) => (
                    <li
                        key={id}
                        data-aos="fade-up"
                        className="transform rounded-lg border p-4 shadow-md transition-all duration-500 hover:scale-105 border-gray-700 hover:bg-gray-800"
                    >
                        <Link
                            href={`/blog/${id}`}
                            className="text-2xl font-semibold text-blue-600 hover:underline"
                        >
                            {title}
                        </Link>
                        <br />
                        <small className="text-gray-400">{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};