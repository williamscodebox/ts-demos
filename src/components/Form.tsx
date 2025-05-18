function Form() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    // Add your form submission logic here
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-end mr-10">
        <div className="border-3 rounded-2xl p-3 pt-5 pb-3 bg-gradient-to-r from-pink-100 via-red-50 to-purple-200 w-60">
          <div className="flex flex-col justify-between -mt-2">
            <label htmlFor="name">Name:</label>
            <input
              className="border-1 rounded-lg"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col mt-1 justify-between">
            <label htmlFor="email">Email:</label>
            <input
              className="border-1 rounded-lg"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col mt-1 justify-between">
            <label htmlFor="password">Password:</label>
            <input
              className="border-1 rounded-lg"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="mt-3 pt-1 flex justify-end ">
            <button
              className="border-2 rounded-xl p-1.5 pt-0.5 pb-1 text-xl bg-pink-200 text-black hover:bg-pink-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
