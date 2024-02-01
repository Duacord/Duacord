import APIData from "../Data/API.json"
import Package from "../../package.json"

function GetPathData(Path) {
    return APIData.paths[Path]
}

function GetMethodData(Path, Method) {
    return GetPathData(Path)[Method]
}

function RequiresToken(MethodData) {
    return !!MethodData.security[0].BotToken
}

const BaseUrl = APIData.servers[0].url

async function APIFetch(Token, Path, Method, Body, Parameters) {

    console.log(
        Path,
        Method,
        Body,
        Parameters
    )

    const MethodData = GetMethodData(Path, Method)
    
    const Headers = {
        UserAgent: `DiscordBot (${Package.homepage}, ${Package.version})`
    }

    if (RequiresToken(MethodData)) {
        Headers.Authorization = Token
    }

    const Response = await fetch(
        `${BaseUrl}${Path}`,
        {
            headers: Headers,
        }
    )

    return Response.json()
}

export default APIFetch