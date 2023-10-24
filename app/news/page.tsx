"use client"

import { NewsList } from "@/app/news-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { assets } from "@/config/assets"

export default function News() {
  return (
    <Tabs defaultValue={assets.newsPage.children[0].name} className="w-full">
      <TabsList className={"w-full justify-start"}>
        {assets.newsPage.children.map((tab) => (
          <TabsTrigger value={tab.name}>{tab.name}</TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={assets.newsPage.children[0].name} className={"flex flex-col gap-2"}>
        <h2 className={"text-xl p-4 font-black"}>新闻</h2>
        <NewsList />
      </TabsContent>
    </Tabs>
  )
}
