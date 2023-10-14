import { useEffect , useState} from "react";
//import { getProperties } from "../api";
import Properties from "./Properties";
import axios from 'axios'

const Feed = () => {
    const [properties, setProperties] = useState([])

    //console.log(properties)

    const url = 'http://localhost:5000/api/properties'

    useEffect(() => {
        const getProperty = async () => {
            const response = await axios.get(url)
            setProperties(response.data)
        }

        getProperty()
    }, [])

    return (
        <div>
            <Properties properties={properties}/>
        </div>
    )
}

export default Feed