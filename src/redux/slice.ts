import { createSlice } from "@reduxjs/toolkit/";

interface chat {
    isUser: boolean,
    message: string,
    currentTime : string
}

interface ChatState {
    isActive: boolean,
    chatList:chat[]
}


const initialState: ChatState = {
    isActive: false,
    chatList: [],
}


const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers : {
        updateActive : (state,{ payload }) => {
            if (payload.type === "ACTIVATE") {
                state.isActive = true;
            } else {
                state.isActive = false;
            }
            localStorage.setItem('isActive',JSON.stringify(state.isActive))
        },
        updateChatList: (state, { payload }) => {
            state.chatList = [...state.chatList,payload];
            localStorage.setItem('chatList',JSON.stringify(state.chatList))
        },
        resetChatList: (state) => {
            state.chatList = [];
        },
    }
})

export const { updateActive, updateChatList, resetChatList } = chatSlice.actions;
export default chatSlice.reducer;