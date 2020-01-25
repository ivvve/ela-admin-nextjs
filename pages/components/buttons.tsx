import Layout from "../../components/layout/layout";

export default function Buttons() {
  return (
    <Layout title='Buttons'>

      <div className="buttons">
        <div className="row">
          <div className="col-md-6">

            <div className="card">
              <div className="card-header">
                <strong>Badges </strong>
                <small>Use this class
                  <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code> or <code>&lt;input&gt;</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-link">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Button tags </strong>
                <small>Use this class
                  <code>.btn</code> or <code>&lt;button&gt;</code>
                </small>
              </div>
              <div className="card-body">
                <a className="btn btn-primary" href="#" role="button">Link</a>
                <button className="btn btn-danger" type="submit">Button</button>
                <input className="btn btn-info" type="button" value="Input"/>
                <input className="btn btn-success" type="submit" value="Submit"/>
                <input className="btn btn-warning" type="reset" value="Reset"/>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Disabled state </strong>
                <small>Use this class
                  <code>disabled="disabled"</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary" disabled>Primary</button>
                <button type="button" className="btn btn-secondary" disabled>Secondary</button>
                <button type="button" className="btn btn-success" disabled>Success</button>
                <button type="button" className="btn btn-danger" disabled>Danger</button>
                <button type="button" className="btn btn-warning" disabled>Warning</button>
                <button type="button" className="btn btn-info" disabled>Info</button>
                <button type="button" className="btn btn-link" disabled>Link</button>
              </div>
            </div>


            <div className="card">
              <div className="card-header">
                <strong>Button with Icons </strong>
                <small>Use <code>&lt;i&gt;</code></small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary"><i className="fa fa-star"></i>&nbsp; Primary</button>
                <button type="button" className="btn btn-secondary"><i className="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
                <button type="button" className="btn btn-success"><i className="fa fa-magic"></i>&nbsp; Success</button>
                <button type="button" className="btn btn-warning"><i className="fa fa-map-marker"></i>&nbsp; Warning</button>
                <button type="button" className="btn btn-danger"><i className="fa fa-rss"></i>&nbsp; Danger</button>
                <button type="button" className="btn btn-link"><i className="fa fa-link"></i>&nbsp; Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Small Button </strong>
                <small>Use this class
                  <code>.btn-sm</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary btn-sm">Primary</button>
                <button type="button" className="btn btn-secondary btn-sm">Secondary</button>
                <button type="button" className="btn btn-success btn-sm">Success</button>
                <button type="button" className="btn btn-warning btn-sm">Warning</button>
                <button type="button" className="btn btn-danger btn-sm">Danger</button>
                <button type="button" className="btn btn-link btn-sm">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Small Button with Icons </strong>
                <small>Use this class
                  <code>.btn-sm</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary btn-sm"><i className="fa fa-star"></i>&nbsp; Primary</button>
                <button type="button" className="btn btn-secondary btn-sm"><i className="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
                <button type="button" className="btn btn-success btn-sm"><i className="fa fa-magic"></i>&nbsp; Success</button>
                <button type="button" className="btn btn-warning btn-sm"><i className="fa fa-map-marker"></i>&nbsp; Warning</button>
                <button type="button" className="btn btn-danger btn-sm"><i className="fa fa-rss"></i>&nbsp;Danger</button>
                <button type="button" className="btn btn-link btn-sm"><i className="fa fa-link"></i>&nbsp; Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Large Button </strong>
                <small>Use this class
                  <code>.btn-lg</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary btn-lg">Primary</button>
                <button type="button" className="btn btn-secondary btn-lg">Secondary</button>
                <button type="button" className="btn btn-success btn-lg">Success</button>
                <button type="button" className="btn btn-warning btn-lg">Warning</button>
                <button type="button" className="btn btn-danger btn-lg">Danger</button>
                <button type="button" className="btn btn-link btn-lg">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Large Active Button </strong>
                <small>Use this class
                  <code>.btn-lg .active</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary btn-lg active">Primary</button>
                <button type="button" className="btn btn-secondary btn-lg active">Secondary</button>
                <button type="button" className="btn btn-success btn-lg active">Success</button>
                <button type="button" className="btn btn-warning btn-lg active">Warning</button>
                <button type="button" className="btn btn-danger btn-lg active">Danger</button>
                <button type="button" className="btn btn-link btn-lg active">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Block Level Buttons </strong>
                <small>Use this class
                  <code>.btn-block</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>

                <button type="button" className="btn btn-primary btn-lg btn-block">Primary</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Secondary</button>
                <button type="button" className="btn btn-success btn-lg btn-block">Success</button>
                <button type="button" className="btn btn-warning btn-lg btn-block">Warning</button>
                <button type="button" className="btn btn-danger btn-lg btn-block">Danger</button>
                <button type="button" className="btn btn-link btn-lg btn-block">Link</button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <strong>Outline Buttons </strong>
                <small>Use this class
                  <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code> or <code>&lt;input&gt;</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary">Primary</button>
                <button type="button" className="btn btn-outline-secondary">Secondary</button>
                <button type="button" className="btn btn-outline-success">Success</button>
                <button type="button" className="btn btn-outline-danger">Danger</button>
                <button type="button" className="btn btn-outline-warning">Warning</button>
                <button type="button" className="btn btn-outline-info">Info</button>
                <button type="button" className="btn btn-outline-link">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Button tags </strong>
                <small>Use this class
                  <code>.btn</code> or <code>&lt;button&gt;</code>
                </small>
              </div>
              <div className="card-body">
                <a className="btn btn-outline-primary" href="#" role="button">Link</a>
                <button className="btn btn-outline-danger" type="submit">Button</button>
                <input className="btn btn-outline-info" type="button" value="Input"/>
                <input className="btn btn-outline-success" type="submit" value="Submit"/>
                <input className="btn btn-outline-warning" type="reset" value="Reset"/>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Disabled state </strong>
                <small>Use this class
                  <code>disabled="disabled"</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary" disabled>Primary</button>
                <button type="button" className="btn btn-outline-secondary" disabled>Secondary</button>
                <button type="button" className="btn btn-outline-success" disabled>Success</button>
                <button type="button" className="btn btn-outline-danger" disabled>Danger</button>
                <button type="button" className="btn btn-outline-warning" disabled>Warning</button>
                <button type="button" className="btn btn-outline-info" disabled>Info</button>
                <button type="button" className="btn btn-outline-link" disabled>Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Button with Icons </strong>
                <small>Use <code>&lt;i&gt;</code></small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary"><i className="fa fa-star"></i>&nbsp; Primary</button>
                <button type="button" className="btn btn-outline-secondary"><i className="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
                <button type="button" className="btn btn-outline-success"><i className="fa fa-magic"></i>&nbsp; Success</button>
                <button type="button" className="btn btn-outline-warning"><i className="fa fa-map-marker"></i>&nbsp; Warning</button>
                <button type="button" className="btn btn-outline-danger"><i className="fa fa-rss"></i>&nbsp; Danger</button>
                <button type="button" className="btn btn-outline-link"><i className="fa fa-link"></i>&nbsp; Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Small Button </strong>
                <small>Use this class
                  <code>.btn-sm</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary btn-sm">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">Secondary</button>
                <button type="button" className="btn btn-outline-success btn-sm">Success</button>
                <button type="button" className="btn btn-outline-warning btn-sm">Warning</button>
                <button type="button" className="btn btn-outline-danger btn-sm">Danger</button>
                <button type="button" className="btn btn-outline-link btn-sm">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Small Button with Icons </strong>
                <small>Use this class
                  <code>.btn-sm</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary btn-sm"><i className="fa fa-star"></i>&nbsp; Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-magic"></i>&nbsp; Success</button>
                <button type="button" className="btn btn-outline-warning btn-sm"><i className="fa fa-map-marker"></i>&nbsp; Warning</button>
                <button type="button" className="btn btn-outline-danger btn-sm"><i className="fa fa-rss"></i>&nbsp;Danger</button>
                <button type="button" className="btn btn-outline-link btn-sm"><i className="fa fa-link"></i>&nbsp; Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Large Button </strong>
                <small>Use this class
                  <code>.btn-lg</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary btn-lg">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg">Secondary</button>
                <button type="button" className="btn btn-outline-success btn-lg">Success</button>
                <button type="button" className="btn btn-outline-warning btn-lg">Warning</button>
                <button type="button" className="btn btn-outline-danger btn-lg">Danger</button>
                <button type="button" className="btn btn-outline-link btn-lg">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Large Active Button </strong>
                <small>Use this class
                  <code>.btn-lg .active</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary btn-lg active">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg active">Secondary</button>
                <button type="button" className="btn btn-outline-success btn-lg active">Success</button>
                <button type="button" className="btn btn-outline-warning btn-lg active">Warning</button>
                <button type="button" className="btn btn-outline-danger btn-lg active">Danger</button>
                <button type="button" className="btn btn-outline-link btn-lg active">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <strong>Block Level Buttons </strong>
                <small>Use this class
                  <code>.btn-block</code>
                </small>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-primary btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Block level button</button>

                <button type="button" className="btn btn-outline-primary btn-lg btn-block">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Secondary</button>
                <button type="button" className="btn btn-outline-success btn-lg btn-block">Success</button>
                <button type="button" className="btn btn-outline-warning btn-lg btn-block">Warning</button>
                <button type="button" className="btn btn-outline-danger btn-lg btn-block">Danger</button>
                <button type="button" className="btn btn-outline-link btn-lg btn-block">Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
