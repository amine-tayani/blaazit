// spinner component

const Spinner = () => {
  return (
    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div
        style={{ borderTopColor: "transparent" }}
        class="border-solid animate-spin  rounded-full border-blue-400 border-2 h-10 w-10"
      ></div>
    </div>
  )
}

export default Spinner
