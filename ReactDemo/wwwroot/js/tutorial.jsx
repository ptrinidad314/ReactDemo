
const data = [
    { id: 1, author:'Daniel Lo Nigros', text:'Hello ReactJS.NET World!' },
    { id: 2, author:'Pete Hunts', text: 'This one comment' },
    { id: 3, author: 'Jordan Walkes', text: 'This is *another* comments'}
];

function createRemarkable() {
    var remarkable = 'undefined' != typeof global && global.remarkable ? global.Remarkable : window.Remarkable;
    return new remarkable();
}

class Comment extends React.Component {
    rawMarkup() {
        const md = new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}

class CommentList extends React.Component {
    render() {
        
            const commentNodes = this.props.data.map(comment => (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            ));

        return (<div className="commentList">{commentNodes}</div>);
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">Hello, hello!!  I am the aforementioned CommentForm.....</div>
        );
    }
}

class CommentBox extends React.Component {
    render() {
        return (
                <div className="commentBox">
                    <h1>Comments</h1>
                    <CommentList data={this.props.data} />
                    <CommentForm />
                </div>
            );
    }
}



ReactDOM.render(<CommentBox data={data} />, document.getElementById('content'));