import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import PodShowcase from "@/components/pod-showcase"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-500/20 selection:text-blue-800">

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between mx-2 px-2">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src="/icon.png" alt="Athletech Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight">Athletech</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className="text-base">
                    Fields
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Fitness</DropdownMenuItem>
                  <DropdownMenuItem>Sports</DropdownMenuItem>
                  <DropdownMenuItem>Rehabilitation</DropdownMenuItem>
                  <DropdownMenuItem>Education</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className="text-base">
                    Get Started
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>For Beginners</DropdownMenuItem>
                  <DropdownMenuItem>Quick Setup</DropdownMenuItem>
                  <DropdownMenuItem>Training Guide</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="hidden md:flex text-base">
                  Shop
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Products</DropdownMenuItem>
                <DropdownMenuItem>Kits</DropdownMenuItem>
                <DropdownMenuItem>Accessories</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/account" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/fields" className="hover:text-blue-600">
                    Fields
                  </Link>
                  <Link href="/get-started" className="hover:text-blue-600">
                    Get Started
                  </Link>
                  <Link href="/training-hub" className="hover:text-blue-600">
                    Training Hub
                  </Link>
                  <Link href="/find-my-perfect-pod" className="hover:text-blue-600">
                    Find my perfect Athletech
                  </Link>
                  <Link href="/shop" className="hover:text-blue-600">
                    Shop
                  </Link>
                  <Link href="/account" className="hover:text-blue-600">
                    Account
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 py-20 md:py-32">
          {/* Abstract shapes */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>

            {/* Animated circuit lines */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <g stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="6 12" className="text-blue-300">
                  <path
                    d="M0,400 C100,300 200,200 400,200 C600,200 700,300 800,400"
                    className="animate-pulse"
                    style={{ animationDelay: "0s" }}
                  />
                  <path
                    d="M0,400 C100,500 200,600 400,600 C600,600 700,500 800,400"
                    className="animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <path
                    d="M400,0 C300,100 200,200 200,400 C200,600 300,700 400,800"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <path
                    d="M400,0 C500,100 600,200 600,400 C600,600 500,700 400,800"
                    className="animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="flex flex-col gap-8 text-center md:text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                    </span>
                    Next Generation Training Technology
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-violet-200">
                    TRAIN SMARTER
                    <br />
                    <span className="text-blue-400">REACT FASTER</span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-blue-100 md:text-2xl mx-auto md:mx-0 leading-relaxed">
                    The revolutionary reaction training system designed for athletes who demand excellence
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 rounded-full h-14 px-8 shadow-lg shadow-blue-700/20"
                  >
                    Shop Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-blue-900/40 hover:bg-blue-900/60 rounded-full h-14 px-8 backdrop-blur-sm"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-8 text-blue-200/80 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>Trusted by pro athletes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>30-day money back</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                {/* 3D Pod Showcase */}
                <PodShowcase />
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-24"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,141.14c62.5,0,125.91-16.88,186.64-32.31C443.45,93.81,486,78.43,528,69.78c47-9.66,94.85-17.61,140.37-11.32,67,9.26,128,33.78,200,32.58C929.41,89.64,988.7,77,1048.32,68.79c58.75-8.13,117.15-10.22,172-3.75,59.49,7,108.63,34.76,164,38.28,60.42,3.85,119-7.7,179.59-15.51,4.67-.6,9.37-1.93,14-2.94v85.59H0Z"
                className="fill-slate-50"
              ></path>
            </svg>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.04),transparent_60%)]"></div>

          <div className="container relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
                Cutting-Edge Design
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-blue-800 to-violet-800">
                Meet the Athletech Pod
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Advanced technology packed into a durable, versatile training device
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Durable Construction</h3>
                      <p className="text-slate-600">
                        Built to withstand intense training sessions with impact-resistant materials and water-resistant
                        design
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Wireless Connectivity</h3>
                      <p className="text-slate-600">
                        Seamlessly connects to the Athletech app via Bluetooth with a range of up to 40 meters
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 18h8"></path>
                        <path d="M3 22h18"></path>
                        <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
                        <path d="M9 14h2"></path>
                        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
                        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Long Battery Life</h3>
                      <p className="text-slate-600">
                        Up to 8 hours of continuous use on a single charge with quick USB-C recharging
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12h10"></path>
                        <path d="M9 4v16"></path>
                        <path d="M14 9l3 3-3 3"></path>
                        <path d="M17 19h5v-6h-5V5"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Responsive Touch Sensors</h3>
                      <p className="text-slate-600">
                        High-precision touch detection with multi-color LED feedback for various training modes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-sm">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-full blur-3xl"></div>

                  {/* Technical specs overlay */}
                  <div className="relative">
                    <Image
                      src="/images/pod.png"
                      alt="Athletech Pod"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain"
                    />

                    {/* Spec callouts */}
                    <div className="absolute top-[15%] left-0 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute w-16 h-px bg-blue-400/50"></div>
                        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="bg-blue-900/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg ml-4">
                          12 RGB LEDs
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[40%] right-0 transform translate-x-1/2">
                      <div className="relative">
                        <div className="absolute w-16 h-px bg-blue-400/50"></div>
                        <div className="absolute right-0 top-0 w-2 h-2 rounded-full bg-blue-400 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="bg-blue-900/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg mr-4">
                          Sensitive touch surface
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-[20%] left-0 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="absolute w-16 h-px bg-blue-400/50"></div>
                        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="bg-blue-900/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg ml-4">
                          Bluetooth 5.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 border-b border-slate-200">
          <div className="container">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-slate-500 tracking-wider uppercase">
                TRUSTED BY LEADING SPORTS ORGANIZATIONS
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[1, 2, 3, 4, 5].map((brand) => (
                <div key={brand} className="h-8 w-24 bg-slate-200/50 rounded"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.04),transparent_60%)]"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full border border-blue-200 opacity-30"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full border border-blue-200 opacity-30"></div>

          <div className="container relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
                Revolutionary Features
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-blue-800 to-violet-800">
                Train Smarter, Not Harder
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Athletech Pods combine cutting-edge technology with sports science to deliver a training experience like
                no other
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Performance Tracking",
                  description: "Track your progress in real-time with detailed analytics and performance metrics",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M12 18v-6"></path>
                      <path d="M8 18v-1"></path>
                      <path d="M16 18v-3"></path>
                    </svg>
                  ),
                },
                {
                  title: "Reaction Training",
                  description: "Improve your reaction time and decision-making with customizable light-based drills",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  ),
                },
                {
                  title: "Multi-User Support",
                  description: "Train individually or compete with friends, teammates, or clients in real-time",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px]"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-blue-50 rounded-bl-[64px] rounded-tr-2xl"></div>
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:from-blue-100 group-hover:to-blue-200">
                      {feature.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.04),transparent_60%)]"></div>

          <div className="container relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
                Simple Process
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-blue-800 to-violet-800">
                How Athletech Pods Work
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our innovative training system is designed to be intuitive and effective
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Connect",
                  description: "Pair your Athletech Pods with the mobile app via Bluetooth",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  number: "02",
                  title: "Configure",
                  description: "Choose from pre-set workouts or create your own custom training session",
                  color: "from-indigo-400 to-indigo-600",
                },
                {
                  number: "03",
                  title: "Train",
                  description: "Follow the light patterns and track your performance in real-time",
                  color: "from-violet-400 to-violet-600",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  {index < 2 && (
                    <div className="absolute top-16 left-full w-full h-px bg-gradient-to-r from-blue-200 to-transparent -translate-x-8 hidden md:block"></div>
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white text-2xl font-bold shadow-lg`}
                    >
                      {step.number}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.04),transparent_60%)]"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-blue-200/50 opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-blue-200/50 opacity-30"></div>
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full border border-blue-200/50 opacity-30"></div>

          <div className="container relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
                Premium Equipment
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-blue-800 to-violet-800">
                Choose Your Kit
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                From individual training to team competitions, we have the perfect solution for you
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Standard Kit",
                  description: "Perfect for individual training and personal fitness goals",
                  price: "$199",
                  originalPrice: "$249",
                  popular: false,
                  color: "from-blue-400 to-blue-600",
                  features: ["4 Athletech Pods", "Charging Case", "Basic App Access", "10 Training Programs"],
                },
                {
                  name: "Pro Kit",
                  description: "Advanced training for serious athletes and fitness enthusiasts",
                  price: "$299",
                  originalPrice: "$399",
                  popular: true,
                  color: "from-indigo-400 to-indigo-600",
                  features: [
                    "8 Athletech Pods",
                    "Charging Case",
                    "Premium App Access",
                    "50+ Training Programs",
                    "Performance Analytics",
                  ],
                },
                {
                  name: "Team Kit",
                  description: "Ideal for coaches, teams, and group training sessions",
                  price: "$499",
                  originalPrice: "$599",
                  popular: false,
                  color: "from-violet-400 to-violet-600",
                  features: [
                    "16 Athletech Pods",
                    "2 Charging Cases",
                    "Coach Dashboard",
                    "Unlimited Training Programs",
                    "Team Analytics",
                  ],
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl ${product.popular ? "ring-2 ring-blue-500" : ""}`}
                >
                  {product.popular && (
                    <div className="absolute top-5 right-5 z-10 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-blue-50 p-8 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-blue-200/50 opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-blue-200/50 opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-blue-200/50 opacity-10"></div>

                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="relative h-4/5 w-4/5 transition-transform group-hover:scale-110">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt={product.name}
                          width={300}
                          height={300}
                          className="h-full w-full object-contain drop-shadow-xl"
                        />
                      </div>

                      {/* Glowing effect */}
                      <div
                        className={`absolute -inset-4 rounded-full bg-gradient-to-r ${product.color} opacity-0 blur-xl group-hover:opacity-20 transition-opacity`}
                      ></div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-2 text-2xl font-bold">{product.name}</h3>
                    <p className="mb-6 text-slate-600 leading-relaxed">{product.description}</p>

                    <ul className="mb-6 space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-500"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6 flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                      <span className="text-sm text-slate-500 line-through">{product.originalPrice}</span>
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${product.color} text-white hover:opacity-90 h-12 rounded-xl font-medium`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_70%)]"></div>

          <div className="container relative z-10">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
                  Mobile Experience
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-blue-800 to-violet-800">
                  Train Anywhere with the Athletech App
                </h2>
                <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                  Our intuitive app connects seamlessly with your Athletech Pods, giving you access to:
                </p>
                <ul className="mb-10 space-y-6">
                  {[
                    "Hundreds of pre-designed workouts for all fitness levels",
                    "Custom workout creator to design your own training sessions",
                    "Detailed performance analytics and progress tracking",
                    "Community challenges and global leaderboards",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="#" className="inline-block transform transition-transform hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=50&width=170"
                      alt="Download on the App Store"
                      width={170}
                      height={50}
                      className="h-auto"
                    />
                  </Link>
                  <Link href="#" className="inline-block transform transition-transform hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=50&width=170"
                      alt="Get it on Google Play"
                      width={170}
                      height={50}
                      className="h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative mx-auto max-w-xs">
                  {/* Phone frame with glow effect */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-xl"></div>
                  <div className="relative">
                    {/* Phone frame */}
                    <div className="relative rounded-[2.5rem] border-8 border-slate-800 overflow-hidden shadow-2xl">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-slate-800 z-10"></div>
                      <Image
                        src="/placeholder.svg?height=600&width=300"
                        alt="Athletech App"
                        width={300}
                        height={600}
                        className="h-auto w-full"
                      />
                    </div>

                    {/* Floating UI elements */}
                    <div className="absolute -right-16 top-20 flex h-16 w-32 items-center justify-center rounded-xl bg-white p-2 shadow-lg">
                      <div className="space-y-2 w-full">
                        <div className="h-2 w-3/4 rounded-full bg-blue-200"></div>
                        <div className="h-2 w-1/2 rounded-full bg-blue-100"></div>
                        <div className="h-2 w-5/6 rounded-full bg-blue-200"></div>
                      </div>
                    </div>
                    <div className="absolute -left-12 bottom-32 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.04),transparent_60%)]"></div>

          <div className="container relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
                Success Stories
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-blue-800 to-violet-800">
                What Our Users Say
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Join thousands of satisfied athletes who have transformed their training with Athletech Pods
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  quote:
                    "Athletech Pods have completely transformed my training. The real-time feedback and performance tracking have helped me improve my reaction time significantly.",
                  name: "Michael T.",
                  title: "Professional Soccer Player",
                  color: "from-blue-100 to-blue-200",
                },
                {
                  quote:
                    "As a fitness coach, I've tried many training tools, but Athletech Pods stand out. My clients love the interactive nature of the workouts, and I love the detailed analytics.",
                  name: "Sarah K.",
                  title: "Fitness Coach",
                  color: "from-indigo-100 to-indigo-200",
                },
                {
                  quote:
                    "The Athletech Team Kit has been a game-changer for our basketball team. We've seen measurable improvements in reaction time and decision-making on the court.",
                  name: "David R.",
                  title: "Basketball Coach",
                  color: "from-violet-100 to-violet-200",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute top-0 left-0 h-24 w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl opacity-50"></div>
                  <div className="relative">
                    <div className="mb-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-blue-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-8 italic text-slate-600 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}
                      >
                        <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700"></div>

          {/* Abstract shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>

            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/30 animate-float"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="container relative z-10 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Ready to Transform Your Training?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100 leading-relaxed">
                Join thousands of athletes who have already elevated their performance with Athletech Pods
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-white/90 rounded-full h-14 px-8 shadow-lg shadow-blue-900/20 font-medium"
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-blue-900/40 hover:bg-blue-900/60 rounded-full h-14 px-8 backdrop-blur-sm font-medium"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-16 text-slate-300">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Link href="/" className="mb-6 flex items-center space-x-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-violet-600">
                  <div className="absolute inset-1 rounded-full bg-slate-900"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-violet-600"></div>
                </div>
                <span className="text-lg font-bold text-white">Athletech</span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Transforming training through innovative technology and sports science
              </p>
              <div className="mt-6 flex gap-4">
                {["twitter", "facebook", "instagram", "youtube"].map((social) => (
                  <Link key={social} href="#" className="text-slate-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Standard Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Pro Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Team Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Training Hub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Athletech Pods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
