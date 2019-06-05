import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const babelCode = `yarn add -D \\
    typescript \\
    @babel/preset-typescript \\
    @types/faker \\
    @types/lodash \\
    @types/react \\
    @types/react-dom \\
    @types/react-redux \\
    @types/react-syntax-highlighter
`;

const typesCode = `cp tsconfig.json.sample tsconfig.json`;

const renameCode = `find src -name "*.jsx" -exec rename 's/\.jsx$/.tsx/' '{}' \\;
find src -name "*.js" -exec rename 's/\.js$/.ts/' '{}' \\;
`;

const webpackCode = `entry: './src/index.tsx',
test: /\.(js|jsx|ts|tsx)$/
extensions: ['.js', '.jsx', '.ts', '.tsx']
`;

function CodeBlock({ language, code }) {
    // Hacks
    return (
        <div style={{position: "relative"}}>
            <CopyToClipboard text={typesCode}>
                <button style={{position: "absolute", right: 0}}>Copy</button>
            </CopyToClipboard>
            <SyntaxHighlighter language={language} style={dark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

export default function SlideBabel() {
    return (
        <>
            <h1>Babel Project</h1>
            <div>
                <h2>Create a .tsconfig</h2>
                <CodeBlock languge="bash" code={typesCode} />
            </div>
            <div>
                <h2>Install Typescript preset and update .babelrc</h2>
                <CodeBlock language="bash" code={babelCode} />
            </div>
            <div>
                <h2>
                    Rename to .ts/.tsx (Thanks{" "}
                    <a href="https://stackoverflow.com/questions/21985492/recursively-change-file-extensions-in-bash">
                        Stack Overflow
                    </a>
                    )
                </h2>
                <CodeBlock language="bash" code={renameCode} />
            </div>
            <div>
                <h2>Update extensions in webpack.conf.js</h2>
                <CodeBlock language="javascript" code={webpackCode} />
            </div>
        </>
    );
}
