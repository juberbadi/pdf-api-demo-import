import React from "react";
import { renderToStream } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "row", backgroundColor: "#E4E4E4" },
  section: { margin: 10, padding: 10, flexGrow: 1 },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default async function handler(_req: any, res: any) {
  const pdfStream = await renderToStream(<MyDocument />);
  res.setHeader("Content-Type", "application/pdf");
  pdfStream.pipe(res);
}
