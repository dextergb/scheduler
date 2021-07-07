import React from "react";

import "components/InterviewerListItem.scss";

import classnames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerListItemClass = classnames("interviewers__item", {
    "interviewers__item-image": props.avatar,
    "interviewers__item--selected": props.selected,
  });
  return (
    <li
      className={interviewerListItemClass}
      onClick={() => props.setInterviewer(props.name)}
      key={props.id}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
