import { Card, Text } from 'rsuite'
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"

const AtivityCard = ({ setSeletedAtivity, ativity }) => {
    return (
        <Card width={320} shaded="hover">
            <Card.Header as="div">
                <div className='d-flex justify-content-between'>
                    <h5 className='mt-auto mb-auto text-break'>Nome</h5>
                    <div className="d-flex gap-1">
                        <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#editcontent" className="btn mt-auto mb-auto btn-outline-light text-dark p-1 rounded-circle"><CiEdit className='fs-2'/></button>
                        <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#remcontent" className="btn mt-auto mb-auto btn-danger p-1 rounded-circle"><AiOutlineDelete className='fs-2'/></button>
                    </div>
                </div>
            </Card.Header>
            <Card.Footer>
                <Text muted>Joined in January 2023</Text>
            </Card.Footer>
        </Card>
    )
}

export default AtivityCard