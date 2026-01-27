import Widget from '@/components/Widget'
import React from 'react'
import PayComparison from './pay-comparison/PayComparison'

const page = () => {
  return (
    <Widget title={"Pay Comparison"}>
        <PayComparison />
    </Widget>
  )
}

export default page