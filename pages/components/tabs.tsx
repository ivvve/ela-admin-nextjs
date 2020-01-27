import Layout from "../../components/layout/layout";

export default function Tabs() {
  return (
    <Layout title='title'>

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4>Default Tab</h4>
            </div>
            <div className="card-body">
              <div className="default-tab">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                       href="#nav-home" role="tab" aria-controls="nav-home"
                       aria-selected="true">Home</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                       href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab"
                       href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                  </div>
                </nav>
                <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                       aria-labelledby="nav-home-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                      stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                      williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip
                      placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher
                      voluptate nisi .</p>
                  </div>
                  <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                       aria-labelledby="nav-profile-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                      stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                      williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip
                      placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher
                      voluptate nisi .</p>
                  </div>
                  <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                       aria-labelledby="nav-contact-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                      stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                      williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip
                      placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher
                      voluptate nisi .</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4>Custom Tab</h4>
            </div>
            <div className="card-body">
              <div className="custom-tab">

                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="custom-nav-home-tab" data-toggle="tab"
                       href="#custom-nav-home" role="tab" aria-controls="custom-nav-home"
                       aria-selected="true">Home</a>
                    <a className="nav-item nav-link" id="custom-nav-profile-tab" data-toggle="tab"
                       href="#custom-nav-profile" role="tab" aria-controls="custom-nav-profile"
                       aria-selected="false">Profile</a>
                    <a className="nav-item nav-link" id="custom-nav-contact-tab" data-toggle="tab"
                       href="#custom-nav-contact" role="tab" aria-controls="custom-nav-contact"
                       aria-selected="false">Contact</a>
                  </div>
                </nav>
                <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="custom-nav-home" role="tabpanel"
                       aria-labelledby="custom-nav-home-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                      stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                      williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip
                      placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher
                      voluptate nisi .</p>
                  </div>
                  <div className="tab-pane fade" id="custom-nav-profile" role="tabpanel"
                       aria-labelledby="custom-nav-profile-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                      stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                      williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip
                      placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher
                      voluptate nisi .</p>
                  </div>
                  <div className="tab-pane fade" id="custom-nav-contact" role="tabpanel"
                       aria-labelledby="custom-nav-contact-tab">
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                      stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                      williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip
                      placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher
                      voluptate nisi .</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4>Centered Tabs and Pills</h4>
            </div>
            <div className="card-body">
              <p className="text-muted m-b-15">To center/justify the tabs and pills, use the
                <code>.nav-justified</code> class.</p>

              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                     role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                     role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                     role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                     aria-labelledby="pills-home-tab">
                  <h3>Home</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis, fugit pariatur
                    minima! Dolorum modi pariatur aperiam quas odio nulla, illo necessitatibus dolor a.
                  </p>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                     aria-labelledby="pills-profile-tab">
                  <h3>Profile</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis, fugit pariatur
                    minima! Dolorum modi pariatur aperiam quas odio nulla, illo necessitatibus dolor a.
                  </p>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                     aria-labelledby="pills-contact-tab">
                  <h3>Cotanct</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis, fugit pariatur
                    minima! Dolorum modi pariatur aperiam quas odio nulla, illo necessitatibus dolor a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4>Toggleable / Dynamic Tabs</h4>
            </div>
            <div className="card-body">
              <p className="text-muted m-b-15">To make the tabs toggleable, add the <code>data-toggle="tab"</code>
                attribute to each link. Then add a <code>.tab-pane</code> class with a unique ID for every
                tab and wrap them inside a
                <code>&lt;div&gt;</code> element with class <code>.tab-content</code>. If you want the tabs
                to fade in and out when clicking on them, add the <code>.fade</code> class to <code>.tab-pane</code>:
              </p>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                     aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                     aria-controls="profile" aria-selected="false">Menu 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                     aria-controls="contact" aria-selected="false">Menu 2</a>
                </li>
              </ul>
              <div className="tab-content pl-3 p-1" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h3>Home</h3>
                  <p>Some content here.</p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <h3>Menu 1</h3>
                  <p>Some content here.</p>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <h3>Menu 2</h3>
                  <p>Some content here.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
