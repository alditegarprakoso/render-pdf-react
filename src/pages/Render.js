import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

  const styles = StyleSheet.create({
    viewer: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: '96.5vh',
    },
    page: {
      padding: 30,
      width: "100%",
      height: "100%",
    }
  });

  function Render() {
    const { id } = useParams();
    const [user, setUser] = useState([])

    const getUser = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id).then((response) => response.json())
      return setUser(response);
    };

    useEffect(() => {
      getUser()
    }, [])

    return (
      <PDFViewer fileName="somename.pdf" style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View>
              <Text style={{ alignContent: "center" }}>{user.name}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    )
  }

  export default Render;