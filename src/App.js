import {
  Container,
  Row,
  Col,
  Dropdown,
  Figure,
  Breadcrumb,
  Carousel,
  ListGroup,
  Jumbotron,
  Button,
  Form,
  Image,
  Modal
} from 'react-bootstrap'
import React from 'react'

function Pop(props){
return(
  <Modal{...props}>
    <Modal.Header>
      <Modal.Title>Login</Modal.Title>
      <button type='button' style={{border:'none', background:'none'}} onClick={props.onHide}>x</button>
    </Modal.Header>
    <Modal.Body>Anda Berhasil Login</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.onHide}>
        Close
      </Button>
      <Button variant="primary" onClick={props.onHide}>
        Save Username & Password
      </Button>
    </Modal.Footer>
  </Modal>
)
};

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Row style={{backgroundColor:'black'}}>
        <Col sm='10'>
          <Dropdown>
            <Dropdown.Toggle>
              Pilih Bahasa
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Indonesia</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
        <Figure>
          <Figure.Image width='50 ' src='https://png.pngtree.com/svg/20161113/ef1b24279e.png'/>
          <Figure.Caption style={{color:'white'}}>
            Alan Saputra
          </Figure.Caption>
        </Figure>
        </Col>
      </Row>
      <Container style={{marginRight:15}}>
        <Row>
          <Col xs={{offset:7, span:5}} style={{backgroundColor:'aliceblue'}}>
            <Breadcrumb>
              <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
              <Breadcrumb.Item href='#'>Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <Container style={{align:'center',marginTop:30}}>
      <Row>
        <Col></Col>
        <Col md='8'>
          <Carousel>
            <Carousel.Item>
              <img width='100%' src='https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600'/>
              <Carousel.Caption>
                <p>Sani Rizki Fauzi Tegaskan Menkal Pemain Timnas Indonesia U-23
                Tetap Bagus</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img  width='100%' src='https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600'/>
              <Carousel.Caption>
                <p>Neymar PSG(Paris Saint Germain)</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width='100%' src='https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600'/>
              <Carousel.Caption>
                <p>Inggris Mau Jadi Tim Terbaik Di Dunia</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
      </Container>
      <Container  style={{margin:15}}>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item disabled>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col style={{backgroundColor:'whitesmoke'}}>
            <Jumbotron style={{marginTop:40}}>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <p><Button variant='primary'>Read More</Button></p>
            </Jumbotron>
          </Col>
          <Col style={{textAlign:'center'}}>
            <Image width="75" src='https://www.clipartkey.com/mpngs/m/96-965159_transparent-login-logo-clipart-png-download-my-account.png' roundedCircle/>
            <h3>Silahkan Login</h3>
            <Form style={{textAlign:'justify'}}>
              <Form.Group>
                <Form.Control type='email' placeholder='Masukan email'/>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Control type='password' placeholder='Password'/>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Check type='checkbox' label='Term & Condition'/>
              </Form.Group>
              <br/>
              <Form.Group>
                <Button  onClick={() => setModalShow(true)} type='button' variant='primary'>Login</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Pop show={modalShow} onHide={() => setModalShow(false)}/>
      </Container>
    </div>
  );
}

export default App;
