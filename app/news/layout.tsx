"use client"

import { CenterContainer } from "@/components/container"
import { Banner } from "@/components/main/banner"
import { PropsWithChildren } from "react"

export default function News({ children }: PropsWithChildren) {
  return (
    <>
      <Banner />
      <CenterContainer>{children}</CenterContainer>
    </>
  )
}
