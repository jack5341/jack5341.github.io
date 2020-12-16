export default function Repopost(props){
    return (
        <a target="_blank" rel="noreferrer" href={"https://github.com/jack5341/" + props.subject}>
            <div className="repo-post">
                <p className="h4">
                    {props.subject}
                </p>
                <p className="small">
                    {props.description}
                </p>
            </div>
        </a>
    )
}