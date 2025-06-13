import React from "react";
import { renderToStream } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
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
export default async function handler(_req, res) {
    const pdfStream = await renderToStream(React.createElement(MyDocument, null));
    res.setHeader("Content-Type", "application/pdf");
    pdfStream.pipe(res);
}
