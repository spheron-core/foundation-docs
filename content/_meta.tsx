import { MetaRecord } from "nextra";
import { JavaScriptIcon } from "nextra/icons";
import { HomeIcon, BookOpenIcon, PackageIcon, LaptopIcon, ServerIcon, BookIcon, AppWindowMacIcon } from "lucide-react";

const META: MetaRecord = {
  index: (
    <span className="flex items-center gap-2">
      <HomeIcon strokeWidth={1.5} height="20" className="flex items-center" />
      Getting Started
    </span>
  ),
  "core-concepts": (
    <span className="flex items-center gap-2">
      <BookOpenIcon strokeWidth={1.5} height="20" className="flex items-center" />
      Core Concepts
    </span>
  ),
  "-----": {
    type: "separator",
    title: "DEVELOPER DOCS",
  },
  "rent-gpu": (
    <span className="flex items-center gap-2">
      <PackageIcon strokeWidth={1.5} height="20" className="flex items-center" />
      Rent a GPU
    </span>
  ),
  guides: (
    <span className="flex items-center gap-2">
      <AppWindowMacIcon strokeWidth={1.5} height="20" className="flex items-center" />
      Guides
    </span>
  ),
  "protocol-sdk": (
    <span className="flex items-center gap-2">
      <JavaScriptIcon height="20" className="flex items-center" />
      Protocol SDK
    </span>
  ),
  "awesome-spheron": {
    title: "Awesome Spheron",
    href: "https://github.com/spheron-core/awesome-spheron",
  },
  // "sos-ai-bounty": {
  //   title: "Spheron AI Bounty",
  //   href: "https://github.com/spheron-core/sos-ai-bounty",
  // },
  "-------": {
    type: "separator",
    title: "SUPPLY DOCS",
  },
  providers: (
    <span className="flex items-center gap-2">
      <ServerIcon strokeWidth={1.5} height="20" className="flex items-center" />
      Provider Onboarding
    </span>
  ),
  fizz: (
    <span className="flex items-center gap-2">
      <LaptopIcon strokeWidth={1.5} height="20" className="flex items-center" />
      Fizz Node
    </span>
  ),
  "chain-details": (
    <span className="flex items-center gap-2">
      <BookIcon strokeWidth={1.5} height="20" className="flex items-center" />
      Chain Details
    </span>
  ),
  "general-info": {
    title: "General Information",
    type: "page",
    theme: {
      toc: false,
    },
  },
  // changelog: {
  //   title: "Changelog",
  //   href: "https://spheron.network/changelog",
  //   type: "page",
  // },
  foundation: {
    title: "Foundation",
    href: "https://foundation.spheron.network/",
    type: "page",
  },
  signup: {
    title: "Sign Up",
    type: "page",
    href: "https://app.spheron.network/#/signup",
  },
};

export default META;
