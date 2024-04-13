import React from 'react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col">
          <header className="border-b">
            <div className="container px-4 md:px-6 my-4">
              <nav className="flex items-center h-14">
                <Link className="flex items-center justify-center" href="#">
                  <HotelIcon className="h-6 w-6" />
                  <span className="sr-only">Hospital</span>
                </Link>
                <div className="ml-auto flex items-center gap-4 sm:gap-6">
                  <Link className=" text-xl p-2 font-medium hover:underline underline-offset-4" href="#">
                    Appointments
                  </Link>
                  <Link className=" text-xl p-2 font-medium hover:underline underline-offset-4" href="#">
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <section className="w-full py-12  lg:py-16 xl:py-20">
              <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome, John Doe</h1>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Your health is our priority. Access your medical records, upcoming appointments, and billing
                    information.
                  </p>
                </div>
              </div>
            </section>
            <section className="w-full py-6  bg-gray-100 dark:bg-gray-800 ">
              <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                  {/* <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full sm:aspect-square lg:order-last"
                    height="500"
                    src="/placeholder.svg"
                    width="500"
                  /> */}
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Upcoming Appointments</h2>
                    </div>
                    <div className="grid gap-2 sm:gap-4">
                      <div className="flex items-center gap-4">
                        <CalendarIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">Dermatology</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">15th March 2023, 10:00 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CalendarIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">Cardiology</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">20th March 2023, 11:30 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CalendarIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">Orthopedics</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">25th March 2023, 09:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Medical Records</h2>
                    </div>
                    <div className="grid gap-2 sm:gap-4">
                      <div className="flex items-center gap-4">
                        <FileIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">Blood Test - 15th March 2023</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            You have successfully booked your appointment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FileIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">X-Ray Report - 20th March 2023</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            You have successfully booked your appointment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FileIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">ECG Report - 25th March 2023</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            You have successfully booked your appointment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> 
            {/* <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Billing Information</h2>
                    </div>
                    <div className="grid gap-2 sm:gap-4">
                      <div className="flex items-center gap-4">
                        <DollarSignIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">Consultation Fee</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Amount: $50.00</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <DollarSignIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">Medication</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Amount: $25.00</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <DollarSignIcon className="w-8 h-8 rounded-lg bg-gray-200 p-2 dark:bg-gray-800" />
                        <div className="grid gap-1.5">
                          <h3 className="font-semibold">Lab Test</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Amount: $30.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </main>
          {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </footer> */}
        </div>
      )
  }


  function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    )
  }
  
  
  function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
  
  
  function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    )
  }
  
  
  function HotelIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
        <path d="M8 7h.01" />
        <path d="M16 7h.01" />
        <path d="M12 7h.01" />
        <path d="M12 11h.01" />
        <path d="M16 11h.01" />
        <path d="M8 11h.01" />
        <path d="M10 22v-6.5m4 0V22" />
      </svg>
    )
  }
  