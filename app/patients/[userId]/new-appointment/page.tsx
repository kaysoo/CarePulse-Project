import AppointmentForm from "@/components/Forms/appointmentForm";
import PatientForm from "@/components/Forms/patientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP VERIFICATION  */}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="carepulse logo"
            width={1000}
            height={1000}
            className="mb-12 w-fit h-10 "
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          <p className="copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>
      <Image
        src={"/assets/images/appointment-img.png"}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
