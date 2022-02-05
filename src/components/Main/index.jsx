import styles from "./styles.module.css";
import img from "../Images/image.png";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <img
          src={img}
          style={{
            width: 100,
            height: 90,
            marginRight: 100,
            marginLeft: 50,
            marginBottom: 12,
            marginTop: 12,
          }}
        />

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <button type="button" class="btn btn-secondary ml-4 mr-5">
                SERVICES
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-secondary mr-5">
                ABOUT US
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-secondary mr-5">
                SUPPORT
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-secondary mr-5">
                CONTACT US
              </button>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-secondary ml-4 mr-4" type="submit">
              SEARCH
            </button>
          </form>
          <ul class="nav justify-content-end">
            <li class="nav-item active">
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <h1>
        <hr />
        <center>WELCOME</center>
      </h1>
    </div>
  );
};

export default Main;
