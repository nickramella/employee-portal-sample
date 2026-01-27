import { PayStub } from "./PayComparison"

interface PayBreakdownProps {
    primary: PayStub;
    secondary?: PayStub;
}

interface PayBreakDownRowProps {
    title: string;
    primaryInfo: number;
    secondaryInfo?: number;
    columns?: number;
}

const PayBreakDownRow = ({title, primaryInfo, secondaryInfo, columns}: PayBreakDownRowProps) => {
    return (
        <div className="grid grid-cols-6">
            <p className={`font-bold ${columns === 3 ? "col-span-2" : "col-span-3"}`}>{title}</p>
            <p className={`${columns === 3 ? "col-span-2 text-right" : "col-span-3 text-right"}`}>${primaryInfo}</p>
            {secondaryInfo && <p role="grid-cell" className="col-span-2 text-right">${secondaryInfo}</p>}
        </div>
    )
}

const PayBreakdown = ({primary, secondary}: PayBreakdownProps) => {
    const columns = primary && secondary ? 3 : 2;
  
  return (
    <div className="space-y-3 p-3">
        {primary && secondary &&
            <div className="grid grid-cols-6 font-bold">
                <p className="col-span-2">Compare</p>
                <p className="col-span-2 text-right">Pay Stub 1</p>
                <p className="col-span-2 text-right">Pay Stub 2</p>
            </div>
        }
        <PayBreakDownRow
            title="Take Home"
            columns={columns}
            primaryInfo={primary.payInfo.takeHome}
            secondaryInfo={secondary && secondary.payInfo.takeHome} />
        <PayBreakDownRow
            title="Deductions"
            columns={columns}
            primaryInfo={primary.payInfo.deductions}
            secondaryInfo={secondary && secondary.payInfo.deductions} />
        <PayBreakDownRow
            title="Taxes"
            columns={columns}
            primaryInfo={primary.payInfo.taxes}
            secondaryInfo={secondary && secondary.payInfo.taxes} />
        <PayBreakDownRow
            title="Gross"
            columns={columns}
            primaryInfo={primary.payInfo.gross}
            secondaryInfo={secondary && secondary.payInfo.gross} />
    </div>
  )
}

export default PayBreakdown