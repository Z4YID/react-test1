import { useTheme } from "@mui/material"
import { ResponsivePie } from "@nivo/pie"
import { tokens } from "../theme"
import { mockPieData as data } from "../data/mockData"

const PieChart = ({ isDashboard = false}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <ResponsivePie
        data={data}
        theme={{
            axis: {
                domain: {line: {stroke: colors.grey[100]}},
                legend: {text: {fill: colors.grey[100]}},
                ticks: {line: {stroke: colors.grey[100], strokeWidth: 1}, text: {fill: colors.grey[100]}},
            },
            legends: {text: {fill: colors.grey[100]}} 
        }}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 60,
                itemHeight: 14,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 14,
                symbolShape: 'circle'
            }
        ]}
    />
    )
}

export default PieChart;