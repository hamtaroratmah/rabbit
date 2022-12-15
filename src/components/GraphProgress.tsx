import { View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#Ffffff",
  backgroundGradientTo: "#ffffff",
  barPercentage: 1.3,
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

  style: {
    borderRadius: 16,
    with:200
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: "#efefef",
    strokeDasharray: "0",
  },
  
};

const GraphProgress = () => {
  return (
    <View style={{width:500, height:100}}>
      <BarChart
        style={{
            width:250
        }}
        data={data}
        width={100}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        yAxisSuffix="hy"
      />
    </View>
  );
};

export default GraphProgress;
