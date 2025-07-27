import { Drawer, Button, Placeholder } from 'rsuite'

const DrawerClass = ({ open, setOpen, openWithHeader, setOpenWithHeader }) => {


    return (
        <>
            <Drawer size='xs' open={open} onClose={() => setOpen(false)}>
                <Drawer.Body>
                    <Placeholder.Paragraph />
                </Drawer.Body>
            </Drawer>

            <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
                        <Button onClick={() => setOpenWithHeader(false)} appearance="primary">
                            Confirm
                        </Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <Placeholder.Paragraph rows={20} />
                </Drawer.Body>
            </Drawer>
        </>
    )
}

export default DrawerClass