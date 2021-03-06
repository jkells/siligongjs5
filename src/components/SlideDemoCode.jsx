import React from "react";
import CodeBlock from "./CodeBlock";

const actionCode = `
export interface Person {
    name: string;
    jumpingHeight: number;
};

export type Actions = ReturnType<typeof nextSlide> |
    ReturnType<typeof previousSlide> |
    ReturnType<typeof addPerson>;
`;

const reducerCode = `export type State = ReturnType<typeof rootReducer>;`

const componentCode = `interface OwnProps {
    buttonColor: string,
};

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
`

export default function SlideDemoCode() {
    return (
        <>
            <h1>Cheat Sheet</h1>
            <div>
                <h2>Actions</h2>
                <CodeBlock languge="typescript" code={actionCode} />
                <p>Don't forget as const!</p>
            </div>
            <div>
                <h2>Reducer</h2>
                <CodeBlock language="typescript" code={reducerCode} />
                <p>Don't forget selectors!</p>
            </div>
            <div>
                <h2>Component</h2>
                <CodeBlock language="typescript" code={componentCode} />
            </div>
        </>
    );
}
