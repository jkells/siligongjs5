import { connect } from "react-redux";
import { selectSlide } from "../selectors";
import Footer from "./Footer";
import KeyboardNav from "./KeyboardNav";
import React from "react";
import slides from "../slides";

const NoSlide = () => <p>No Slide</p>;

const App = props => {
    const Slide = slides[props.slide] || NoSlide;
    return (
        <KeyboardNav>
            <>
                <Slide />
                <Footer />
            </>
        </KeyboardNav>
    );
};

const mapStateToProps = (state, props) => ({
    slide: selectSlide(state),
});

export default connect(
    mapStateToProps,
    null
)(App);
