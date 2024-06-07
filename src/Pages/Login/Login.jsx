import img from "../../assets/ils_08.svg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <section className=" lg:w-1/2 text-center lg:text-left">
          <div>
            <img src={img} alt="" />
          </div>
        </section>
        <section className="card shrink-0 w-full p-12 lg:w-1/2 shadow-2xl bg-white">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </section>
        <div>
          <div className="form-wrapper">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo/deski_01.svg" alt="" />
                </a>
              </div>
              <a href="index.html" className="font-rubik go-back-button">
                Go to home
              </a>
            </div>
            <form action="#" className="user-data-form mt-80 md-mt-40">
              <h2>
                Hi buddy, welcome <br /> Back!
              </h2>
              <p className="header-info pt-30 pb-50">
                Still do not have an account? <a href="sign-up.html">Sign up</a>
              </p>

              <div className="row">
                <div className="col-12">
                  <div className="input-group-meta mb-80 sm-mb-70">
                    <label>Email</label>
                    <input type="email" placeholder="bolcovfed@ce.edu" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group-meta mb-15">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="pass_log_id"
                    />
                    <span className="placeholder_icon">
                      <span className="passVicon">
                        <img src="images/icon/view.svg" alt="" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                    <div>
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Keep me logged in</label>
                    </div>
                    <a href="#">Forget Password?</a>
                  </div>
                </div>
                <div className="col-12">
                  <button className="theme-btn-one mt-50 mb-50">Login</button>
                </div>
                <div className="col-12">
                  <p className="text-center font-rubik copyright-text">
                    © Copyright 2021 deski
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
