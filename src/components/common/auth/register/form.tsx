"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, LockKeyhole, Mail, Phone, UserPen } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    firstname: z.string().min(2, {
      message: "Firstname must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
      message: "Firstname must be at least 2 characters.",
    }),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, {
      message: "Must be a valid phone number",
    }),
    password: z
      .string()
      .min(6, { message: "Password length has to be up to 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password length has to be up to 6 characters" }),
    accessTerms: z.boolean(),
  })
  .refine((data) => data.accessTerms, {
    message: "Please accept the terms",
    path: ["accessTerms"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 h-full max-w-lg"
      >
        <div className="flex gap-2 w-full">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <div className="flex gap-2 rounded-md p-1 px-1.5 items-center bg-accent">
                    <UserPen />
                    <Input
                      className="border-0 bg-accent grow p-0 w-full outline-none"
                      placeholder="First Name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <div className="flex gap-2 rounded-md p-1 px-1.5 w-full items-center bg-accent">
                    <UserPen />
                    <Input
                      className="border-0 bg-accent grow p-0 outline-none"
                      placeholder="Last Name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="flex gap-2 rounded-md p-1 px-1.5 items-center bg-accent">
                  <Mail />
                  <Input
                    className="border-0 bg-accent grow p-0 outline-none"
                    placeholder="Email"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <div className="flex gap-2 rounded-md p-1 px-1.5 items-center bg-accent">
                  <Phone />
                  <Input
                    className="border-0 bg-accent grow p-0 outline-none"
                    placeholder="Phone Number"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex gap-2 rounded-md p-1 px-1.5 items-center bg-accent">
                  <LockKeyhole />
                  <Input
                    className="border-0 bg-accent grow p-0 outline-none"
                    placeholder="Password"
                    {...field}
                  />
                  <Eye />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="flex gap-2 rounded-md p-1 px-1.5 items-center bg-accent">
                  <LockKeyhole />
                  <Input
                    className="border-0 bg-accent grow p-0 outline-none"
                    placeholder="Confirm Password"
                    {...field}
                  />
                  <Eye />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary h-12 text-base">
          Sign Up
        </Button>
        <div className="text-center text-secondary space-y-2">
          <p>
            By creating an account, you agree to the{" "}
            <span className="underline text-white cursor-pointer">
              Terms of Service.
            </span> We'll occasionally send you account-related emails.
          </p>
          <p className="text-white">
            Already have an account? <span className="text-primary  cursor-pointer" onClick={() => router.push("/login")}>Login</span>
          </p>
        </div>
      </form>
    </Form>
  );
}
