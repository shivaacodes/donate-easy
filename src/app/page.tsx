"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4c1d95,#000000,#4c1d95)] opacity-50 animate-gradient-x"></div>

      {/* Navigation/Header */}
      <nav className="relative z-10 p-6 border-b border-purple-800/20">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-100 text-transparent bg-clip-text">
            DonateEasy
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-purple-100 hover:bg-purple-900/50">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] bg-black/90 backdrop-blur-sm">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-900/50 to-purple-900 p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-purple-100">
                              Why DonateEasy?
                            </div>
                            <p className="text-sm leading-tight text-purple-200">
                              Secure and transparent charitable giving powered by blockchain technology.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-purple-100 hover:bg-purple-900/50`}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-purple-100 hover:bg-purple-900/50`}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ConnectButton
              client={client}
              appMetadata={{
                name: "DonateEasy",
                url: "https://example.com",
              }}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-32">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-100 text-transparent bg-clip-text">
            DonateEasy
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            The future of charitable giving on the blockchain. Secure, transparent, and efficient.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Start Donating
          </button>
        </div>
      </div>
    </main>
  );
}
