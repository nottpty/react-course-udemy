class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };

    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide details':'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>This is details for something.</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// let onShowDetail = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetail}>{visibility?'Hide details':'Show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>This is details for something.</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, rootApp);
// };

// const rootApp = document.getElementById('app');
// render();