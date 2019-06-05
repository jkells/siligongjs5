import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";

const babelCode = `yarn add -D @babel/preset-typescript`;

const renameCode = `find src -name "*.jsx" -exec rename 's/\.jsx$/.tsx/' '{}' \;
find src -name "*.js" -exec rename 's/\.js$/.ts/' '{}' \;
`;

const webpackCode = `entry: './src/index.tsx',
test: /\.(js|jsx|ts|tsx)$/
extensions: ['.js', '.jsx', '.ts', '.tsx']
`;

export default function SlideBabel() {
    return (
        <>
            <h1>Babel Project</h1>
            <div>
                <h2>Install Typescript preset and update .babelrc</h2>
                <SyntaxHighlighter language="bash" style={dark}>
                    {babelCode}
                </SyntaxHighlighter>
            </div>
            <div>
                <h2>
                    Rename to .ts/.tsx (Thanks{" "}
                    <a href="https://stackoverflow.com/questions/21985492/recursively-change-file-extensions-in-bash">
                        Stack Overflow
                    </a>
                    )
                </h2>
                <SyntaxHighlighter language="bash" style={dark}>
                    {renameCode}
                </SyntaxHighlighter>
            </div>
            <div>
                <h2>Update extensions in webpack.conf.js</h2>
                <SyntaxHighlighter language="javascript" style={dark}>
                    {webpackCode}
                </SyntaxHighlighter>
            </div>
            <div>
                <h2>Create a .tsconfig</h2>
            </div>
        </>
    );
}
