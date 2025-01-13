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
import { Eye, LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, { message: "Password length has to be up to 6 characters" }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Card className="max-w-md w-full p-6">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-base">
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
            <Button type="submit" className="w-full bg-primary h-10 text-base">
              Login
            </Button>
            <p className="text-white text-base w-full text-center">
              Do not have an account?{" "}
              <span
                className="text-primary  cursor-pointer"
                onClick={() => router.push("/register")}
              >
                Sign Up
              </span>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
