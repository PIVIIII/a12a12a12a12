import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingCart() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            {
                bookItems.length === 0 ? (
                <div className="text-center text-red-500">No Vaccine Booking</div>
            ) : (
                bookItems.map((bookItem) =>                    
                <div className="bg-slate-300 rounded px-5 mx-5 py-2 my-2" key={bookItem.id}>
                        <div className="text-sm">Name : {bookItem.name}</div>
                        <div className="text-sm">Surname : {bookItem.surname}</div>
                        <div className="text-sm">Id : {bookItem.id}</div>
                        <div className="text-sm">Hospital : {bookItem.hospital}</div>
                        <div className="text-sm">BookDate : {bookItem.bookDate}</div>

                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                            shadow-sm text-white"
                            onClick={() => dispatch(removeBooking(bookItem.id))}
                        >
                            Remove from Cart
                        </button>
                    </div>
                ))
            }  
        </>

    );
}
