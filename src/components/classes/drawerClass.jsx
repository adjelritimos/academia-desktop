import { Drawer } from 'rsuite'

const DrawerClass = ({ open, setOpen, classe }) => {


    return (
        <>
            <Drawer size='xs' open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>{classe?.title} </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  Aula  {classe?.tytpes}
                    <div>
                          {classe?.data.split('T')[0]}
                    </div>
                </Drawer.Body>
               
            </Drawer>
        </>
    )
}

export default DrawerClass