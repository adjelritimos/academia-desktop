import { Card, Text } from 'rsuite'
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"
import { useState } from 'react'
import DrawerAtivity from './drawerAtivity'
import EditAtivity from './editclass'
import RemAtivity from './remclass'

const AtivityCard = ({ setSeletedAtivity, ativity, seletedAtivity, setAtivities, setLoading, setMessage }) => {

    const [open, setOpen] = useState(false)
    const [openWithHeader, setOpenWithHeader] = useState(false)

    return (
        <div>
            <Card className='w-100' style={{ height: '200px' }} width={320} shaded="hover">
                <Card.Header className='m-0 p-0' as="div">
                    <div className='d-flex w-100 justify-content-between p-1 m-0'>
                        <h5 onClick={() => setOpen(true)} className='w-100 mt-auto mb-auto text-break'> {ativity.title} </h5>
                        <div className="d-flex gap-1">
                            <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#editativity" className="btn mt-auto mb-auto btn-outline-light text-dark p-1 rounded-circle"><CiEdit className='fs-2' /></button>
                            <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#remativity" className="btn mt-auto mb-auto btn-danger p-1 rounded-circle"><AiOutlineDelete className='fs-2' /></button>
                        </div>
                    </div>
                </Card.Header>
                <div className='w-100 h-100' onClick={() => setOpen(true)}></div>
                <Card.Footer className='m-0 mt-auto' onClick={() => setOpen(true)}>
                    <Text muted>{ativity.data.split('T')[0]}</Text>
                </Card.Footer>
            </Card>
            <DrawerAtivity open={open} setOpen={setOpen} openWithHeader={openWithHeader} setOpenWithHeader={setOpenWithHeader} />
            <EditAtivity seletedAtivity={seletedAtivity} setAtivities={setAtivities} setLoading={setLoading} setMessage={setMessage} />
            <RemAtivity ativityId={seletedAtivity?.id} setAtivities={setAtivities} setLoading={setLoading} setMessage={setMessage} />
        </div>
    )
}

export default AtivityCard