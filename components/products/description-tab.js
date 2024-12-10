"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DescriptionTab = () => {
  return (
    <>
      <Tabs defaultValue="account" className="md:w-[500px] mt-10  ">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="Specification">Specification</TabsTrigger>
          <TabsTrigger value="Overview">Overview</TabsTrigger>
        </TabsList>
        <TabsContent value="Specification">
          <Card className="shadow-none border-r-0 border-t-0 border-l-2 border-b-2 border-blue">
            <CardContent className="space-y-2 ">
              <ul className="list-disc list-inside text-gray-900 space-y-2">
                <li>Backlight Technology: LED</li>
                <li>Panel Technology: VA</li>
                <li>Display type: LED-backlit LCD monitor</li>
                <li>
                  Display Size: 32-inches FHD (1920 x 1080) 144 Hz Display Size:
                  32-inches FHD (1920 x 1080) 144 Hz Display Size: 32-inches FHD
                  (1920 x 1080) 144 Hz{" "}
                </li>
                <li>Aspect Ratio: 16:9 Widescreen</li>
                <li>Brightness: 250 cd/m²</li>
                <li>Interface: DisplayPort, HDMI</li>
                <li>Dimensions: 20.8 x 71.1 x 52.6 Centimeters</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Overview">
          <Card className="shadow-none border-r-0 border-t-0 border-l-2 border-b-2 border-blue">
            <CardContent className="space-y-2">New Arrivals</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DescriptionTab;
