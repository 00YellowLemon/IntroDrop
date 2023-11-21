import {useState} from 'react'

export default function NavBar() {
    const[open,setOpen] = useState(true)
    function openToggle(){
        setOpen(!open)
    }


  return (
    <div className="w-full py-8 px-4 flex flex-row justify-between items-center relative">

        <div className="sm:flex gap-8 hidden ml-4 sm:items-center sm:justify-center">
            <div className="sm:mr-8">
                <img src="./logo.svg" alt="" className="" />
            </div>
            <ul className="flex space-x-6">
                <li className="relative flex gap-2 group items-center justify-center">
                    <p className=" hover:text-neutral-900">
                        Features
                    </p>
                    <img src="./icon-arrow-down.svg" className="w-auto h-2" alt="" />
                    <ul className="space-y-4 hidden absolute group-hover:block rounded-lg p-4 w-64 shadow-xl top-8">
                        <li className="flex gap-4 pt-4 pl-6 items-center">
                            <img src="./icon-todo.svg" className="h-4 w-auto" alt="" />
                            <p>Todo List</p>
                        </li>
                        <li className="flex gap-4 pl-6 items-center">
                            <img src="./icon-calendar.svg" className="h-4 w-auto" alt="" />
                            <p>Calendar</p>
                        </li>
                        <li className="flex gap-4 pl-6 items-center">
                            <img src="./icon-reminders.svg" className="h-4 w-auto" alt="" />
                            <p>Reminders</p>
                        </li>
                        <li className="flex gap-4 pl-6 items-center">
                            <img src="./icon-planning.svg" className="h-4 w-auto" alt="" />
                            <p>
                                Planning
                            </p>
                        </li>
                    </ul>

                </li>
                <li className="relative group cursor-pointer">
                    <div className=" flex gap-2 items-center justify-center">
                        <p className='group-hover:text-neutral-900'>
                            Company
                        </p>
                        <img src="./icon-arrow-down.svg" className="w-auto h-2" alt="" />
                    </div>
                    <ul className="space-y-4 hidden absolute z-20 w-32 group-hover:block rounded-lg p-6 shadow-xl top-8">
                        <li className='pt-4'>History</li>
                        <li>Our Team</li>
                        <li>Blob</li>
                    </ul>

                </li>
                <li>
                    <p className=" hover:text-neutral-900">
                        Careers
                    </p>
                </li>
                <li>
                    <p className=" hover:text-neutral-900">
                        About
                    </p>
                </li>
            </ul>


        </div>
        <div className="flex gap-6 hover:text-neutral-900">
            <button>
                Login
            </button>
            <button className="border-2 transition font-normal rounded-xl py-1.5 border-stone-500 px-3 mr-6 hover:border-neutral-900 hover:text-neutral-900">
                Register
            </button>
        </div>
        
        {
            open &&         
            <div className="close sm:hidden">
                <img src="./icon-menu.svg" alt="" onClick={openToggle}/>
            </div>

        }
        {
            !open && <Toggle setOpen={setOpen}/>
        }
    </div>

  )
}
function Toggle({setOpen}){
    const [openFeatures,setOpenFeatures] = useState(false)
    const [openCompany,setOpenCompany] = useState(false)

    function handleComp(){
        setOpenCompany(!openCompany)
    }
    function handleFeat(){
        setOpenFeatures(!openFeatures)
    }
    function openToggle(){
        setOpen(true)
    }

    return  (
        <div className="absolute z-20 top-0 right-0 h-screen rounded-xl w-3/4 opacity-100 backdrop-blur-2xl p-8">
            <div className="absolute top-6 right-6" onClick={openToggle}>
                <img src="./icon-close-menu.svg" alt="" />
            </div>
            <ul className="text-lg space-y-4 ">
                <li onClick={handleFeat}>
                    <div className='flex gap-4 items-center transition-all duration-1000'>
                        <p>
                            Features
                        </p>
                        {
                            !openFeatures ? (
                                <img src="./icon-arrow-down.svg" className="w-4 h-auto" alt="" fill='white'/>

                            ):(
                                <img src="./icon-arrow-up.svg" className="w-4 h-auto" alt="" />
                            )
                        }
                    </div>


                    {
                        openFeatures &&
                        <ul className="space-y-4 ">
                            <li className="flex gap-4 pt-4 pl-6 items-center">
                                <img src="./icon-todo.svg" className="h-4 w-auto" alt="" />
                                <p>Todo List</p>
                            </li>
                            <li className="flex gap-4 pl-6 items-center">
                                <img src="./icon-calendar.svg" className="h-4 w-auto" alt="" />
                                <p>Calendar</p>
                            </li>
                            <li className="flex gap-4 pl-6 items-center">
                                <img src="./icon-reminders.svg" className="h-4 w-auto" alt="" />
                                <p>Reminders</p>
                            </li>
                            <li className="flex gap-4 pl-6 items-center">
                                <img src="./icon-planning.svg" className="h-4 w-auto" alt="" />
                                <p>
                                    Planning
                                </p>
                            </li>
                        </ul>
                    }
                </li>
                <li onClick={handleComp} className='w-full'>
                    <div className='flex gap-4 items-center'>
                        <p>
                            Products
                        </p>
                        {
                            !openCompany ? (
                                <img src="./icon-arrow-down.svg" className="w-4 h-auto" alt="" onAbort={handleComp}/>

                            ):(
                                <img src="./icon-arrow-up.svg" className="w-4 h-auto" alt="" />
                            )
                        }
                    </div>

                    
                    {
                        openCompany && 
                    <ul className="space-y-2 pl-6 cursor-pointer">
                        <li className='pt-4'>History</li>
                        <li>Our Team</li>
                        <li>Blob</li>
                    </ul>
                    }

                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <button className="font-normal w-full pt-8 mb-4">
                Login
            </button>
            <button className="border-2 font-normal rounded-xl py-2 border-stone-500 w-full">
                Register
            </button>
        </div>
    )
}

