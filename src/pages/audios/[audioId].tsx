import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const { audioId } = router.query;
    return (
        <audio controls src="/toggle.mp3">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    );
}
