"use client"

import article_2_1_data from "@/app/intern-data.json"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import React from "react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = (typeof article_2_1_data)[0]

export { article_2_1_data as data }

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "机构",
    cell: ({ row }) => {
      const value = row.getValue("机构") as string
      return <div className={"w-40"}>{value}</div>
    },
    // header: ({ table }) => (
    //   <Checkbox
    //     checked={table.getIsAllPageRowsSelected()}
    //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //     aria-label="Select all"
    //   />
    // ),
    // cell: ({ row }) => (
    //   <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
    // ),
    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: "方向",
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
  },
  {
    accessorKey: "实习方式",
  },
  {
    accessorKey: "实习收获",
  },
]
