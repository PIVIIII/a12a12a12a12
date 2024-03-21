import { Link } from "@mui/material"
import ProductCard from "./Card"

export default async function HospitalCatalog({ hospitalsJson } : { hospitalsJson:Promise<HospitalJson> }) {

    const hospitalsJsonReady = await hospitalsJson

    return (
        <div className='m-[20px] flex flex-row flex-wrap justify-around'>
            {
                hospitalsJsonReady.data.map((hospitalItem : HospitalItem) => (
                    <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5" key={hospitalItem.id}>
                        <ProductCard hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />
                    </Link>
                ))
            }
        </div>
    )
}
