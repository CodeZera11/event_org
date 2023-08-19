"use client";

import styles from "@/styles";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (
        data.name === "" ||
        data.email === "" ||
        data.subject === "" ||
        data.message === ""
      ) {
        toast.error("Please fill all the fields");
        return;
      }
      setLoading(true);
      const response = await axios.post("/api/contact", data);

      if (response.data.error) {
        toast.error(response.data.error);
      }
      toast.success("We'll contact you soon");
      setData({});
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.paddings} bg-[#222222]`}>
      <div className={`grid lg:grid-cols-2 grid-cols-1`}>
        <div className={`flex flex-col`}>
          <h1 className={`font-bold text-4xl text-white`}>CONTACT INFO.</h1>
          <p className={`mt-10 font-normal text-secondary-white text-sm mb-10`}>
            Looking forward in making your dreams become reality!
          </p>

          <div className={`flex flex-col`}>
            <h1 className={`text-white font-bold`}>LEBANON:</h1>
            <p className={`text-secondary-white`}>Saifi Sursock Street,</p>
            <p className={`text-secondary-white`}>Beirut, Lebanon</p>
            <p className={`text-secondary-white`}>Tel: +961 1 322 449</p>
            <p className={`text-secondary-white`}>Mob: +961 71 492 224</p>
          </div>

          <div className={`flex flex-col mt-10`}>
            <h1 className={`text-white font-bold`}>EMAIL:</h1>
            <p className={`text-secondary-white`}> xyz@gmail.com</p>
          </div>

          <div className={`flex flex-col mt-10`}>
            <h1 className={`text-white font-bold`}>FOLLOW US ON:</h1>

            <p className={`text-white`}>socials</p>
          </div>
        </div>
        <div className={`${styles.paddings} border border-secondary-white`}>
          <FormControl>
            <FormLabel className={`text-white font-bold`}>First name</FormLabel>
            <Input
              type={"text"}
              name={"name"}
              value={data.name}
              onChange={handleOnChange}
              className={`text-white mb-5`}
              placeholder="First name"
              autoComplete="off"
            />

            <FormLabel className={`text-white font-bold`}>Email</FormLabel>
            <Input
              className={`text-white`}
              type="email"
              name={"email"}
              value={data.email}
              onChange={handleOnChange}
              placeholder="Email"
              autoComplete="off"
            />
            <FormHelperText className={`text-secondary-white mb-5`}>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>

            <FormLabel className={`text-white font-bold`}>Subject</FormLabel>
            <Input
              className={`text-white mb-5`}
              type="text"
              name={"subject"}
              value={data.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              autoComplete="off"
            />
            <FormLabel className={`text-white font-bold`}>Message</FormLabel>
            <Textarea
              className={`text-white mb-5`}
              value={data.message}
              name={"message"}
              onChange={handleOnChange}
              placeholder="Enter your message"
              autoComplete="off"
            />

            <FormErrorMessage>Email is required.</FormErrorMessage>

            <button
              disabled={loading}
              onClick={handleSubmit}
              className={`text-black w-full mt-2  bg-white px-6  py-2 rounded-full hover:bg-black hover:text-white font-bold transition-colors duration-500`}
            >
              {loading ? "loading..." : "Submit"}
            </button>
          </FormControl>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
