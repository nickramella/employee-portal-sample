import PersonalInfoForm from '@/app/personal-info/PersonalInfoForm'
import Widget from '@/components/Widget'
import React from 'react'

const page = () => {
  return (
    <div className='min-w-full'>
        <Widget title="Personal Information">
            <PersonalInfoForm />
        </Widget>
    </div>
  )
}

export default page