import * as React from 'react';
import { Accordion, Offcanvas } from 'react-bootstrap';
import logoCoinomix from '../../assets/images/coinimix-logo.svg';
import { TagData } from '../../types/articleType';
import { Link } from 'react-router-dom';
import './SidebarLeft.scss';

interface Props {
  tags: TagData[];
}

const SidebarLeft: React.FC<Props> = ({ tags }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <button className="header__burger" onClick={handleShow} />

    
    <Offcanvas show={show} onHide={handleClose} scroll={true} data-bs-theme="dark" className='bg-black' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logoCoinomix} alt='Coinomix Logo' className='header__logo' />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column flex-shrink-0 flush'>
          <Accordion alwaysOpen bsPrefix={'sidemunuaccordion'}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Tags</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {tags.map(tag =>
                      <li key={tag.id} className='sidebarleft__list'>
                        <Link to={`/${tag.attributes.slug}`} className='sidebarleft__link'>
                          {tag.attributes.name}
                        </Link>
                      </li>
                    )}
                    <li className='sidebarleft__list'>
                      <Link to='#' className='sidebarleft__link'>
                        All tags
                      </Link>
                    </li>
                  </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Link to='/blogs' className='sidebarleft__menu'>
            Blogs
          </Link>
          
        </Offcanvas.Body>
    </Offcanvas>
    </>
  );
}

export default SidebarLeft;