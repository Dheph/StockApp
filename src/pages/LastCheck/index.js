import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import img from "../../assets/womanCheck.png";

import styles from "./styles";
import globalStyles from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

const LastCheck = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Image
          source={img}
          style={{
            marginTop: 20,
            width: 250,
            height: 220,
            backgroundColor: "transparent",
            borderRadius: 100,
          }}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.modalHeader}>
          <TextInput
            style={styles.modalSearchText}
            placeholder="Qual é o nome do Técnico ?"
          />
          <TouchableOpacity
            style={styles.modalButtonIcon}
            onPress={() => setOpen(false)}
          >
            <Feather
              name="search"
              size={25}
              color="#0a293e"
              style={styles.modalIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.modalBody}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modalItemsContainer}>
              <TouchableOpacity
                style={styles.modalItems}
                onPress={() => navigation.navigate("viewgroups")}
              >
                <Text style={styles.modalItemText}>Jorge</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalItems}
                onPress={() => navigation.navigate("viewgroups")}
              >
                <Text style={styles.modalItemText}>Almeida</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalItems}
                onPress={() => navigation.navigate("viewgroups")}
              >
                <Text style={styles.modalItemText}>Breno</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalItems}
                onPress={() => navigation.navigate("viewgroups")}
              >
                <Text style={styles.modalItemText}>Junior</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalItems}
                onPress={() => navigation.navigate("viewgroups")}
              >
                <Text style={styles.modalItemText}>Adalberto</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalItems}
                onPress={() => navigation.navigate("viewgroups")}
              >
                <Text style={styles.modalItemText}>Ycaro</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default LastCheck;