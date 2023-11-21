export default function PostCard({ postId }: { postId: string }) {
    const { metadata } = require(`@/posts/${postId}`)
    return (
        <div>
            <a href={`/post/${postId}`} className="text-4xl hover:underline underline-offset-2">{metadata.title}</a>
            <p className="text-sm">{metadata.description}</p>
        </div>
    )
}