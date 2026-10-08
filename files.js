import fs from 'node:fs/promises'

class FileManager {

    // async = makes it so other code works while this function is running
    async writeFile(filename, data) {
        try {
            data = JSON.stringify(data, null, 2)
            // await = waits untill the async is finished before continuing the rest of the code
            await fs.writeFile(filename, data)
            //finds error reports error
        } catch (error) {
            console.log('write error => ', error)
        }
    }
}

export const fileManager = new FileManager()