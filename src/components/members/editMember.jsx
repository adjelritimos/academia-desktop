import { useEffect, useState } from 'react'
import editMember from '../../functions/members/editMembers'

const EditMembers = ({ setMembers, setLoading, memberSeleted, setSeletedMember }) => {

    const [form, setForm] = useState({
        nbi: '',
        name: '',
        guardianName: '',
        brithDate: null,
        school: '',
        contact: '',
        isBatizado: 'Não batizado',
        batData: null,
        churchName: '',
        email: ''
    })

    console.log(memberSeleted)

    // Calcula idade a partir da data de nascimento
    const getAge = (birthDate) => {
        if (!birthDate) return null
        const today = new Date()
        const birth = new Date(birthDate)
        let age = today.getFullYear() - birth.getFullYear()
        const m = today.getMonth() - birth.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--
        }
        return age
    }

    const age = getAge(form.brithDate)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await editMember(form, setSeletedMember, setMembers, setLoading)
            const modal = document.getElementById('editmember')
            if (modal) modal.hide()

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setForm(memberSeleted)
    }, [memberSeleted])

    return (
        <div>
            <div className="modal fade" id="editmember" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header bg-info">
                            <h1 className="modal-title fs-5 text-white">Editar dados do membro</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">

                                <div className="mb-2">
                                    <label className="form-label">Nº BI</label>
                                    <input type="text" className="form-control" name="nbi" value={form.nbi} onChange={handleChange} required />
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Nome</label>
                                    <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Data de nascimento</label>
                                    <input type="date" className="form-control" name="brithDate" value={form.brithDate?.split('T')[0]} onChange={handleChange} required />
                                </div>

                                {age !== null && age < 18 && (
                                    <div className="mb-2">
                                        <label className="form-label">Nome do encarregado de educação</label>
                                        <input type="text" className="form-control" name="guardianName" value={form.guardianName} onChange={handleChange} required />
                                    </div>
                                )}

                                <div className="mb-2">
                                    <label className="form-label">Escolaridade</label>
                                    <input type="text" className="form-control" name="school" value={form.school} onChange={handleChange} required />
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Contato</label>
                                    <input type="text" className="form-control" name="contact" value={form.contact} onChange={handleChange} required />
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Batizado?</label>
                                    <select className="form-select" name="isBatizado" value={form.isBatizado} onChange={handleChange} required>
                                        <option value="Batizado">Batizado</option>
                                        <option value="Não batizado">Não batizado</option>
                                    </select>
                                </div>

                                {form.isBatizado === "Batizado" && (
                                    <div className="mb-2">
                                        <label className="form-label">Data de batismo</label>
                                        <input type="date" className="form-control" name="batData" value={form.batData?.split('T')[0]} onChange={handleChange} required />
                                    </div>
                                )}

                                <div className="mb-2">
                                    <label className="form-label">Nome da congregação que frequenta</label>
                                    <input type="text" className="form-control" name="churchName" value={form.churchName} onChange={handleChange} />
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-info text-white">Salvar edição</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMembers
