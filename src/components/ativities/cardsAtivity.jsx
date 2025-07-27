import { Card, Text } from 'rsuite'
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"
import { useState } from 'react'
import DrawerAtivity from './drawerAtivity'

const AtivityCard = ({ setSeletedAtivity, ativity }) => {

    const [open, setOpen] = useState(false)
    const [openWithHeader, setOpenWithHeader] = useState(false)

    return (
       <div>
         <Card width={320} shaded="hover">
            <Card.Header className='m-0 p-0' as="div">
                <div className='d-flex w-100 justify-content-between p-1 m-0'>
                    <h5 onClick={() => setOpen(true)} className='w-100 mt-auto mb-auto text-break'>Nome</h5>
                    <div className="d-flex gap-1">
                        <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#editcontent" className="btn mt-auto mb-auto btn-outline-light text-dark p-1 rounded-circle"><CiEdit className='fs-2' /></button>
                        <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#remcontent" className="btn mt-auto mb-auto btn-danger p-1 rounded-circle"><AiOutlineDelete className='fs-2' /></button>
                    </div>
                </div>
            </Card.Header>
            <Card.Footer className='m-0' onClick={() => setOpen(true)}>
                <Text muted>Joined in January 2023</Text>
            </Card.Footer>
        </Card>
        <DrawerAtivity open={open} setOpen={setOpen} openWithHeader={openWithHeader} setOpenWithHeader={setOpenWithHeader} />
       </div>
    )
}

export default AtivityCard