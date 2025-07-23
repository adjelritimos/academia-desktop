import { GrHomeRounded } from "react-icons/gr"
import { LuUsers, LuFileMinus, LuFileQuestion } from "react-icons/lu"
import { RiBookShelfLine } from "react-icons/ri"
import { LiaPraySolid } from "react-icons/lia"
import { IoMdMenu } from "react-icons/io"
import { MdOutlineRecordVoiceOver, MdOutlineClass } from "react-icons/md"
import { Link } from "react-router-dom"



const SideBars = ({ tab }) => {

    return (
        <div className="d-flex flex-column gap-2 p-1">

            <Link className="btn">
                <IoMdMenu />
            </Link>

            <Link to={'dashboards'} className={ tab === 1 ? "btn bg-white" : "btn"}>
                <GrHomeRounded />
            </Link>

            <Link to={'members'} className={ tab === 2 ? "btn bg-white" : "btn"}>
                <LuUsers />
            </Link>

            <Link to={'commands'} className={ tab === 3 ? "btn bg-white" : "btn"}>
                <MdOutlineRecordVoiceOver />
            </Link>

            <Link to={'lemmas'} className={ tab === 4 ? "btn bg-white" : "btn"}>
                <LuFileMinus />
            </Link>

            <Link className={ tab === 5 ? "btn bg-white" : "btn"}>
                <LiaPraySolid />
            </Link>

            <Link to={'contents'} className={ tab === 6 ? "btn bg-white" : "btn"}>
                <RiBookShelfLine />
            </Link>

            <Link className={ tab === 7 ? "btn bg-white" : "btn"}>
                <MdOutlineClass />
            </Link>

             <Link to={'questions'} className={ tab === 8 ? "btn bg-white" : "btn"}>
                <LuFileQuestion />
            </Link>


        </div>
    )
}

export default SideBars