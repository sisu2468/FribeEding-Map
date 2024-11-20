import Line_279 from '../../assets/images/Line_279.png'
import Group_34 from '../../assets/images/Group_34.png'

function Header () {
    return (
        <div className="flex justify-between bg-black h-[85px] z-10 bg-opacity-75 py-4 w-full top-0 left-0">
            {/* First Part */}
            <div className="flex gap-1 ml-4 pl-72">
                <button className="flex items-center gap-1 bg-[#D9D9D9] border rounded p-3 w-20">
                    <img src={Line_279} />
                    <p className='text-sm font-bold'>Line</p>
                </button>
                <button className="flex items-center gap-1 bg-[#D9D9D9] border rounded p-3 w-20">
                    <img src={Group_34} />
                    <p className='text-sm font-bold'>Area</p>
                </button>
            </div>

            {/* Second Part */}
            <div className="flex gap-1 mr-4">
                <button className="flex items-center bg-[#D9D9D9] border rounded p-3 w-20 justify-center">
                    <p className='text-sm font-bold'>Undo</p>
                </button>
                <button className="flex items-center bg-[#D9D9D9] border rounded p-3 w-20 justify-center">
                    <p className='text-sm font-bold'>Redo</p>
                </button>
                <button className="flex gap-6 items-center bg-[#D9D9D9] border rounded ml-5 p-3 justify-center">
                    <p className='text-sm font-bold'>Redo</p>
                    <p className='font-bold text-sm'>0</p>
                </button>
            </div>
        </div>
    )
}

export default Header;