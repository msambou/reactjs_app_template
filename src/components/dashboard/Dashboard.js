import React from "react";

class Dashboard extends React.Component {
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
                <li class="breadcrumb-item active">Dashboard</li>
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
          <div class="mt-3"></div>

          <div class="row clearfix">
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="card state_w1">
                <div class="body d-flex justify-content-between">
                  <div>
                    <h5>2,365</h5>
                    <span>
                      <i class="fa fa-eye"></i> Post View
                    </span>
                  </div>
                  <span class="sparkbar-small">10,8,9,3,5,8,5</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="card state_w1">
                <div class="body d-flex justify-content-between">
                  <div>
                    <h5>365</h5>
                    <span>
                      <i class="fa fa-thumbs-up"></i> Likes
                    </span>
                  </div>
                  <span class="sparkbar-small">8,5,2,2,1,6,4,8</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="card state_w1">
                <div class="body d-flex justify-content-between">
                  <div>
                    <h5>65</h5>
                    <span>
                      <i class="fa fa-comment"></i> Comments
                    </span>
                  </div>
                  <span class="sparkbar-small">10,8,9,3,5,8,5</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="card state_w1">
                <div class="body d-flex justify-content-between">
                  <div>
                    <h5>2,055</h5>
                    <span>
                      <i class="fa fa-user"></i> Profile Views
                    </span>
                  </div>
                  <span class="sparkbar-small">6,3,8,5,1,2,4,9</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row clearfix">
            <div class="col-xl-8 col-lg-12 col-md-12">
              <div class="card">
                <div class="header">
                  <h2>Revenue</h2>
                  <ul class="header-dropdown">
                    <li class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i class="zmdi zmdi-more"></i>{" "}
                      </a>
                      <ul class="dropdown-menu dropdown-menu-right slideUp">
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Delete</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Report</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="body">
                  <p class="text-muted">
                    Revenue is the income that a business has from its normal
                    business activities, usually from the sale of goods and
                    services to customers.
                  </p>
                  <div
                    class="chart"
                    id="echart-rainfall"
                    style={{ height: 345 }}
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12">
              <div class="card">
                <div class="header">
                  <h2>ToDo List</h2>
                  <ul class="header-dropdown">
                    <li class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i class="zmdi zmdi-more"></i>{" "}
                      </a>
                      <ul class="dropdown-menu dropdown-menu-right slideUp">
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Delete</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Report</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="body todo_list">
                  <div class="form-group d-flex mb-1">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Type your task here..."
                      ></input>
                    </div>
                    <button
                      class="btn btn-primary ml-2"
                      type="button"
                      id="button-addon2"
                    >
                      Add
                    </button>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Walk the dog this evening
                      <span class="badge badge-primary badge-pill">x</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Go shopping at 3 PM
                      <span class="badge badge-primary badge-pill">x</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Keep coding 'till you're dead
                      <span class="badge badge-primary badge-pill">x</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Enjoy every moment you have
                      <span class="badge badge-primary badge-pill">x</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Sleep well tonight
                      <span class="badge badge-primary badge-pill">x</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Sleep well tonight
                      <span class="badge badge-primary badge-pill">x</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12">
              <div class="card">
                <div class="header">
                  <h2>Distribution</h2>
                  <ul class="header-dropdown">
                    <li class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i class="zmdi zmdi-more"></i>{" "}
                      </a>
                      <ul class="dropdown-menu dropdown-menu-right slideUp">
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Delete</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Report</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="body text-center">
                  <div id="chart-pie" class="c3_chart d_distribution"></div>
                  <button class="btn btn-primary mt-4 mb-4">View More</button>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-12 col-md-12">
              <div class="card">
                <div class="header">
                  <h2>Visitors Statistics</h2>
                  <ul class="header-dropdown">
                    <li class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i class="zmdi zmdi-more"></i>{" "}
                      </a>
                      <ul class="dropdown-menu dropdown-menu-right slideUp">
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Delete</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Report</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="body">
                  <div id="world-map-markers" class="jvector-map"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row clearfix">
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="card">
                <div class="header">
                  <h2>Browser Stats</h2>
                </div>
                <div class="body">
                  <table class="table mb-0">
                    <tbody>
                      <tr>
                        <td>Google Chrome</td>
                        <td class="align-right">
                          <span class="badge badge-lg badge-pill badge-success text-uppercase">
                            40%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Mozila Firefox</td>
                        <td class="align-right">
                          <span class="badge badge-lg badge-pill badge-primary text-uppercase">
                            30%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari</td>
                        <td class="align-right">
                          <span class="badge badge-lg badge-pill badge-tertiary text-uppercase">
                            15%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Internet Explorer</td>
                        <td class="align-right">
                          <span class="badge badge-lg badge-pill badge-primary text-uppercase">
                            15%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card">
                <div class="header">
                  <h2>Referrals</h2>
                </div>
                <div class="body">
                  <ul class="list-unstyled list-referrals">
                    <li>
                      <p>
                        <span class="value">2301</span>
                        <span class="text-muted float-right">
                          visits from Facebook
                        </span>
                      </p>
                      <div class="progress progress-xs">
                        <div
                          class="progress-bar bg-indigo"
                          data-transitiongoal="87"
                          aria-valuenow="87"
                          role="progressbar"
                          style={{ width: "87%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span class="value">2107</span>
                        <span class="text-muted float-right">
                          visits from Twitter
                        </span>
                      </p>
                      <div class="progress progress-xs">
                        <div
                          class="progress-bar bg-orange"
                          data-transitiongoal="34"
                          aria-valuenow="34"
                          role="progressbar"
                          style={{ width: "34%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span class="value">2308</span>
                        <span class="text-muted float-right">
                          visits from Search
                        </span>
                      </p>
                      <div class="progress progress-xs">
                        <div
                          class="progress-bar bg-purple"
                          data-transitiongoal="54"
                          aria-valuenow="54"
                          role="progressbar"
                          style={{ width: "54%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span class="value">1024</span>
                        <span class="text-muted float-right">
                          visits from Affiliates
                        </span>
                      </p>
                      <div class="progress progress-xs">
                        <div
                          class="progress-bar"
                          data-transitiongoal="67"
                          aria-valuenow="67"
                          role="progressbar"
                          style={{ width: "67%" }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="card">
                <div class="card-header py-4">
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-sm bg-purple">BM</span>
                    <div class="avatar-content">
                      <h5 class="h6 mb-0">Bettie Mavis</h5>
                      <small class="d-block text-muted">New York, US</small>
                    </div>
                  </div>
                </div>
                <div class="card-image">
                  <img
                    src="assets/images/image-gallery/5.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </div>
                <div class="card-body">
                  <div class="row mb-1">
                    <div class="col">
                      <div class="card-icon-actions card-icon-actions-lg">
                        <a href="javascript:void(0);" class="love active">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="javascript:void(0);">
                          <i class="fa fa-comment"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card-icon-actions card-icon-actions-lg text-right">
                        <a href="javascript:void(0);">
                          <i class="fa fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
                <div class="card-footer">
                  <div class="row ">
                    <div class="col-10">
                      <form class="card-comment-box">
                        <textarea
                          rows="1"
                          class="form-control"
                          placeholder="Add a comment..."
                        ></textarea>
                      </form>
                    </div>
                    <div class="col-2 text-right">
                      <div class="card-icon-actions card-icon-actions-lg">
                        <a
                          href="javascript:void(0);"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-h"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right py-0">
                          <a class="dropdown-item" href="javascript:void(0);">
                            Got to post
                          </a>
                          <a class="dropdown-item" href="javascript:void(0);">
                            Repost inappropriate
                          </a>
                          <a class="dropdown-item" href="javascript:void(0);">
                            Embed
                          </a>
                          <a class="dropdown-item" href="javascript:void(0);">
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="card">
                <div class="header">
                  <h2>Activities</h2>
                  <ul class="header-dropdown">
                    <li class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i class="zmdi zmdi-more"></i>{" "}
                      </a>
                      <ul class="dropdown-menu dropdown-menu-right slideUp">
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Delete</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Report</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="body">
                  <ul class="list-unstyled activity">
                    <li class="a_birthday">
                      <h4>Admin Birthday</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                      <small>1 months ago.</small>
                    </li>
                    <li class="a_code">
                      <h4>Code Change</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <small>1 week ago.</small>
                    </li>
                    <li class="a_contact">
                      <h4>Add New Contact</h4>
                      <code>maryamamiri@gmail.com</code>
                      <code>fideltonn@gmail.com</code>
                      <small>1 months ago.</small>
                    </li>
                    <li class="a_email">
                      <h4>New Email</h4>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                      </p>
                      <small>3 months ago.</small>
                    </li>
                    <li class="a_contact">
                      <h4>Add New Contact</h4>
                      <code>maryamamiri@gmail.com</code>
                      <small>1 months ago.</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
