import { useState } from "react";
import Button from "../components/Button";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="max-container flex max-lg:flex-col justify-between items-center gap-11">
      <h3 className="flex-1">
        Sign Up for <span className=" text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div className="flex-1 flex justify-between items-center rounded-full border-slate-600 border-solid border-2 p-2 w-full mb-5">
        <input
          className="input text-2xl"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="subscribe@nike.com"
        />
        <Button label="Sign up" />
      </div>
    </section>
  );
};

export default Subscribe;
