"use client"

import { Product } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { MdClose, MdDone } from "react-icons/md";

interface ManageProductsClientProps {
  products: Product[]
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products
}) => {
  let rows: any = []

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images
      }
    })
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Name", width: 220 },
    {
      field: "price",
      headerName: "Price(KRW)",
      width: 100,
      renderCell: (params) => {
        return (<div className="font-bold text-neutral-800">{params.row.price}</div>)
      }
    },
    { field: "category", headerName: "Category", width: 100 },
    { field: "brand", headerName: "Brand", width: 100 },
    {
      field: "inStock",
      headerName: "inStock",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inStock === true
              ?
              <Status text="in stock" icon={MdDone} bg="bg-teal-200" color="text-teal-700" />
              :
              <Status text="out of stock" icon={MdClose} bg="bg-rose-200" color="text-rose-700" />}
          </div>
        )
      }
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (<div>Action</div>)
      }
    },
  ]



  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Manage Products" center />
      </div>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default ManageProductsClient;