import { createSlice , PayloadAction} from "@reduxjs/toolkit"

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems:[] }

export const bookSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addBooking: (state,action:PayloadAction<BookingItem>)=> {
            const existIndex = state.bookItems.findIndex(obj => obj.id === action.payload.id);
            if ( existIndex  !== -1) {
                state.bookItems.splice(existIndex ,1,action.payload)
            }
            else {
                state.bookItems.push(action.payload)
            }

        },
        removeBooking: (state,action:PayloadAction<string>)=> {
            state.bookItems =  state.bookItems.filter( obj => obj.id != action.payload );  
        }
    }

})

export const { addBooking,removeBooking } = bookSlice.actions
export default bookSlice.reducer
