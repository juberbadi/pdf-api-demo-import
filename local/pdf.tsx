import express, { Request, Response } from "express";
import cors from "cors";
import React from "react";
import ReactPDF, { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PORT = process.env.PORT_PDF || 3001;
const app = express();
app.use(cors({ origin: "*" }));

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

app.get("/pdf", async (_req: Request, res: Response) => {
  const pdfStream = await ReactPDF.renderToStream(<MyDocument />);
  res.setHeader("Content-Type", "application/pdf");
  pdfStream.pipe(res);
});

app.listen(PORT, () => console.log(`PDF server ready: http://localhost:${PORT}`));
