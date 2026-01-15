"use client";

import React from "react";
import { FlexBasic } from "../src/FlexBasic";
import { FlexDirection } from "../src/FlexDirection";
import { FlexWrap } from "../src/FlexWrap";
import { FlexGrow } from "../src/FlexGrow";
import { Flex } from "../src/Flex";
import { Order } from "../src/Order";

export default function JustifyContentExamples() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">Flexbox & Grid - justify-content</h1>
      <FlexBasic />
      <FlexDirection />
      <FlexWrap />
      <Flex />
      <FlexGrow />
      <Order />
    </div>
  );
}
