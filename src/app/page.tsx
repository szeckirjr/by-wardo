import PostCard from "@/components/PostCard";
import { allPosts } from "@/posts";
import { Vidaloka } from "next/font/google";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const PostList = () => (
    <div className="flex flex-col gap-4 mt-6">
      {allPosts.map((postId) => (
        <PostCard key={postId} postId={postId} />
      ))}
    </div>
  );

  return <PostList />;
}
