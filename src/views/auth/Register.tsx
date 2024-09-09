import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { CgPathExclude } from "react-icons/cg";

import type { SignUpProps } from "@/types/auth";

const Register: React.FC<SignUpProps> = ({ name, email, password }) => {
  const [signupDetails, setSignupDetails] = useState<SignUpProps>({
    name,
    email,
    password,
  });

  const handleUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitUserDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signupDetails);
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
              Join us and discover your style today!
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={submitUserDetails}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name*</Label>
                  <Input
                    {...signupDetails}
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={signupDetails.name ?? ""}
                    onChange={handleUserDetails}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    {...signupDetails}
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    value={signupDetails.email ?? ""}
                    onChange={handleUserDetails}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password*</Label>
                  <Input
                    {...signupDetails}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    type="password"
                    value={signupDetails.password ?? ""}
                    onChange={handleUserDetails}
                  />
                </div>
                <Button type="submit">Sign Up</Button>
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
