import { FcHighPriority } from "react-icons/fc"

const Alert = ({ message }) => {
  return (
    <div className="bg-critical px-6 py-4 my-4 font-bold rounded-md text-sm flex items-center w-full">
      <FcHighPriority size="25" />
      <span className="ml-4 text-gray-100"> {message} </span>
    </div>
  )
}

export default Alert
