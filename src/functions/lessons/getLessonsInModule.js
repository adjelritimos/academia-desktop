import errorMessage from "../feedbacks/errormessage"

const getLessonsInModule = async (moduleId, lessons, setLessons, setLessonsCopy) => {

    try {

        const lessonsInModule = Array.isArray(lessons) ? lessons.filter(lesson => lesson.moduleId === Number(moduleId)) : []

        setLessons(lessonsInModule)
        setLessonsCopy(lessonsInModule)

    } catch (error) {
        setLessons([])
        setLessonsCopy([])
        console.error('Ocorreu algum erro:', error)
        errorMessage('Falha ao carregar dados')
    }
}

export default getLessonsInModule
