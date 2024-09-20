import RegisterForm from "@/components/Forms/registerForm";
import { getUser } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegistrationPage = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP VERIFICATION  */}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="carepulse logo"
            width={1000}
            height={1000}
            className="mb-12 w-fit h-10 "
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 CarePulse</p>
        </div>
      </section>
      <Image
        src={"/assets/images/register-img.png"}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default RegistrationPage;
