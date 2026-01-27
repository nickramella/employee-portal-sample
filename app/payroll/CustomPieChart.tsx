import { PayStub } from "./PayComparison";
import { PieChart } from "@mui/x-charts/PieChart";

interface CustomPieChartProps {
    payStub: PayStub
}

const CustomPieChart = ({payStub}: CustomPieChartProps) => {
  return (
    <div>
        <div className="p-4">
            <h1 className="font-bold text-4xl">{payStub.date?.format("MM/DD/YYYY")}</h1>
            <h2 className="font-bold text-lg">Gross: ${payStub.payInfo.gross} </h2>                                  
        </div>
        <PieChart
            series={[
                {
                    innerRadius: 50, outerRadius: 100,
                    data: [
                        { id: 0, value: payStub.payInfo.takeHome, label: "Take Home" },
                        { id: 1, value: payStub.payInfo.taxes, label: "Taxes" },
                        { id: 2, value: payStub.payInfo.deductions, label: "Deductions" },
                    ],
                },

            ]}
            slotProps={{
                tooltip: { trigger: "none" },
            }}
            width={200}
            height={200} 
        />
    </div>
  )
}

export default CustomPieChart