import dynamic from "next/dynamic"

export const ReactMarkdownNoSSr = dynamic(() => import("react-markdown"), { ssr: false })
