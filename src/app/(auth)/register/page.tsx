import RegisterForm from "@/components/common/auth/register/form";
import GoogleSignup from "@/components/common/auth/register/google";
import Logo from "@/components/common/logo/logo";
import { Separator } from "@/components/ui/separator";

export default function Register() {
  return (
    <div className="grid grid-cols-[55%_45%] w-full h-screen">
      <div className="w-full h-full bg-foreground p-2">
        <div className="bg-custom-gradient w-full h-full rounded-xl">
          <div className="bg-custom-gradient-image w-full h-full bg-cover bg-center flex flex-col justify-around py-16 px-8">
            <div className="text-5xl flex gap-2">
              <Logo type="white" />
              <h1>Plugin</h1>
            </div>
            <div className="flex flex-col gap-3">
              <div></div>
              <h2 className="text-4xl">Find Services That Fit Your Life</h2>
              <p>
                From daily tasks to expert solutions, Plugin connects you with
                trusted vendors for everything you need.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-base gap-4 py-8 px-4 w-full h-full">
        <div className="flex w-full flex-col items-center gap-2">
          <p>Register With: </p>
          <div className="w-full max-w-sm">
            <GoogleSignup />
          </div>
        </div>
        <div className="w-full flex items-center gap-2 justify-center">
          <Separator className="w-24" />
          <p>Or</p>
          <Separator className="w-24" />
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
