import RegisterForm from "@/components/common/auth/register/form";
import GoogleSignup from "@/components/common/auth/register/google";
import { Separator } from "@/components/ui/separator";

export default function Register() {
  return (
    <div className="grid grid-cols-[55%_45%] w-full h-screen">
      <div className="w-full h-full bg-primary p-2">
        <div className="bg-custom-gradient w-full h-full rounded-xl">
          <div className="bg-custom-gradient-image w-full h-full bg-cover bg-center flex flex-col items-center"></div>
        </div>
      </div>
      <div className="flex flex-col text-sm gap-6 py-12 px-4 w-full">
        <div className="flex w-full flex-col items-center gap-2">
          <p>Register With: </p>
          <div className="w-full max-w-sm">
            <GoogleSignup />
          </div>
        </div>
        <div className="max-w-sm">
          <div className="flex max-w-sm items-center">
            <Separator />
            Or
            <Separator />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
}
