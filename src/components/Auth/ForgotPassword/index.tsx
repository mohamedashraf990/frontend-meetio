"use client";
import InputGroup from "@/components/FormElements/InputGroup";
import Link from "next/link";
import { auth } from "@/firebaseAuth/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (err) {
      setError("Failed to send password reset email. Please check your email.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* <!-- Forgot Password --> */}
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              Reset Password
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <InputGroup
                label="Email"
                type="email"
                placeholder="Enter your email address"
                customClasses="mb-4.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {message && <div className="mb-4 text-green-500">{message}</div>}
              {error && <div className="mb-4 text-red-500">{error}</div>}
              <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                Reset Password
              </button>

              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Need to sign in?
                  <Link
                    href="/auth/signin"
                    className="text-primary hover:underline ml-2"
                  >
                    Back to Login page
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

//    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
//      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//        <h2 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-6">
//           Reset Password
//        </h2>
//        <GoogleSigninButton text="Sign in with Google" />

//        <div className="my-6 flex items-center justify-center">
//          <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
//          <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
//            Or sign in with email
//          </div>
//          <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
//        </div>

{
  /* <div className="mt-6 text-center">
  <p className="text-gray-600 dark:text-gray-400">
    Don’t have an account?{" "}
    <Link href="/auth/signup" className="text-primary hover:underline">
      Back to Login page
    </Link>
  </p>
</div>; */
}
//      </div>
//    </div>;
