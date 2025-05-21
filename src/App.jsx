import "./App.css";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      {/* Header Section first part for mid to heigh device*/}
      <section className="border-1 border-gray-600 layoutbg-color sm:h-[100px]  items-center md:h-[50px] md:flex md:justify-between p-4 text-white">
        <div>
          <p className="small-text font-semibold">
            We're Leading Educational Consultancy in Bangladesh.
          </p>
        </div>
        <div className="sm:grid-flow-col md:flex sm:justify-center md:justify-end md:gap-20">
          <div>
            <p className="small-text font-semibold flex justify-center">
              Office Hours: 10:00AM- 07:00PM
            </p>
          </div>
          {/* hidden for mobile device */}
          <div className="hidden grid-flow-col sm:justify-center md:flex md:justify-end gap-4">
            <a className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        {/* Top info bar: header */}
        {/* also use drakmode selector */}
        <div className="sm:grid  md:flex lg:flex sm:h-[100px] md:h-[150px] md:justify-between sm:justify-center sm:items-center dark:border-y-2 dark:border-white bg-white dark:bg-slate-800 px-4">
          <div className="md:mt-0 text-xl font-bold text-blue-800 dark:text-white dark:px-4 dark:layoutbg-color ">
            DREAM STUDY INTERNATIONAL
          </div>

          <div className="sm:flex-col sm:justify-center sm:items-center md:flex lg:flex md:space-x-6 text-sm dark:text-white">
            <div className="flex items-center md:mb-0">
              <span className="font-semibold mr-2">Call Us:</span>
              <span>+880 14066 99551-4</span>
            </div>
            <div className="flex items-center md:mb-0">
              <span className="font-semibold mr-2">Email Us:</span>
              <span>dreamstudyinternational@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Location:</span>
              <span className="sm:mb-2 lg:my-0">Gulshan 02</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className=" grid sm:grid-flow-col md:flex justify-center md:justify-start text-white sm:max-h-screen md:min-w-full layoutbg-color  ">
          <nav className="md:flex md:justify-between md:items-center p-6 rounded shadow-md w-full md:min-w-full ">
            <ul className="flex flex-col sm:flex-row sm:space-x-6 text-centersm:text-left">
              <li className="mb-2 sm:mb-0 ">
                <a href="#" className="navhover">
                  Home
                </a>
              </li>
              <li className="mb-2 sm:mb-0">
                <a href="#" className="navhover">
                  About
                </a>
              </li>

              <div className="relative group">
                <li className="navhover flex">
                  <a href="#" className="navhover">
                    Countries<span>▼</span>
                  </a>
                </li>
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-1 hidden group-hover:block z-10">
                  <a href="#" className="a-compo">
                    Country 1
                  </a>
                  <a href="#" className="a-compo">
                    Country 2
                  </a>
                  <a href="#" className="a-compo">
                    Country 3
                  </a>
                </div>
              </div>

              <li className="mb-2 sm:mb-0">
                <a href="#" className="navhover">
                  Contract
                </a>
              </li>

              <li>
                <a href="#" className="navhover">
                  Private Policy
                </a>
              </li>
            </ul>
            <div className="sm:mb-4 md:mb-0">
              <button className="btn-effect">
                <span className="btn-span font-semibold">Apply Now</span>
              </button>
            </div>
          </nav>
        </div>
      </section>

      {/* 2nd part--> Dream Study International section */}
      {/* also use darkmode */}
      <section className=" dark:bg-slate-800 dark:border-y-2 dark:border-white sm:my-4">
        <h1 className="uppercasae flex justify-center items-center font-bold text-blue-800 dark:text-white my-8 ">
          DREAM STUDY INTERNATIONAL
        </h1>

        {/* from and image section */}
        <div className="max-w-full sm:grid-cols-1 md:flex gap-4 md:px-4 md:mb-2">
          <div className="sm:w-full sm:my-4 md:w-1/3 lg:w-2/3 py-8 ">
            <img
              src="../src/assets/form.PNG"
              alt="study add image"
              className="border-x-2 border-gray-200"
            />
          </div>

          {/* form */}
          <div className="sm:w-full sm:py-10 md:w-1/3 lg:w-1/3 bg-white rounded-2xl shadow-sm shadow-gray-400 overflow-hidden ">
            <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 md:px-6 p-4 ">
              Apply Now!
            </h2>
            <form className="space-y-4 p-6 ">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                defaultValue=""
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Last Education:
                </option>
                <option>High School</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD</option>
              </select>
              <input
                type="text"
                placeholder="Preferred Country"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="btn-effect w-full font-semibold text-sm text-white"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* we offered one stop solution section */}
      {/* use dark mode */}
      <div className="bg-gray-50  dark:bg-slate-800">
        <div className="min-h-screen md:h-[500px] lg:h-[500px] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-color mb-12 dark:text-white">
              We Offer One Stop Solution
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* <!-- Card 1 --> */}
              <div className="card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white ">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Card 2 --> */}
              <div className=" card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Card 3 --> */}
              <div className=" card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Card 4 --> */}
              <div className=" card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Card 5 --> */}
              <div className=" card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Card 6 --> */}
              <div className=" card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Card 7 --> */}
              <div className=" card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- Card 8 --> */}
              <div className=" card">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Visa Application Support
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 dark:text-white">
                      Pre-Departure Information
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <footer className="bg-gray-100 text-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Dream Study International
              </h3>
              <p className="mb-4">
                We are renowned education consultancy for prospective students
                who would like to study in CANADA, UK, USA, Australia, Sweden,
                Netherlands, Denmark & other European Countries.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Countries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Study Destinations</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Study in Canada
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Study in USA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Study in UK
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Study in Australia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Study in Germany
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg bg-white shadow-sm shadow-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-lg pr-4">Our Address :</h4>
              <div className="text-wrap ">
                <p className="text-semibold text-lg">Gulshan 02,</p>
                <p>
                  House-12B, Lift-04, Flat-4A, Kamal Attaturk Avenue,
                  Gulshan-02, Dhaka-1212.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex border-t border-gray-800 p-2 flex-col sm:justify-center sm:items-center justify-between layoutbg-color items-center text-gray-400 max-w-7xl">
        <div>
          <p className="text-sm md:text-lg lg:text-lg">
            &copy; {new Date().getFullYear()} Dream Study International. All
            Rights Reserved.
          </p>
        </div>
        <div>
          <ul className="space-x-4 flex items-center justify-center">
            <li>
              <a href="#" className="hover:text-blue-400 mouse-effect">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 mouse-effect">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 mouse-effect">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
