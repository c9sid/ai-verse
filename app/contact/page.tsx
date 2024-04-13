"use client"

import Form from "@/components/Form"
import { Suspense } from "react"

const page = () => {
  return (
    <>
    <Suspense fallback="Loading...">
      <Form />
    </Suspense>
    </>
  )
}

export default page