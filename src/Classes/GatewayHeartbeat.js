import { Enums } from ".."

class GatewayHeartbeat {
    constructor(Gateway) {
        this.Gateway = Gateway
        this.ReceivedAck = true

        this.Gateway.On(
            Enums.GATEWAY_OPCODE.HEARTBEAT_ACK,
            () => { this.ReceivedAck = true }
        )
    }

    SendHeartbeat() {
        if (!this.ReceivedAck) {
            this.Gateway.Logger.Warn("Did not receive ACK for last heartbeat!")
            this.Gateway.Emit("HeartbeatMissed")
            return
        }
        this.ReceivedAck = false
        this.Gateway.Send(Enums.GATEWAY_OPCODE.HEARTBEAT, this.Gateway.Sequence)
    }

    Start(Interval) {
        this.SendHeartbeat()
        this.Interval = setInterval(
            this.SendHeartbeat.bind(this),
            Interval
        )
    }

    Stop() {
        clearInterval(this.Interval)
    }
}

export default GatewayHeartbeat