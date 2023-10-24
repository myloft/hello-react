import { clsx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes } from "react"
import Content4B3Image from "~/正文04 区/右 区/03 NEWS (底图).png"

export const NewsList = ({
  limit,
  hasMore,
  className,
  ...props
}: { limit?: number; hasMore?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  const news = [
    "/core/子页面/新闻/t米兰.jpg",
    "/core/子页面/新闻/t美国重返教科文.png",
    "/core/子页面/新闻/t高级蓝领.jpg",
    "/core/子页面/新闻/卓越主题.png",
  ].slice(0, limit)

  return (
    <div className={clsx("w-full gap-2 grid grid-cols-1 sm:grid-cols-3", className)} {...props}>
      {news.map((item) => (
        <Image src={item} alt={""} width={320} height={200} key={item} />
      ))}

      {hasMore && (
        <Link className={"relative w-fit h-fit"} href={"/news"}>
          <Image src={Content4B3Image} alt={""} width={320} height={200} />
          <span className={"absolute inset-0 w-full h-full flex items-center justify-center text-white font-medium text-[24px]"}>
            更多新闻
          </span>
        </Link>
      )}
    </div>
  )
}
