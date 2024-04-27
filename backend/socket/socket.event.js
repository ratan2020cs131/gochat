const socketEvent = Object.freeze({
    JOIN_CHAT: 'joinChat',
    TYPING_EVENT: 'typing',
    STOP_TYPING_EVENT: 'stoppedTyping',
    NEW_MSG: 'newMsg',
    DISCONNECT_EVENT: 'disconnect'
})
export default socketEvent;