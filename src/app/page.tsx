"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import { auth } from "../components/ChatRooms/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import Signin from "@/components/Auth/Signin";
import Loader from "@/components/common/Loader";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      {user ? (
        <DefaultLayout>
          <ECommerce />
        </DefaultLayout>
      ) : (
        <Signin />
      )}
    </>
  );
}
