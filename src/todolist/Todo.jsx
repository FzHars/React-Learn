export default function Todo({text, isCompleted, isDeleted = false}){
    if(isDeleted){
        return null;
    } else {
        return (
            <li>
                {/* // with ternary
                {isCompleted ? <del>{text}</del> : text} */}
                {/* // with && operator or short circuit*/}
                {text}{isCompleted && " 🔥"}
            </li>
        )
    }
}