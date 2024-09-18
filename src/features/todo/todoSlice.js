import {createSlice,nanoid} from '@reduxjs/toolkit' // hmne nanoid bhi import kiya jb hum todo bna rhe the to id hmne date ki li thi or 12345 li thi to nanoid unic id generate krega kyuki redux ko pta hai arry me kam hota rhta hai
const initialState={                // sbse phle initialState velue rkhi jati hai ki kya hoga apne project (velue khali hogi databse se data laoge kuch bhi hoga) me (object bhi rkh skte or arry bhi pr hmne object rkha kyuki arry bhi andr aa jayega)
   todos:[{
    id:1,
    text:"hello world"
   }]
}
export  const todoSlice=createSlice({  // yha slices ke name hote hai apne upr hai rkho or ye ak methord ha reducers ki jo ak functionalltally hai(jo bhi name rkho soch smj kr rkho kyki crome extention me yhi name show hoga) name hmne niche diya ye redux property me hota hai phle se hi
       name:'todo',
       initialState,                        //iniinitialState ko yha dal diya
       reducers:{                   // reducers bnaya kya aata (property or function aata hai)
           addtodo:(state,action)=>{       // ak bt dyan rkhan ki esa to context me bhi krte the but(isme main bt ye hai ki isme jb bhi hum addtodo krege do cheezo ka access milega ( state,actions )
            const todo={                                  // state me aage hmare todos me kyakya changes hai uska access dege or action hme kuch nyi velue aayegi uska access dega jese remove etc.)          
                    id:nanoid(),            // phle hum date le rhe the ab humne nanoid le liya hai okk
                    text:action.payload    //payload ak object hai to uske anadr text vgera ki property hoti hai jese name id vgera object me(main bt ye ki text ki velue action ke payload se aayegi )
                  }
                  state.todos.push(todo)        // yha hmari state(initialState bnaya vo hai) to hmen hmari state ko access liya or (todos me ) push kr diya (todo) ko (state) ke andr (todos) usme (push) todo


           },   
           removeTodo:(state,action)=>{  // rivision state ke andr kya rhata (current state)  action me jo bhi( data pass (new data aa rha) hai) ho ra hai
            
            state.todos=state.todos.filter((todo)=> todo.       // remove krne ke liye hmne phle wale todo me remove kese kiya filter lga ke (yha hmne hmari todos ko overright kr diya mtlb usi me velue dal di( state.todos=)) fir hmne hmare state object ke andr ke todos me filter lgaya {state.todos.filter((todo)} todo me puri velue rhegi or jo( bhi action) ka mtlb (velue aayegi) usse match krva lege(==action.payload) import(jo filter hota hai only true velue dega jisse (baki remove) ho jayege)
                id!==action.payload)
            

           },      
        
        }                     
    })

    export const {addtodo,removeTodo}=todoSlice.actions   // action se addtodo or removetodo velue mil jayegi ye componet me kam aayega

    export default todoSlice.reducer     //hum sbhi jitne bhi reducer bnayege future me export krna pdega or store me lena pdega unhe