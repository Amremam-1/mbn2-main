"use client"

import Content from "@/Components/Admin/CV/contentCv/Content"
import CvPage from "@/Components/Admin/CV/infoCv/CvPage"
import PageHead from "@/Components/utils/PageHead/PageHead"
import React from "react"
import { useState, useEffect } from "react"

export default function CVPage() {
  const [cvData, setCvData] = useState(null)

  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await fetch("https://mahercp.net/dashboard/api/cv/2")
        const data = await response.json()
        setCvData(data)
        // console.log(data)
      } catch (error) {
        console.error("Failed to fetch CV data:", error)
      }
    }

    fetchCvData() // استدعاء الدالة عند تحميل الصفحة
  }, [])

  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "السيرة الذاتية  /",
      titleEn: "",
    },
    {
      id: "02",
      link: "/cvs/2",
      titleAr: "طلب توظيف",
      titleEn: "",
    },
  ]
  return (
    <div>
      <PageHead pageTitle="السيرة الذاتية" links={linksList} />
      <CvPage cvData={cvData} />
      <Content cvData={cvData} />
    </div>
  )
}
