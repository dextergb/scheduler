import React from "react";

import "components/Appointment/styles.scss";

import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVE = "SAVE";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function onSave(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVE);
    props.bookInterview(props.id, interview);
    setTimeout(function () {
      transition(SHOW);
    }, 1000);
  }
  function deleteInterview() {
    transition(DELETE, true);
    props.cancelInterview(props.id);
    setTimeout(function () {
      transition(EMPTY);
    }, 1000);
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={(name, interviewer) => onSave(name, interviewer)}
          onCancel={() => back()}
        />
      )}
      {mode === SAVE && <Status message="Saving" />}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={deleteInterview}
          onCancel={back}
        />
      )}
      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onSave={(name, interviewer) => onSave(name, interviewer)}
          onCancel={() => back()}
        />
      )}
    </article>
  );
}
