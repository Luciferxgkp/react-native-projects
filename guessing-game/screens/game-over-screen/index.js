import { Image, Text, View } from "react-native";
import { styles } from "./style";
import Title from "../../components/ui/title";
import PrimaryBotton from "../../components/ui/primary-button";

const GameOverScreen = ({ userNumber, roundsNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryBotton onPress={onStartNewGame}>Start New Game</PrimaryBotton>
    </View>
  );
};

export default GameOverScreen;
