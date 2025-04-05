import { useEffect, useState } from "react"
import axios from 'axios'
import TitleButton from "../../components/TitleButton"

export default function AmiboRequest() {
    const [amiiboUrl, setAmiiboUrl] = useState('')

    const amiibos = ["zelda", "mario", "kirby", "sonic"]

    async function getImage() {
        try {
            const response = await axios.get(`https://www.amiiboapi.com/api/amiibo/?name=${amiibos[Math.ceil(Math.random() * amiibos.length)]}`)
            setAmiiboUrl(response.data.amiibo[0].image)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getImage()

        const intervalId = setInterval(() => {
            getImage()
        }, 5000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <main>
                <img src={amiiboUrl} alt="amiibo" />
            </main>
            <TitleButton />
        </>
    )
}
