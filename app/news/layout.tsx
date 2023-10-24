"use client"

import { CenterContainer } from "@/components/container"
import { PropsWithChildren } from "react"

export default function News({ children }: PropsWithChildren) {
  return <CenterContainer className={"px-[15%] pt-[5%]"}>{children}</CenterContainer>
}
