import React from "react";
import { useFormik } from "formik";
import { isNotServer } from "../utils/isNotServer";
import axios from "axios";
import { useRouter } from "next/router";

const AddTrip: React.FC<{}> = ({}) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      country: "",
      favoriteThing: "",
      toggle: false,
    },
    onSubmit: async (values) => {
      if (isNotServer()) {
        console.log(JSON.stringify(values));
        const res = await axios.post("/api/trip", {
          "country": values.country,
          "favorite": values.toggle,
          "favorite_thing": values.favoriteThing,
          "traveler": "daniel",
        });
        if (res.status == 201) {
          router.push("/");
        }
      }
    },
  });
  return (
    <div className="container mx-auto">
      <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700">
            Add a New Trip
          </h1>
          <p className="text-gray-400">
            Share some details about your trip for your passport!
          </p>
        </div>
        <div>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">
                Country
              </label>
              <input
                type="text"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                placeholder="Where did you go?"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="flex items-center w-1/3 mb-6">
              <input
                type="checkbox"
                name="toggle"
                onClick={formik.handleChange}
                className="w-5 h-5 border border-gray-300 rounded-sm outline-none cursor-pointer"
              />
              <label className="ml-2 text-sm">Add to Favorites</label>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">
                Favorite thing about{" "}
                <b>have this dynamically render to the name of the country</b>
              </label>

              <textarea
                name="favoriteThing"
                onChange={formik.handleChange}
                value={formik.values.favoriteThing}
                placeholder="What did you enjoy the most there?"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              ></textarea>
            </div>
            {/* <div className="m-4">
              <label className="inline-block mb-2 text-gray-500">
                Add a Photo
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Upload
                    </p>
                  </div>
                  <input type="file" className="opacity-0" />
                </label>
              </div>
            </div> */}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
              >
                Add to Passport
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrip;
