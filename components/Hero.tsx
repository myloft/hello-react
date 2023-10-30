"use client"

import { ReactMarkdownNoSSr } from "@/components/react-markdown-no-ssr"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ITeacher } from "@/config/assets"
import Image from "next/image"
import Link from "next/link"

export const HeroInTeachersPage = ({ id, name, avatar, desc }: ITeacher) => {
  return (
    <>
      <a className="anchor" id={id}></a>
      <div className={"w-full flex flex-col gap-2"}>
        <p className={"font-bold"}>
          {name.zh} ({name.en})
        </p>

        <div className={"w-full flex gap-4"}>
          <div className={"w-40 shrink-0"}>
            <AspectRatio ratio={3 / 4}>
              <Image src={avatar} alt={""} fill sizes={"width:120px;"} />
            </AspectRatio>
          </div>

          <div>
            <ReactMarkdownNoSSr>{desc}</ReactMarkdownNoSSr>
          </div>
        </div>
      </div>
    </>
  )
}

export const HeroInHomePage = ({ avatar, name, id }: ITeacher) => {
  return (
    <Link className={"flex flex-col gap-2 w-[160px]"} href={`/article/1/2#${id}`}>
      <AspectRatio ratio={3 / 4}>
        <Image src={avatar} alt={""} fill sizes={"width:160px;"} />
      </AspectRatio>
      <p>{name.zh}</p>
      <p>{name.en}</p>
    </Link>
  )
}

export const MoreHeroes = ({MoreHeroes}) => {
  return (
    <Link className={"flex flex-col gap-2 w-[160px] relative"} href={`/article/1/2`}>
      <AspectRatio ratio={3 / 4}>
        <Image src={MoreHeroes} alt="More Teachers" fill sizes={"width:160px;"} />
      </AspectRatio>
      <span className={"absolute inset-0 top-20 w-full h-full flex items-start justify-center text-white font-medium text-[24px]"}>
            更多导师
      </span>
    </Link>
  )
}
