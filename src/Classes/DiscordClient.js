import Logger from "@corebyte/logger"
import API from "./API"
import Gateway from "./Gateway"

class DiscordClient {
    constructor(Settings) {
        if (typeof Settings == "string") {
            Settings = { Token: Settings }
        }

        this.Token = Settings.Token

        this.API = new API(this.Token, this)
        this.Gateway = new Gateway(this.Token, this)
        this.Logger = new Logger("Duacord", Settings.LogLevel)
    }
}

export default DiscordClient