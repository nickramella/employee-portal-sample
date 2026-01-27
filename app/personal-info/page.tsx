import PersonalInfoForm from "@/app/personal-info/PersonalInfoForm"
import Widget from "@/components/Widget"
import HomeAddressForm from "./HomeAddressForm"

const page = () => {
  return (
    <div className="w-full">
      <Widget title="Personal Information">
          <PersonalInfoForm />
      </Widget>
      <Widget title="Home Address">
          <HomeAddressForm />
      </Widget>
    </div>
  )
}

export default page