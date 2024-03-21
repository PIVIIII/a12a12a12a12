import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"


export default function Card() {
    const hospitals =  getHospitals()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Hospital</h1>
            <Suspense fallback={ <p>loading UI</p> }>
                <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>

        </main>
    )

}