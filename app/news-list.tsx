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
    { image: "/core/子页面/新闻/t米兰.jpg", href: "", text: "特别关注：米兰理工大学毕业生就业率再创新高" },
    { image: "/core/子页面/新闻/t美国重返教科文.png", href: "", text: "美国重返教科文组织：大多数会员国投赞成票" },
    { image: "/core/子页面/新闻/t高级蓝领.jpg", href: "", text: "通向高级蓝领的桥梁——意大利“就业导向型”本科课程" },
    { image: "/core/子页面/新闻/卓越主题.png", href: "", text: "ILS LEDA与CREGU（教科文组织青年教育研究中心）签署了一项协议，就ILS LEDA的卓越主题开展培训计划" },
    { image: "/core/子页面/新闻/5-1.png", href: "", text: "邢博士有感：选择去意大利攻读博士学位或做博士后有前途吗？数据为证！" },
  ].slice(0, limit)

  return (
    <div className={clsx("w-full gap-2 grid grid-cols-1 sm:grid-cols-3", className)} {...props}>
      {news.map((item, index) => (
        <Link href={`/article/news/${index + 1}`} className={"flex flex-col gap-2 items-center"}>
          <Image src={item.image} alt={""} width={320} height={200} key={item.image} />
          <div className={""}>{item.text}</div>
        </Link>
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
