"use client";
import InputBox from "@/Components/utils/InputBox/InputBox";
import styles from "./styles.module.scss";
import CustomSelect from "@/Components/utils/CustomSelect/CustomSelect";
import useSendJobFormData from "@/hooks/useSendJobFormData";
import ReactSelect from "react-select";
import PureSelect from "@/Components/utils/PureSelect/PureSelect";
import RadioInput from "@/Components/utils/RadioInput/RadioInput";
import { ToastContainer } from "react-toastify";
import Spinner from "@/Components/utils/Spinner/Spinner";
import Error from "@/Components/utils/Error/Error";



const requiredJobList = [
  {
    id: "01",
    optionTitleAr: "مندوب ميداني",
    optionTitleEn: "",
    value: 1,
  },
  {
    id: "02",
    optionTitleAr: "تسويق الكتروني",
    optionTitleEn: "",
    value: 2,
  },
  {
    id: "03",
    optionTitleAr: "قانون موارد بشرية",
    optionTitleEn: "",
    value: 3,
  },
  {
    id: "04",
    optionTitleAr: "مشرف ميداني",
    optionTitleEn: "",
    value: 4,
  },
  {
    id: "05",
    optionTitleAr: "برمجة تطبيقات",
    optionTitleEn: "",
    value: 5,
  },
];
const languageLevel = [
  {
    id: "01",
    optionTitleAr: "ممتاز",
    optionTitleEn: "",
    value: 3,
  },
  {
    id: "02",
    optionTitleAr: "جيد",
    optionTitleEn: "",
    value: 2,
  },
  {
    id: "03",
    optionTitleAr: "حسن",
    optionTitleEn: "",
    value: 1,
  },
];
const requiredEducationList = [
  {
    id: "01",
    optionTitleAr: "إبتدائي",
    optionTitleEn: "",
  },
  {
    id: "02",
    optionTitleAr: "إعدادي",
    optionTitleEn: "",
  },
  {
    id: "03",
    optionTitleAr: "ثانوي",
    optionTitleEn: "",
  },
  {
    id: "04",
    optionTitleAr: "دبلوم بعد الثانوية",
    optionTitleEn: "",
  },
  {
    id: "05",
    optionTitleAr: "الجامعة",
    optionTitleEn: "",
  },
  {
    id: "06",
    optionTitleAr: "دراسات عليا",
    optionTitleEn: "",
  },
];
const religionList = [
  {
    id: "01",
    optionTitleAr: "مسلم",
    optionTitleEn: "",
    value: 1,
  },
  {
    id: "02",
    optionTitleAr: "مسيحي",
    optionTitleEn: "",
    value: 2,
  },
  {
    id: "03",
    optionTitleAr: "أخرى",
    optionTitleEn: "",
    value: 3,
  },
];
const countriesList = [
  {
    id: "01",
    optionTitleAr: "المملكة العربية السعودية",
    optionTitleEn: "KSA",
    value: 1,
  },
  {
    id: "02",
    optionTitleAr: "الإمارات العربية المتحدة",
    optionTitleEn: "UAE",
    value: 2,
  },
  {
    id: "03",
    optionTitleAr: "جمهورية مصر العربية",
    optionTitleEn: "Egypt",
    value: 3,
  },
  {
    id: "03",
    optionTitleAr: "دولة أخرى",
    optionTitleEn: "other Country",
    value: 0,
  },
];
const yesNoList = [
  {
    id: "01",
    optionTitleAr: "نعم",
    optionTitleEn: "Yes",
    value: true,
  },
  {
    id: "02",
    optionTitleAr: "لأ",
    optionTitleEn: "No",
    value: false,
  },
];


const JobForm = () => {
  const [
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
  ] = useSendJobFormData();


  return (
    <section className={styles.jobForm}>
      {isLoadingForm && <Spinner custom={true} />}
      {errorForm && <Error errMsg={errorLogin} />}
      <div className={`${styles.container} secContainer`}>
        <div className="secTitle">
          <h2 className="title">طلب توظيف</h2>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <p className={styles.formtitle}>
            الرجاء تعبئة النموذج أدناه للتقدم لوظيفة لدى شركتنا
          </p>

          <label className={styles.secBoxLabel}>الوظيفة المطلوبة</label>
          <div className={styles.secBox}>
            {/* <CustomSelect
              width="398px"
              placeHolder="برجاءإختيار الوظيفة المطلوبة"
              optionsList={requiredJobList}
              name="applied_position"
              errorMsg="إختر الوظيفة المطلوبة"
              onChange={onChangeApplied_position}
            /> */}
            <PureSelect
              customStyles={{width: "398px"}}
              optionsList={requiredJobList}
              defaultOption="برجاءإختيار الوظيفة المطلوبة"
              name="applied_position"
              errorMsg={applied_positionError}
              onChange={onChangeApplied_position}
              onBlur={onBlurApplied_position}
            />
          </div>

          <label className={styles.secBoxLabel}>الإسم بالكامل</label>
          <div className={styles.secBox}>
            <InputBox
              id="first_name"
              type="text"
              placeholder="الأسم الأول"
              name="first_name"
              value={first_name}
              errorMsg={first_nameError}
              onChange={onChangeFirst_name}
              onBlur={onBlurFirst_name}
            />
            <InputBox
              id="father_name"
              type="text"
              placeholder="إسم الأب"
              name="father_name"
              value={father_name}
              errorMsg={father_nameError}
              onChange={onChangeFather_name}
              onBlur={onBlurFather_name}
            />
            <InputBox
              id="family_name"
              type="text"
              placeholder="إسم العائلة"
              name="family_name"
              value={family_name}
              errorMsg={family_nameError}
              onChange={onChangeFamily_name}
              onBlur={onBlurFamily_name}
            />
          </div>

          <label className={styles.secBoxLabel}>المدينة المفضلة</label>
          <div className={styles.secBox}>
            <InputBox
              width="398px"
              id="favorite_city_0"
              type="text"
              placeholder="المدينة الأولى"
              name="favorite_city_0"
              value={favorite_city_0}
              errorMsg={favorite_city_0Error}
              onChange={onChangeFavorite_city_0}
              onBlur={onBlurFavorite_city_0}
            />
            <InputBox
              width="398px"
              id="favorite_city_1"
              type="text"
              placeholder="المدينة الثانية"
              name="favorite_city_1"
              value={favorite_city_1}
              errorMsg={favorite_city_1Error}
              onChange={onChangeFavorite_city_1}
              onBlur={onBlurFavorite_city_1}
            />
            <InputBox
              width="398px"
              id="favorite_city_2"
              type="text"
              placeholder="المدينة الثالثة"
              name="favorite_city_2"
              value={favorite_city_2}
              errorMsg={favorite_city_2Error}
              onChange={onChangeFavorite_city_2}
              onBlur={onBlurFavorite_city_2}
            />
          </div>


          <label className={styles.secBoxLabel}>بيانات الميلاد</label>
          <div className={styles.secBox}>
            <InputBox
              id="date_of_birth"
              type="date"
              placeholder="تاريخ الميلاد"
              name="date_of_birth"
              value={date_of_birth}
              errorMsg={date_of_birthError}
              onChange={onChangeDate_of_birth}
              onBlur={onBlurDate_of_birth}
            />
            <InputBox
              id="place_of_birth"
              type="text"
              placeholder="مكان الميلاد"
              name="place_of_birth"
              value={place_of_birth}
              errorMsg={place_of_birthError}
              onChange={onChangePlace_of_birth}
              onBlur={onBlurPlace_of_birth}
            />
            <InputBox
              id="nationality"
              type="text"
              placeholder="الجنسيه"
              name="nationality"
              value={nationality}
              errorMsg={nationalityError}
              onChange={onChangeNationality}
              onBlur={onBlurNationality}
            />
            <PureSelect
              // customStyles={{width: "398px"}}
              optionsList={religionList}
              defaultOption="إختر الديانة"
              name="religion"
              errorMsg={religionError}
              onChange={onChangeReligion}
              onBlur={onBlurReligion}
            />
            {/* <CustomSelect
              placeHolder="إختر الديانة"
              optionsList={religionList}
              name="religion"
              // value={religion}
              errorMsg='برجاء إختيار الديانة'
              onChange={onChangeReligion}
              // onBlur={onBlurReligion}
            /> */}
          </div>

          <label className={styles.secBoxLabel}>
            بيانات بطاقة الأحوال المدنية
          </label>
          <div className={styles.secBox}>
            <InputBox
              id="no_of_id"
              type="text"
              placeholder="رقم البطاقة / الإقامة"
              name="no_of_id"
              value={no_of_id}
              errorMsg={no_of_idError}
              onChange={onChangeNo_of_id}
              onBlur={onBlurNo_of_id}
            />
            <InputBox
              id="id_place_of_issue"
              type="text"
              placeholder="مكان الإصدار"
              name="id_place_of_issue"
              value={id_place_of_issue}
              errorMsg={id_place_of_issueError}
              onChange={onChangeId_place_of_issue}
              onBlur={onBlurId_place_of_issue}
            />
            <InputBox
              id="id_date_of_issue"
              type="date"
              placeholder="تاريخ الإصدار"
              name="id_date_of_issue"
              value={id_date_of_issue}
              errorMsg={id_date_of_issueError}
              onChange={onChangeId_date_of_issue}
              onBlur={onBlurId_date_of_issue}
            />
          </div>

          <label className={styles.secBoxLabel}>بيانات جواز السفر</label>
          <div className={styles.secBox}>
            <InputBox
              id="no_of_passport"
              type="text"
              placeholder="رقم جواز السفر"
              name="no_of_passport"
              value={no_of_passport}
              errorMsg={no_of_passportError}
              onChange={onChangeNo_of_passport}
              onBlur={onBlurNo_of_passport}
            />
            <InputBox
              id="passport_place_of_issue"
              type="text"
              placeholder="مكان الإصدار"
              name="passport_place_of_issue"
              value={passport_place_of_issue}
              errorMsg={passport_place_of_issueError}
              onChange={onChangePassport_place_of_issue}
              onBlur={onBlurPassport_place_of_issue}
            />
            <InputBox
              id="passport_date_of_issue"
              type="date"
              placeholder="تاريخ الإصدار"
              name="passport_date_of_issue"
              value={passport_date_of_issue}
              errorMsg={passport_date_of_issueError}
              onChange={onChangePassport_date_of_issue}
              onBlur={onBlurPassport_date_of_issue}
            />
          </div>

          <label className={styles.secBoxLabel}>بيانات التواصل</label>
          <div className={styles.secBox}>
            <InputBox
              id="home_phone_no"
              type="text"
              placeholder="هاتف المنزل"
              name="home_phone_no"
              value={home_phone_no}
              errorMsg={home_phone_noError}
              onChange={onChangeHome_phone_no}
              onBlur={onBlurHome_phone_no}
            />
            <InputBox
              id="work_phone_no"
              type="text"
              placeholder="هاتف العمل"
              name="work_phone_no"
              value={work_phone_no}
              errorMsg={work_phone_noError}
              onChange={onChangeWork_phone_no}
              onBlur={onBlurWork_phone_no}
            />
            <InputBox
              id="mobile_no"
              type="text"
              placeholder="الجوال"
              name="mobile_no"
              value={mobile_no}
              errorMsg={mobile_noError}
              onChange={onChangeMobile_no}
              onBlur={onBlurMobile_no}
            />
            <InputBox
              id="email"
              type="email"
              placeholder="البريد الالكتروني"
              name="email"
              value={email}
              errorMsg={emailError}
              onChange={onChangeEmail}
              onBlur={onBlurEmail}
            />
          </div>

          <label className={styles.secBoxLabel}>بيانات العنوان</label>
          <div className={styles.secBox}>
            <PureSelect
              customStyles={{width: "398px"}}
              optionsList={countriesList}
              defaultOption="برجاءإختيار الدولة"
              name="country"
              errorMsg={countryError}
              onChange={onChangeCountry}
              onBlur={onBlurCountry}
            />
            {/* <InputBox
              id="country"
              type="text"
              placeholder="الدولة"
              name="country"
              value={country}
              errorMsg={countryError}
              onChange={onChangeCountry}
              onBlur={onBlurCountry}
            /> */}
            <InputBox
              id="city"
              type="text"
              placeholder="المدينة"
              name="city"
              value={city}
              errorMsg={cityError}
              onChange={onChangeCity}
              onBlur={onBlurCity}
            />
            <InputBox
              id="present_address"
              type="text"
              placeholder="العنوان الحالي"
              name="present_address"
              value={present_address}
              errorMsg={present_addressError}
              onChange={onChangePresent_address}
              onBlur={onBlurPresent_address}
            />
          </div>

          <label className={styles.secBoxLabel}>الحالة الاجتماعية</label>     
          <div className={styles.secBox2}>
            <RadioInput
              name="marital_status"
              placeholder={["متزوج", "أعزب"]}
              values={[1,2]}
              onChange={onChangeMarital_status}
              onBlur={onBlurMarital_status}
              errorMsg={marital_statusError}
            />
          </div>

          <label className={styles.secBoxLabel}>هل سبق و عملت في هذه الشركة؟</label>
          <div className={styles.secBox2}>
            <RadioInput
              name="employed_here_before"
              placeholder={["نعم", "لا"]}
              values={[true, false]}
              onChange={onChangeEmployed_here_before}
              onBlur={onBlurEmployed_here_before}
              errorMsg={employed_here_beforeError}
            />
          </div>

          <label className={styles.secBoxLabel}>هل تعمل حاليا ؟</label>
          <div className={styles.secBox2}>
            <RadioInput
              name="employed_now"
              placeholder={["نعم", "لا"]}
              values={[true, false]}
              onChange={onChangeEmployed_now}
              onBlur={onBlurEmployed_now}
              errorMsg={employed_nowError}
            />
          </div>

          <label className={styles.secBoxLabel}>الأعمال التي مارستها لاحقا</label>
          <div className={styles.secBox}>
            <InputBox
              id="previous_work_0_job_title"
              type="text"
              placeholder="مسمى الوظيفة"
              name="previous_work_0_job_title"
              value={previous_work_0_job_title}
              errorMsg={previous_work_0_job_titleError}
              onChange={onChangePrevious_work_0_job_title}
              onBlur={onBlurPrevious_work_0_job_title}
              minWidth="300px"
            />
            <InputBox
              id="previous_work_0_company_name"
              type="text"
              placeholder="اسم الشركة / صاحب العمل"
              name="previous_work_0_company_name"
              value={previous_work_0_company_name}
              errorMsg={previous_work_0_company_nameError}
              onChange={onChangePrevious_work_0_company_name}
              onBlur={onBlurPrevious_work_0_company_name}
              minWidth="300px"
            />
            <InputBox
              id="previous_work_0_company_address"
              type="text"
              placeholder="عنوان الشركة"
              name="previous_work_0_company_address"
              value={previous_work_0_company_address}
              errorMsg={previous_work_0_company_addressError}
              onChange={onChangePrevious_work_0_company_address}
              onBlur={onBlurPrevious_work_0_company_address}
              minWidth="300px"
            />
            <InputBox
              id="previous_work_0_company_mobile"
              type="text"
              placeholder="هاتف الشركة"
              name="previous_work_0_company_mobile"
              value={previous_work_0_company_mobile}
              errorMsg={previous_work_0_company_mobileError}
              onChange={onChangePrevious_work_0_company_mobile}
              onBlur={onBlurPrevious_work_0_company_mobile}
              minWidth="300px"
            />
            <InputBox
              id="previous_work_0_start_date"
              type="date"
              placeholder="الفترة من"
              name="previous_work_0_start_date"
              value={previous_work_0_start_date}
              errorMsg={previous_work_0_start_dateError}
              onChange={onChangePrevious_work_0_start_date}
              onBlur={onBlurPrevious_work_0_start_date}
              minWidth="300px"
            />
            <InputBox
              id="previous_work_0_end_date"
              type="date"
              placeholder="الفترة إلى"
              name="previous_work_0_end_date"
              value={previous_work_0_end_date}
              errorMsg={previous_work_0_end_dateError}
              onChange={onChangePrevious_work_0_end_date}
              onBlur={onBlurPrevious_work_0_end_date}
              minWidth="300px"
            />
            <InputBox
              id="previous_work_0_salary"
              type="number"
              placeholder="الراتب"
              name="previous_work_0_salary"
              value={previous_work_0_salary}
              errorMsg={previous_work_0_salaryError}
              onChange={onChangePrevious_work_0_salary}
              onBlur={onBlurPrevious_work_0_salary}
              isCustom={true}
            />
            <InputBox
              id="previous_work_0_allowance"
              type="number"
              placeholder="البدلات"
              name="previous_work_0_allowance"
              value={previous_work_0_allowance}
              errorMsg={previous_work_0_allowanceError}
              onChange={onChangePrevious_work_0_allowance}
              onBlur={onBlurPrevious_work_0_allowance}
              isCustom={true}
            />
            <InputBox
              id="previous_work_0_description_of_duties"
              type="text"
              placeholder="تفاصيل عن واجباتك"
              name="previous_work_0_description_of_duties"
              value={previous_work_0_description_of_duties}
              errorMsg={previous_work_0_description_of_dutiesError}
              onChange={onChangePrevious_work_0_description_of_duties}
              onBlur={onBlurPrevious_work_0_description_of_duties}
              height="80px"
              isTextArea={true}
            />
            <InputBox
              id="previous_work_0_reason_for_quit"
              type="text"
              placeholder="سبب ترك العمل"
              name="previous_work_0_reason_for_quit"
              value={previous_work_0_reason_for_quit}
              errorMsg={previous_work_0_reason_for_quitError}
              onChange={onChangePrevious_work_0_reason_for_quit}
              onBlur={onBlurPrevious_work_0_reason_for_quit}
              height="80px"
              // width="50%"
              isTextArea={true}
            />
          </div>
          <button className={styles.addBtn}>إضافة عمل أخر</button>

          <label className={styles.secBoxLabel}>بيانات العمل:</label>
          <div className={styles.secBox}>
            <InputBox
              id="G_O_S_I_no"
              type="text"
              placeholder="رقم التأمينات الإجتماعية إن وجد"
              name="G_O_S_I_no"
              value={G_O_S_I_no}
              errorMsg={G_O_S_I_noError}
              onChange={onChangeG_O_S_I_no}
              onBlur={onBlurG_O_S_I_no}
              isCustom={true}
            />
            <InputBox
              id="min_salary"
              type="number"
              placeholder="الراتب الأدنى المطلوب"
              name="min_salary"
              value={min_salary}
              errorMsg={min_salaryError}
              onChange={onChangeMin_salary}
              onBlur={onBlurMin_salary}
              isCustom={true}
            />
            <InputBox
              id="suitable_work_time_from"
              type="time"
              placeholder="وقت العمل المناسب لك من"
              name="suitable_work_time_from"
              value={suitable_work_time_from}
              errorMsg={suitable_work_time_fromError}
              onChange={onChangeSuitable_work_time_from}
              onBlur={onBlurSsuitable_work_time_from}
              isCustom={true}
            />
            <InputBox
              id="suitable_work_time_to"
              type="time"
              placeholder="وقت العمل المناسب لك إلى"
              name="suitable_work_time_to"
              value={suitable_work_time_to}
              errorMsg={suitable_work_time_toError}
              onChange={onChangeSuitable_work_time_to}
              onBlur={onBlurSuitable_work_time_to}
              isCustom={true}
            />
            {/* <input type="time" onChange={(e) => {
              console.log(e.target.value)
            }} /> */}
            <InputBox
              id="prefered_start_work"
              type="date"
              placeholder="متى تستطيع مباشرة العمل ؟"
              name="prefered_start_work"
              value={prefered_start_work}
              errorMsg={prefered_start_workError}
              onChange={onChangePrefered_start_work}
              onBlur={onBlurPrefered_start_work}
              isCustom={true}
            />
            <PureSelect
              customStyles={{flex: 1}}
              optionsList={yesNoList}
              defaultOption="هل لديك إستعداد للعمل خارج مدينتك؟"
              name="work_outside_your_city"
              errorMsg={work_outside_your_cityError}
              onChange={onChangeWork_outside_your_city}
              onBlur={onBlurWork_outside_your_city}
            />
            {/* <CustomSelect
              // width="398px"
              placeholder="لديك إستعداد للعمل خارج مدينتك"
              optionsList={yesNoList}
              name="work_outside_your_city"
              errorMsg={work_outside_your_cityError}
            /> */}
          </div>

          <label className={styles.secBoxLabel}>هل لديك سيارة؟</label>
          <div className={styles.secBox2}>
            <RadioInput
              name="have_car"
              placeholder={["نعم", "لا"]}
              values={[true, false]}
              onChange={onChangeHave_car}
              onBlur={onBlurHave_car}
              errorMsg={have_carError}
            />
          </div>
          <label className={styles.secBoxLabel}>بيانات السيارة إن وجدت</label>
          <div className={styles.secBox}>
            <InputBox
              id="car_Type"
              type="text"
              placeholder="نوعها"
              name="car_Type"
              value={car_Type}
              errorMsg={car_TypeError}
              onChange={onChangeCar_Type}
              onBlur={onBlurCar_Type}
            />
            <InputBox
              id="year_of_manufacturing"
              type="text"
              placeholder="سنة الصنع"
              name="year_of_manufacturing"
              value={year_of_manufacturing}
              errorMsg={year_of_manufacturingError}
              onChange={onChangeYear_of_manufacturing}
              onBlur={onBlurYear_of_manufacturing}
            />
          </div>

          <label className={styles.secBoxLabel}>بيانات رخصة القيادة</label>
          <div className={styles.secBox}>
            <InputBox
              id="licence_category"
              type="text"
              placeholder="نوعها"
              name="licence_category"
              value={licence_category}
              errorMsg={licence_categoryError}
              onChange={onChangeLicence_category}
              onBlur={onBlurLicence_category}
              minWidth="300px"
            />
            <InputBox
              id="licence_number"
              type="text"
              placeholder="رقمها"
              name="licence_number"
              value={licence_number}
              errorMsg={licence_numberError}
              onChange={onChangeLicence_number}
              onBlur={onBlurLicence_number}
              minWidth="300px"
            />
            <InputBox
              id="licence_date_of_issue"
              type="date"
              placeholder="تاريخ صدورها"
              name="licence_date_of_issue"
              value={licence_date_of_issue}
              errorMsg={licence_date_of_issueError}
              onChange={onChangeLicence_date_of_issue}
              onBlur={onBlurLicence_date_of_issue}
              minWidth="300px"
            />
            <InputBox
              id="licence_date_of_expiry"
              type="date"
              placeholder="تاريخ إنتهائها"
              name="licence_date_of_expiry"
              value={licence_date_of_expiry}
              errorMsg={licence_date_of_expiryError}
              onChange={onChangeLicence_date_of_expiry}
              onBlur={onBlurLicence_date_of_expiry}
              minWidth="300px"
            />
            <InputBox
              id="licence_place_of_issue"
              type="text"
              placeholder="مكان الإصدار"
              name="licence_place_of_issue"
              value={licence_place_of_issue}
              errorMsg={licence_place_of_issueError}
              onChange={onChangeLicence_place_of_issue}
              onBlur={onBlurLicence_place_of_issue}
              minWidth="300px"
            />
            <InputBox
              id="blood_group"
              type="text"
              placeholder="فصيلة الدم"
              name="blood_group"
              value={blood_group}
              errorMsg={blood_groupError}
              onChange={onChangeBlood_group}
              onBlur={onBlurBlood_group}
              minWidth="300px"
            />
            {/* <input type="date" onChange={(e) => {
              const fullDate = e.target.value.split("-");

              console.log(`${fullDate[0]}-${fullDate[1]}`)
            }} /> */}
          </div>

          <label className={styles.secBoxLabel}>هل صدرت بحقك أحكام قضائية؟</label>
          <div className={styles.secBox2}>
            <RadioInput
              name="have_convicted"
              placeholder={["نعم", "لا"]}
              values={[true, false]}
              onChange={onChangeHave_convicted}
              onBlur={onBlurhave_convicted}
              errorMsg={have_convictedError}
            />
          </div>
          <div className={styles.secBox}>
            <InputBox
              id="convict_description"
              type="text"
              placeholder="في حالة الإجابة بنعم, يرجي بيان التفاصيل"
              name="convict_description"
              value={convict_description}
              errorMsg={convict_descriptionError}
              onChange={onChangeConvict_description}
              onBlur={onBlurConvict_description}
              isTextArea={true}
              height="100px"
            />
          </div>
          
          <label className={styles.secBoxLabel}>التحصيل العلمي</label>
          <div className={styles.secBox}>
            {/* <CustomSelect
              width="398px"
              placeHolder="إختر اخر تحصيل علمي"
              optionsList={requiredEducationList}
              name="education"
              value={education}
              errorMsg={educationError}
              onChange={onChangeEducation}
              onBlur={onBlurEducation}
            /> */}
            <PureSelect
              customStyles={{flex: 1}}
              optionsList={requiredEducationList}
              defaultOption="إختر اخر تحصيل علمي"
              name="education"
              errorMsg={educationError}
              onChange={onChangeEducation}
              onBlur={onBlurEducation}
            />
            <InputBox
              id="name_of_institute"
              type="text"
              placeholder="إسم المدرسة / الجامعة"
              name="name_of_institute"
              value={name_of_institute}
              errorMsg={name_of_instituteError}
              onChange={onChangeName_of_institute}
              onBlur={onBlurName_of_institute}
              minWidth="300px"
            />
            <InputBox
              id="education_city"
              type="text"
              placeholder="المدينة / البلد"
              name="education_city"
              value={education_city}
              errorMsg={education_cityError}
              onChange={onChangeEducation_city}
              onBlur={onBlurEducation_city}
              minWidth="300px"
            />
            <InputBox
              id="specialize"
              type="text"
              placeholder="التخصص"
              name="specialize"
              value={specialize}
              errorMsg={specializeError}
              onChange={onChangeSpecialize}
              onBlur={onBlurSpecialize}
              minWidth="300px"
            />
            <InputBox
              id="grade"
              type="text"
              placeholder="الدرجة"
              name="grade"
              value={grade}
              errorMsg={gradeError}
              onChange={onChangeGrade}
              onBlur={onBlurGrade}
              width="398px"
            />
            <InputBox
              id="duration_study_from"
              type="date"
              placeholder="مدة الدراسة من سنة"
              name="duration_study_from"
              value={duration_study_from}
              errorMsg={duration_study_fromError}
              onChange={onChangeDuration_study_from}
              onBlur={onBlurDuration_study_from}
              minWidth="300px"
            />
            <InputBox
              id="duration_study_to"
              type="date"
              placeholder="مدة الدراسة إلى سنة"
              name="duration_study_to"
              value={duration_study_to}
              errorMsg={duration_study_toError}
              onChange={onChangeDuration_study_to}
              onBlur={onBlurDuration_study_to}
              minWidth="300px"
            />
          </div>
          
          <label className={styles.secBoxLabel}>الدورات التدريبية:</label>
          <label className={styles.secBoxLabel}>بيانات الدورة</label>
          <div className={styles.secBox}>
            <InputBox
              id="Courses_0_name_of_institute"
              type="text"
              placeholder="إسم المعهد"
              name="Courses_0_name_of_institute"
              value={Courses_0_name_of_institute}
              errorMsg={Courses_0_name_of_instituteError}
              onChange={onChangeCourses_0_name_of_institute}
              onBlur={onBlurCourses_0_name_of_institute}
              minWidth="300px"
            />
            <InputBox
              id="Courses_0_education_city"
              type="text"
              placeholder="المدينة / البلد"
              name="Courses_0_education_city"
              value={Courses_0_education_city}
              errorMsg={Courses_0_education_cityError}
              onChange={onChangeCourses_0_education_city}
              onBlur={onBlurCourses_0_education_city}
              minWidth="300px"
            />
            <InputBox
              id="Courses_0_duration_study_from"
              type="text"
              placeholder="التخصص"
              name="Courses_0_duration_study_from"
              value={Courses_0_duration_study_from}
              errorMsg={Courses_0_duration_study_fromError}
              onChange={onChangeCourses_0_duration_study_from}
              onBlur={onBlurCourses_0_duration_study_from}
              minWidth="300px"
            />
            <InputBox
              id="Courses_0_duration_study_to"
              type="date"
              placeholder="من تاريخ"
              name="Courses_0_duration_study_to"
              value={Courses_0_duration_study_to}
              errorMsg={Courses_0_duration_study_toError}
              onChange={onChangeCourses_0_duration_study_to}
              onBlur={onBlurCourses_0_duration_study_to}
              minWidth="300px"
            />
            <InputBox
              id="Courses_0_specialize"
              type="date"
              placeholder="إلى تاريخ"
              name="Courses_0_specialize"
              value={Courses_0_specialize}
              errorMsg={Courses_0_specializeError}
              onChange={onChangeCourses_0_specialize}
              onBlur={onBlurCourses_0_specialize}
              minWidth="300px"
            />
          </div>
          <button className={styles.addBtn}>إضافة دورة أخرى</button>

          <label className={styles.secBoxLabel}>معرفة اللغات</label>
          <label className={styles.secBoxLabel}>اللغة العربية:</label>
          <div className={styles.secBox}>        
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى التحدث باللغة "
              name="AR_speaking"
              errorMsg={AR_speakingError}
              onChange={onChangeAR_speaking}
              onBlur={onBlurAR_speaking}
            />
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى القراءة باللغة "
              name="AR_reading"
              errorMsg={AR_readingError}
              onChange={onChangeAR_reading}
              onBlur={onBlurAR_reading}
            />
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى الكتابة باللغة "
              name="AR_writing"
              errorMsg={AR_writingError}
              onChange={onChangeAR_writing}
              onBlur={onBlurAR_writing}
            />
            {/* <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى سرعة الإختزال باللغة "
              name="AR_shorthand_speed"
              errorMsg={AR_shorthand_speedError}
              onChange={onChangeAR_shorthand_speed}
              onBlur={onBlurAR_shorthand_speed}
            />
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى سرعة الكتابة باللغة "
              name="AR_typing_speed"
              errorMsg={AR_typing_speedError}
              onChange={onChangeAR_typing_speed}
              onBlur={onBlurAR_typing_speed}
            /> */}
          </div>
          <label className={styles.secBoxLabel}>اللغة الإنجليزية:</label>
          <div className={styles.secBox}>
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى التحدث باللغة "
              name="EN_speaking"
              errorMsg={EN_speakingError}
              onChange={onChangeEN_speaking}
              onBlur={onBlurEN_speaking}
            />
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى القراءة باللغة "
              name="EN_reading"
              errorMsg={EN_readingError}
              onChange={onChangeEN_reading}
              onBlur={onBlurEN_reading}
            />
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى الكتابة باللغة "
              name="EN_writing"
              errorMsg={EN_writingError}
              onChange={onChangeEN_writing}
              onBlur={onBlurEN_writing}
            />
            {/* <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى سرعة الإختزال باللغة "
              name="EN_shorthand_speed"
              errorMsg={EN_shorthand_speedError}
              onChange={onChangeEN_shorthand_speed}
              onBlur={onBlurEN_shorthand_speed}
            />
            <PureSelect
              customStyles={{minWidth: "150px", flexGrow: 1}}
              optionsList={languageLevel}
              defaultOption="إختر مستوى سرعة الكتابة باللغة "
              name="EN_typing_speed"
              errorMsg={EN_typing_speedError}
              onChange={onChangeEN_typing_speed}
              onBlur={onBlurEN_typing_speed}
            /> */}
          </div>

          <label className={styles.secBoxLabel}>كيف عرفت عن فرصة العمل؟</label>
          <div className={styles.secBox}>
            <InputBox
              id="how_know_job"
              type="text"
              placeholder="كيف عرفت عن فرصة العمل"
              name="how_know_job"
              value={how_know_job}
              errorMsg={how_know_jobError}
              onChange={onChangeHow_know_job}
              onBlur={onBlurHow_know_job}
              height="80px"
              width="50%"
              isTextArea={true}
            />
          </div>

          <label className={styles.secBoxLabel}>هل لديك أصحاب من غير الأقارب يعملون في شركتنا ؟</label>
          <div className={styles.secBox2}>
            <RadioInput
              name="have_employed_relatives"
              placeholder={["نعم", "لا"]}
              values={[true, false]}
              onChange={onChangeHave_employed_relatives}
              onBlur={onBlurHave_employed_relatives}
              errorMsg={have_employed_relativesError}
            />
          </div>

          <label className={styles.secBoxLabel}>إذا كان لديك أصحاب من غير الأقارب يعملون في شركتنا (أذكرهم)</label>
          <div className={styles.secBox}>
            <InputBox
              id="relatives"
              type="text"
              placeholder="أذكر الأصحاب من غير الأقارب"
              name="relatives"
              value={how_know_job}
              errorMsg={relativesError}
              onChange={onChangeRelatives}
              onBlur={onBlurRelatives}
              height="80px"
              width="50%"
              isTextArea={true}
            />
          </div>

          <label className={styles.secBoxLabel}>المعرفون: أذكر أسماء ثلاث أشخاص (من غير الأقارب )</label>
          <label className={styles.secBoxLabel}>بيانات الشخص:</label>
          <div className={styles.secBox}>
            <InputBox
              id="Identifiers_0_name"
              type="text"
              placeholder="الإسم"
              name="Identifiers_0_name"
              value={Identifiers_0_name}
              errorMsg={Identifiers_0_nameError}
              onChange={onChangeIdentifiers_0_name}
              onBlur={onBlurIdentifiers_0_name}
              minWidth="300px"
            />
            <InputBox
              id="Identifiers_0_position"
              type="text"
              placeholder="الوظيفة"
              name="Identifiers_0_position"
              value={Identifiers_0_position}
              errorMsg={Identifiers_0_positionError}
              onChange={onChangeIdentifiers_0_position}
              onBlur={onBlurIdentifiers_0_position}
              minWidth="300px"
            />
            <InputBox
              id="Identifiers_0_company"
              type="text"
              placeholder="الهاتف"
              name="Identifiers_0_company"
              value={Identifiers_0_company}
              errorMsg={Identifiers_0_companyError}
              onChange={onChangeIdentifiers_0_company}
              onBlur={onBlurIdentifiers_0_company}
              minWidth="300px"
            />
            <InputBox
              id="Identifiers_0_mobile"
              type="text"
              placeholder="الشركة"
              name="Identifiers_0_mobile"
              value={Identifiers_0_mobile}
              errorMsg={Identifiers_0_mobileError}
              onChange={onChangeIdentifiers_0_mobile}
              onBlur={onBlurIdentifiers_0_mobile}
              minWidth="300px"
            />
            <InputBox
              id="Identifiers_0_address"
              type="text"
              placeholder="العنوان"
              name="Identifiers_0_address"
              value={Identifiers_0_address}
              errorMsg={Identifiers_0_addressError}
              onChange={onChangeIdentifiers_0_address}
              onBlur={onBlurIdentifiers_0_address}
              minWidth="300px"
            />
          </div>
          <button className={styles.addBtn}>إضافة شخص أخر</button>

          <label className={styles.secBoxLabel}>هل هناك معلومات أخرى تود اضافتها؟</label>
          <div className={styles.secBox}>
            <InputBox
              id="other_data_to_add"
              type="text"
              placeholder="هل هناك معلومات أخرى تود اضافتها؟"
              name="other_data_to_add"
              value={other_data_to_add}
              errorMsg={other_data_to_addError}
              onChange={onChangeOther_data_to_add}
              onBlur={onBlurOther_data_to_add}
              height="80px"
              isTextArea={true}
            />
          </div>

          <button type="submit" className={styles.sendBtn}>إرسال</button>
        </form>
      </div>
      <ToastContainer
        position={true === "rtl" ? "bottom-right" : "bottom-left"}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default JobForm;
