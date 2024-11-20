import close_btn from '../../assets/images/close_btn.png';
import Arrow_4 from '../../assets/images/Arrow_4.png';
import primary_road_icn from '../../assets/images/primary_road_icn.png'
import exclamation_icn from '../../assets/images/!.png'
import { Trash2, Plus, Minus, Trash, AlertTriangle, ChevronLeft } from "lucide-react"
import React, { useState } from 'react';

function LeftSideBar() {
    const [isOneWay, setIsOneWay] = useState(true);

    const handleToggle = () => {
        setIsOneWay(!isOneWay);
    };
    return (
        <div className="w-1/4 relative">
            <div className=' overflow-scroll'>
                <div className="flex justify-between h-20 bg-[#FCFCFC] pl-[78px] pr-[22px] items-center border-b border-[#ADADAD]">
                    <h1 className="font-[Arial] font-bold text-lg color-[#484848]">Fribe Map Features</h1>
                    <img className='w-[18px] h-[18px] align-center' src={close_btn} />
                </div>
                <div className='bg-[#EAEAEA] pt-[29px] px-[17px]'>
                    <div>
                        <div className="flex gap-2">
                            <img className='w-3 h-2' src={Arrow_4} />
                            <p className='text-[#6E00DC] text-xs font-bold'>Feature Type</p>
                        </div>
                        <div className='mt-[10px] border-[#ADADAD] border-[1px] rounded flex'>
                            <div className='bg-white flex items-center py-3 px-2 rounded-l border-r-[1px] border-[#ADADAD]'>
                                <img src={primary_road_icn} />
                            </div>
                            <div className='pl-4 flex'>
                                <p className='flex items-center text-[#484848]'>Primary Road</p>
                            </div>
                            <div className='flex items-center ml-auto border-l-[#ADADAD] border-[1px] rounded-r p-3'>
                                <img className='flex' src={exclamation_icn} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[13px]'>
                        {/* Title with Icon */}
                        <div className="flex gap-2">
                            <img className="w-3 h-2" src={Arrow_4} alt="Arrow icon" />
                            <p className="text-[#6E00DC] text-xs font-bold">Fields</p>
                        </div>
                        <div className='bg-[#D9D9D9] p-3 rounded mt-[13px]'>
                            <div className="w-full max-w-md border border-[#ADADAD] rounded bg-white overflow-hidden">
                                <div className="grid grid-cols-[1fr,30px,30px]">
                                    <div className="bg-[#EDEDED]">
                                        <span className="text-xs font-bold px-4 py-2 block text-black">Name</span>
                                    </div>
                                    <div className="bg-[#EDEDED]">
                                        <button
                                            className="border-l border-[#ADADAD] hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Delete field"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="bg-[#EDEDED] border-l border-[#ADADAD]">{/* Blank cell */}</div>

                                    <div>
                                        <div className="px-4 py-2 border-t border-[#ADADAD]">
                                            <div className="text-xs font-normal text-gray-900">Al Rubat Street</div>
                                        </div>
                                    </div>
                                    <div className="border-t  border-[#ADADAD]">{/* Blank cell */}</div>
                                    <div>
                                        <button
                                            className="border-t border-l border-[#ADADAD] hover:text-gray-600 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Add new"
                                        >
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#ADADAD] rounded bg-white overflow-hidden mt-2 mx-2">
                                <div className="grid grid-cols-[1fr,30px] bg-[#EDEDED]">
                                    <span className="text-xs font-bold px-4 py-2 text-black">Multilingual Name</span>
                                    <button
                                        className="border-l border-[#ADADAD] hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                        aria-label="Delete field"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>

                                {/* Language Dropdown Field */}
                                <div className="grid grid-cols-1 border-t border-[#ADADAD]">
                                    <select className="px-4 py-2 text-xs font-normal text-gray-900 border border-[#ADADAD] rounded w-full bg-white">
                                        <option>Arabic</option>
                                        <option>English</option>
                                        <option>French</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>

                                {/* Text Field for Multilingual Name */}
                                <div className="grid grid-cols-1 border-t border-[#ADADAD] rounded border-t-none">
                                    <div className="px-4 py-2 text-xs font-normal text-gray-900">
                                        شارع الرباط
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#ADADAD] rounded bg-white overflow-hidden mt-3 mx-2">
                                <div className="grid grid-cols-[1fr,30px] bg-[#EDEDED]">
                                    <span className="text-xs font-bold px-4 py-2 text-black">Multilingual Name</span>
                                    <button
                                        className="border-l border-[#ADADAD] hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                        aria-label="Delete field"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>

                                {/* Language Dropdown Field */}
                                <div className="grid grid-cols-1 border-t border-[#ADADAD]">
                                    <select className="px-4 py-2 text-xs font-normal text-gray-900 border border-[#ADADAD] rounded w-full bg-white">
                                        <option>English</option>
                                        <option>Arabic</option>
                                        <option>French</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>

                                {/* Text Field for Multilingual Name */}
                                <div className="grid grid-cols-1 border-t border-[#ADADAD] rounded border-t-none">
                                    <div className="px-4 py-2 text-xs font-normal text-gray-900">
                                        Al Rubat Street
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-md border border-[#ADADAD] rounded bg-white overflow-hidden mt-3">
                                <div className="grid grid-cols-[1fr,30px,30px]">
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <span className="text-xs font-bold px-4 py-2 block text-black">Name</span>
                                    </div>
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <button
                                            className="border-l border-[#ADADAD]  hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Delete field"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#EDEDED] border-l border-b border-[#ADADAD]"><img src={exclamation_icn} /></div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className="px-4 py-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={isOneWay}
                                                    onChange={() => setIsOneWay(!isOneWay)}
                                                    className="form-checkbox h-5 w-5 accent-purple-600 rounded-md border-purple-600 focus:ring-0 cursor-pointer"
                                                />
                                                <span className="ml-2 text-purple-600 font-medium">{isOneWay ? "Yes" : "No"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center m-[5px] border p-1 border-[#ADADAD] rounded'>
                                        <button
                                            className="w- 5 hover:text-gray-600 text-purple-600 font-semibold text-sm hover:underline transition-colors"
                                            aria-label="Add new"
                                            onClick={handleToggle}
                                        >
                                            Change Direction
                                        </button>
                                        <ChevronLeft className="text-purple-600 ml-1 h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-md border border-[#ADADAD] rounded bg-white overflow-hidden mt-3">
                                <div className="grid grid-cols-[1fr,30px,30px]">
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <span className="text-xs font-bold px-4 py-2 block text-black">Speed Limit</span>
                                    </div>
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <button
                                            className="border-l border-[#ADADAD]  hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Delete field"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#EDEDED] border-l border-b border-[#ADADAD]"><img src={exclamation_icn} /></div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className="px-4 py-2">
                                            <div className="flex items-center">
                                                <p className='text-xs font-normal text-gray-900'>100</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center border-l border-[#ADADAD]'>
                                        <div className="grid grid-cols-1">
                                            <select className="px-4 py-2 text-xs font-normal text-gray-900 w-full bg-white focus:border-transparent focus:outline-none">
                                                <option>Km/h</option>
                                                <option>m/s</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 w-full max-w-md border border-[#ADADAD] rounded bg-white overflow-hidden">
                                <div className="grid grid-cols-[1fr,30px,30px]">
                                    <div className="bg-[#EDEDED]">
                                        <span className="text-xs font-bold px-4 py-2 block text-black">Lane</span>
                                    </div>
                                    <div className="bg-[#EDEDED]">
                                        <button
                                            className="border-l border-[#ADADAD] hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Delete field"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center  justify-center bg-[#EDEDED] border-l border-[#ADADAD]"><img src={exclamation_icn} /></div>

                                    <div>
                                        <div className="px-4 py-2 border-t border-[#ADADAD]">
                                            <div className="text-xs font-normal text-gray-900">3</div>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="border-t border-l border-[#ADADAD] hover:text-gray-600 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Add new"
                                        >
                                            <Minus className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            className="border-t border-l border-[#ADADAD] hover:text-gray-600 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Add new"
                                        >
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-md border border-[#ADADAD] rounded bg-white overflow-hidden mt-3">
                                <div className="grid grid-cols-[1fr,30px,30px]">
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <span className="text-xs font-bold px-4 py-2 block text-black">Structure</span>
                                    </div>
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <button
                                            className="border-l border-[#ADADAD]  hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Delete field"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#EDEDED] border-l border-b border-[#ADADAD]"><img src={exclamation_icn} /></div>
                                </div>
                                <div className='flex justify-between pr-2'>
                                    <select className="px-4 py-2 text-xs font-normal rounded w-full bg-white text-purple-600 focus:border-transparent focus:outline-none">
                                        <option>Asphalt</option>
                                        <option>Roadway</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full max-w-md rounded bg-white overflow-hidden mt-3">
                                <div className="grid grid-cols-[1fr,30px]  border border-[#ADADAD]">
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <span className="text-xs font-bold px-4 py-2 block text-black">Surface</span>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#EDEDED] border-l border-b border-[#ADADAD]"><img src={exclamation_icn} /></div>
                                </div>
                                <div className="w-full max-w-sm rounded-md bg-white">
                                    {/* Option 1 */}
                                    <div className="flex items-center border-[1px] border-[#ADADAD] rounded">
                                        <input
                                            type="radio"
                                            name="option"
                                            id="bridge"
                                            className="h-5 w-5 text-purple-600 focus:ring-0 cursor-pointer"
                                        />
                                        <label htmlFor="bridge" className="ml-3 py-2 text-purple-600 font-medium">
                                            Bridge
                                        </label>
                                    </div>

                                    {/* Option 2 */}
                                    <div className="flex items-center border-[1px] border-[#ADADAD] rounded">
                                        <input
                                            type="radio"
                                            name="option"
                                            id="tunnel"
                                            className="h-5 w-5 text-purple-600 focus:ring-0 cursor-pointer"
                                        />
                                        <label htmlFor="tunnel" className="ml-3 py-2 text-purple-600 font-medium">
                                            Tunnel
                                        </label>
                                    </div>

                                    {/* Option 3 */}
                                    <div className="flex items-center border-[1px] border-[#ADADAD]">
                                        <input
                                            type="radio"
                                            name="option"
                                            id="embankment"
                                            className="h-5 w-5 text-purple-600 focus:ring-0 cursor-pointer"
                                        />
                                        <label htmlFor="embankment" className="ml-3 py-2 text-purple-600 font-medium">
                                            Embankment
                                        </label>
                                    </div>

                                    {/* Option 4 */}
                                    <div className="flex items-center border-[1px] border-[#ADADAD]">
                                        <input
                                            type="radio"
                                            name="option"
                                            id="cutting"
                                            className="h-5 w-5 text-purple-600 focus:ring-0 cursor-pointer"
                                        />
                                        <label htmlFor="cutting" className="ml-3 py-2 text-purple-600 font-medium">
                                            Cutting
                                        </label>
                                    </div>

                                    {/* Option 5 */}
                                    <div className="flex items-center border-[1px] border-[#ADADAD]">
                                        <input
                                            type="radio"
                                            name="option"
                                            id="ford"
                                            className="h-5 w-5 text-purple-600 focus:ring-0 cursor-pointer"
                                        />
                                        <label htmlFor="ford" className="ml-3 py-2 text-purple-600 font-medium">
                                            Ford
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-md border border-[#ADADAD] rounded bg-white overflow-hidden mt-3">
                                <div className="grid grid-cols-[1fr,30px,30px]">
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <span className="text-xs font-bold px-4 py-2 block text-black">Road Number</span>
                                    </div>
                                    <div className="bg-[#EDEDED] border-b border-[#ADADAD]">
                                        <button
                                            className="border-l border-[#ADADAD]  hover:text-gray-500 transition-colors w-full h-full flex items-center justify-center"
                                            aria-label="Delete field"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#EDEDED] border-l border-b border-[#ADADAD]"><img src={exclamation_icn} /></div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className="px-4 py-2">
                                            <div className="flex items-center">
                                                <p className='text-xs font-normal text-gray-900'>47</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;