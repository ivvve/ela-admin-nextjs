export default function Login() {
  return (
    <>
      <head>
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Ela Admin - HTML5 Admin Template</title>
        <meta name="description" content="Ela Admin - HTML5 Admin Template"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png"/>
        <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png"/>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"/>
        <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css"/>
        <link rel="stylesheet" href="assets/css/cs-skin-elastic.css"/>
        <link rel="stylesheet" href="assets/css/style.css"/>

        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet'
              type='text/css'/>
      </head>

      <body className="bg-dark">

      <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container">
          <div className="login-content">
            <div className="login-logo">
              <a href="index.html">
                <img className="align-content" src="images/logo.png" alt=""/>
              </a>
            </div>
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/> Remember Me
                  </label>
                  <label className="pull-right">
                    <a href="#">Forgotten Password?</a>
                  </label>

                </div>
                <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                <div className="social-login-content">
                  <div className="social-button">
                    <button type="button" className="btn social facebook btn-flat btn-addon mb-3">
                      <i className="ti-facebook"/>Sign in with facebook
                    </button>
                    <button type="button" className="btn social twitter btn-flat btn-addon mt-2">
                      <i className="ti-twitter"/>Sign in with twitter
                    </button>
                  </div>
                </div>
                <div className="register-link m-t-15 text-center">
                  <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
      <script src="assets/js/main.js"></script>

      </body>
    </>
  )
}
