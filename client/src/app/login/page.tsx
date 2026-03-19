"use client";

import { useLogin } from "@/features/auth/hooks/use-login";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const loginMutation = useLogin();

  const handleLogin = () => {
    loginMutation.mutate({
      email: "gbuzueejiketh@gmail.com",
      password: "246822",
    });
  };

  return (
    <div className=" p-4 font-heading text-2xl">
      Loveth Luxury Frames
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <Button variant="outline" onClick={handleLogin}>
        Login
      </Button>
      {loginMutation.isPending && <p>Logging in...</p>}
    </div>
  );
}
