import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

export default function UserForm() {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    useEffect(()=>{
        alert(JSON.stringify(data))
    })

    const onSubmitData = (data) => {
        setData(data)
        
    }

    return (
        <div className="s" style={{ backgroundColor: "grey", border: "5px solid", width: "700px", margin: "auto" }}>
            <div className="w-full flex justify-center items-center bg-gray-900 p-8 border-r border-dashed ">
                <div className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col" style={{ height: '375px' }}>
                    <h2 className="text ">
                        UserForm
                    </h2>
                    <form onSubmit={handleSubmit(onSubmitData)} className="flex flex-1 flex-col justify-evenly">

                        <b>UserName:</b> <input style={{ margin: "5px" }}
                            className="border-2 outline-none p-2 rounded-md"
                            placeholder="UserName"
                            {...register("name")}
                        />
                        <b>UserLocation:</b> <input style={{ margin: "5px" }}
                            className="border-2 outline-none p-2 rounded-md"
                            placeholder="UserLocation"
                            {...register("locaton")}
                        />
                        <button
                            className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-dark text-white hover:bg-gray-800" type='submit'>
                            <span>
                                Submit
                            </span>
                        </button>

                    </form>

                    <div className='h-4'>
                        {/* <p> Data: {JSON.stringify(data)}</p> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
