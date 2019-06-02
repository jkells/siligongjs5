import React from "react";
import Footer from "./Footer";
import SlideIntro from "./SlideIntro";
import SlideHistory from "./SlideHistory";
import SlideTs09 from "./SlideTs09";
import SlideTs18 from "./SlideTs18";
import SlideTs33 from "./SlideTs33";
import SlideBabel from "./SlideBabel";
import { connect } from "react-redux"
import { selectSlide } from "../selectors";
import KeyboardNav from "./KeyboardNav";

const slides = [
    SlideIntro,
    SlideHistory,
    SlideTs09,
    SlideTs18,
    SlideTs33,
    SlideBabel,
]
const NoSlide = () => <p>No Slide</p>;

const App = (props) => {
    const Slide = slides[props.slide] || NoSlide;
    return (
        <KeyboardNav>
            <>
                <Slide />
                <Footer />
            </>
        </KeyboardNav>
    );
}

const mapStateToProps = (state, props) => ({
    slide: selectSlide(state),
});

export default connect(mapStateToProps, null)(App);