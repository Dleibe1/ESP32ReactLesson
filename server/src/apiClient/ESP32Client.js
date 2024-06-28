
import got from "got"

const esp32Test = async (messageFromFrontEnd) => {
  try {
      const response = await got('http://192.168.1.134:8080/led_on');
      return response.body
  } catch (error) {
      console.log(error);
  }
}

export default esp32Test