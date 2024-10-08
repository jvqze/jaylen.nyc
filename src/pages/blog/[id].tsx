import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";

type BlogPostProps = {
    postData: {
        title: string;
        date: string;
        time?: string;
        contentHtml: string;
    };
};

const formatDateTime = (date: string, time?: string) => {
    const dateTimeString = time ? `${date}T${time}:00` : date;
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    };
    const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
        new Date(dateTimeString)
    );
    return formattedDateTime;
};

export default function BlogPost({ postData }: BlogPostProps) {
    const formattedDateTime = formatDateTime(postData.date, postData.time);

    return (
        <div className="mx-auto mt-8 max-w-4xl px-4">
            <h1 className="mb-4 text-4xl font-bold text-white">{postData.title}</h1>
            <div className="mb-6 text-gray-400">{formattedDateTime}</div>
            <div
                className="prose-headings:text-white prose-a:text-blue-400 prose-a:underline prose-p:text-white max-w-none prose"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
};