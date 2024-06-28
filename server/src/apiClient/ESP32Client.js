import got from "got"

const esp32Test = async (command) => {
  try {
    const response = await got.post(`http://192.168.1.134:8080/${command}`)
    return response.body
  } catch (error) {
    console.log(error)
    return error.message
  }
}

export default esp32Test
