import { City } from "@/models/models";
import { getFullWeather} from "@/services/fetchApiWeather";

const currentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (current) => {
          try {
            const data = await getFullWeather(
              current.coords.latitude,
              current.coords.longitude
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  };
  

export default currentPosition;
