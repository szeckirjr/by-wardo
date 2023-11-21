'use client';
import { allPosts } from "@/posts";
import classNames from "classnames";
import { Vidaloka } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";

type Post = {
    id: string
    title: string
    description: string
    content: string
}

const vidaloka = Vidaloka({
    weight: '400',
    subsets: ['latin'],
})

export default function Home({params}: {params: {id: string}}) {
    if (!params.id || !allPosts.includes(params.id)) {
        return <div className={classNames("flex flex-col items-center gap-8 justify-center h-screen p-32 text-center", vidaloka.className)}>
            <h1 className="text-7xl">404</h1>
            <Image src="/lost.webp" height="300" width="300" className="mix-blend-multiply " alt="404 - Page Not Found" />
            <h1 className="text-7xl">Post not found</h1>
        </div>
    }

    const {default: Post, metadata} = require(`@/posts/${params.id}`)
    
    return (
        <div className="px-16 flex flex-col gap-4">
            <h1 className="text-6xl">{metadata.title}</h1>
            <hr className="border-rich-black" />
            <Post />
        </div>
    )
}