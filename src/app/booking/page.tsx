"use client"

import DataReserve from "@/components/DateReserve";
import TextField from '@mui/material/TextField';
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs"; 
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {

    // const session = await getServerSession(authOptions)
    // if(!session||!session.user.token) return null

    // const profile = await getUserProfile(session.user.token)
    // var createAt = new Date(profile.data.createAt)



    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        const item:BookingItem = {
            name: name,
            surname: lastname,
            id: id,
            hospital: pickupLocation,
            bookDate: dayjs(pickupDate).format("YYYY/MM/DD")
        }
        dispatch(addBooking(item))
    }

    
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [id, setID] = useState<string>('');
    const [pickupDate,setPickupDate] = useState<Dayjs | null>(null)
    const [pickupLocation,setPickupLocation] = useState<string>('CLH')


    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium"> New Booking </div>
            <div className="flex flex-col items-center space-y-4">

                <TextField
                name="name"
                label="Name"
                variant="standard"
                value={name || ''}
                onChange={(e) => setName(e.target.value)}/>

                <TextField
                id="Lastname"
                label="Lastname"
                variant="standard"
                value={lastname || ''}
                onChange={(e) => setLastName(e.target.value)}/>
                
                <TextField
                id="Citizen ID"
                label="Citizen ID"
                variant="standard"
                value={id || ''}
                onChange={(e) => setID(e.target.value)}/>
                
                <DataReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}
                onLocationChange={(value:string)=>{setPickupLocation(value)}}/>     
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white" onClick={makeBooking}>
                Book Vaccine
            </button>

            {/* <div className="text-2xl"></div>
            <table className="table-auto border-seperate border-spacing-2"><tbody>
                <tr><td>Name</td><td>{profile.data.name}</td></tr>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createAt.toString()}</td></tr>
            </tbody>
            </table> */}
        </main>
    );
}