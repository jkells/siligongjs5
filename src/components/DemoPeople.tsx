import { addPerson } from "../actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { selectPeople } from "../selectors";
import { State } from "../reducers";
import faker from "faker";
import React from "react";

interface OwnProps {
    buttonColor: string;
}

type Props = OwnProps &
    ReturnType<typeof mapDispatchToProps> &
    ReturnType<typeof mapStateToProps>;

const DemoPeople = (props: Props) => {
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

const mapStateToProps = (state: State, props: OwnProps) => ({
    people: selectPeople(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
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
