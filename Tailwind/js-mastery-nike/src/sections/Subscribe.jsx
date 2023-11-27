import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div 
      className="max-container flex justify-between items-center max-lg:flex-col gap-10" 
      id="contact-us"
    >
      <h3 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="w-full flex items-center gap-5 p-2.5 rounded-full lg:max-w-[40%] max-sm:flex-col sm:border sm:border-slate-gray">
        <input
          type="text"
          placeholder="subscribe@gmail.com"
          className="input" 
        />

        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </div>
  )
}

export default Subscribe;