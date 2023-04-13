import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentsCollection = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentsCollection", date],
    queryFn: async () => {
      const res = await fetch(`https://doctors-eye-server.vercel.app/appointmentsCollection?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-16">
      <p className="text-center text-2xl font-bold">Available Appointments on {format(selectedDate, "PP")}</p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentsCollection.map((option) => (
          <AppointmentOption key={option._id} appointmentCollection={option} setTreatment={setTreatment}></AppointmentOption>
        ))}
      </div>
      {treatment && <BookingModal selectedDate={selectedDate} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
    </section>
  );
};

export default AvailableAppointments;
