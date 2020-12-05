function ReadMoreBtn(props) {
    return (
        <a type="button" className="btn btn-holidaze-secondary" href={'/hotels/' + props.id}>
            <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {props.title}
        </a>
    );
}

export default ReadMoreBtn;

