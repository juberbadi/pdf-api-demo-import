import express from "express";
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
const MyDocument = () => (React.createElement(Document, null,
    React.createElement(Page, { size: "A4", style: styles.page },
        React.createElement(View, { style: styles.section },
            React.createElement(Text, null, "Section #1")),
        React.createElement(View, { style: styles.section },
            React.createElement(Text, null, "Section #2")))));
app.get("/pdf", async (_req, res) => {
    const pdfStream = await ReactPDF.renderToStream(React.createElement(MyDocument, null));
    res.setHeader("Content-Type", "application/pdf");
    pdfStream.pipe(res);
});
app.listen(PORT, () => console.log(`PDF server ready: http://localhost:${PORT}`));
