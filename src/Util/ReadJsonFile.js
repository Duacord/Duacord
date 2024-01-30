async function ReadJsonFile(FilePath) {
    const File = Bun.file(FilePath)
    return await File.json()
}

export default ReadJsonFile