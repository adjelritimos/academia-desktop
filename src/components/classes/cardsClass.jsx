import { Card, Text } from 'rsuite'
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"
import { useState } from 'react'
import DrawerClass from './drawerClass'
import EditClasse from './editclass'
import RemClasse from './remclass'

const CardClass = ({ setSeletedClass, classe, seletedClass, setClasses, setLoading, setMessage }) => {

    const [open, setOpen] = useState(false)
    const [openWithHeader, setOpenWithHeader] = useState(false)

    return (
        <div>
            <Card className='w-100' style={{ height: '200px' }} width={320} shaded="hover">
                <Card.Header className='m-0 p-0 ' as="div">
                    <div className='d-flex w-100 justify-content-between p-1 m-0'>
                        <h5 onClick={() => setOpen(true)} className='w-100 h-100 mt-auto mb-auto text-break'>{classe.title}</h5>
                        <div className="d-flex gap-1">
                            <button onClick={() => setSeletedClass(classe)} data-bs-toggle="modal" data-bs-target="#editclasse" className="btn mb-auto btn-outline-light text-dark p-1 rounded-circle"><CiEdit className='fs-2' /></button>
                            <button onClick={() => setSeletedClass(classe)} data-bs-toggle="modal" data-bs-target="#remclasse" className="btn mb-auto btn-danger p-1 rounded-circle"><AiOutlineDelete className='fs-2' /></button>
                        </div>
                    </div>
                </Card.Header>
                <div className='w-100 h-100' onClick={() => setOpen(true)}></div>
                <Card.Footer className='m-0 mt-auto' onClick={() => setOpen(true)}>
                    <Text onClick={() => setOpen(true)} muted> {classe.data.split('T')[0]} </Text>
                </Card.Footer>
            </Card>
            <DrawerClass classe={classe} open={open} setOpen={setOpen} openWithHeader={openWithHeader} setOpenWithHeader={setOpenWithHeader} />
            <EditClasse classe={seletedClass} setClasses={setClasses} setLoading={setLoading} setMessage={setMessage} />
            <RemClasse classeId={seletedClass?.id} setClasses={setClasses} setLoading={setLoading} setMessage={setMessage} />
        </div>
    )
}

export default CardClass