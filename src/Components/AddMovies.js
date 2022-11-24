import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddMovie } from '../Redux/SliceMovie';


const Addmovie=()=> {
    const [newmovie,setNewmovie]=useState({
        id: uuidv4()

    })
const handlechange=(e)=>{
    setNewmovie({...newmovie,[e.target.name]:e.target.value})

}
const dispatch= useDispatch()
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input onChange={handlechange} name='title' placeholder='type text'/>
        <input onChange={handlechange} name='description' placeholder='type description'/>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={()=>dispatch(AddMovie(newmovie))}>Add Movies</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Addmovie;