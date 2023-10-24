import { columns, data } from "@/app/article/2/1/columns"
import { DataTable } from "@/app/article/2/1/data-table"
import article_2_1_data from "@/app/intern-data.json"

export default function Article_2_1() {
  return <DataTable columns={columns} data={data} />
}
