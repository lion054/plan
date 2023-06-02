import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import unisat from '../../src/assets/unisat.png'
import xverse from '../../src/assets/xverse.png'
import cancel from '../../src/assets/cancel.png'
import { MdCancel } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";


export function ConnectModal({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-[0.7]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-[#222531] relative pt-8 pb-12 px-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl text-center font-medium leading-6 text-white font-bold"
                                    >
                                        Connect a wallet to continue
                                    </Dialog.Title>
                                    <div onClick={closeModal} className='cursor-pointer  flex justify-center items-center rounded-full  absolute w-16 h-16 right-2 top-[14px]'>
                                        <MdCancel className='text-2xl' />
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-[#9B9BB0] text-center mt-4">
                                            Choose how you want to connect. If you don't have a wallet, you can select a provider and create one.
                                        </p>
                                    </div>

                                    <div className="mt-4 gap-4 flex flex-col">
                                        <button
                                            type="button"
                                            className="flex gap-4 items-center outline-none border-transparent text-white text-lg rounded-md bg-[#64666e] px-4 py-2 focus:outline-none focus:bg-[#bcbdc1] hover:bg-[#bcbdc1] "
                                            onClick={() => {
                                                window.location.href = "https://unisat.io";
                                            }}
                                        >
                                            <img src={unisat} width={20} />  Unisat
                                        </button>

                                        <button
                                            type="button"
                                            className="flex gap-4 items-center outline-none border-transparent text-white text-lg rounded-md focus:outline-none focus:bg-[#bcbdc1] bg-[#64666e] px-4 py-2  hover:bg-[#bcbdc1] "

                                        >
                                            <img src={xverse} width={20} />  Xverse
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}


export function CommitModal({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-[0.7]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-[#222531] relative pt-8 pb-12 px-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl text-center leading-6 text-white font-bold"
                                    >
                                        Success!
                                    </Dialog.Title>
                                    <div onClick={closeModal} className='flex justify-center items-center rounded-full  absolute w-16 h-16 right-2 top-[14px]'>
                                        <MdCancel className='text-2xl cursor-pointer ' />
                                    </div>
                                    <div className="mt-5 flex justify-center items-center flex-col">

                                        <div className='bg-[#16C7844D] rounded-full w-20 h-20 flex items-center justify-center'>
                                            <div className='bg-[#16C784]  rounded-full w-16 h-16 flex items-center justify-center'>
                                                <IoCheckmarkSharp className='text-[#fff] text-4xl' />
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#fff] text-center mt-4">
                                            You have successfully commited your tokens
                                        </p>
                                    </div>

                                    <div className="mt-4 gap-4 flex justify-center items-center">


                                        <button
                                        onClick={closeModal}
                                            type="button"
                                            className="flex gap-4 items-center outline-none border-transparent text-white text-xs rounded-[5px] hover:outline-none focus:outline-none  bg-[#f38010] py-1 px-6   "

                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export function ClaimModal({ isOpen, setIsOpen }) {
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-[0.7]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-[#222531] relative pt-8 pb-12 px-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl text-center leading-6 text-white font-bold"
                                    >
                                        Success!
                                    </Dialog.Title>
                                    <div onClick={closeModal} className='flex justify-center items-center rounded-full  absolute w-16 h-16 right-2 top-[14px]'>
                                        <MdCancel className='text-2xl cursor-pointer ' />
                                    </div>
                                    <div className="mt-5 flex justify-center items-center flex-col">

                                        <div className='bg-[#16C7844D] rounded-full w-20 h-20 flex items-center justify-center'>
                                            <div className='bg-[#16C784]  rounded-full w-16 h-16 flex items-center justify-center'>
                                                <IoCheckmarkSharp className='text-[#fff] text-4xl' />
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#fff] text-center mt-4">
                                        You have successfully claimed your tokens
                                        </p>
                                    </div>

                                    <div className="mt-4 gap-4 flex justify-center items-center">


                                        <button
                                        onClick={closeModal}
                                            type="button"
                                            className="flex gap-4 items-center outline-none border-transparent text-white text-xs rounded-[5px] hover:outline-none focus:outline-none  bg-[#f38010] py-1 px-6    "

                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export function FailedModal({ isOpen, setIsOpen }) {
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-[0.7]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-[#222531] relative pt-8 pb-12 px-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl text-center leading-6 text-white font-bold"
                                    >
                                        Failed!
                                    </Dialog.Title>
                                    <div onClick={closeModal} className='flex justify-center items-center rounded-full  absolute w-16 h-16 right-2 top-[14px]'>
                                        <MdCancel className='text-2xl cursor-pointer ' />
                                    </div>
                                    <div className="mt-5 flex justify-center items-center flex-col">

                                        <div className='bg-[#EA39434D] rounded-full w-20 h-20 flex items-center justify-center'>
                                            <div className='bg-[#EA3943]  rounded-full w-16 h-16 flex items-center justify-center'>
                                                <HiXMark className='text-[#fff] text-4xl' />
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#fff] text-center mt-4">
                                        Sorry! Something went wrong
                                        </p>
                                    </div>

                                    <div className="mt-4 gap-4 flex justify-center items-center">

                                    <button
                                       
                                            type="button"
                                            className="hover:outline-none focus:outline-none bg-[#16161D] py-1 px-4 rounded-[5px] text-xs text-[#F38010] border-[1px] border-[#F38010]"

                                        >
                                            Try Again
                                        </button>
                                        <button
                                        onClick={closeModal}
                                            type="button"
                                            className="flex gap-4 items-center outline-none border-transparent text-white text-xs rounded-[5px] hover:outline-none focus:outline-none  bg-[#f38010] py-1 px-6   "

                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
