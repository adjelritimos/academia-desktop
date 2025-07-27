import { Drawer, Button, Placeholder } from 'rsuite'

const DrawerAtivity = ({ open, setOpen, ativity }) => {


    return (
        <>
            <Drawer size='xs' open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>{ativity?.title} </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    {ativity?.descricao}
                    <div>
                          {ativity?.data.split('T')[0]}
                    </div>
                </Drawer.Body>
               
            </Drawer>
        </>
    )
}

export default DrawerAtivity