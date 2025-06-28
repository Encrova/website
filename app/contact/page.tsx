"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Form, FormItem, FormControl, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Copy } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Navbar from "@/components/navbar";

export default function ContactPage() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessType: "",
      locale: "",
      message: "",
    },
  });

  function onSubmit(values: any) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#090414] px-4 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 bg-transparent">
          {/* Left side: Title and email */}
          <div className="flex flex-col text-white mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              We would love to talk with you?
            </h1>
            <div className="mt-8">
              <div className="text-base mb-2 font-medium">Enquiries:</div>
              <div className="flex items-center gap-2 text-lg text-muted-foreground">
                <Copy className="w-6 h-6" />
                <span>support@encrova.com</span>
              </div>
            </div>
          </div>
          {/* Right side: Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-[#120b27] border border-gray-800 rounded-2xl shadow-lg p-8 flex flex-col gap-6 text-white"
            >
              <div className="-mb-3">
                <span className="text-xs font-semibold tracking-widest text-white">
                  BOOK A MEETING
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="First Name*"
                          required
                          className="bg-[#120b27] border border-gray-800 rounded-lg !px-5 !py-4 !min-h-[56px] !text-base text-white placeholder:text-base focus:outline-none focus:border-primary w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Last Name*"
                          required
                          className="bg-[#120b27] border border-gray-800 rounded-lg !px-5 !py-4 !min-h-[56px] !text-base text-white placeholder:text-base focus:outline-none focus:border-primary w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Corporate email*"
                        type="email"
                        required
                        className="bg-[#120b27] border border-gray-800 rounded-lg !px-5 !py-4 !min-h-[56px] !text-base text-white placeholder:text-base focus:outline-none focus:border-primary w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="us"
                        value={field.value}
                        onChange={field.onChange}
                        inputClassName="custom-phone-input-lg"
                        countrySelectorStyleProps={{
                          buttonStyle: {
                            background: "#120b27",
                            border: "none",
                          },
                        }}
                        style={{
                          border: "1px solid #39324d",
                          borderRadius: "0.5rem",
                          background: "#120b27",
                          width: "100%",
                          alignItems: "center",
                          flex: 1,
                          padding: "0 20px",
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          required
                        >
                          <SelectTrigger className="bg-[#120b27] border border-gray-800 rounded-lg !px-5 !py-4 !min-h-[56px] !text-base text-white focus:outline-none focus:border-primary min-w-0 w-full">
                            <SelectValue
                              placeholder="Business type*"
                              className="text-white"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-[#090414] border border-gray-800">
                            <SelectItem
                              value="Startup"
                              className="text-white focus:bg-[#120b27] focus:text-white"
                            >
                              Startup
                            </SelectItem>
                            <SelectItem
                              value="Enterprise"
                              className="text-white focus:bg-[#120b27] focus:text-white"
                            >
                              Enterprise
                            </SelectItem>
                            <SelectItem
                              value="Government"
                              className="text-white focus:bg-[#120b27] focus:text-white"
                            >
                              Government
                            </SelectItem>
                            <SelectItem
                              value="Investor"
                              className="text-white focus:bg-[#120b27] focus:text-white"
                            >
                              Investor
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="locale"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Locale"
                          className="bg-[#120b27] border border-gray-800 rounded-lg !px-5 !py-4 !min-h-[56px] !text-base text-white placeholder:text-base focus:outline-none focus:border-primary min-w-0 w-full"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Type your message..."
                        className="bg-[#120b27] border border-gray-800 rounded-lg !px-5 !py-4 !min-h-[120px] !text-base text-white placeholder:text-base focus:outline-none focus:border-primary w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <Button
                  type="submit"
                  className="bg-[#7c3aed] hover:bg-[#a78bfa] text-white font-semibold py-3 rounded-lg w-full sm:w-auto px-8"
                >
                  Submit
                </Button>
                <div className="text-xs text-gray-400 text-center sm:text-right w-full sm:w-auto">
                  By submitting this form, I confirm that I have read and
                  understood GoPidge's Privacy Policy.
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
