import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/hooks/use-toast";
import { adminLogin, messageClear } from "@/store/reducers/authReducer";
import { CgPathExclude } from "react-icons/cg";
import { LuLoader2 } from "react-icons/lu";

import type { LoginProps } from "@/types/auth";
import type { AppDispatch, RootState } from "@/store/store";

const AdminLogin: React.FC<LoginProps> = ({ email, password }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loader, successMessage, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const { toast } = useToast();
  const navigate = useNavigate();

  const [signinDetails, setSigninDetails] = useState<LoginProps>({
    email,
    password,
  });

  const handleAdminLoginDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninDetails({
      ...signinDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitAdminLoginDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(adminLogin(signinDetails));
  };

  useEffect(() => {
    if (successMessage) {
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel.",
        duration: 1000,
      });
      dispatch(messageClear());
      navigate("/");
    }
    if (errorMessage) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="bg-card p-4 sm:p-8 sm:border sm:border-border sm:rounded-lg sm:shadow-sm">
          <div className="flex flex-col space-y-2 text-center mb-6">
            <CgPathExclude className="mx-auto h-12 w-12" />
            <h1 className="text-2xl font-semibold tracking-tight">
              FabricFrost Admin
            </h1>
            <p className="text-sm text-muted-foreground">
              Log in to your admin account
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={submitAdminLoginDetails}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    {...signinDetails}
                    id="email"
                    name="email"
                    placeholder="admin@fabricfrost.com"
                    type="email"
                    value={signinDetails.email ?? ""}
                    onChange={handleAdminLoginDetails}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password*</Label>
                  <Input
                    {...signinDetails}
                    id="password"
                    name="password"
                    placeholder="Enter your admin password"
                    type="password"
                    value={signinDetails.password ?? ""}
                    onChange={handleAdminLoginDetails}
                  />
                </div>
                <Button type="submit" disabled={loader}>
                  {loader ? (
                    <>
                      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Log In to Admin Panel"
                  )}
                </Button>
              </div>
            </form>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              <Link
                to="/forgot-password"
                className="underline underline-offset-4 hover:text-primary"
              >
                Forgot your admin password?
              </Link>
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Not an admin?{" "}
              <Link
                to="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Return to customer login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
