import { CopyToClipboard } from 'react-copy-to-clipboard';
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { typesCode } from "./SlideDemoCode";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function CodeBlock({ language, code }) {
    // Hacks
    return (
        <div style={{ position: "relative" }}>
            <CopyToClipboard text={code}>
                <button style={{ position: "absolute", right: 0 }}>Copy</button>
            </CopyToClipboard>
            <SyntaxHighlighter language={language} style={dark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
