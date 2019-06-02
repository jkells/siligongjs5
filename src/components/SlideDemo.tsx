import React from "react";
import DemoPeople from "./DemoPeople";
import { SILIGONG_YELLOW } from "../colors";

export default function SlideDemo() {
    return (
        <>
            <h1>Demo</h1>
            <DemoPeople buttonColor={SILIGONG_YELLOW} />
        </>
    );
}
