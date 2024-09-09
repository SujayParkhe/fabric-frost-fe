import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { CgPathExclude } from "react-icons/cg";

import type { LoginProps } from "@/types/auth";

const Login: React.FC<LoginProps> = ({ email, password }) => {
  const [signinDetails, setSigninDetails] = useState<LoginProps>({
    email,
    password,
  });

  const handleUserLoginDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninDetails({
      ...signinDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitUserLoginDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signinDetails);
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="bg-card p-4 sm:p-8 sm:border sm:border-border sm:rounded-lg sm:shadow-sm">
          <div className="flex flex-col space-y-2 text-center mb-6">
            <CgPathExclude className="mx-auto h-12 w-12" />
            <h1 className="text-2xl font-semibold tracking-tight">
              FabricFrost
            </h1>
            <p className="text-sm text-muted-foreground">
              Hello again! Let’s get you back to shopping
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={submitUserLoginDetails}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    {...signinDetails}
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    value={signinDetails.email ?? ""}
                    onChange={handleUserLoginDetails}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password*</Label>
                  <Input
                    {...signinDetails}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    type="password"
                    value={signinDetails.password ?? ""}
                    onChange={handleUserLoginDetails}
                  />
                </div>
                <Button type="submit">Sign In</Button>
              </div>
            </form>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-muted-foreground"></div>
              <span className="mx-4 text-xs uppercase text-muted-foreground bg-card px-2">
                Or continue with
              </span>
              <div className="flex-grow border-t border-muted-foreground"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline" type="button">
                <FcGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" type="button">
                <FaApple className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              <Link
                to="/forgot-password"
                className="underline underline-offset-4 hover:text-primary"
              >
                Forgot your password?
              </Link>
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
