import React, { useEffect, useState } from 'react'
import "./css/style.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />

const Whether = () => {
    const [city, serCity] = useState(null)
    const [searchdata, setSerachdata] = useState("Mumbai")
    useEffect(() => {
        const callapi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchdata}&units=metric&appid=aabb2b6ce4cae6e39dd5221f1e01ade4`
            const response = await fetch(url);
            const resjson = await response.json();
            serCity(resjson.main)
        }; callapi()
    }, [searchdata])
    return (
        <>
            <div className='whether_wrapp'>
                <div className='whether-container'>
                <div className='whether_input'>
                    <input value={searchdata} type='search' className='inputfield' onChange={(e) => setSerachdata(e.target.value)} />
                </div>

                {!city ? (
                    <p>Data not found</p>
                ) : (
                    <div className='whetherinfo'>
                        <div className='whethercity text-center'>
                            <i className="fa-solid fa-temperature-three-quarters"></i>{searchdata}
                        </div>

                        <div className='whethertemp text-center'>{city.temp}°C</div>
                        <div className='whether_max text-center'>
                            <span>Min Temperature {city.temp_min}°C | Max Temperature {city.temp_max}°C</span>
                        </div>

                    </div>
                )

                }

</div>

            </div>

        </>
    )
}

export default Whether