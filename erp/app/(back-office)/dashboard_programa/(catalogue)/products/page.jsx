import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";

import Link from "next/link";
import React from "react";
import { columns } from "./columns";

export default async function page() {
  const products = await getData("products");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add Product"
      />
      <div className="py-8">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}
