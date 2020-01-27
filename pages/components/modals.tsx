import Layout from "../../components/layout/layout";

export default function Modals() {
  return (
    <Layout title='Modals'>

      <div className="card">
        <div className="card-header">
          <i className="mr-2 fa fa-align-justify"></i>
          <strong className="card-title" v-if="headerText">Modals</strong>
        </div>
        <div className="card-body">

          <button type="button" className="btn btn-primary mb-1" data-toggle="modal" data-target="#smallmodal">
            Small
          </button>

          <button type="button" className="btn btn-secondary mb-1" data-toggle="modal" data-target="#mediumModal">
            Medium
          </button>
          <button type="button" className="btn btn-success mb-1" data-toggle="modal" data-target="#largeModal">
            Large
          </button>
          <button type="button" className="btn btn-info mb-1" data-toggle="modal" data-target="#scrollmodal">
            Scrolling
          </button>
          <button type="button" className="btn btn-danger mb-1" data-toggle="modal" data-target="#staticModal">
            Static
          </button>

        </div>
      </div>


      <div className="modal fade" id="smallmodal" tabIndex={-1} role="dialog" aria-labelledby="smallmodalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="smallmodalLabel">Small Modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The
                plains zebra
                and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of
                subgenus
                Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are
                more
                horse-like. All three belong to the genus Equus, along with other living equids.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="mediumModal" tabIndex={-1} role="dialog" aria-labelledby="mediumModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mediumModalLabel">Medium Modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The
                plains zebra
                and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of
                subgenus
                Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are
                more
                horse-like. All three belong to the genus Equus, along with other living equids.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="largeModal" tabIndex={-1} role="dialog" aria-labelledby="largeModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="largeModalLabel">Large Modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The
                plains zebra
                and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of
                subgenus
                Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are
                more
                horse-like. All three belong to the genus Equus, along with other living equids.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="scrollmodal" tabIndex={-1} role="dialog" aria-labelledby="scrollmodalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="scrollmodalLabel">Scrolling Long Content Modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. <br/>

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.<br/>

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.<br/>

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.<br/>

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.<br/>

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.<br/>

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.<br/>

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.<br/>

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.<br/>

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.<br/>

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.<br/>

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.<br/>

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.<br/>

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.<br/>

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.<br/>

                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.<br/>

                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.<br/>

                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="staticModal" tabIndex={-1} role="dialog" aria-labelledby="staticModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticModalLabel">Static Modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                This is a static modal, backdrop click will not close it.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
