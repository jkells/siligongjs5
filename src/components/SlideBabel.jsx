import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from "react";

export default function SlideBabel() {
    const codeString = `
yarn add -D @babel/preset-typescript
find . -name '*.t1' -exec rename .jsx .tsx {}
find . -name '*.t1' -exec rename .js .ts {}
`;
    return (
        <>
            <h1>Introducing Typescript to a Babel project</h1>
            <SyntaxHighlighter language='javascript' style={dark}>{codeString}</SyntaxHighlighter>
        </>
    );


}