"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => (
  <div className="w-full max-w-screen-xl mx-auto">
    <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
      Send Us a Message
    </h2>
    <Card className="bg-gray-100 shadow-none border-none">
      <CardContent className="p-6 md:p-10">
        <form>
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Full name"
                required
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="companyName">Company Name (optional)</Label>
              <Input
                id="companyName"
                placeholder="Company name"
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="telephone">Telephone</Label>
              <Input
                id="telephone"
                placeholder="Phone number"
                required
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Address"
                required
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Subject"
                required
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="inquiry">Inquiry</Label>
              <Textarea
                id="inquiry"
                placeholder="Write your message or inquiry..."
                required
                className="mt-1.5 bg-white shadow-none"
                rows={3}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-6 w-full bg-primaryDark hover:bg-primary"
            size="lg"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
);

export default ContactForm;
