import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const ContactForm = () => (
  <div className="w-full max-w-screen-xl mx-auto">
    <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
      Send Us a Message
    </h2>
    <Card className="bg-accent shadow-none">
      <CardContent className="p-6 md:p-10">
        <form>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                placeholder="First name"
                id="firstName"
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                placeholder="Last name"
                id="lastName"
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                className="mt-1.5 bg-white h-11 shadow-none"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Message"
                className="mt-1.5 bg-white shadow-none"
                rows={6}
              />
            </div>
          </div>
          <Button className="mt-6 w-full bg-primaryDark hover:bg-primary" size="lg">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
);

export default ContactForm;
