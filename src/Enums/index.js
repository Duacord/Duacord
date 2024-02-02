const Enums = {
    GATEWAY_OPCODE: {
        DISPATCH: 0,
        HEARTBEAT: 1,
        IDENTIFY: 2,
        PRESENCE_UPDATE: 3,
        VOICE_STATE_UPDATE: 4,
        RESUME: 6,
        RECONNECT: 7,
        REQUEST_GUILD_MEMBERS: 8,
        INVALID_SESSION: 9,
        HELLO: 10,
        HEARTBEAT_ACK: 11
    },

    CLIENT_EVENT: {
        READY: "READY",
    },

    DISPATCH_EVENT: {
        READY: "READY",
        GUILD_CREATE: "GUILD_CREATE",
    },

    STATUS: {
        ONLINE: "online",
        DND: "dnd",
        IDLE: "idle",
        INVISIBLE: "invisible",
        OFFLINE: "offline"
    }
}

export default Enums