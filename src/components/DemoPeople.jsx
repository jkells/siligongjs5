import { addPerson } from "../actions";
import { connect } from "react-redux";
import { selectPeople } from "../selectors";
import faker from "faker";
import React from "react";

const DemoPeople = (props) => {
    const items = props.people.map(p => (
        <li>
            {p.name} - {p.jumpingHeight}
        </li>
    ));

    return (
        <>
            <ul>{items}</ul>
            <button
                className="demo-button"
                onClick={props.onClick}
                style={{ background: props.buttonColor }}
            >
                Add Person
            </button>
        </>
    );
};

const mapStateToProps = (state, props) => ({
    people: selectPeople(state),
});
const mapDispatchToProps = (dispatch) => ({
    onClick: () =>
        dispatch(
            addPerson({
                jumpingHeight: Math.round(Math.random() * 100),
                name: faker.name.findName(),
            })
        ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DemoPeople);
