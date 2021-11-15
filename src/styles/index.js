import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  topHomeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    display: "flex",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1.5,
    padding: 10,
    fontSize: 14,
    width: 175,
    alignItems: "center",
    backgroundColor: "skyblue",
    marginHorizontal: 3,
  },
  listBodyContainer: {
    width: "90%",
    height: 160,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  listEntry: {
    height: 50,
    width: "85%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18,
  },
  listEntryButton: {
    width: "85%",
  },
  listEntryButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
