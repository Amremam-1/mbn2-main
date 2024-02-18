"use client";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { sendData } from "@/fuctions/sendData";
import notify from "./notify/useNotification";


const useSendJobFormData = () => {
  const [loading, setLoading] = useState(true);
  
  const [errorForm, setErrorForm] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [responseFromApi, setResponseFromApi] = useState(null);

  const JobFormSchema = Yup.object().shape({
    applied_position: Yup.number().required('برجاء إختيار الوظيفة المطلوبة'),
    first_name: Yup.string().required('برجاء إدخال الأسم الأول'),
    father_name: Yup.string().required('برجاء إدخال إسم الأب'),
    family_name: Yup.string().required('برجاء إدخال إسم العائلة'),
    favorite_city_0: Yup.string().required('برجاء إدخال إسم أول مدينة مفضله للعمل'),
    favorite_city_1: Yup.string().required('برجاء إدخال إسم ثان مدينة مفضله للعمل'),
    favorite_city_2: Yup.string().required('برجاء إدخال إسم ثالث مدينة مفضله للعمل'),
    date_of_birth: Yup.string().required("برجاء إدخال تاريج الميلاد"),
    place_of_birth: Yup.string().required("برجاء إدخال مكان الميلاد"),
    nationality: Yup.string().required("برجاء إدخال الجنسية"),
    religion: Yup.number().required('برجاء إختيار الديانة'),
    no_of_id: Yup.string()
      .min(14, 'يجب أن يكون رقم البطاقة 14 رقم')
      .max(14, 'يجب أن يكون رقم البطاقة 14 رقم')
      .required('برجاء إدخال رقم البطاقة / الإقامة'),
    id_place_of_issue: Yup.string().required('برجاء إدخال مكان الإصدر'),
    id_date_of_issue: Yup.string().required('برجاء إدخال تاريخ الإصدر'),
    no_of_passport: Yup.string().required('برجاء إدخال رقم جواز السفر'),
    passport_place_of_issue: Yup.string().required('برجاء إدخال مكان الإصدر'),
    passport_date_of_issue: Yup.string().required('برجاء إدخال تاريخ الإصدر'),
    home_phone_no: Yup.string().required('برجاء إدخال رقم هاتف المنزل'),
    work_phone_no: Yup.string().required('برجاء إدخال رقم هاتف العمل'),
    mobile_no: Yup.string().required('برجاء إدخال رقم الجوال'),
    email: Yup.string().required('برجاء إدخال رقم البريد الإلكتروني'),
    country: Yup.number().required('برجاء إختيار الدولة'),
    city: Yup.string().required('برجاء إدخال المدينة'),
    present_address: Yup.string().required('برجاء إدخال العنوان الحالي'),
    marital_status: Yup.number().required('برجاء تحديد الحالة الاجتماعية'),
    employed_here_before: Yup.boolean().required('برجاء تحديد هل سبق و عملت في هذه الشركة؟'),
    employed_now: Yup.boolean().required('برجاء تحديد هل تعمل حاليا؟'),
    G_O_S_I_no: Yup.string()
      .min(8, 'يجب أن يكون رقم التأمينات 8 رقم')
      .max(8, 'يجب أن يكون رقم التأمينات 8 رقم')
      .required('برجاء إدخال رقم التأمينات الإجتماعية'),
    min_salary: Yup.number().required('برجاء إدخال الحد الأدنى للراتب'),
    suitable_work_time_from: Yup.string().required('برجاء إدخال وقت العمل المناسب لك من الساعه'),
    suitable_work_time_to: Yup.string().required('برجاء إدخال وقت العمل المناسب لك إلى الساعه'),
    prefered_start_work: Yup.string().required('برجاء إدخال الوقت المناسب لك لبداية العمل '),
    work_outside_your_city: Yup.boolean().required('برجاء  الإجابة على: هل لديك إستعداد للعمل خارج مدينتك؟'),
    have_car: Yup.boolean().required('برجاء الإجابة على: هل لديك سيارة'),
    car_Type: Yup.string().required('برجاء إدخال نوع السيارة'),
    year_of_manufacturing: Yup.string().required('برجاء إدخال سنة الصنع للسيارة'),
    licence_category: Yup.string().required('برجاء إدخال نوع رخصة القيادة'),
    licence_number: Yup.string().required('برجاء إدخال رقم رخصة القيادة'),
    licence_date_of_issue: Yup.string().required('برجاء إدخال تاريخ صدور رخصة القيادة'),
    licence_date_of_expiry: Yup.string().required('برجاء إدخال تاريخ إنتهاء رخصة القيادة'),
    licence_place_of_issue: Yup.string().required('برجاء إدخال مكان إصدار رخصة القيادة'),
    blood_group: Yup.string().required('برجاء إدخال نوع فصيلة الدم'),
    have_convicted: Yup.boolean().required('برجاء الإجابة على: هل صدرت بحقك أحكام قضائية؟'),
    convict_description: Yup.string().required('برجاء توضيح تفاصيل الأحكام قضائية'),
    // hobbies_skills: Yup.string().required('برجاء إدخال المهارا وت الهوايات'),
    how_know_job: Yup.string().required('برجاء الإجابة على: كيف عرفت عن فرصة العمل؟'),
    have_employed_relatives: Yup.boolean().required('برجاء الإجابة على: هل لديك أقارب يعملون في شركتنا؟'),
    other_data_to_add: Yup.string().required('برجاء الإجابة على: هل هناك معلومات أخرى تود إضافتها؟'),
    education: Yup.string().required('برجاء إدخال اخر تحصيل علمي'),
    name_of_institute: Yup.string().required('برجاء إدخال إسم المدرسة / الجامعة'),
    education_city: Yup.string().required('برجاء إدخال المدينة / البلد'),
    duration_study_from: Yup.string().required('برجاء إدخال مدة الدراسة من سنة'),
    duration_study_to: Yup.string().required('برجاء إدخال مدة الدراسة إلى سنة'),
    specialize: Yup.string().required('برجاء إدخال التخصص'),
    grade: Yup.string().required('برجاء إدخال الدرجة / التقدير'),
    previous_work_0_job_title: Yup.string().required('برجاء إدخال مسمى الوظيفة'),
    previous_work_0_company_name: Yup.string().required('برجاء إدخال إسم الشركة'),
    previous_work_0_start_date: Yup.string().required('برجاء إدخال تاريخ الإلتحاق بالشركة'),
    previous_work_0_end_date: Yup.string().required('برجاء إدخال الدرجة'),
    previous_work_0_company_address: Yup.string().required('برجاء إدخال تاريج ترك الشركة'),
    previous_work_0_company_mobile: Yup.string().required('برجاء إدخال هاتف الشركة'),
    previous_work_0_salary: Yup.string().required('برجاء إدخال اخر مرتب بالشركة'),
    previous_work_0_allowance: Yup.string().required('برجاء إدخال البدلات'),
    previous_work_0_description_of_duties: Yup.string().required('برجاء إدخال تفاصيل واجباتك بالشركة'),
    previous_work_0_reason_for_quit: Yup.string().required('برجاء إدخال سبب ترك الشركة'),
    AR_speaking: Yup.number().required('برجاء إختيار مستوى التحدث'),
    AR_reading: Yup.number().required('برجاء إختيار مستوى القراءة'),
    AR_writing: Yup.number().required('برجاء إختيار مستوى الكتابة'),
    // AR_shorthand_speed: Yup.number().required('برجاء إختيار مستوى سرعة الإختزال'),
    // AR_typing_speed: Yup.number().required('برجاء إختيار مستوى سرعة الكتابة'),
    EN_speaking: Yup.number().required('برجاء إختيار مستوى التحدث'),
    EN_reading: Yup.number().required('برجاء إختيار مستوى القراءة'),
    EN_writing: Yup.number().required('برجاء إختيار مستوى الكتابة'),
    // EN_shorthand_speed: Yup.number().required('برجاء إختيار مستوى سرعة الإختزال'),
    // EN_typing_speed: Yup.number().required('برجاء إختيار مستوى سرعة الكتابة'),
    Courses_0_name_of_institute: Yup.string().required('برجاء إدخال إسم المعهد'),
    Courses_0_education_city: Yup.string().required('برجاء إدخال المدينة / البلد'),
    Courses_0_duration_study_from: Yup.string().required('برجاء إدخال تاريخ بداية الدورة'),
    Courses_0_duration_study_to: Yup.string().required('برجاء إدخال تاريخ إنتهاء الدورة'),
    Courses_0_specialize: Yup.string().required('برجاء إدخال التخصص'),
    Identifiers_0_name: Yup.string().required('برجاء إدخال إسم الشخص'),
    Identifiers_0_position: Yup.string().required('برجاء إدخال وظيفة الشخص'),
    Identifiers_0_company: Yup.string().required('برجاء إدخال إسم الشركة'),
    Identifiers_0_mobile: Yup.string().required('برجاء إدخال هاتف الشخص'),
    Identifiers_0_address: Yup.string().required('برجاء إدخال عنوان الشخص'),
    relatives: Yup.string().required('برجاء ذكر الأصحاب من غير الأقارب'),
  });

  const formik = useFormik({
    initialValues: {
      applied_position: '',
      first_name: '',
      father_name: '',
      family_name: '',
      favorite_city_0: '',
      favorite_city_1: '',
      favorite_city_2: '',
      date_of_birth: '',
      place_of_birth: '',
      nationality: '',
      religion: '',
      no_of_id: '',
      id_place_of_issue: '',
      id_date_of_issue: '',
      no_of_passport: '',
      passport_place_of_issue: '',
      passport_date_of_issue: '',
      home_phone_no: '',
      work_phone_no: '',
      mobile_no: '',
      email: '',
      country: '',
      city: '',
      present_address: '',
      marital_status: '',
      employed_here_before: '',
      employed_now: '',
      G_O_S_I_no: '',
      min_salary: '',
      suitable_work_time_from: '',
      suitable_work_time_to: '',
      prefered_start_work: '',
      work_outside_your_city: '',
      have_car: '',
      car_Type: '',
      year_of_manufacturing: '',
      licence_category: '',
      licence_number: '',
      licence_date_of_issue: '',
      licence_date_of_expiry: '',
      licence_place_of_issue: '',
      blood_group: '',
      have_convicted: '',
      convict_description: '',
      // hobbies_skills: '',
      how_know_job: '',
      have_employed_relatives: '',
      other_data_to_add: '',
      education: '',
      name_of_institute: '',
      education_city: '',
      duration_study_from: '',
      duration_study_to: '',
      specialize: '',
      grade: '',
      previous_work_0_job_title: '',
      previous_work_0_company_name: '',
      previous_work_0_start_date: '',
      previous_work_0_end_date: '',
      previous_work_0_company_address: '',
      previous_work_0_company_mobile: '',
      previous_work_0_salary: '',
      previous_work_0_allowance: '',
      previous_work_0_description_of_duties: '',
      previous_work_0_reason_for_quit: '',
      AR_speaking: '',
      AR_reading: '',
      AR_writing: '',
      // AR_shorthand_speed: '',
      // AR_typing_speed: '',
      EN_speaking: '',
      EN_reading: '',
      EN_writing: '',
      // EN_shorthand_speed: '',
      // EN_typing_speed: '',
      Courses_0_name_of_institute: '',
      Courses_0_education_city: '',
      Courses_0_duration_study_from: '',
      Courses_0_duration_study_to: '',
      Courses_0_specialize: '',
      Identifiers_0_name: '',
      Identifiers_0_position: '',
      Identifiers_0_company: '',
      Identifiers_0_mobile: '',
      Identifiers_0_address: '',
      relatives: '',
    },
    validationSchema: JobFormSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

// ---------------------

  
  let applied_position = formik.values.applied_position;
  let applied_positionError = formik.touched.applied_position && formik.errors.applied_position ? formik.errors.applied_position : null;
  let onChangeApplied_position = formik.handleChange;
  let onBlurApplied_position = formik.handleBlur;
  // let onChangeApplied_position = (e) => {console.log("select: ", e.target.value)};
  
  
  let first_name = formik.values.first_name;
  let first_nameError = formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name : null;
  let onChangeFirst_name = formik.handleChange;
  let onBlurFirst_name = formik.handleBlur;
  
  let father_name = formik.values.father_name;
  let father_nameError = formik.touched.father_name && formik.errors.father_name ? formik.errors.father_name : null;
  let onChangeFather_name = formik.handleChange;
  let onBlurFather_name = formik.handleBlur;
  
  let family_name = formik.values.family_name;
  let family_nameError = formik.touched.family_name && formik.errors.family_name ? formik.errors.family_name : null;
  let onChangeFamily_name = formik.handleChange;
  let onBlurFamily_name = formik.handleBlur;
  
  let favorite_city_0 = formik.values.favorite_city_0;
  let favorite_city_0Error = formik.touched.favorite_city_0 && formik.errors.favorite_city_0 ? formik.errors.favorite_city_0 : null;
  let onChangeFavorite_city_0 = formik.handleChange;
  let onBlurFavorite_city_0 = formik.handleBlur;
  
  let favorite_city_1 = formik.values.favorite_city_1;
  let favorite_city_1Error = formik.touched.favorite_city_1 && formik.errors.favorite_city_1 ? formik.errors.favorite_city_1 : null;
  let onChangeFavorite_city_1 = formik.handleChange;
  let onBlurFavorite_city_1 = formik.handleBlur;
  
  let favorite_city_2 = formik.values.favorite_city_2;
  let favorite_city_2Error = formik.touched.favorite_city_2 && formik.errors.favorite_city_2 ? formik.errors.favorite_city_2 : null;
  let onChangeFavorite_city_2 = formik.handleChange;
  let onBlurFavorite_city_2 = formik.handleBlur;
  
  let date_of_birth = formik.values.date_of_birth;
  let date_of_birthError = formik.touched.date_of_birth && formik.errors.date_of_birth ? formik.errors.date_of_birth : null;
  let onChangeDate_of_birth = formik.handleChange;
  let onBlurDate_of_birth = formik.handleBlur;

  let place_of_birth = formik.values.place_of_birth;
  let place_of_birthError = formik.touched.place_of_birth && formik.errors.place_of_birth ? formik.errors.place_of_birth : null;
  let onChangePlace_of_birth = formik.handleChange;
  let onBlurPlace_of_birth = formik.handleBlur;
  
  let nationality = formik.values.nationality;
  let nationalityError = formik.touched.nationality && formik.errors.nationality ? formik.errors.nationality : null;
  let onChangeNationality = formik.handleChange;
  let onBlurNationality = formik.handleBlur;
  
    let religion = formik.values.religion;
    let religionError = formik.touched.religion && formik.errors.religion ? formik.errors.religion : null;
    let onChangeReligion = formik.handleChange;
    let onBlurReligion = formik.handleBlur;
    // let onChangeReligion = (val) => setSelectedReligion(val);
  // const onChangeReligion = (val) => { setSelectedReligion(val)};
  
  let no_of_id = formik.values.no_of_id;
  let no_of_idError = formik.touched.no_of_id && formik.errors.no_of_id ? formik.errors.no_of_id : null;
  let onChangeNo_of_id = formik.handleChange;
  let onBlurNo_of_id = formik.handleBlur;
  
  let id_place_of_issue = formik.values.id_place_of_issue;
  let id_place_of_issueError = formik.touched.id_place_of_issue && formik.errors.id_place_of_issue ? formik.errors.id_place_of_issue : null;
  let onChangeId_place_of_issue = formik.handleChange;
  let onBlurId_place_of_issue = formik.handleBlur;
  
  let id_date_of_issue = formik.values.id_date_of_issue;
  let id_date_of_issueError = formik.touched.id_date_of_issue && formik.errors.id_date_of_issue ? formik.errors.id_date_of_issue : null;
  let onChangeId_date_of_issue = formik.handleChange;
  let onBlurId_date_of_issue = formik.handleBlur;
  
  let no_of_passport = formik.values.no_of_passport;
  let no_of_passportError = formik.touched.no_of_passport && formik.errors.no_of_passport ? formik.errors.no_of_passport : null;
  let onChangeNo_of_passport = formik.handleChange;
  let onBlurNo_of_passport = formik.handleBlur;
  
  let passport_place_of_issue = formik.values.passport_place_of_issue;
  let passport_place_of_issueError = formik.touched.passport_place_of_issue && formik.errors.passport_place_of_issue ? formik.errors.passport_place_of_issue : null;
  let onChangePassport_place_of_issue = formik.handleChange;
  let onBlurPassport_place_of_issue = formik.handleBlur;
  
  let passport_date_of_issue = formik.values.passport_date_of_issue;
  let passport_date_of_issueError = formik.touched.passport_date_of_issue && formik.errors.passport_date_of_issue ? formik.errors.passport_date_of_issue : null;
  let onChangePassport_date_of_issue = formik.handleChange;
  let onBlurPassport_date_of_issue = formik.handleBlur;
  
  let home_phone_no = formik.values.home_phone_no;
  let home_phone_noError = formik.touched.home_phone_no && formik.errors.home_phone_no ? formik.errors.home_phone_no : null;
  let onChangeHome_phone_no = formik.handleChange;
  let onBlurHome_phone_no = formik.handleBlur;
  
  let work_phone_no = formik.values.work_phone_no;
  let work_phone_noError = formik.touched.work_phone_no && formik.errors.work_phone_no ? formik.errors.work_phone_no : null;
  let onChangeWork_phone_no = formik.handleChange;
  let onBlurWork_phone_no = formik.handleBlur;
  
  let mobile_no = formik.values.mobile_no;
  let mobile_noError = formik.touched.mobile_no && formik.errors.mobile_no ? formik.errors.mobile_no : null;
  let onChangeMobile_no = formik.handleChange;
  let onBlurMobile_no = formik.handleBlur;
  
  let email = formik.values.email;
  let emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  let onChangeEmail = formik.handleChange;
  let onBlurEmail = formik.handleBlur;
  
  let country = formik.values.country;
  let countryError = formik.touched.country && formik.errors.country ? formik.errors.country : null;
  let onChangeCountry = formik.handleChange;
  let onBlurCountry = formik.handleBlur;
  
  let city = formik.values.city;
  let cityError = formik.touched.city && formik.errors.city ? formik.errors.city : null;
  let onChangeCity  = formik.handleChange;
  let onBlurCity  = formik.handleBlur;
  
  let present_address = formik.values.present_address;
  let present_addressError = formik.touched.present_address && formik.errors.present_address ? formik.errors.present_address : null;
  let onChangePresent_address = formik.handleChange;
  let onBlurPresent_address = formik.handleBlur;
  
  let marital_status = formik.values.marital_status;
  let marital_statusError = formik.touched.marital_status && formik.errors.marital_status ? formik.errors.marital_status : null;
  let onChangeMarital_status = formik.handleChange;
  let onBlurMarital_status= formik.handleBlur;
  
  let employed_here_before = formik.values.employed_here_before;
  let employed_here_beforeError = formik.touched.employed_here_before && formik.errors.employed_here_before ? formik.errors.employed_here_before : null;
  let onChangeEmployed_here_before = formik.handleChange;
  let onBlurEmployed_here_before = formik.handleBlur;
  
  let employed_now = formik.values.employed_now;
  let employed_nowError = formik.touched.employed_now && formik.errors.employed_now ? formik.errors.employed_now : null;
  let onChangeEmployed_now = formik.handleChange;
  let onBlurEmployed_now = formik.handleBlur;
    
  let G_O_S_I_no = formik.values.G_O_S_I_no;
  let G_O_S_I_noError = formik.touched.G_O_S_I_no && formik.errors.G_O_S_I_no ? formik.errors.G_O_S_I_no : null;
  let onChangeG_O_S_I_no = formik.handleChange;
  let onBlurG_O_S_I_no = formik.handleBlur;
    
  let min_salary = formik.values.min_salary;
  let min_salaryError = formik.touched.min_salary && formik.errors.min_salary ? formik.errors.min_salary : null;
  let onChangeMin_salary = formik.handleChange;
  let onBlurMin_salary = formik.handleBlur;
    
  let suitable_work_time_from = formik.values.suitable_work_time_from;
  let suitable_work_time_fromError = formik.touched.suitable_work_time_from && formik.errors.suitable_work_time_from ? formik.errors.suitable_work_time_from : null;
  let onChangeSuitable_work_time_from = formik.handleChange;
  let onBlurSsuitable_work_time_from = formik.handleBlur;

  let suitable_work_time_to = formik.values.suitable_work_time_to;
  let suitable_work_time_toError = formik.touched.suitable_work_time_to && formik.errors.suitable_work_time_to ? formik.errors.suitable_work_time_to : null;
  let onChangeSuitable_work_time_to = formik.handleChange;
  let onBlurSuitable_work_time_to = formik.handleBlur;

  let prefered_start_work = formik.values.prefered_start_work;
  let prefered_start_workError = formik.touched.prefered_start_work && formik.errors.prefered_start_work ? formik.errors.prefered_start_work : null;
  let onChangePrefered_start_work = formik.handleChange;
  let onBlurPrefered_start_work = formik.handleBlur;
    
  let work_outside_your_city = formik.values.work_outside_your_city;
  let work_outside_your_cityError = formik.touched.work_outside_your_city && formik.errors.work_outside_your_city ? formik.errors.work_outside_your_city : null;
  let onChangeWork_outside_your_city = formik.handleChange;
  let onBlurWork_outside_your_city = formik.handleBlur;
  
  let have_car = formik.values.have_car;
  let have_carError = formik.touched.have_car && formik.errors.have_car ? formik.errors.have_car : null;
  let onChangeHave_car = formik.handleChange;
  let onBlurHave_car = formik.handleBlur;
  
  let car_Type = formik.values.car_Type;
  let car_TypeError = formik.touched.car_Type && formik.errors.car_Type ? formik.errors.car_Type : null;
  let onChangeCar_Type = formik.handleChange;
  let onBlurCar_Type = formik.handleBlur;

  let year_of_manufacturing = formik.values.year_of_manufacturing;
  let year_of_manufacturingError = formik.touched.year_of_manufacturing && formik.errors.year_of_manufacturing ? formik.errors.year_of_manufacturing : null;
  let onChangeYear_of_manufacturing = formik.handleChange;
  let onBlurYear_of_manufacturing = formik.handleBlur;
  
  let licence_category = formik.values.licence_category;
  let licence_categoryError = formik.touched.licence_category && formik.errors.licence_category ? formik.errors.licence_category : null;
  let onChangeLicence_category = formik.handleChange;
  let onBlurLicence_category = formik.handleBlur;
  
  let licence_number = formik.values.licence_number;
  let licence_numberError = formik.touched.licence_number && formik.errors.licence_number ? formik.errors.licence_number : null;
  let onChangeLicence_number = formik.handleChange;
  let onBlurLicence_number = formik.handleBlur;
  
  let licence_date_of_issue = formik.values.licence_date_of_issue;
  let licence_date_of_issueError = formik.touched.licence_date_of_issue && formik.errors.licence_date_of_issue ? formik.errors.licence_date_of_issue : null;
  let onChangeLicence_date_of_issue = formik.handleChange;
  let onBlurLicence_date_of_issue = formik.handleBlur;
  
  let licence_date_of_expiry = formik.values.licence_date_of_expiry;
  let licence_date_of_expiryError = formik.touched.licence_date_of_expiry && formik.errors.licence_date_of_expiry ? formik.errors.licence_date_of_expiry : null;
  let onChangeLicence_date_of_expiry = formik.handleChange;
  let onBlurLicence_date_of_expiry = formik.handleBlur;
  
  let licence_place_of_issue = formik.values.licence_place_of_issue;
  let licence_place_of_issueError = formik.touched.licence_place_of_issue && formik.errors.licence_place_of_issue ? formik.errors.licence_place_of_issue : null;
  let onChangeLicence_place_of_issue = formik.handleChange;
  let onBlurLicence_place_of_issue = formik.handleBlur;
  
  let blood_group = formik.values.blood_group;
  let blood_groupError = formik.touched.blood_group && formik.errors.blood_group ? formik.errors.blood_group : null;
  let onChangeBlood_group = formik.handleChange;
  let onBlurBlood_group = formik.handleBlur;
  
  let have_convicted = formik.values.have_convicted;
  let have_convictedError = formik.touched.have_convicted && formik.errors.have_convicted ? formik.errors.have_convicted : null;
  let onChangeHave_convicted = formik.handleChange;
  let onBlurhave_convicted = formik.handleBlur;
  
  let convict_description = formik.values.convict_description;
  let convict_descriptionError = formik.touched.convict_description && formik.errors.convict_description ? formik.errors.convict_description : null;
  let onChangeConvict_description = formik.handleChange;
  let onBlurConvict_description = formik.handleBlur;
 
  // let hobbies_skills = formik.values.hobbies_skills;
  // let hobbies_skillsError = formik.touched.hobbies_skills && formik.errors.hobbies_skills ? formik.errors.hobbies_skills : null;
  // let onChangeHobbies_skills = formik.handleChange;
  // let onBlurHobbies_skills = formik.handleBlur;
    
  
  let how_know_job = formik.values.how_know_job;
  let how_know_jobError = formik.touched.how_know_job && formik.errors.how_know_job ? formik.errors.how_know_job : null;
  let onChangeHow_know_job = formik.handleChange;
  let onBlurHow_know_job = formik.handleBlur;
    
  
  let have_employed_relatives = formik.values.have_employed_relatives;
  let have_employed_relativesError = formik.touched.have_employed_relatives && formik.errors.have_employed_relatives ? formik.errors.have_employed_relatives : null;
  let onChangeHave_employed_relatives = formik.handleChange;
  let onBlurHave_employed_relatives = formik.handleBlur;
    
  
  let other_data_to_add = formik.values.other_data_to_add;
  let other_data_to_addError = formik.touched.other_data_to_add && formik.errors.other_data_to_add ? formik.errors.other_data_to_add : null;
  let onChangeOther_data_to_add = formik.handleChange;
  let onBlurOther_data_to_add = formik.handleBlur;
  
  let education = formik.values.education;
  let educationError = formik.touched.education && formik.errors.education ? formik.errors.education : null;
  let onChangeEducation = formik.handleChange;
  let onBlurEducation = formik.handleBlur;
  
  let name_of_institute = formik.values.name_of_institute;
  let name_of_instituteError = formik.touched.name_of_institute && formik.errors.name_of_institute ? formik.errors.name_of_institute : null;
  let onChangeName_of_institute = formik.handleChange;
  let onBlurName_of_institute = formik.handleBlur;
  
  let education_city = formik.values.education_city;
  let education_cityError = formik.touched.education_city && formik.errors.education_city ? formik.errors.education_city : null;
  let onChangeEducation_city = formik.handleChange;
  let onBlurEducation_city = formik.handleBlur;
  
  let duration_study_from = formik.values.duration_study_from;
  let duration_study_fromError = formik.touched.duration_study_from && formik.errors.duration_study_from ? formik.errors.duration_study_from : null;
  let onChangeDuration_study_from = formik.handleChange;
  let onBlurDuration_study_from = formik.handleBlur;
  
  let duration_study_to = formik.values.duration_study_to;
  let duration_study_toError = formik.touched.duration_study_to && formik.errors.duration_study_to ? formik.errors.duration_study_to : null;
  let onChangeDuration_study_to = formik.handleChange;
  let onBlurDuration_study_to = formik.handleBlur;
  
  let specialize = formik.values.specialize;
  let specializeError = formik.touched.specialize && formik.errors.specialize ? formik.errors.specialize : null;
  let onChangeSpecialize = formik.handleChange;
  let onBlurSpecialize = formik.handleBlur;
  
  let grade = formik.values.grade;
  let gradeError = formik.touched.grade && formik.errors.grade ? formik.errors.grade : null;
  let onChangeGrade = formik.handleChange;
  let onBlurGrade = formik.handleBlur;
  
  let AR_speaking = formik.values.AR_speaking;
  let AR_speakingError = formik.touched.AR_speaking && formik.errors.AR_speaking ? formik.errors.AR_speaking : null;
  let onChangeAR_speaking = formik.handleChange;
  let onBlurAR_speaking = formik.handleBlur;
  
  let AR_reading = formik.values.AR_reading;
  let AR_readingError = formik.touched.AR_reading && formik.errors.AR_reading ? formik.errors.AR_reading : null;
  let onChangeAR_reading = formik.handleChange;
  let onBlurAR_reading = formik.handleBlur;
  
  let AR_writing = formik.values.AR_writing;
  let AR_writingError = formik.touched.AR_writing && formik.errors.AR_writing ? formik.errors.AR_writing : null;
  let onChangeAR_writing = formik.handleChange;
  let onBlurAR_writing = formik.handleBlur;
  
  // let AR_shorthand_speed = formik.values.AR_shorthand_speed;
  // let AR_shorthand_speedError = formik.touched.AR_shorthand_speed && formik.errors.AR_shorthand_speed ? formik.errors.AR_shorthand_speed : null;
  // let onChangeAR_shorthand_speed = formik.handleChange;
  // let onBlurAR_shorthand_speed = formik.handleBlur;
  
  // let AR_typing_speed = formik.values.AR_typing_speed;
  // let AR_typing_speedError = formik.touched.AR_typing_speed && formik.errors.AR_typing_speed ? formik.errors.AR_typing_speed : null;
  // let onChangeAR_typing_speed = formik.handleChange;
  // let onBlurAR_typing_speed = formik.handleBlur;

  let EN_speaking = formik.values.EN_speaking;
  let EN_speakingError = formik.touched.EN_speaking && formik.errors.EN_speaking ? formik.errors.EN_speaking : null;
  let onChangeEN_speaking = formik.handleChange;
  let onBlurEN_speaking = formik.handleBlur;
  
  let EN_reading = formik.values.EN_reading;
  let EN_readingError = formik.touched.EN_reading && formik.errors.EN_reading ? formik.errors.EN_reading : null;
  let onChangeEN_reading = formik.handleChange;
  let onBlurEN_reading = formik.handleBlur;
  
  let EN_writing = formik.values.EN_writing;
  let EN_writingError = formik.touched.EN_writing && formik.errors.EN_writing ? formik.errors.EN_writing : null;
  let onChangeEN_writing = formik.handleChange;
  let onBlurEN_writing = formik.handleBlur;
  
  // let EN_shorthand_speed = formik.values.EN_shorthand_speed;
  // let EN_shorthand_speedError = formik.touched.EN_shorthand_speed && formik.errors.EN_shorthand_speed ? formik.errors.EN_shorthand_speed : null;
  // let onChangeEN_shorthand_speed = formik.handleChange;
  // let onBlurEN_shorthand_speed = formik.handleBlur;
  
  // let EN_typing_speed = formik.values.EN_typing_speed;
  // let EN_typing_speedError = formik.touched.EN_typing_speed && formik.errors.EN_typing_speed ? formik.errors.EN_typing_speed : null;
  // let onChangeEN_typing_speed = formik.handleChange;
  // let onBlurEN_typing_speed = formik.handleBlur;
  
  let previous_work_0_job_title = formik.values.previous_work_0_job_title;
  let previous_work_0_job_titleError = formik.touched.previous_work_0_job_title && formik.errors.previous_work_0_job_title ? formik.errors.previous_work_0_job_title : null;
  let onChangePrevious_work_0_job_title = formik.handleChange;
  let onBlurPrevious_work_0_job_title = formik.handleBlur;
    
  let previous_work_0_company_name = formik.values.previous_work_0_company_name;
  let previous_work_0_company_nameError = formik.touched.previous_work_0_company_name && formik.errors.previous_work_0_company_name ? formik.errors.previous_work_0_company_name : null;
  let onChangePrevious_work_0_company_name = formik.handleChange;
  let onBlurPrevious_work_0_company_name = formik.handleBlur;

  let previous_work_0_start_date = formik.values.previous_work_0_start_date;
  let previous_work_0_start_dateError = formik.touched.previous_work_0_start_date && formik.errors.previous_work_0_start_date ? formik.errors.previous_work_0_start_date : null;
  let onChangePrevious_work_0_start_date = formik.handleChange;
  let onBlurPrevious_work_0_start_date = formik.handleBlur;   

  let previous_work_0_end_date = formik.values.previous_work_0_end_date;
  let previous_work_0_end_dateError = formik.touched.previous_work_0_end_date && formik.errors.previous_work_0_end_date ? formik.errors.previous_work_0_end_date : null;
  let onChangePrevious_work_0_end_date = formik.handleChange;
  let onBlurPrevious_work_0_end_date = formik.handleBlur;
    
  let previous_work_0_company_address = formik.values.previous_work_0_company_address;
  let previous_work_0_company_addressError = formik.touched.previous_work_0_company_address && formik.errors.previous_work_0_company_address ? formik.errors.previous_work_0_company_address : null;
  let onChangePrevious_work_0_company_address = formik.handleChange;
  let onBlurPrevious_work_0_company_address = formik.handleBlur;
    

  let previous_work_0_company_mobile = formik.values.previous_work_0_company_mobile;
  let previous_work_0_company_mobileError = formik.touched.previous_work_0_company_mobile && formik.errors.previous_work_0_company_mobile ? formik.errors.previous_work_0_company_mobile : null;
  let onChangePrevious_work_0_company_mobile = formik.handleChange;
  let onBlurPrevious_work_0_company_mobile = formik.handleBlur;

  let previous_work_0_salary = formik.values.previous_work_0_salary;
  let previous_work_0_salaryError = formik.touched.previous_work_0_salary && formik.errors.previous_work_0_salary ? formik.errors.previous_work_0_salary : null;
  let onChangePrevious_work_0_salary = formik.handleChange;
  let onBlurPrevious_work_0_salary = formik.handleBlur;

  let previous_work_0_allowance = formik.values.previous_work_0_allowance;
  let previous_work_0_allowanceError = formik.touched.previous_work_0_allowance && formik.errors.previous_work_0_allowance ? formik.errors.previous_work_0_allowance : null;
  let onChangePrevious_work_0_allowance = formik.handleChange;
  let onBlurPrevious_work_0_allowance = formik.handleBlur;

  let previous_work_0_description_of_duties = formik.values.previous_work_0_description_of_duties;
  let previous_work_0_description_of_dutiesError = formik.touched.previous_work_0_description_of_duties && formik.errors.previous_work_0_description_of_duties ? formik.errors.previous_work_0_description_of_duties : null;
  let onChangePrevious_work_0_description_of_duties = formik.handleChange;
  let onBlurPrevious_work_0_description_of_duties = formik.handleBlur;

  let previous_work_0_reason_for_quit = formik.values.previous_work_0_reason_for_quit;
  let previous_work_0_reason_for_quitError = formik.touched.previous_work_0_reason_for_quit && formik.errors.previous_work_0_reason_for_quit ? formik.errors.previous_work_0_reason_for_quit : null;
  let onChangePrevious_work_0_reason_for_quit = formik.handleChange;
  let onBlurPrevious_work_0_reason_for_quit = formik.handleBlur;

  let Courses_0_name_of_institute = formik.values.Courses_0_name_of_institute;
  let Courses_0_name_of_instituteError = formik.touched.Courses_0_name_of_institute && formik.errors.Courses_0_name_of_institute ? formik.errors.Courses_0_name_of_institute : null;
  let onChangeCourses_0_name_of_institute = formik.handleChange;
  let onBlurCourses_0_name_of_institute = formik.handleBlur;

  let Courses_0_education_city = formik.values.Courses_0_education_city;
  let Courses_0_education_cityError = formik.touched.Courses_0_education_city && formik.errors.Courses_0_education_city ? formik.errors.Courses_0_education_city : null;
  let onChangeCourses_0_education_city = formik.handleChange;
  let onBlurCourses_0_education_city = formik.handleBlur;

  let Courses_0_duration_study_from = formik.values.Courses_0_duration_study_from;
  let Courses_0_duration_study_fromError = formik.touched.Courses_0_duration_study_from && formik.errors.Courses_0_duration_study_from ? formik.errors.Courses_0_duration_study_from : null;
  let onChangeCourses_0_duration_study_from = formik.handleChange;
  let onBlurCourses_0_duration_study_from = formik.handleBlur;

  let Courses_0_duration_study_to = formik.values.Courses_0_duration_study_to;
  let Courses_0_duration_study_toError = formik.touched.Courses_0_duration_study_to && formik.errors.Courses_0_duration_study_to ? formik.errors.Courses_0_duration_study_to : null;
  let onChangeCourses_0_duration_study_to = formik.handleChange;
  let onBlurCourses_0_duration_study_to = formik.handleBlur;

  let Courses_0_specialize = formik.values.Courses_0_specialize;
  let Courses_0_specializeError = formik.touched.Courses_0_specialize && formik.errors.Courses_0_specialize ? formik.errors.Courses_0_specialize : null;
  let onChangeCourses_0_specialize = formik.handleChange;
  let onBlurCourses_0_specialize = formik.handleBlur;

  let Identifiers_0_name = formik.values.Identifiers_0_name;
  let Identifiers_0_nameError = formik.touched.Identifiers_0_name && formik.errors.Identifiers_0_name ? formik.errors.Identifiers_0_name : null;
  let onChangeIdentifiers_0_name = formik.handleChange;
  let onBlurIdentifiers_0_name = formik.handleBlur;

  let Identifiers_0_position = formik.values.Identifiers_0_position;
  let Identifiers_0_positionError = formik.touched.Identifiers_0_position && formik.errors.Identifiers_0_position ? formik.errors.Identifiers_0_position : null;
  let onChangeIdentifiers_0_position = formik.handleChange;
  let onBlurIdentifiers_0_position = formik.handleBlur;

  let Identifiers_0_company = formik.values.Identifiers_0_company;
  let Identifiers_0_companyError = formik.touched.Identifiers_0_company && formik.errors.Identifiers_0_company ? formik.errors.Identifiers_0_company : null;
  let onChangeIdentifiers_0_company = formik.handleChange;
  let onBlurIdentifiers_0_company = formik.handleBlur;

  let Identifiers_0_mobile = formik.values.Identifiers_0_mobile;
  let Identifiers_0_mobileError = formik.touched.Identifiers_0_mobile && formik.errors.Identifiers_0_mobile ? formik.errors.Identifiers_0_mobile : null;
  let onChangeIdentifiers_0_mobile = formik.handleChange;
  let onBlurIdentifiers_0_mobile = formik.handleBlur;

  let Identifiers_0_address = formik.values.Identifiers_0_address;
  let Identifiers_0_addressError = formik.touched.Identifiers_0_address && formik.errors.Identifiers_0_address ? formik.errors.Identifiers_0_address : null;
  let onChangeIdentifiers_0_address = formik.handleChange;
  let onBlurIdentifiers_0_address = formik.handleBlur;

  let relatives = formik.values.relatives;
  let relativesError = formik.touched.relatives && formik.errors.relatives ? formik.errors.relatives : null;
  let onChangeRelatives = formik.handleChange;
  let onBlurRelatives = formik.handleBlur;

  // let min_salary = formik.values.min_salary;
  // let Error = formik.touched.min_salary && formik.errors.min_salary ? formik.errors.min_salary : null;
  // let onChange = formik.handleChange;
  // let onBlur = formik.handleBlur;
    

  let  onSubmit = formik.handleSubmit;
  
  const onSubmitForm = async (values) => {
    let employedHereBefore;
    if (values.employed_here_before === "true") {
      employedHereBefore = true;
    } else if (values.employed_here_before === "false") {
      employedHereBefore = false;
    } else {
      employedHereBefore = false;
    };

    let employedNow;
    if (values.employed_now === "true") {
      employedNow = true;
    } else if (values.employed_now === "false") {
      employedNow = false;
    } else {
      employedNow = false;
    };

    let haveConvicted;
    if (values.have_convicted === "true") {
      haveConvicted = true;
    } else if (values.have_convicted === "false") {
      haveConvicted = false;
    } else {
      haveConvicted = false;
    };

    let workOutsideYourCity;
    if (values.work_outside_your_city === "true") {
      workOutsideYourCity = true;
    } else if (values.work_outside_your_city === "false") {
      workOutsideYourCity = false;
    } else {
      workOutsideYourCity = false;
    };

    const jobFormData = {
      "applied_position": +values.applied_position,
      "favorite_cities": [values.favorite_city_0,values.favorite_city_1,values.favorite_city_2],
      "first_name": values.first_name,
      "father_name": values.father_name,
      "family_name": values.family_name,
      "date_of_birth": values.date_of_birth,
      "place_of_birth": values.place_of_birth,
      "nationality": values.nationality,
      "no_of_id": values.no_of_id,
      "id_place_of_issue": values.id_place_of_issue,
      "id_date_of_issue": values.id_date_of_issue,
      "home_phone_no": values.home_phone_no,
      "work_phone_no": values.work_phone_no,
      "mobile_no": values.mobile_no,
      "email": values.email,
      "country": +values.country,
      "city": values.city,
      "G_O_S_I_no": values.G_O_S_I_no,
      "present_address": values.present_address,
      "marital_status": values.marital_status,
      "blood_group": values.blood_group,
      "employed_here_before": employedHereBefore,
      "prefered_start_work": values.prefered_start_work,
      "employed_now": employedNow,
      "min_salary": values.min_salary,
      "work_outside_your_city": workOutsideYourCity,
      "suitable_work_time_from": `${values.suitable_work_time_from}:00`,
      "suitable_work_time_to": `${values.suitable_work_time_to}:00`,
      "car_type": values.car_type,
      "year_of_manufacturing": values.year_of_manufacturing,
      "licence_number": values.licence_number,
      "licence_category": values.licence_category,
      "licence_date_of_issue": `${values.licence_date_of_issue.split("-")[0]}-${values.licence_date_of_issue.split("-")[1]}`,
      "licence_date_of_expiry": `${values.licence_date_of_expiry.split("-")[0]}-${values.licence_date_of_expiry.split("-")[1]}`,
      "licence_place_of_issue": values.licence_place_of_issue,
      "have_convicted": haveConvicted,
      "convict_description": values.convict_description,
      "how_know_job": values.how_know_job,
      "have_employed_relatives": values.have_employed_relatives,
      "other_data_to_add": values.other_data_to_add,
  
      "education":{
        "phase": values.education,
        "name_of_institute": values.name_of_institute,
        "city": values.education_city,
        "duration_study_from": values.duration_study_from,
        "duration_study_to": values.duration_study_to,
        "specialize": values.specialize,
        "grade": values.grade,
      },
  
      "courses":[
        {
          "name_of_institute": values.Courses_0_name_of_institute,
          "city": values.Courses_0_education_city,
          "duration_study_from": values.Courses_0_duration_study_from,
          "duration_study_to": values.Courses_0_duration_study_to,
          "specialize": values.Courses_0_specialize,
        }
      ],
      
      "previous_work":[
          {
          "start_date": values.previous_work_0_start_date,
          "end_date": values.previous_work_0_end_date,
          "company_name": values.previous_work_0_company_name,
          "company_mobile": values.previous_work_0_company_mobile,
          "company_address": values.previous_work_0_company_address,
          "salary": values.previous_work_0_salary,
          "allowance": values.previous_work_0_allowance,
          "job_title": values.previous_work_0_job_title,
          "description_of_duties": values.previous_work_0_description_of_duties,
          "reason_for_quit": values.previous_work_0_reason_for_quit,
        }
      ],
      "language":[
        {
        "lang":"arabic",
        "speaking": +values.AR_speaking,
        "reading": +values.AR_reading,
        "writing": +values.AR_writing,
        },
        {
        "lang":"english",
        "speaking": +values.EN_speaking,
        "reading": +values.EN_reading,
        "writing": +values.EN_writing,
        }
      ],
      "relatives":[values.relatives],
      "identifiers":[
        {
          "name": values.Identifiers_0_name,
          "position": values.Identifiers_0_position,
          "company": values.Identifiers_0_company,
          "mobile": values.Identifiers_0_mobile,
          "address": values.Identifiers_0_address,
        }
     ]
  };

    console.log("jobFormData: ", jobFormData);

    setLoading(true);
    const response = await sendData(jobFormData);
    setResponseFromApi(response);
    console.log(response)
    setLoading(false);
  };

  // ---------------------------------Response------------------------------------------------

  
  
  
  useEffect(() => {
    if (responseFromApi) {
      if (responseFromApi.status) {
        if (responseFromApi.message) {
          notify(responseFromApi.message, "success");
          // setTimeout(() => {
          //     if(type === 1) {
          //         navigate('/deductions');
          //     } else if (type === 2) {
          //         navigate('/bonus');
          //     } else {
          //         navigate('/');
          //     }
          // }, 3000);
        }
      } else {
        notify(responseFromApi.message, "error");
        setErrorForm(responseFromApi.message);
      }
    }
  }, [loading, responseFromApi])


  return [
    onSubmit,
    isLoadingForm,
    errorForm,
    applied_position,
    applied_positionError,
    onChangeApplied_position,
    onBlurApplied_position,
    first_name,
    first_nameError,
    onChangeFirst_name,
    onBlurFirst_name,
    father_name,
    father_nameError,
    onChangeFather_name,
    onBlurFather_name,
    family_name,
    family_nameError,
    onChangeFamily_name,
    onBlurFamily_name,
    favorite_city_0,
    favorite_city_0Error,
    onChangeFavorite_city_0,
    onBlurFavorite_city_0,
    favorite_city_1,
    favorite_city_1Error,
    onChangeFavorite_city_1,
    onBlurFavorite_city_1,
    favorite_city_2,
    favorite_city_2Error,
    onChangeFavorite_city_2,
    onBlurFavorite_city_2,
    date_of_birth,
    date_of_birthError,
    onChangeDate_of_birth,
    onBlurDate_of_birth,
    place_of_birth,
    place_of_birthError,
    onChangePlace_of_birth,
    onBlurPlace_of_birth,
    nationality,
    nationalityError,
    onChangeNationality,
    onBlurNationality,
    religion,
    religionError,
    onChangeReligion,
    onBlurReligion,
    no_of_id,
    no_of_idError,
    onChangeNo_of_id,
    onBlurNo_of_id,
    id_place_of_issue,
    id_place_of_issueError,
    onChangeId_place_of_issue,
    onBlurId_place_of_issue,
    id_date_of_issue,
    id_date_of_issueError,
    onChangeId_date_of_issue,
    onBlurId_date_of_issue,
    no_of_passport,
    no_of_passportError,
    onChangeNo_of_passport,
    onBlurNo_of_passport,
    passport_place_of_issue,
    passport_place_of_issueError,
    onChangePassport_place_of_issue,
    onBlurPassport_place_of_issue,
    passport_date_of_issue,
    passport_date_of_issueError,
    onChangePassport_date_of_issue,
    onBlurPassport_date_of_issue,
    home_phone_no,
    home_phone_noError,
    onChangeHome_phone_no,
    onBlurHome_phone_no,
    work_phone_no,
    work_phone_noError,
    onChangeWork_phone_no,
    onBlurWork_phone_no,
    mobile_no,
    mobile_noError,
    onChangeMobile_no,
    onBlurMobile_no,
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    country,
    countryError,
    onChangeCountry,
    onBlurCountry,
    city,
    cityError,
    onChangeCity,
    onBlurCity,
    present_address,
    present_addressError,
    onChangePresent_address,
    onBlurPresent_address,
    marital_status,
    marital_statusError,
    onChangeMarital_status,
    onBlurMarital_status,
    employed_here_before,
    employed_here_beforeError,
    onChangeEmployed_here_before,
    onBlurEmployed_here_before,
    employed_now,
    employed_nowError,
    onChangeEmployed_now,
    onBlurEmployed_now,
    G_O_S_I_no,
    G_O_S_I_noError,
    onChangeG_O_S_I_no,
    onBlurG_O_S_I_no,
    min_salary,
    min_salaryError,
    onChangeMin_salary,
    onBlurMin_salary,
    suitable_work_time_from,
    suitable_work_time_fromError,
    onChangeSuitable_work_time_from,
    onBlurSsuitable_work_time_from,
    suitable_work_time_to,
    suitable_work_time_toError,
    onChangeSuitable_work_time_to,
    onBlurSuitable_work_time_to,
    prefered_start_work,
    prefered_start_workError,
    onChangePrefered_start_work,
    onBlurPrefered_start_work,
    work_outside_your_city,
    work_outside_your_cityError,
    onChangeWork_outside_your_city,
    onBlurWork_outside_your_city,
    have_car,
    have_carError,
    onChangeHave_car,
    onBlurHave_car,
    car_Type,
    car_TypeError,
    onChangeCar_Type,
    onBlurCar_Type,
    year_of_manufacturing,
    year_of_manufacturingError,
    onChangeYear_of_manufacturing,
    onBlurYear_of_manufacturing,
    licence_category,
    licence_categoryError,
    onChangeLicence_category,
    onBlurLicence_category,
    licence_number,
    licence_numberError,
    onChangeLicence_number,
    onBlurLicence_number,
    licence_date_of_issue,
    licence_date_of_issueError,
    onChangeLicence_date_of_issue,
    onBlurLicence_date_of_issue,
    licence_date_of_expiry,
    licence_date_of_expiryError,
    onChangeLicence_date_of_expiry,
    onBlurLicence_date_of_expiry,
    licence_place_of_issue,
    licence_place_of_issueError,
    onChangeLicence_place_of_issue,
    onBlurLicence_place_of_issue,
    blood_group,
    blood_groupError,
    onChangeBlood_group,
    onBlurBlood_group,
    have_convicted,
    have_convictedError,
    onChangeHave_convicted,
    onBlurhave_convicted,
    convict_description,
    convict_descriptionError,
    onChangeConvict_description,
    onBlurConvict_description,
    how_know_job,
    how_know_jobError,
    onChangeHow_know_job,
    onBlurHow_know_job,
    have_employed_relatives,
    have_employed_relativesError,
    onChangeHave_employed_relatives,
    onBlurHave_employed_relatives,
    other_data_to_add,
    other_data_to_addError,
    onChangeOther_data_to_add,
    onBlurOther_data_to_add,
    education,
    educationError,
    onChangeEducation,
    onBlurEducation,
    name_of_institute,
    name_of_instituteError,
    onChangeName_of_institute,
    onBlurName_of_institute,
    education_city,
    education_cityError,
    onChangeEducation_city,
    onBlurEducation_city,
    duration_study_from,
    duration_study_fromError,
    onChangeDuration_study_from,
    onBlurDuration_study_from,
    duration_study_to,
    duration_study_toError,
    onChangeDuration_study_to,
    onBlurDuration_study_to,
    specialize,
    specializeError,
    onChangeSpecialize,
    onBlurSpecialize,
    grade,
    gradeError,
    onChangeGrade,
    onBlurGrade,
    AR_speaking,
    AR_speakingError,
    onChangeAR_speaking,
    onBlurAR_speaking,
    AR_reading,
    AR_readingError,
    onChangeAR_reading,
    onBlurAR_reading,
    AR_writing,
    AR_writingError,
    onChangeAR_writing,
    onBlurAR_writing,
    EN_speaking,
    EN_speakingError,
    onChangeEN_speaking,
    onBlurEN_speaking,
    EN_reading,
    EN_readingError,
    onChangeEN_reading,
    onBlurEN_reading,
    EN_writing,
    EN_writingError,
    onChangeEN_writing,
    onBlurEN_writing,
    previous_work_0_job_title,
    previous_work_0_job_titleError,
    onChangePrevious_work_0_job_title,
    onBlurPrevious_work_0_job_title,
    previous_work_0_company_name,
    previous_work_0_company_nameError,
    onChangePrevious_work_0_company_name,
    onBlurPrevious_work_0_company_name,
    previous_work_0_start_date,
    previous_work_0_start_dateError,
    onChangePrevious_work_0_start_date,
    onBlurPrevious_work_0_start_date,
    previous_work_0_end_date,
    previous_work_0_end_dateError,
    onChangePrevious_work_0_end_date,
    onBlurPrevious_work_0_end_date,
    previous_work_0_company_address,
    previous_work_0_company_addressError,
    onChangePrevious_work_0_company_address,
    onBlurPrevious_work_0_company_address,
    previous_work_0_company_mobile,
    previous_work_0_company_mobileError,
    onChangePrevious_work_0_company_mobile,
    onBlurPrevious_work_0_company_mobile,
    previous_work_0_salary,
    previous_work_0_salaryError,
    onChangePrevious_work_0_salary,
    onBlurPrevious_work_0_salary,
    previous_work_0_allowance,
    previous_work_0_allowanceError,
    onChangePrevious_work_0_allowance,
    onBlurPrevious_work_0_allowance,
    previous_work_0_description_of_duties,
    previous_work_0_description_of_dutiesError,
    onChangePrevious_work_0_description_of_duties,
    onBlurPrevious_work_0_description_of_duties,
    previous_work_0_reason_for_quit,
    previous_work_0_reason_for_quitError,
    onChangePrevious_work_0_reason_for_quit,
    onBlurPrevious_work_0_reason_for_quit,
    Courses_0_name_of_institute,
    Courses_0_name_of_instituteError,
    onChangeCourses_0_name_of_institute,
    onBlurCourses_0_name_of_institute,
    Courses_0_education_city,
    Courses_0_education_cityError,
    onChangeCourses_0_education_city,
    onBlurCourses_0_education_city,
    Courses_0_duration_study_from,
    Courses_0_duration_study_fromError,
    onChangeCourses_0_duration_study_from,
    onBlurCourses_0_duration_study_from,
    Courses_0_duration_study_to,
    Courses_0_duration_study_toError,
    onChangeCourses_0_duration_study_to,
    onBlurCourses_0_duration_study_to,
    Courses_0_specialize,
    Courses_0_specializeError,
    onChangeCourses_0_specialize,
    onBlurCourses_0_specialize,
    Identifiers_0_name,
    Identifiers_0_nameError,
    onChangeIdentifiers_0_name,
    onBlurIdentifiers_0_name,
    Identifiers_0_position,
    Identifiers_0_positionError,
    onChangeIdentifiers_0_position,
    onBlurIdentifiers_0_position,
    Identifiers_0_company,
    Identifiers_0_companyError,
    onChangeIdentifiers_0_company,
    onBlurIdentifiers_0_company,
    Identifiers_0_mobile,
    Identifiers_0_mobileError,
    onChangeIdentifiers_0_mobile,
    onBlurIdentifiers_0_mobile,
    Identifiers_0_address,
    Identifiers_0_addressError,
    onChangeIdentifiers_0_address,
    onBlurIdentifiers_0_address,
    relatives,
    relativesError,
    onChangeRelatives,
    onBlurRelatives,
  ];
}


export default useSendJobFormData;