import InputGroup from "@/components/FormElements/InputGroup";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
          Sign Up
        </h2>
        <form action="#">
          <div className="grid grid-cols-1 gap-4.5 xl:grid-cols-2 mb-4">
            <InputGroup
              label="First name"
              type="text"
              placeholder="Enter your first name"
              customClasses="w-full"
              required
            />

            <InputGroup
              label="Last name"
              type="text"
              placeholder="Enter your last name"
              customClasses="w-full"
              required
            />
          </div>

          <InputGroup
            label="Email"
            type="email"
            placeholder="Enter your email address"
            customClasses="mb-4.5"
            required
          />

          <InputGroup
            label="Phone Number"
            type="text"
            placeholder="Enter your Phone Number"
            customClasses="mb-4.5"
          />

          <SelectGroupOne />

          <div className="mb-6">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Bio
            </label>
            <textarea
              rows={3}
              placeholder="Tell your team much more about yourself ..."
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
            Sign up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
