import {configureStore} from '@reduxjs/toolkit'  // sbse phle configure store lana rhata hai jo methord hai isse kam krta hai 
import todoReducer from '../features/todo/todoSlice'
export const store=configureStore({
    reducer:todoReducer
})  // ak veriable ko export kr diya and (configureStore object )store krega  uske bad features folder bnaya us features ke andr (login ,product features,todofeatures bhut sare ho skte)ho skta hai or bhi kuch