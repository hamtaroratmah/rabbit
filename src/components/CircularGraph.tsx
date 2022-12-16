import {

  StyleSheet

} from "react-native";

import { ProgressChart } from "react-native-chart-kit";

export type Props = {
  nbOfYes: number;
  nbOfNo: number;
};

const CircularGraph = ({ nbOfYes, nbOfNo }: Props) => {
  let nbTotalOfYesAndNo = nbOfYes + nbOfNo;
  
  //to prevent division by 0 if nbTotalOfYesAndNo=0
  if (nbTotalOfYesAndNo == 0) {
    nbTotalOfYesAndNo = 1;
  }
  const data = {
    data: [nbOfNo / nbTotalOfYesAndNo, nbOfYes/ nbTotalOfYesAndNo],
  };
  let colorYes: string = "rgba(255, 136, 136,0.4)";
  let colorNo: string = "rgba(94, 196, 190,0.5)"; 
  let colors = [colorYes, colorNo];
  return (

    <ProgressChart
      data={data}
      width={240}
      height={200}
      chartConfig={{
        backgroundGradientFrom: "#fefefe",
        backgroundGradientTo: "#fefefe",
        labelColor: () => "black",

        color: (opacity = 1, index = 0) => {
          return index != undefined
            ? colors[index]
            : `rgba(100,100,0,${opacity})`;
        },
      }}

      style={styles.container}
     
    />
  );
};

const styles = StyleSheet.create({
  container: {
  alignSelf:"center"
  },
});




export default CircularGraph;
