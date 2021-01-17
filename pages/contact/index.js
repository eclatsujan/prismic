import React, { useState, useRef } from "react";
import config from "../../config";

function index() {
  // const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const [errors, setError] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    price_range: "",
    messsage: "",
    error: true,
  });
  const errString = "This field is required";
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState({
    Web_Development: false,
    Mobile_Developemnt: false,
    UI_UX_Design: false,
    Creating_Marketing: false,
    Hosting_Solutions: false,
    Other: false,
  });
  const [price_range, setPriceRange] = useState("");
  const [message, setMessage] = useState("");

  const [sectionShow, setSectionShow] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const getCurretSection = () => {
    let currentSection;
    var myState = {};
    for (var i = 1; i < 5; i++) {
      if (sectionShow[i]) {
        currentSection = i;
      }
      myState[i] = false;
    }
    return [myState, currentSection];
  };

  const goBack = () => {
    let [myState, currentSection] = getCurretSection();
    myState[currentSection - 1] = true;
    setSectionShow(myState);
  };
  const goNext = () => {
    let [myState, currentSection] = getCurretSection();
    myState[currentSection + 1] = true;
    setSectionShow(myState);
  };
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const sectionOneValidate = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError((prevState) => ({
        ...prevState,
        name: "Enter the  name",
        error: true,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        name: "",
        error: false,
      }));
    }
    if (!validateEmail(email)) {
      setError((prevState) => ({
        ...prevState,
        error: true,
        email: "Enter a valid email",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        email: "",
        error: false,
      }));
    }
    if (phone.length < 3) {
      setError((prevState) => ({
        ...prevState,
        phone: "Enter the valid phone",
        error: true,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        phone: "",
        error: false,
      }));
    }
    console.log(errors.name.length);
    console.log(errors.email.length);
    console.log(errors.phone.length);

    // if (errors.error == false) {
    //   goNext();
    // }

    if (
      errors.name.length == 0 &&
      errors.email.length == 0 &&
      errors.phone.length == 0
    ) {
      goNext();
    }
    //     if (
    //       !errors.name.length > 2 &&
    //       !errors.email.length > 2 &&
    //       !errors.phone.length > 2
    //     ) {
    //       console.log(!errors.email.length > 2);
    //       console.log("errors");

    //       goNext();
    //     }
  };
  const sectionTwoValidate = (e) => {
    e.preventDefault();
    var field_exist = false;
    for (var key in services) {
      console.log(services[key]);
      if (services[key] == true) {
        field_exist = true;
      }
    }
    if (!field_exist) {
      setError((prevState) => ({
        ...prevState,
        services: errString,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        services: "",
      }));
    }
    if (field_exist) {
      console.log();
      goNext();
    }
  };

  const sectionThreevalidate = (e) => {
    e.preventDefault();
    if (price_range.length < 1) {
      setError((prevState) => ({
        ...prevState,
        price_range: errString,
      }));
    }
    if (price_range.length > 2) {
      goNext();
    }
  };
  const sectionFourvalidate = (e) => {
    e.preventDefault();

    if (message.length < 1) {
      setError((prevState) => ({
        ...prevState,
        messsage: errString,
      }));
    }
    if (message.length > 2) {
      saveData();
    }
  };

  const saveData = (e) => {
    setLoading(true);
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(price_range);
    console.log(message);
    console.log(services);
    function trueValues(obj) {
      let newObj = [];
      for (var key in obj) {
        if (obj[key] === true) newObj.push(key);
      }

      return newObj;
    }
    let required_services = trueValues(services).toString();
    console.log(required_services);
    axios
      .post(`${config.URL}/quotes`, {
        name,
        phone,
        email,
        price: price_range,
        message,
        services: required_services,
      })
      .then(function (response) {
        setLoading(false);
        setSectionShow({
          1: true,
          2: false,
          3: false,
          4: false,
        });
        setShowAlert(true);
        setName("");
        setEmail("");
        setPriceRange("");
        setMessage("");
        setServices("");
        setPhone("");

        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <header className="row d-flex align-items-center " style={{ zIndex: 2 }}>
        <div className="col-md-1">
          <a href="#">
            <img src="img/favicon.svg" className="img-fluid" alt />
          </a>
        </div>
        <div className="col-md-11">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-12 rd-pag">
            <span>Request A Quote</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47.625"
                height="16.5"
                viewBox="-18.837 -6.179 47.625 16.5"
              >
                <path
                  className="stroke arrow-line"
                  fill="none"
                  stroke="#000"
                  strokeWidth=".2"
                  strokeMiterlimit={10}
                  d="M-17.087-5.491h40.858v8.756"
                  style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                />
                <path
                  className="arrow arrow-triangle"
                  d="M27.913 2.052l-4.142 7.182-4.148-7.182h8.29z"
                  style={{ opacity: 1 }}
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="main-contain">
          <div className="container">
            <div className="row">
              <div className="col-md-12 title">
                <h1>
                  GET A{" "}
                  <span>
                    QUOTE
                    {/* murmur at but proud, designed, crafted, created w/ sweat, done and wow */}
                  </span>
                </h1>
              </div>
              {showAlert && (
                <div class="alert alert-success" role="alert">
                  We Will contact you soon
                </div>
              )}

              <form
                className="col-md-9 rdform"
                // onSubmit={handleSubmit(onSubmit)}
              >
                <div
                  style={{
                    display: sectionShow[1] ? "" : "none",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={(val) => setName(val.target.value)}
                      // ref={register({
                      //   required: "Required",
                      // })}
                    />
                    {errors.name && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email<span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={(val) => setEmail(val.target.value)}
                      // ref={register({
                      //   required: "Required",
                      // })}
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      value={phone}
                      onChange={(val) => setPhone(val.target.value)}
                      // ref={register({
                      //   required: "Required",
                      // })}
                    />
                    {errors.phone && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className="step-2"
                  style={{
                    display: sectionShow[2] ? "" : "none",
                  }}
                >
                  <ul className="class-form-radio row">
                    <li className="col-md-4">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultValue="Web_Development"
                          checked={services.Web_Development}
                          onChange={() =>
                            setServices((prevState) => ({
                              ...prevState,
                              Web_Development: !services.Web_Development,
                            }))
                          }
                        />
                        <div className="radio-style">
                          <div className="radio-style-img">
                            <img
                              src="img/contact/code.svg"
                              style={{ width: "3em" }}
                            />
                          </div>
                          <div className="radio-style-text">
                            <b>Web Development</b>
                          </div>
                          <div className="radio-style-text-description">
                            Frontend and Backend Development - NodeJS, Python,
                            Ruby on Rails, ReactJS, GraphQL
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-md-4">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue="Mobile Development"
                          name="service_type"
                          checked={services.Mobile_Developemnt}
                          onChange={() =>
                            setServices((prevState) => ({
                              ...prevState,
                              Mobile_Developemnt: !services.Mobile_Developemnt,
                            }))
                          }
                        />
                        <div className="radio-style">
                          <div className="radio-style-img">
                            <img
                              src="img/contact/smartphone.svg"
                              style={{ width: "3em" }}
                            />
                          </div>
                          <div className="radio-style-text">
                            <b>Mobile Development</b>
                          </div>
                          <div className="radio-style-text-description">
                            iOS and Android Native APP development -
                            Objective-C, Swift, Java
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-md-4">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue="UI/UX Design"
                          name="service_type"
                          checked={services.UI_UX_Design}
                          onChange={() =>
                            setServices((prevState) => ({
                              ...prevState,
                              UI_UX_Design: !services.UI_UX_Design,
                            }))
                          }
                          // ref={register({ required: true })}
                        />
                        <div className="radio-style">
                          <div className="radio-style-img">
                            <img
                              src="img/contact/computer.svg"
                              style={{ width: "3em" }}
                            />
                          </div>
                          <div className="radio-style-text">
                            <b>UI/UX Design</b>
                          </div>
                          <div className="radio-style-text-description">
                            Intuitive &amp; Engaging Designs - Wireframing,
                            High-Fidelity Prototyping
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-md-4">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue="Animated Videos"
                          name="service_type"
                          checked={services.Creating_Marketing}
                          onChange={() =>
                            setServices((prevState) => ({
                              ...prevState,
                              Web_Development: !services.Creating_Marketing,
                            }))
                          }
                          // ref={register({ required: true })}
                        />
                        <div className="radio-style">
                          <div className="radio-style-img">
                            <img
                              src="img/contact/magnifying-glass.svg"
                              style={{ width: "3em" }}
                            />
                          </div>
                          <div className="radio-style-text">
                            <b>Creative Marketing</b>
                          </div>
                          <div className="radio-style-text-description">
                            Animated Explainer Videos - Short animated video
                            used to explain a product/service
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-md-4">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue="Hosting Solutions"
                          name="service_type"
                          checked={services.Hosting_Solutions}
                          onChange={() =>
                            setServices((prevState) => ({
                              ...prevState,
                              Hosting_Solutions: !services.Hosting_Solutions,
                            }))
                          }
                          // ref={register({ required: true })}
                        />
                        <div className="radio-style">
                          <div className="radio-style-img">
                            <img
                              src="img/contact/vagueness.svg"
                              style={{ width: "3em" }}
                            />
                          </div>
                          <div className="radio-style-text">
                            <b>Hosting Solutions</b>
                          </div>
                          <div className="radio-style-text-description">
                            Secure Web Hosting - Dedicated Servers, Server
                            Clusters, Cloud Server, Linux, Windows
                          </div>
                        </div>
                      </label>
                    </li>
                    <li className="col-md-4">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue="Other"
                          name="service_type"
                          checked={services.Other}
                          onChange={() =>
                            setServices((prevState) => ({
                              ...prevState,
                              Other: !services.Other,
                            }))
                          }
                          // ref={register({ required: true })}
                        />
                        <div className="radio-style">
                          <div className="radio-style-img">
                            <img
                              src="img/contact/keyword.svg"
                              style={{ width: "3em" }}
                            />
                          </div>
                          <div className="radio-style-text">
                            <b>Other</b>
                          </div>
                          <div className="radio-style-text-description">
                            Emerging Technologies - Artificial Intelligence,
                            Computer Vision, Deep Learning, Chatbots
                          </div>
                        </div>
                      </label>
                    </li>
                    {errors.services && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </ul>
                </div>
                <div
                  className="step-3"
                  style={{
                    display: sectionShow[3] ? "" : "none",
                  }}
                >
                  <ul className="class-form-radio class-form-radio2">
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="budget"
                          defaultValue="$0 - 10K"
                          // ref={register({ required: true })}
                        />
                        <div className="radio-style-budget">
                          <div>$0 - 10K</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="budget"
                          defaultValue="$10 - 50K"
                          onChange={() => setPriceRange("$10 - 50K")}
                          // ref={register({ required: true })}
                        />
                        <div className="radio-style-budget">
                          <div>$10 - 50K</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="budget"
                          defaultValue="$50 - 100K"
                          onChange={() => setPriceRange("$50 - 100K")}

                          // ref={register({ required: true })}
                        />
                        <div className="radio-style-budget">
                          <div>$50 - 100K</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="budget"
                          defaultValue="$100K+"
                          onChange={() => setPriceRange("100K+")}

                          // ref={register({ required: true })}
                        />
                        <div className="radio-style-budget">
                          <div>$100K+</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="budget"
                          defaultValue="Unsure"
                          // ref={register({ required: true })}
                          onChange={() => setPriceRange("Unsure")}
                        />
                        <div className="radio-style-budget">
                          <div>Unsure</div>
                        </div>
                      </label>
                    </li>
                    {errors.price_range && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </ul>
                </div>
                <div
                  className="step-4"
                  style={{
                    display: sectionShow[4] ? "" : "none",
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="message">
                      Your Message<span>*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      className="form-control"
                      value={message}
                      onChange={(val) => setMessage(val.target.value)}
                      // ref={register({
                      //   required: "Required",
                      // })}
                    />
                    {errors.messsage && <span>This field is required</span>}
                    {loading && (
                      <div className="text-center">
                        <div className="loader "></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mar-20" />
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-between">
                    {sectionShow[1] ? (
                      <span></span>
                    ) : (
                      // <button className="btn btn-lg btn-outline-primary" disabled>BACK</button>
                      <button
                        className="btn btn-lg btn-outline-primary"
                        onClick={goBack}
                      >
                        BACK
                      </button>
                    )}
                    {sectionShow[4] ? (
                      <button
                        className="btn btn-lg btn-primary"
                        onClick={sectionFourvalidate}
                      >
                        Submit
                      </button>
                    ) : (
                      <>
                        {sectionShow[1] && (
                          <button
                            className="btn btn-lg btn-primary"
                            onClick={sectionOneValidate}
                          >
                            Next
                          </button>
                        )}
                        {sectionShow[2] && (
                          <button
                            className="btn btn-lg btn-primary"
                            onClick={sectionTwoValidate}
                          >
                            Next
                          </button>
                        )}
                        {sectionShow[3] && (
                          <button
                            className="btn btn-lg btn-primary"
                            onClick={sectionThreevalidate}
                          >
                            Next
                          </button>
                        )}
                        {/* 
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={goNext}
                        >
                          Next
                        </button> */}
                      </>
                    )}
                  </div>
                </div>
                {/* form close */}
              </form>
              <div className="col-md-3 contact-step">
                <div className={"swrap " + (sectionShow[1] && "active")}>
                  <div className="step-index">1</div>
                  <div className="step-text">
                    <div className="head">1. HOW CAN WE REACH YOU?</div>
                    <div>Let us know the best way to get in touch.</div>
                  </div>
                </div>
                <div className={"swrap " + (sectionShow[2] && "active")}>
                  <div className="step-index">2</div>
                  <div className="step-text">
                    <div className="head">2. HOW CAN WE HELP YOU?</div>
                    <div>Choose from a list of available services.</div>
                  </div>
                </div>
                <div className={"swrap " + (sectionShow[3] && "active")}>
                  <div className="step-index">3</div>
                  <div className="step-text">
                    <div className="head">3. WHAT IS YOUR BUDGET?</div>
                    <div>
                      Tell us about your budget and we'll recommend the best
                      option.
                    </div>
                  </div>
                </div>
                <div className={"swrap " + (sectionShow[4] && "active")}>
                  <div className="step-index">4</div>
                  <div className="step-text">
                    <div className="head">4. WHAT IS YOUR IDEA?</div>
                    <div>
                      In a few words, briefly describe your project or idea.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="whatwedo">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="title">What we do</span>
              </div>
              <div className="col-md-4">
                <div className="wwd-wrap">
                  <span>01</span>
                  <h2>If it doesn’t exist, we build it</h2>
                  <p>
                    The businesses that will thrive in the world of tomorrow
                    might not exist. We will build products or business from
                    scratch based on an industry gap or current inefficiency.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="wwd-wrap">
                  <span>02</span>
                  <h2>If its behind, we transform it</h2>
                  <p>
                    Innovating from within can be difficult to achieve. That’s
                    why we modernise existing business through completely
                    transforming their value and growth.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="wwd-wrap">
                  <span>03</span>
                  <h2>If its inefficient, we optimise it</h2>
                  <p>
                    We future proof already successful businesses by unlocking
                    untapped potential, growth opportunities and completely new
                    verticals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default index;
