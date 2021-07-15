import { useState, useEffect } from "react";
import axios from "axios";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function bookInterview(id, interview) {
    const updating = state.appointments[id].interview;
    const axiosPromise = axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview },
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };
        const currentDay = state.days.findIndex(
          (element) => element.name === state.day
        );
        const day = {
          ...state.days[currentDay],
          spots: state.days[currentDay].spots - (updating ? 0 : 1),
        };
        const days = [...state.days];

        days.splice(currentDay, 1, day);

        setState({
          ...state,
          appointments,
          days,
        });
      });
    return axiosPromise;
  }

  function cancelInterview(id) {
    const axiosPromise = axios.delete(`/api/appointments/${id}`).then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: null,
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment,
      };
      const currentDay = state.days.findIndex(
        (element) => element.name === state.day
      );
      const day = {
        ...state.days[currentDay],
        spots: state.days[currentDay].spots + 1,
      };
      const days = [...state.days];

      days.splice(currentDay, 1, day);

      setState({
        ...state,
        appointments,
        days,
      });
    });
    return axiosPromise;
  }
  return { state, setDay, bookInterview, cancelInterview };
}
