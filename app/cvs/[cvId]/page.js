import Content from "@/Components/Admin/CV/contentCv/Content"
import CvPage from "@/Components/Admin/CV/infoCv/CvPage"
import PageHead from "@/Components/utils/PageHead/PageHead"
import React from "react"

export default function CVPage() {
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "السيرة الذاتية  /",
      titleEn: "",
    },
    {
      id: "02",
      link: "/cvs/1",
      titleAr: "طلب توظيف",
      titleEn: "",
    },
  ]
  return (
    <div>
      <PageHead pageTitle="السيرة الذاتية" links={linksList} />
      <CvPage />
      <Content />
    </div>
  )
}
