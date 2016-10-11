import React from 'react';

class MainLayout extends React.Component {
    componentDidMount() {
    }
    
    render(){
    const {content} = this.props;
        return (
            <div>
                <div>
                    {content()}
                </div>
            </div>    
            )
    }

}
export default MainLayout;