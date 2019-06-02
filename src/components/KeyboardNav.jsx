import { connect } from "react-redux";
import { nextSlide, previousSlide } from "../actions";
import { useEffect } from "react";

const KeyboardNav = props => {
    useEffect(() => {
        const handler = event => {
            switch (event.key) {
                case "ArrowLeft":
                    return props.previousSlide();
                case "ArrowRight":
                    return props.nextSlide();
            }
        };
        document.body.addEventListener("keydown", handler);
        return () => document.body.removeEventListener("keydown", handler);
    });
    return props.children;
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch, props) => ({
    nextSlide: () => dispatch(nextSlide()),
    previousSlide: () => dispatch(previousSlide()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KeyboardNav);
