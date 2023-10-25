"use client"

import article_2_1_data from "@/app/intern-data.json"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import React from "react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = (typeof article_2_1_data)[0]

export { article_2_1_data as data }

const header = ({ column, table }) => {
  const value =
    // 要补上 ""，否则会导致 undefined 到 "" 的错误
    table.getColumn(column.id)?.getFilterValue() ?? ""

  return (
    <div className={"flex flex-col gap-2"}>
      <div>{column.id} </div>

      <Input
        className={"h-8 my-2  focus-visible:ring-0"}
        value={value}
        onChange={(event) => {
          table.getColumn(column.id)?.setFilterValue(event.target.value)
        }}
      />
    </div>
  )
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "机构",
    cell: ({ row }) => {
      const value = row.getValue("机构") as string
      return <div className={"w-40"}>{value}</div>
    },
    header,
    // cell: ({ row }) => (
    //   <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
    // ),
    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: "方向",
    header,
    cell: ({ row }) => {
      // console.log({ row })
      const value = row.getValue("方向") as string
      return (
        <Link href={`/article/2/1/${row.id}`} className={"text-blue-800"}>
          {/*<Link href={encodeURI(`/article/2/1/${value}`)} className={"text-blue-800"}>*/}
          {value}
        </Link>
      )
    },
  },
  {
    accessorKey: "实习时间",
    header,
  },
  {
    accessorKey: "实习方式",
    header,
  },
  {
    accessorKey: "实习收获",
    header,
  },
]
