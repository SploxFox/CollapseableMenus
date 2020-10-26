import * as React from 'react';

interface Props {
    title: string
}

interface State {
    collapsed: boolean
}

export class Collapseable extends React.Component<Props, State> {
    constructor(props: Props) {

        super(props);

        this.state = {
            collapsed: true
        }
    }
    render() {
        return <div className={'collapseable ' + (this.state.collapsed ? 'collapsed' : '')}>
            <div onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                <span className="fold-indicator">{this.state.collapsed ? '+' : '-'}</span>
                <span className="title">{this.props.title}</span>
            </div>
            <div className="content">
                {this.props.children}
            </div>
        </div>
    }
}