"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import { docAppointmentStatus } from '@/services/data-fetch';

export interface DoneProps {
    appointment_id: string
    did: string
    pid: string
}
export default function DoneButton({ appointment_id, did, pid }: DoneProps) {
    return (
        <Button onClick={() => docAppointmentStatus(appointment_id, did, pid)}>Mark as Done</Button>
    )
}

