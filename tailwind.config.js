/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui:{
  //   themes: [
  //     {
  //       doctortheme:{
  //         primary: '#0FCFEC'
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
