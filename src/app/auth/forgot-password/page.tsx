import Link from "next/link";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import Image from "next/image";

export default function ForgotPasswordPage() {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card p-4">
      <div className="flex items-center">
        <div className="w-full xl:w-1/2">
          <div className="w-full sm:p-12.5 xl:p-15">
            <ForgotPassword></ForgotPassword>
          </div>
        </div>
        <div className="hidden w-full p-2 xl:block xl:w-1/2">
          <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link className="mb-10 inline-block flex items-center" href="/">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/meetup.png"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/meetup.png"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <span
                  className="text-4xl font-semibold ml-3 mt-15"
                  style={{ color: "#ff4f4f" }}
                >
                  Meet.io
                </span>
              </Link>
            </div>

            <p className="mb-3 text-xl font-medium text-dark dark:text-white">
              Sign up and setup your account in minutes!
            </p>

            <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
              Forgot your Password?
            </h1>

            <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
              Enter your email address below, if we found a match with same
              email provided, we will send a recovery link to gain access back
              to your account
            </p>

            <div className="mt-31">
              <Image
                src={"/images/grids/grid-02.svg"}
                alt="Logo"
                width={405}
                height={325}
                className="mx-auto dark:opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
