import { useState, useEffect } from "react";
import { auth } from "@/firebaseAuth/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        setIsEmailVerified(user.emailVerified);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, isEmailVerified };
}
