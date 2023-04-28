import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const { name, email, requirement } = data;
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
      redirect: "follow",
    };

    fetch("http://65.2.186.108:3001/saveData", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // console.log(data);
    
  };

  return (
    <>
      <main role="main">
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-5">Contact Us</h1>
            <p style={{ fontSize: 21 }}>
              If you have any requirement about Develop website and Site
              Reliability and Many other things Fill this From Given Below My
              Team Will Contact You Shortly.
            </p>
            <p>
              <a class="btn btn-primary btn-sm" href="#" role="button">
                RP &raquo;
              </a>
            </p>
          </div>
        </div>
      </main>
      <div class="container" style={{ marginTop: -30 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            <label>Enter Your Name </label>
            <input
              {...register("name")}
              type="name"
              class="form-control"
              id=""
              placeholder="Enter Name"
            />
          </div>
          <div class="form-group">
            <label>Enter Your Email Id </label>
            <input
              {...register("email")}
              type="email"
              class="form-control"
              id=""
              placeholder="Enter Email Id"
            />
          </div>
          <div class="form-group">
            <label>Enter Your Requirement</label>
            <textarea
              {...register("meassge")}
              class="form-control"
              id=""
              rows="3"
              placeholder="Enter Requirement"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Contact;
