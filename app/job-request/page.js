import JobForm from "@/Components/JobRequest/JobForm/JobForm";
import PageHead from "@/Components/utils/PageHead/PageHead";


export default function JobRequestPage() {
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "",
    },
    {
      id: "02",
      link: "/job-request",
      titleAr: "طلب توظيف",
      titleEn: "",
    },
  ];


  return (
    <>
      <PageHead pageTitle="طلب توظيف" links={linksList} />
      <JobForm />
    </>
  )
}
