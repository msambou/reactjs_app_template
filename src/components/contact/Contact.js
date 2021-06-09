import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div class="page">
        <div class="container-fluid">
          <div class="page_header">
            <div class="left">
              <h1>Dashboard</h1>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index-2.html">
                    <i class="fa fa-home"></i>
                  </a>
                </li>
                <li class="breadcrumb-item">App</li>
                <li class="breadcrumb-item active">Contact</li>
              </ol>
            </div>
            <div class="right">
              <div class="form-group">
                <div class="input-group input-group-transparent">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  ></input>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary btn-animated btn-animated-y"
              >
                <span class="btn-inner--visible">Create New</span>
                <span class="btn-inner--hidden">
                  <i class="fa fa-plus"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="mb-3"></div>

          <div class="row clearfix">
            <div class="col-lg-12 col-md-12">
              <div class="table-responsive">
                <table class="table table-hover mb-0 c_table">
                  <thead>
                    <tr>
                      <th class="w60">#</th>
                      <th>User</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th class="text-center">Favorite</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar1.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">John Smith</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-2583</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            johnsmith@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck2"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck2"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar3.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">Hossein Shams</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-5689</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            hosseinshams@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star text-warning"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck3"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck3"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar4.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">Maryam Amiri</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-9513</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            maryamamiri@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck4"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck4"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar6.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">Tim Hank</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-1212</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            timhank@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star text-warning"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck5"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck5"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar7.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">Fidel Tonn</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-2323</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            fideltonn@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck6"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck6"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar8.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">Gary Camara</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-1005</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            garycamara@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck7"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck7"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar9.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">Frank Camly</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-9999</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            frankcamly@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck8"
                          ></input>
                          <label
                            class="custom-control-label"
                            for="customCheck8"
                          >
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <img
                          src="assets/images/xs/avatar10.jpg"
                          class="avatar w30"
                          alt=""
                        ></img>
                        <span class="ml-2">Tim Hank</span>
                      </td>
                      <td>
                        <span class="phone">+1 264-625-1212</span>
                      </td>
                      <td>
                        <span class="email">
                          <a href="javascript:void(0);" title="">
                            timhank@gmail.com
                          </a>
                        </span>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-star"></i>
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
