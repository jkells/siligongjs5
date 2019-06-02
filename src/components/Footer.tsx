import React from "react";
import { connect } from "react-redux";
import { selectSlide } from "../selectors";
import { nextSlide, previousSlide } from "../actions";

const Footer = props => (
    <div className="footer">
        <marquee>
            <img width="32" height="32" src="/assets/duck.jpeg" />
        </marquee>
        <span>Slide: {props.slide + 1}</span>
        <button onClick={props.previousSlide}>Previous</button>
        <button onClick={props.nextSlide}>Next</button>
    </div>
);

const mapStateToProps = (state, props) => ({
    slide: selectSlide(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    nextSlide: () => dispatch(nextSlide()),
    previousSlide: () => dispatch(previousSlide()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
