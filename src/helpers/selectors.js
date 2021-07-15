/**----------getAppointmentsForDay function----------**/

export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);
  if (state.days.length === 0 || !selectedDay) {
    return [];
  }
  const appointments = selectedDay.appointments.map(
    (appointmentId) => state.appointments[appointmentId]
  );

  return appointments;
}

/**----------getInterview function----------**/

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewObject = { ...interview };
  interviewObject.interviewer = {
    ...state.interviewers[interview.interviewer],
  };
  return interviewObject;
}

/**----------getInterviewersForDay function----------**/

export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);
  if (state.days.length === 0 || !selectedDay) {
    return [];
  }
  const interviewers = selectedDay.interviewers.map(
    (interviewerID) => state.interviewers[interviewerID]
  );

  return interviewers;
}
